import { DisclaimerCallout } from "@/components/marketing/disclaimer-callout";
import { LegalParagraph } from "@/components/marketing/legal-copy";
import { PageMeta } from "@/components/marketing/page-meta";
import { SiteLayout } from "@/components/marketing/site-layout";
import { pageMeta } from "@/data/seo";
import { useLang } from "@/providers/language-provider";

/**
 * Terms page from Figma 873:38357.
 *
 *   body:     flex-col gap-40 px-80 py-80, 768px content column, left-aligned
 *   title:    "Terms of Use" display-md bold (36/44, -0.72) +
 *             "Last Updated: <date>" text-xl, label bold, both #2c363f
 *   intro:    text-xl regular #606766 + DisclaimerCallout (soft teal panel)
 *   sections: numbered headings (display-xs semibold #2c363f) + body paragraphs
 *             (text-xl regular #606766)
 *   footer:   legal (compact copyright row + About / Privacy / Terms)
 */

const colorHeadline = "#2c363f";
const colorBody = "#606766";

export function TermsScreen() {
    const { copy } = useLang();
    const t = copy.terms;
    const renderSection = (section: (typeof t.sections)[number]) => (
        <section
            key={section.heading}
            className="flex w-full max-w-[768px] flex-col items-start gap-4 px-8 max-sm:px-0"
        >
            <h2
                className="text-[24px] font-semibold leading-[32px]"
                style={{ color: colorHeadline }}
            >
                {section.heading}
            </h2>
            <div
                className="flex w-full flex-col gap-5 text-[20px] font-normal leading-[30px] max-sm:text-[18px] max-sm:leading-7"
                style={{ color: colorBody }}
            >
                {section.paragraphs.map((paragraph) => (
                    <LegalParagraph
                        key={paragraph}
                    >
                        {paragraph}
                    </LegalParagraph>
                ))}
            </div>
        </section>
    );
    return (
        <SiteLayout footer="legal">
            <PageMeta {...pageMeta.terms} />

            <div className="flex w-full flex-col items-center gap-10 px-20 min-sm:max-lg:px-0 py-20 max-sm:px-8 max-sm:py-16">
                {/* title + last updated (Figma 845:33892 pattern) */}
                <section
                    className="flex w-full max-w-[768px] flex-col items-start gap-4 px-8 max-sm:px-0"
                    style={{ color: colorHeadline }}
                >
                    <h1 className="text-[36px] font-bold leading-[44px] tracking-[-0.72px] max-sm:text-[30px] max-sm:font-semibold max-sm:leading-[38px] max-sm:tracking-normal">
                        {t.title}
                    </h1>
                    <p className="text-[20px] leading-[30px] max-sm:text-[18px] max-sm:leading-7">
                        <span className="font-bold">{t.lastUpdated}:</span> {t.lastUpdatedDate}
                    </p>
                </section>

                {/* intro paragraphs + disclaimer callout */}
                <section
                    className="flex w-full max-w-[768px] flex-col items-start gap-5 px-8 max-sm:px-0 text-[20px] font-normal leading-[30px] max-sm:text-[18px] max-sm:leading-7"
                    style={{ color: colorBody }}
                >
                    {t.intro.map((paragraph) => (
                        <LegalParagraph key={paragraph} linkify={false}>
                            {paragraph}
                        </LegalParagraph>
                    ))}
                    <DisclaimerCallout />
                </section>

                {/* numbered sections */}
                {t.sections.map(renderSection)}
            </div>
        </SiteLayout>
    );
}
