import { useLang } from "@/providers/language-provider";

/**
 * Terms-page disclaimer callout from Figma 873:38357.
 *
 *   soft teal rounded rectangle, 20/30 body text, bold inline label on first ¶.
 *   logical props (border-s, ps/pe) so the callout mirrors under dir="rtl".
 */
export function DisclaimerCallout() {
    const { copy } = useLang();
    const [first, ...rest] = copy.terms.disclaimerParagraphs;

    return (
        <aside
            className="w-full rounded-2xl border-s-4 border-[#258ea6] bg-[#e9f4f6] p-6 max-sm:px-4 max-sm:py-4 text-[20px] font-normal leading-[30px] text-[#606766]"
            aria-label={copy.terms.disclaimerAria}
        >
            <div className="flex w-full flex-col gap-5">
                <p>
                    <span className="font-semibold text-[#2c363f]">{copy.terms.disclaimerLabel}</span>{" "}
                    {first}
                </p>
                {rest.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </div>
        </aside>
    );
}
