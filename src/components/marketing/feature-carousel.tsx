import { AnimatePresence, domAnimation, LazyMotion, m, useReducedMotion } from "motion/react";
import { useCallback, useRef, useState, type KeyboardEvent } from "react";
import type { FeatureV2Copy } from "@/data/i18n";
import { FeatureVideo } from "@/components/marketing/feature-video";
import { useLang } from "@/providers/language-provider";

/** Figma 1078:23563: one demo, with a circular strip of neighbouring features. */
export function FeatureCarousel() {
    const { copy, lang } = useLang();
    const sections = copy.homeV2.sections;
    const [index, setIndex] = useState(0);
    const [travel, setTravel] = useState(1);
    const reducedMotion = useReducedMotion();
    const pointer = useRef<{ x: number; y: number } | null>(null);
    const select = (next: number) => {
        setTravel(next < index ? -1 : 1);
        setIndex((next + sections.length) % sections.length);
    };
    const advance = useCallback(() => {
        setTravel(1);
        setIndex((current) => (current + 1) % sections.length);
    }, [sections.length]);
    const current = sections[index];
    const previous = sections[(index - 1 + sections.length) % sections.length];
    const next = sections[(index + 1) % sections.length];
    const direction = lang === "ar" ? -1 : 1;

    function label(item: FeatureV2Copy, active = false) {
        const state = active ? "active" : "inactive";
        return (
            <m.span key={item.id} className="feature-label"
                initial={reducedMotion ? false : { opacity: 0.35, x: travel * direction * 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 210, damping: 19 }}
            >
                <picture className="feature-label-icon"><source media="(max-width: 639px)" srcSet={`/assets/figma/feature-${item.id}-${state}-mobile.svg`} /><img src={`/assets/figma/feature-${item.id}-${state}.svg`} alt="" /></picture>
                <span>{item.headline}</span>
            </m.span>
        );
    }

    function navigate(event: KeyboardEvent<HTMLElement>) {
        if (event.key === "ArrowRight") select(index + direction);
        else if (event.key === "ArrowLeft") select(index - direction);
        else if (event.key === "Home") select(0);
        else if (event.key === "End") select(sections.length - 1);
        else return;
        event.preventDefault();
    }

    return (
        <LazyMotion features={domAnimation}>
        <section className="home-features" aria-label={copy.player.ariaSection} aria-roledescription={lang === "ar" ? "عارض شرائح" : "carousel"} onKeyDown={navigate}>
            <div className="feature-carousel">
                <div className="feature-labels">
                    <div className="feature-label-slot feature-label-previous">
                        <button type="button" className="feature-label" onClick={() => select(index - 1)} aria-controls="feature-demo">
                            {label(previous)}
                        </button>
                    </div>
                    <h2 className="feature-label feature-label-current" aria-live="polite" aria-atomic="true">
                        {label(current, true)}
                    </h2>
                    <div className="feature-label-slot feature-label-next">
                        <button type="button" className="feature-label" onClick={() => select(index + 1)} aria-controls="feature-demo">
                            {label(next)}
                        </button>
                    </div>
                </div>
                <div id="feature-demo" className="feature-demo" role="group" aria-roledescription={lang === "ar" ? "شريحة" : "slide"} aria-label={`${index + 1} / ${sections.length}: ${current.headline}`}
                    onPointerDown={(event) => {
                        if ((event.target as HTMLElement).closest("button")) return;
                        pointer.current = { x: event.clientX, y: event.clientY };
                        event.currentTarget.setPointerCapture(event.pointerId);
                    }}
                    onPointerCancel={() => { pointer.current = null; }}
                    onPointerUp={(event) => {
                        const start = pointer.current;
                        pointer.current = null;
                        if (!start) return;
                        const dx = event.clientX - start.x;
                        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(event.clientY - start.y)) select(index + (dx < 0 ? direction : -direction));
                    }}
                >
                    <AnimatePresence initial={false} mode="wait" custom={travel * direction}>
                    <m.div key={current.id} className="feature-demo-content"
                        custom={travel * direction}
                        variants={{
                            enter: (sign: number) => reducedMotion ? { opacity: 1 } : { opacity: 0, x: sign * 36, y: 6, rotate: sign * 0.65, scale: 0.985 },
                            settled: { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 },
                            leave: (sign: number) => reducedMotion ? { opacity: 0 } : { opacity: 0, x: sign * -20, rotate: sign * -0.3, scale: 0.99, transition: { duration: 0.16 } },
                        }}
                        initial="enter" animate="settled" exit="leave"
                        transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 190, damping: 18, mass: 0.85, opacity: { duration: 0.22 } }}
                    >
                        <div className="feature-video-card"><FeatureVideo id={current.id} label={current.headline} onComplete={advance} /></div>
                        <p className="feature-caption">{current.sub}</p>
                    </m.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
        </LazyMotion>
    );
}
