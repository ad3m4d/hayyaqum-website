import { useEffect, useRef, useState } from "react";
import { features } from "@/data/site";
import { cx } from "@/utils/cx";

const STILL_DWELL_MS = 6000;
const FADE_MS_CLASS = "duration-500 ease-out";

export function Features() {
    const [selected, setSelected] = useState(0);
    const [inView, setInView] = useState(false);
    const [reduceMotion, setReduceMotion] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const videosRef = useRef(new Map<string, HTMLVideoElement>());
    const feature = features[selected];
    const fadeClass = reduceMotion ? "duration-0" : FADE_MS_CLASS;

    useEffect(() => {
        const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
        const syncMotion = () => setReduceMotion(motion.matches);
        syncMotion();
        motion.addEventListener("change", syncMotion);
        return () => motion.removeEventListener("change", syncMotion);
    }, []);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.25 },
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const active = videosRef.current.get(feature.id);

        videosRef.current.forEach((video, id) => {
            if (id !== feature.id) video.pause();
        });

        if (!active) return;

        if (reduceMotion || !inView) {
            active.pause();
            return;
        }

        if (active.readyState >= HTMLMediaElement.HAVE_METADATA && (active.ended || active.currentTime > 0.05)) {
            active.currentTime = 0;
        }

        void active.play().catch(() => undefined);
    }, [feature.id, inView, reduceMotion]);

    useEffect(() => {
        if (reduceMotion || feature.video || !inView) return;

        const id = window.setTimeout(() => {
            setSelected((index) => (index + 1) % features.length);
        }, STILL_DWELL_MS);

        return () => window.clearTimeout(id);
    }, [selected, reduceMotion, feature.video, inView]);

    useEffect(() => {
        const tile = sectionRef.current?.querySelector<HTMLElement>(`[data-feature="${feature.id}"]`);
        const row = tile?.parentElement;
        if (!tile || !row) return;

        const left = tile.offsetLeft - (row.clientWidth - tile.clientWidth) / 2;
        row.scrollTo({ left: Math.max(0, left), behavior: reduceMotion ? "instant" : "smooth" });
    }, [feature.id, reduceMotion]);

    return (
        <section ref={sectionRef} className="flex w-full flex-col items-center gap-16 px-20 pb-20 min-[769px]:max-xl:px-12 max-md:px-0 max-md:pb-20 max-[480px]:gap-8" aria-label="Features">
            <div className="flex w-full max-w-container min-w-0 flex-col items-center gap-10 max-md:max-w-none max-[480px]:gap-8">
                <div className="relative aspect-[1280/640] w-full max-w-container min-w-0 overflow-hidden rounded-[32px] border-2 border-black/5 shadow-xl max-md:aspect-auto min-[481px]:max-md:h-[480px] max-md:max-w-none max-md:rounded-none min-[481px]:max-md:border-[1.5px] max-[480px]:h-80 max-[480px]:border">
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
                </div>
                <div className="relative w-full max-w-[1024px] min-[481px]:max-md:max-w-[640px] max-[480px]:max-w-none">
                    {features.map((item) => (
                        <p
                            key={item.id}
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

            <div className="flex w-full max-w-container flex-nowrap items-start justify-start gap-x-2 overflow-x-auto overscroll-x-contain scrollbar-hide min-[1280px]:justify-center max-md:max-w-none max-md:px-5">
                {features.map((item, index) => {
                    const isSelected = index === selected;

                    return (
                        <button
                            key={item.id}
                            type="button"
                            data-feature={item.id}
                            aria-pressed={isSelected}
                            onClick={() => setSelected(index)}
                            className="flex w-60 max-w-60 shrink-0 flex-col items-center gap-5 p-3 min-[481px]:max-md:w-[200px] min-[481px]:max-md:max-w-[200px] max-[480px]:w-40 max-[480px]:max-w-40"
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
            </div>
        </section>
    );
}
