import { productDisclaimer } from "@/data/site";

/**
 * Figma 598:1739 — Utility & Location Disclaimer
 * #e9f4f6 fill, 4px #258ea6 left bar, 16px right radius,
 * pad 20/40/24/24, display-xs 24/32, label Semibold 590, 24px para gap.
 */
export function DisclaimerCallout() {
    const [first, ...rest] = productDisclaimer.paragraphs;

    return (
        <aside
            className="w-full max-w-[1024px] rounded-r-2xl border-l-4 border-solid border-[#258ea6] bg-[#e9f4f6] pt-5 pl-10 pr-6 pb-6 text-display-xs font-normal leading-8 text-[#232b32] max-[480px]:pl-6 max-[480px]:pr-5 max-[480px]:pt-4 max-[480px]:pb-5 max-[480px]:text-lg max-[480px]:leading-7"
            aria-label="Utility and location disclaimer"
        >
            <div className="flex w-full flex-col">
                <p className="mb-6">
                    <span className="font-[590] text-[#232b32]">{productDisclaimer.label}</span> {first}
                </p>
                {rest.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </div>
        </aside>
    );
}
