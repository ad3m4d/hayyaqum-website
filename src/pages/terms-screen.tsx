import { PageMeta } from "@/components/marketing/page-meta";
import { LegalParagraph } from "@/components/marketing/legal-copy";
import { SiteLayout } from "@/components/marketing/site-layout";
import { pageMeta } from "@/data/seo";
import { DisclaimerCallout } from "@/components/marketing/disclaimer-callout";
import { TERMS_LAST_UPDATED, termsIntro, termsSections } from "@/data/site";

export function TermsScreen() {
    return (
        <SiteLayout footer="legal">
            <PageMeta {...pageMeta.terms} />
            <div className="w-full min-w-0">
                <section className="flex w-full flex-col items-center px-20 py-20 max-[769px]:pt-10 max-[769px]:pb-16 max-[480px]:px-5 max-[480px]:py-10">
                    <div className="flex w-full max-w-container flex-col items-center">
                        <div className="flex w-full max-w-[1024px] flex-col items-start gap-8 max-[769px]:max-w-none max-[480px]:gap-6">
                            <div className="flex flex-col items-start gap-3">
                                <p className="text-md font-normal text-brand-secondary">Last updated {TERMS_LAST_UPDATED}</p>
                                <h1 className="text-display-lg font-bold tracking-[-0.96px] text-[#232b32] max-[769px]:text-display-md max-[769px]:font-semibold max-[769px]:tracking-[-0.72px]">
                                    Terms of Use
                                </h1>
                            </div>
                            <div className="flex flex-col gap-6 min-[481px]:max-[769px]:gap-5 max-[480px]:gap-[18px]">
                                {termsIntro.map((paragraph) => (
                                    <LegalParagraph
                                        key={paragraph}
                                        linkify={false}
                                        className="text-display-xs font-normal text-[#606766] min-[481px]:max-[769px]:text-xl max-[480px]:text-lg"
                                    >
                                        {paragraph}
                                    </LegalParagraph>
                                ))}
                                <DisclaimerCallout />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex w-full flex-col items-center px-20 pb-20 max-[480px]:px-5 max-[480px]:pb-10">
                    <div className="flex w-full max-w-[1024px] flex-col max-[769px]:max-w-none">
                        {termsSections.map((section) => (
                            <section key={section.heading} className="flex flex-col gap-4 pb-8">
                                <h2 className="text-display-xs font-semibold text-[#2c363f]">{section.heading}</h2>
                                <div className="flex flex-col gap-[18px]">
                                    {section.paragraphs.map((paragraph) => (
                                        <LegalParagraph key={paragraph} linkify={section.heading !== "10. Privacy"}>
                                            {paragraph}
                                        </LegalParagraph>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </section>
            </div>
        </SiteLayout>
    );
}
