import { useCallback, useEffect, useRef, useState } from "react";
import type { FeatureV2Id } from "@/data/i18n";
import { useLang } from "@/providers/language-provider";

type Props = { id: FeatureV2Id; label: string; onComplete?: () => void };
const DEMO_HOLD_MS = 650;
const EXPAND_UPLOAD_REVISION = "1795025919325315000";
const PLAY_EVENT = "qum-demo-play";
function mediaName(id: FeatureV2Id, lang: string) {
    return `${id === "expand" ? "expand-upload-3" : id}-${lang}`;
}

export function FeatureVideo(props: Props) {
    const { lang } = useLang();
    return <Demo key={`${props.id}-${lang}`} {...props} lang={lang} />;
}

function Demo({ id, label, lang, onComplete }: Props & { lang: string }) {
    const video = useRef<HTMLVideoElement>(null);
    const wanted = useRef(false);
    const pending = useRef(false);
    const manuallyPaused = useRef(false);
    const inView = useRef(false);
    const finished = useRef(false);
    const advanceTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    const [playing, setPlaying] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const pause = () => {
        clearTimeout(advanceTimer.current);
        wanted.current = false;
        video.current?.pause();
        setLoading(false);
    };
    const play = useCallback((): void => {
        const el = video.current;
        if (!el) return;
        clearTimeout(advanceTimer.current);
        finished.current = false;
        window.dispatchEvent(new CustomEvent(PLAY_EVENT, { detail: el }));
        wanted.current = true;
        if (pending.current) return;
        pending.current = true;
        setError(false);
        setLoading(true);
        // Attach media only when the card becomes visible or playback is requested.
        // Set the DOM property before play(): Safari's policy checks muted state.
        el.muted = true;
        el.defaultMuted = true;
        if (!el.getAttribute("src")) {
            const extension = el.canPlayType('video/mp4; codecs="avc1.4D401F"') ? "mp4" : "webm";
            el.src = `/videos/${mediaName(id, lang)}.${extension}${id === "expand" ? `?v=${EXPAND_UPLOAD_REVISION}` : ""}`;
        } else if (el.error) {
            // A failed resource must be reloaded before a retry can succeed.
            el.load();
        }
        void el.play().then(() => {
            if (!wanted.current || document.hidden) el.pause();
        }).catch((reason: unknown) => {
            // pause() can reject a pending play() during hover/visibility changes.
            // That cancellation is expected, including a quick leave/re-enter.
            if (reason instanceof DOMException && reason.name === "AbortError") {
                // A newer visibility/play request may already want playback again.
                // Preserve that intent; finally retries once this request settles.
                return;
            }
            // Safari may disable autoplay in its per-site settings.
            // Keep the explicit play button usable instead of showing a media error.
            if (reason instanceof DOMException && reason.name === "NotAllowedError") {
                wanted.current = false;
                return;
            }
            if (wanted.current) {
                console.warn("Qum demo playback failed", { source: el.currentSrc, reason, mediaError: el.error });
                setError(true);
            }
            wanted.current = false;
        }).finally(() => {
            pending.current = false;
            setLoading(false);
            // A quick scroll out and back in can pause a still-pending play().
            // The re-entry request cannot start until that promise settles.
            if (wanted.current && el.paused && !document.hidden) play();
        });
    }, [id, lang]);

    useEffect(() => {
        const el = video.current;
        if (!el) return;
        const stop = () => {
            clearTimeout(advanceTimer.current);
            wanted.current = false;
            el.pause();
            setLoading(false);
        };
        const autoPlay = () => {
            if (!inView.current || document.hidden || manuallyPaused.current || reduced.matches) return;
            if (finished.current && onComplete) {
                clearTimeout(advanceTimer.current);
                advanceTimer.current = setTimeout(onComplete, DEMO_HOLD_MS);
            } else play();
        };
        const ended = () => {
            finished.current = true;
            stop();
            setPlaying(false);
            autoPlay();
        };
        el.addEventListener("ended", ended);
        const visibility = () => { if (document.hidden) stop(); else autoPlay(); };
        const otherPlay = (event: Event) => {
            if ((event as CustomEvent).detail !== el) stop();
        };
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
        const preference = () => { if (reduced.matches) stop(); else autoPlay(); };
        const observer = new IntersectionObserver(([entry]) => {
            inView.current = entry.isIntersecting && entry.intersectionRatio >= 0.5;
            if (inView.current) autoPlay();
            else stop();
        }, { threshold: [0, 0.5] });
        observer.observe(el);
        document.addEventListener("visibilitychange", visibility);
        window.addEventListener(PLAY_EVENT, otherPlay);
        reduced.addEventListener("change", preference);
        return () => {
            clearTimeout(advanceTimer.current);
            wanted.current = false;
            el.pause();
            el.removeEventListener("ended", ended);
            observer.disconnect();
            document.removeEventListener("visibilitychange", visibility);
            window.removeEventListener(PLAY_EVENT, otherPlay);
            reduced.removeEventListener("change", preference);
        };
    }, [play, onComplete]);

    return (
        <div className="relative size-full">
            <video
                ref={video}
                className="block size-full bg-transparent object-cover [transform:translateZ(0)]"
                aria-label={label}
                poster={`/assets/demo-posters/${mediaName(id, lang)}.png${id === "expand" ? `?v=${EXPAND_UPLOAD_REVISION}` : ""}`}
                muted playsInline loop={!onComplete} preload="none"
                onPlay={() => {
                    if (!wanted.current || document.hidden) video.current?.pause();
                    else setPlaying(true);
                }}
                onPause={() => setPlaying(false)}
                onError={() => { if (wanted.current) { pause(); setError(true); } }}
            />
            <button
                type="button"
                className="absolute bottom-4 right-4 size-12 overflow-hidden rounded-full p-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#258ea6]"
                style={{ backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
                aria-busy={loading}
                aria-label={`${playing || loading ? (lang === "ar" ? "إيقاف مؤقت" : "Pause") : (lang === "ar" ? "تشغيل" : "Play")}: ${label}`}
                onClick={() => {
                    if (wanted.current) {
                        manuallyPaused.current = true;
                        pause();
                    } else {
                        manuallyPaused.current = false;
                        play();
                    }
                }}
            >
                <img
                    src={playing || loading ? "/assets/figma/demo-pause.svg" : "/assets/figma/demo-play.svg"}
                    width={48}
                    height={48}
                    alt=""
                    className="block size-12"
                />
            </button>
            {error && <span role="status" className="absolute bottom-4 left-4 rounded bg-[#0e1a1b]/90 px-3 py-2 text-sm text-white">{lang === "ar" ? "تعذّر التشغيل. حاول مجددًا." : "Unable to play. Try again."}</span>}
        </div>
    );
}
