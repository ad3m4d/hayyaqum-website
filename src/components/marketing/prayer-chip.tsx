import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { cx } from "@/utils/cx";

export type PrayerChipColor = "dawn" | "noon" | "warm" | "dusk" | "night";

const palette: Record<PrayerChipColor, { bg: string; text: string; ring: string }> = {
    dawn: { bg: "#e6edfa", text: "#2c3b63", ring: "rgba(44,59,99,0.12)" },
    noon: { bg: "#fde7c2", text: "#6a3f10", ring: "rgba(106,63,16,0.12)" },
    warm: { bg: "#fcd4bc", text: "#7a2d16", ring: "rgba(122,45,22,0.12)" },
    dusk: { bg: "#efd3e0", text: "#612a4a", ring: "rgba(97,42,74,0.12)" },
    night: { bg: "#d3d6ea", text: "#242944", ring: "rgba(36,41,68,0.12)" },
};

type Props = {
    /** Arabic prayer name. */
    children: React.ReactNode;
    color: PrayerChipColor;
    rotate?: number;
    speed?: number;
    className?: string;
};

/**
 * Decorative floating name-tag chip. Arabic text only, so marked aria-hidden —
 * the prayer names appear in real section copy elsewhere.
 */
export function PrayerChip({ children, color, rotate = 0, speed = 1.4, className }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [60 * speed, -60 * speed]);
    const tone = palette[color];

    return (
        <motion.span
            ref={ref}
            aria-hidden
            style={{ y, rotate, backgroundColor: tone.bg, color: tone.text, boxShadow: `inset 0 0 0 0.5px ${tone.ring}, 0 8px 18px rgba(16,24,40,0.08)` }}
            className={cx(
                "pointer-events-none absolute z-20 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium whitespace-nowrap",
                className,
            )}
            lang="ar"
        >
            {children}
        </motion.span>
    );
}
