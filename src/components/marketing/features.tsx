import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Tooltip } from "@/components/base/tooltip/tooltip";
import { features } from "@/data/site";
import { cx } from "@/utils/cx";

const STILL_DWELL_MS = 6000;
const FADE_MS_CLASS = "duration-500 ease-out";
const CONTROLS_HIDE_MS = 2500;
const TITLE_AT_START_S = 0.35;
const PLAYBACK_RATES = [1, 1.25, 1.5, 2] as const;

function formatClock(seconds: number) {
    if (!Number.isFinite(seconds) || seconds < 0) return "00:00";
    const total = Math.floor(seconds);
    const minutes = Math.floor(total / 60);
    const rest = total % 60;
    return `${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
}

function bufferedEnd(video: HTMLVideoElement) {
    if (video.buffered.length === 0) return 0;
    return video.buffered.end(video.buffered.length - 1);
}

export function Features() {
    const [selected, setSelected] = useState(0);
    const [inView, setInView] = useState(false);
    const [reduceMotion, setReduceMotion] = useState(false);
    const [paused, setPaused] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [buffered, setBuffered] = useState(0);
    const [rate, setRate] = useState<(typeof PLAYBACK_RATES)[number]>(1);
    const [idleHidden, setIdleHidden] = useState(false);
    const [keyboardChrome, setKeyboardChrome] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const videosRef = useRef(new Map<string, HTMLVideoElement>());
    const lastPlayedId = useRef<string | null>(null);
    const hideTimer = useRef<number>(0);
    const scrubbing = useRef(false);
    const playerRef = useRef<HTMLDivElement>(null);
    const feature = features[selected];
    const overlayTitle = "overlayTitle" in feature ? feature.overlayTitle : undefined;
    const fadeClass = reduceMotion ? "duration-0" : FADE_MS_CLASS;
    const showTitle = paused && Boolean(overlayTitle) && currentTime < TITLE_AT_START_S;
    const showControls = paused || reduceMotion || keyboardChrome || !idleHidden;
    const captionId = `feature-caption-${feature.id}`;
    const playedPct = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;
    const bufferedPct = duration > 0 ? Math.min(100, (buffered / duration) * 100) : 0;

    const revealControls = useCallback((opts?: { keyboard?: boolean }) => {
        setIdleHidden(false);
        window.clearTimeout(hideTimer.current);
        if (paused || reduceMotion || opts?.keyboard) return;
        hideTimer.current = window.setTimeout(() => setIdleHidden(true), CONTROLS_HIDE_MS);
    }, [paused, reduceMotion]);

    const togglePaused = () => {
        setPaused((value) => !value);
        revealControls();
    };

    const seekTo = (next: number) => {
        const video = videosRef.current.get(feature.id);
        if (!video || !Number.isFinite(next)) return;
        video.currentTime = Math.min(Math.max(0, next), video.duration || next);
        setCurrentTime(video.currentTime);
    };

    useEffect(() => {
        const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
        const syncMotion = () => {
            setReduceMotion(motion.matches);
            if (motion.matches) setPaused(true);
        };
        syncMotion();
        motion.addEventListener("change", syncMotion);
        return () => motion.removeEventListener("change", syncMotion);
    }, []);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.25 });

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const active = videosRef.current.get(feature.id);

        videosRef.current.forEach((video, id) => {
            if (id !== feature.id) video.pause();
        });

        if (!active) return;

        if (!inView || paused) {
            active.pause();
            return;
        }

        if (lastPlayedId.current !== feature.id || active.ended) {
            if (active.readyState >= HTMLMediaElement.HAVE_METADATA) active.currentTime = 0;
            lastPlayedId.current = feature.id;
        }

        void active.play().catch(() => undefined);
    }, [feature.id, inView, paused]);

    useEffect(() => {
        videosRef.current.forEach((video) => {
            video.playbackRate = rate;
        });
    }, [rate, feature.id]);

    useEffect(() => {
        const video = videosRef.current.get(feature.id);
        if (!video) {
            setCurrentTime(0);
            setDuration(0);
            setBuffered(0);
            return;
        }

        const sync = () => {
            if (scrubbing.current) return;
            setCurrentTime(video.currentTime);
            setDuration(Number.isFinite(video.duration) ? video.duration : 0);
            setBuffered(bufferedEnd(video));
        };

        sync();
        video.addEventListener("timeupdate", sync);
        video.addEventListener("durationchange", sync);
        video.addEventListener("loadedmetadata", sync);
        video.addEventListener("progress", sync);
        video.addEventListener("seeked", sync);
        return () => {
            video.removeEventListener("timeupdate", sync);
            video.removeEventListener("durationchange", sync);
            video.removeEventListener("loadedmetadata", sync);
            video.removeEventListener("progress", sync);
            video.removeEventListener("seeked", sync);
        };
    }, [feature.id]);

    useEffect(() => {
        revealControls();
        return () => window.clearTimeout(hideTimer.current);
    }, [revealControls, feature.id]);

    useEffect(() => {
        if (paused || reduceMotion || feature.video || !inView) return;

        const id = window.setTimeout(() => {
            setSelected((index) => (index + 1) % features.length);
        }, STILL_DWELL_MS);

        return () => window.clearTimeout(id);
    }, [selected, paused, reduceMotion, feature.video, inView]);

    useEffect(() => {
        const tile = sectionRef.current?.querySelector<HTMLElement>(`[data-feature="${feature.id}"]`);
        const row = tile?.parentElement;
        if (!tile || !row) return;

        const left = tile.offsetLeft - (row.clientWidth - tile.clientWidth) / 2;
        row.scrollTo({ left: Math.max(0, left), behavior: reduceMotion ? "instant" : "smooth" });
    }, [feature.id, reduceMotion]);

    const onPlayerKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        const nativeControl = target.closest("input, textarea, select, button");

        if ((event.code === "Space" || event.key === "k" || event.key === "K") && !nativeControl) {
            event.preventDefault();
            setKeyboardChrome(true);
            togglePaused();
            revealControls({ keyboard: true });
            return;
        }

        if (event.key === "ArrowLeft" && !nativeControl) {
            event.preventDefault();
            setKeyboardChrome(true);
            seekTo(currentTime - 5);
            revealControls({ keyboard: true });
            return;
        }

        if (event.key === "ArrowRight" && !nativeControl) {
            event.preventDefault();
            setKeyboardChrome(true);
            seekTo(currentTime + 5);
            revealControls({ keyboard: true });
        }
    };

    return (
        <section ref={sectionRef} className="flex w-full flex-col items-center gap-16 px-20 pb-20 min-[769px]:max-xl:px-12 max-md:px-0 max-md:pb-20 max-[480px]:gap-8" aria-label="Features">
            <div className="flex w-full max-w-container min-w-0 flex-col items-center gap-10 max-md:max-w-none max-[480px]:gap-8">
                <div
                    ref={playerRef}
                    className="relative aspect-[1280/640] w-full max-w-container min-w-0 overflow-hidden rounded-[32px] border-2 border-black/5 shadow-xl outline-brand focus-visible:outline-2 focus-visible:outline-offset-2 max-md:aspect-auto min-[481px]:max-md:h-[480px] max-md:max-w-none max-md:rounded-none min-[481px]:max-md:border-[1.5px] max-[480px]:h-80 max-[480px]:border"
                    role="region"
                    aria-label={`${feature.label} demo, ${paused ? "paused" : "playing"}`}
                    aria-describedby={captionId}
                    tabIndex={0}
                    onMouseMove={() => {
                        setKeyboardChrome(false);
                        revealControls();
                    }}
                    onFocusCapture={() => revealControls({ keyboard: true })}
                    onKeyDown={onPlayerKeyDown}
                    onClick={(event) => {
                        if ((event.target as HTMLElement).closest("[data-player-controls]")) return;
                        togglePaused();
                    }}
                >
                    {features.map((item) =>
                        item.video ? (
                            <video
                                key={item.id}
                                ref={(node) => {
                                    if (node) videosRef.current.set(item.id, node);
                                    else videosRef.current.delete(item.id);
                                }}
                                src={item.video}
                                muted
                                playsInline
                                preload="auto"
                                onEnded={() => {
                                    if (paused || reduceMotion) return;
                                    setSelected((index) => {
                                        if (features[index].id !== item.id) return index;
                                        return (index + 1) % features.length;
                                    });
                                }}
                                className={cx(
                                    "absolute inset-0 size-full object-cover transition-opacity",
                                    fadeClass,
                                    item.id === feature.id ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0",
                                )}
                                aria-hidden={item.id !== feature.id}
                                aria-label={item.id === feature.id ? item.label : undefined}
                            />
                        ) : null,
                    )}
                    {feature.video ? null : (
                        <img src="/assets/demo.png" width={1280} height={640} alt="Qum in the MacBook notch" className="size-full object-cover" />
                    )}

                    {showTitle ? (
                        <p className="pointer-events-none absolute top-[9%] left-1/2 z-[15] w-[min(665px,calc(100%-2.5rem))] -translate-x-1/2 bg-gradient-to-r from-brand-800 to-brand-700 bg-clip-text text-center text-display-lg font-semibold text-transparent max-md:text-display-sm max-[480px]:top-6 max-[480px]:text-xl">
                            {overlayTitle}
                        </p>
                    ) : null}

                    {feature.video && paused ? (
                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                setPaused(false);
                                revealControls();
                                playerRef.current?.focus();
                            }}
                            aria-label={`Play ${feature.label}`}
                            className="absolute top-1/2 left-1/2 z-20 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/30 outline-brand backdrop-blur-[8px] transition duration-100 ease-linear hover:bg-white/50 focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-white/50 reduced-transparency:bg-white reduced-transparency:backdrop-blur-none contrast-more:bg-white contrast-more:backdrop-blur-none"
                        >
                            <img src="/assets/play.svg" width={20} height={20} alt="" />
                        </button>
                    ) : null}

                    {feature.video ? (
                        <div
                            data-player-controls
                            className={cx(
                                "absolute inset-x-0 bottom-0 z-30 flex justify-center bg-gradient-to-b from-[rgba(15,19,22,0)] to-[rgba(15,19,22,0.35)] px-8 pt-12 pb-8 transition-opacity max-md:px-4 max-md:pt-8 max-md:pb-4 reduced-transparency:from-[rgba(15,19,22,0.85)] reduced-transparency:to-[rgba(15,19,22,0.85)] contrast-more:to-[rgba(15,19,22,0.55)]",
                                fadeClass,
                                showControls ? "opacity-100" : "pointer-events-none opacity-0",
                            )}
                        >
                            <div className="flex w-full max-w-[1024px] items-center gap-1">
                                <div className="flex min-w-px flex-1 items-center gap-2 px-2">
                                    <span className="w-9 shrink-0 text-xs font-semibold text-white tabular-nums">{formatClock(currentTime)}</span>
                                    <label className="relative flex h-11 min-w-px flex-1 items-center">
                                        <span className="sr-only">Seek {feature.label}</span>
                                        <span className="relative h-2 w-full rounded-full bg-white/30 backdrop-blur-[4px] reduced-transparency:bg-white/40 reduced-transparency:backdrop-blur-none contrast-more:bg-white/45 contrast-more:backdrop-blur-none">
                                            <span className="absolute inset-y-0 left-0 rounded-full bg-white/30" style={{ width: `${bufferedPct}%` }} />
                                            <span
                                                className="absolute inset-y-0 left-0 rounded-full bg-white"
                                                style={{ width: duration > 0 ? `max(8px, ${playedPct}%)` : "8px" }}
                                            />
                                        </span>
                                        <input
                                            type="range"
                                            min={0}
                                            max={duration || 0}
                                            step="any"
                                            value={Math.min(currentTime, duration || 0)}
                                            aria-valuetext={`${formatClock(currentTime)} of ${formatClock(duration)}`}
                                            onPointerDown={() => {
                                                scrubbing.current = true;
                                            }}
                                            onPointerUp={() => {
                                                scrubbing.current = false;
                                            }}
                                            onChange={(event) => {
                                                const next = Number(event.target.value);
                                                setCurrentTime(next);
                                                seekTo(next);
                                            }}
                                            className="absolute inset-0 w-full cursor-pointer appearance-none bg-transparent outline-brand focus-visible:outline-2 focus-visible:outline-offset-2 [&::-moz-range-thumb]:size-2 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-transparent [&::-moz-range-track]:h-2 [&::-moz-range-track]:bg-transparent [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:bg-transparent [&::-webkit-slider-thumb]:size-2 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-transparent"
                                        />
                                    </label>
                                    <span className="w-[42px] shrink-0 text-xs font-semibold text-white tabular-nums">
                                        -{formatClock(Math.max(0, duration - currentTime))}
                                    </span>
                                </div>
                                <Tooltip title="Playback speed" placement="top">
                                    <button
                                        type="button"
                                        aria-label={`Playback speed, ${rate} times`}
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            setRate((current) => {
                                                const index = PLAYBACK_RATES.indexOf(current);
                                                return PLAYBACK_RATES[(index + 1) % PLAYBACK_RATES.length];
                                            });
                                        }}
                                        className="flex size-11 shrink-0 items-center justify-center rounded-sm outline-brand focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        <span
                                            className={cx(
                                                "flex h-8 items-center justify-center rounded-sm text-xs font-semibold text-white",
                                                rate === 1 ? "w-8" : "min-w-8 px-1.5",
                                            )}
                                        >
                                            {rate === 1 ? "1" : String(rate)}
                                            <img src="/assets/playback-x.svg" width={8} height={8} alt="" className="size-2" />
                                        </span>
                                    </button>
                                </Tooltip>
                            </div>
                        </div>
                    ) : null}
                </div>
                <div className="relative w-full max-w-[1024px] min-[481px]:max-md:max-w-[640px] max-[480px]:max-w-none">
                    {features.map((item) => (
                        <p
                            key={item.id}
                            id={item.id === feature.id ? captionId : undefined}
                            className={cx(
                                "px-4 text-center text-xl text-tertiary italic transition-opacity max-[480px]:px-5 max-[480px]:text-md",
                                fadeClass,
                                item.id === feature.id ? "relative opacity-100" : "pointer-events-none absolute inset-x-0 top-0 opacity-0",
                            )}
                            aria-hidden={item.id !== feature.id}
                            aria-live={item.id === feature.id ? "polite" : undefined}
                        >
                            {item.caption}
                        </p>
                    ))}
                </div>
            </div>

            <div className="relative w-full max-w-container max-md:max-w-none">
                <div className="flex w-full flex-nowrap items-start justify-start gap-x-2 overflow-x-auto overscroll-x-contain scrollbar-hide min-[1280px]:justify-center max-md:px-5">
                {features.map((item, index) => {
                    const isSelected = index === selected;

                    return (
                        <button
                            key={item.id}
                            type="button"
                            data-feature={item.id}
                            aria-pressed={isSelected}
                            onClick={() => setSelected(index)}
                            className="flex w-60 max-w-60 shrink-0 flex-col items-center gap-5 rounded-2xl p-3 outline-brand focus-visible:outline-2 focus-visible:outline-offset-2 min-[481px]:max-md:w-[200px] min-[481px]:max-md:max-w-[200px] max-[480px]:w-40 max-[480px]:max-w-40"
                        >
                            <span className="relative h-[62.4px] w-[63.6px] shrink-0 min-[481px]:max-md:h-[60px] min-[481px]:max-md:w-[61.154px] max-[480px]:h-12 max-[480px]:w-[48.923px]">
                                <img src={item.iconOff} width={63.6} height={62.4} alt="" className={cx("absolute inset-0 size-full object-contain transition-opacity", fadeClass, isSelected ? "opacity-0" : "opacity-100")} />
                                <img src={item.iconOn} width={63.6} height={62.4} alt="" className={cx("absolute inset-0 size-full object-contain transition-opacity", fadeClass, isSelected ? "opacity-100" : "opacity-0")} />
                            </span>
                            <span
                                className={cx(
                                    "w-[200px] max-w-full text-center text-lg transition-colors min-[481px]:max-md:w-40 min-[481px]:max-md:text-md max-[480px]:w-40 max-[480px]:max-w-none max-[480px]:text-sm",
                                    fadeClass,
                                    isSelected ? "font-semibold text-brand-700" : "font-medium text-tertiary",
                                )}
                            >
                                {item.label}
                            </span>
                        </button>
                    );
                })}
                    <div className="w-4 shrink-0 max-md:w-5 min-[1280px]:hidden" aria-hidden />
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#fbfcfc] to-transparent min-[1280px]:hidden max-md:left-0" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#fbfcfc] to-transparent min-[1280px]:hidden" />
            </div>
        </section>
    );
}
