import { useRef, type CSSProperties, type ReactNode } from "react";
import { useReducedMotion, useScroll, useTransform, motion } from "motion/react";

type Props = {
    children: ReactNode;
    /** Pixel distance to drift, positive = travels upward as section scrolls through viewport. Default 30. */
    distance?: number;
    /** 0..1, stronger = closer to foreground (less drift). */
    speed?: number;
    className?: string;
    style?: CSSProperties;
};

export function ParallaxLayer({ children, distance = 30, speed = 1, className, style }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const prefersReduced = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const travel = distance * speed;
    const y = useTransform(scrollYProgress, [0, 1], [travel, -travel]);

    return (
        <motion.div
            ref={ref}
            className={className}
            style={{ ...style, y: prefersReduced ? 0 : y, willChange: "transform" }}
        >
            {children}
        </motion.div>
    );
}
