import type { ReactNode } from "react";
import { PageMeta } from "@/components/marketing/page-meta";
import { SiteBookend } from "@/components/marketing/site-bookend";
import { SiteLayout } from "@/components/marketing/site-layout";
import { pageMeta } from "@/data/seo";
import { useLang } from "@/providers/language-provider";
import {
    CALCULATION_METHODS_AR,
    CALCULATION_METHODS_EN,
    ASR_CONVENTIONS_AR,
    ASR_CONVENTIONS_EN,
} from "@/data/i18n";

/**
 * About page from Figma 845:30455.
 *
 *   body:    flex-col gap-40 px-80 py-80, 768px content column
 *   section: flex-col gap-16 px-32, heading (display-xs/24-32 #2c363f semibold)
 *            + body (text-xl/20-30 #606766)
 *   list:    disc, 16px between items, same body style
 *   footer:  SiteBookend (same block as home — Figma 845:30576)
 */

const colorHeadline = "#2c363f";
const colorBody = "#606766";

function AboutSection({ heading, children }: { heading: string; children: ReactNode }) {
    return (
        <section className="flex w-full max-w-[768px] flex-col items-start gap-4 px-8 max-sm:px-0">
            <h2
                className="w-full text-[24px] font-semibold leading-[32px]"
                style={{ color: colorHeadline }}
            >
                {heading}
            </h2>
            <div
                className="flex w-full flex-col gap-5 text-[20px] font-normal leading-[30px]"
                style={{ color: colorBody }}
            >
                {children}
            </div>
        </section>
    );
}

export function AboutScreen() {
    const { lang, copy } = useLang();
    const methods = lang === "ar" ? CALCULATION_METHODS_AR : CALCULATION_METHODS_EN;
    const asr = lang === "ar" ? ASR_CONVENTIONS_AR : ASR_CONVENTIONS_EN;
    const asrJoiner = lang === "ar" ? " أو " : " or ";
    const a = copy.about;

    return (
        <SiteLayout footer="none">
            <PageMeta {...pageMeta.about} />

            <div className="flex w-full flex-col items-center gap-10 px-20 min-sm:max-lg:px-0 py-20 max-sm:px-8 max-sm:py-16">
                <AboutSection heading={a.whatItIs.heading}>
                    <p>{a.whatItIs.body}</p>
                </AboutSection>

                <AboutSection heading={a.whoFor.heading}>
                    <p>{a.whoFor.body}</p>
                </AboutSection>

                <AboutSection heading={a.whatItDoes.heading}>
                    <ul className="list-disc space-y-4 ps-[30px]">
                        {copy.features.map((item) => (
                            <li key={item.id}>
                                <span>{item.label}. {item.caption}</span>
                            </li>
                        ))}
                    </ul>
                </AboutSection>

                <AboutSection heading={a.prayerTimes.heading}>
                    <p>{a.prayerTimes.body1}</p>
                    <p>
                        {a.prayerTimes.methodsLabel(methods.join(lang === "ar" ? "، " : ", "))}{" "}
                        {a.prayerTimes.asrLabel(asr.join(asrJoiner))}
                    </p>
                </AboutSection>

                <AboutSection heading={a.qiblaSection.heading}>
                    <p>{a.qiblaSection.body}</p>
                </AboutSection>

                <AboutSection heading={a.whatItIsNot.heading}>
                    <p>{a.whatItIsNot.body1}</p>
                    <p>{a.whatItIsNot.body2}</p>
                </AboutSection>
            </div>

            <SiteBookend />
        </SiteLayout>
    );
}
