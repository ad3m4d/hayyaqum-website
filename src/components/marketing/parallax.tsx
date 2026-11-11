import { useEffect, useRef, type PropsWithChildren } from "react";

/**
 * Multi-layer parallax primitives for the marketing site.
 *
 *   <ParallaxDrift speed={0.12}>...</ParallaxDrift>
 *     Scroll-linked translateY. Positive speed drifts the element opposite
 *     to scroll (lingers), negative speed races ahead. Uses rAF-throttled
 *     scroll listener. Honours prefers-reduced-motion.
 *
 *   <RiseIn distance={24} delay={0}>...</RiseIn>
 *     Fade + translateY-in when the element enters the viewport. One-shot.
 *
 * Both work on iOS Safari (unlike `background-attachment: fixed`) because
 * they drive a real CSS transform rather than relying on fixed backgrounds.
 */

const reduceMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function ParallaxDrift({
    speed = 0.12,
    children,
    className,
}: PropsWithChildren<{ speed?: number; className?: string }>) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (reduceMotion()) return;
        const el = ref.current;
        if (!el) return;
        let raf = 0;
        const update = () => {
            const rect = el.getBoundingClientRect();
            const centre = rect.top + rect.height / 2;
            const offset = (centre - window.innerHeight / 2) * speed;
            el.style.transform = `translate3d(0, ${-offset}px, 0)`;
            raf = 0;
        };
        const onScroll = () => {
            if (!raf) raf = requestAnimationFrame(update);
        };
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, [speed]);
    return (
        <div ref={ref} className={className} style={{ willChange: "transform" }}>
            {children}
        </div>
    );
}

export function RiseIn({
    children,
    distance = 24,
    className,
}: PropsWithChildren<{ distance?: number; className?: string }>) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (reduceMotion()) return;
        el.style.opacity = "0";
        el.style.transform = `translate3d(0, ${distance}px, 0)`;
        el.style.willChange = "opacity, transform";
        const io = new IntersectionObserver(
            (entries) => {
                for (const e of entries) {
                    if (e.isIntersecting) {
                        el.style.transition =
                            "opacity 700ms cubic-bezier(0.22, 1, 0.36, 1), transform 700ms cubic-bezier(0.22, 1, 0.36, 1)";
                        el.style.opacity = "1";
                        el.style.transform = "translate3d(0, 0, 0)";
                        io.unobserve(e.target);
                    }
                }
            },
            { threshold: 0.15 },
        );
        io.observe(el);
        return () => io.disconnect();
    }, [distance]);
    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
