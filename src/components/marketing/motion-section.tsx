import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import { cx } from "@/utils/cx";

type MotionSectionProps = {
    id?: string;
    icon?: ReactNode;
    kicker?: ReactNode;
    headline: ReactNode;
    sub?: ReactNode;
    cta?: ReactNode;
    status?: ReactNode;
    visual: ReactNode;
    /** When true, the headline block sits ABOVE the visual on tablet/desktop too (no side-by-side). */
    centered?: boolean;
    className?: string;
};

/**
 * Repeating section rhythm: small icon · centered headline · one-sentence sub ·
 * pill CTA + muted status · floating visual cluster below. Enter: fade + 24px
 * rise, once. Visual: translates slower on y than the headline (parallax).
 */
export function MotionSection({
    id,
    icon,
    kicker,
    headline,
    sub,
    cta,
    status,
    visual,
    className,
}: MotionSectionProps) {
    const ref = useRef<HTMLElement>(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const visualY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [60, -60]);
    const headlineY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [20, -20]);

    return (
        <section
            id={id}
            ref={ref}
            className={cx(
                "relative flex w-full flex-col items-center overflow-x-clip px-20 py-28 min-[769px]:max-xl:px-12 max-md:py-20 max-[480px]:px-5 max-[480px]:py-16",
                className,
            )}
        >
            <motion.div
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
                className="relative flex w-full max-w-container flex-col items-center gap-12 max-[480px]:gap-9"
            >
                <motion.div style={{ y: headlineY }} className="flex flex-col items-center gap-5 text-center max-[480px]:gap-4">
                    {icon ? (
                        <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-sm ring-1 ring-black/5">
                            {icon}
                        </span>
                    ) : null}
                    {kicker ? (
                        <p className="text-sm font-medium text-tertiary">{kicker}</p>
                    ) : null}
                    <h2 className="max-w-[760px] text-balance text-display-lg font-semibold tracking-[-0.96px] text-primary max-md:text-display-md max-[480px]:text-display-sm max-[480px]:tracking-[-0.56px]">
                        {headline}
                    </h2>
                    {sub ? (
                        <p className="max-w-[560px] text-balance text-lg font-normal text-tertiary max-[480px]:text-md">{sub}</p>
                    ) : null}
                    {(cta || status) && (
                        <div className="mt-2 flex flex-wrap items-center justify-center gap-4 max-[480px]:flex-col max-[480px]:items-stretch">
                            {cta}
                            {status ? <span className="text-sm font-normal text-tertiary">{status}</span> : null}
                        </div>
                    )}
                </motion.div>
                <motion.div style={{ y: visualY }} className="relative flex w-full justify-center">
                    {visual}
                </motion.div>
            </motion.div>
        </section>
    );
}

/** Centered black pill CTA — the repeating primary action in the rhythm. */
export function PillCTA({ children, href = "#download", ...rest }: { children: ReactNode; href?: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <a
            href={href}
            {...rest}
            className={cx(
                "inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-[#111214] px-5 text-sm font-semibold text-white shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_6px_14px_rgba(17,18,20,0.18)] outline-brand transition hover:bg-[#1c1e21] focus-visible:outline-2 focus-visible:outline-offset-2",
                rest.className,
            )}
        >
            {children}
        </a>
    );
}

/** Parallax wrapper for a single floating card inside a cluster. */
export function Drift({ children, speed = 1, className, rotate = 0 }: { children: ReactNode; speed?: number; className?: string; rotate?: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40 * speed, -40 * speed]);

    return (
        <motion.div
            ref={ref}
            style={{ y, rotate }}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
            className={cx("will-change-transform", className)}
        >
            {children}
        </motion.div>
    );
}
