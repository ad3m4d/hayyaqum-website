import { type ReactNode } from "react";
import { SUPPORT_EMAIL } from "@/data/site";

const LINK_TARGETS: { label: string; href: string }[] = [
    { label: "Terms of Use", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}` },
];

export function LegalParagraph({
    children,
    className = "text-lg font-normal text-[#606766]",
    linkify = true,
}: {
    children: string;
    className?: string;
    linkify?: boolean;
}) {
    if (!linkify) {
        return <p className={className}>{children}</p>;
    }

    const nodes: ReactNode[] = [];
    let remaining = children;
    let key = 0;

    while (remaining.length > 0) {
        let nextIndex = -1;
        let nextTarget: (typeof LINK_TARGETS)[number] | null = null;

        for (const target of LINK_TARGETS) {
            const index = remaining.indexOf(target.label);
            if (index !== -1 && (nextIndex === -1 || index < nextIndex)) {
                nextIndex = index;
                nextTarget = target;
            }
        }

        if (nextIndex === -1 || !nextTarget) {
            nodes.push(remaining);
            break;
        }

        if (nextIndex > 0) {
            nodes.push(remaining.slice(0, nextIndex));
        }

        nodes.push(
            <a key={key++} className="font-semibold text-[#1c6b7d] underline" href={nextTarget.href}>
                {nextTarget.label}
            </a>,
        );

        remaining = remaining.slice(nextIndex + nextTarget.label.length);
    }

    return <p className={className}>{nodes}</p>;
}
