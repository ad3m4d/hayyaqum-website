import type { ReactNode } from "react";
import { PageMeta } from "@/components/marketing/page-meta";
import { SiteLayout } from "@/components/marketing/site-layout";
import { pageMeta } from "@/data/seo";
import { ASR_CONVENTIONS, CALCULATION_METHODS, features } from "@/data/site";

function AboutSection({ heading, children }: { heading: string; children: ReactNode }) {
    return (
        <section className="flex flex-col gap-4 pb-8">
            <h2 className="text-display-xs font-semibold text-[#2c363f]">{heading}</h2>
            <div className="flex flex-col gap-[18px] text-lg font-normal text-[#606766]">{children}</div>
        </section>
    );
}

export function AboutScreen() {
    return (
        <SiteLayout footer="legal">
            <PageMeta {...pageMeta.about} />
            <div className="w-full min-w-0">
                <section className="flex w-full flex-col items-center px-20 py-20 max-[769px]:pt-10 max-[769px]:pb-16 max-[480px]:px-5 max-[480px]:py-10">
                    <div className="flex w-full max-w-[1024px] flex-col items-start gap-8 max-[769px]:max-w-none">
                        <div className="flex flex-col items-start gap-3">
                            <p className="text-md font-normal text-brand-secondary">Qum</p>
                            <h1 className="text-display-lg font-bold tracking-[-0.96px] text-[#232b32] max-[769px]:text-display-md max-[769px]:font-semibold max-[769px]:tracking-[-0.72px]">
                                What Qum is
                            </h1>
                        </div>
                        <p className="text-display-xs font-normal text-[#606766] min-[481px]:max-[769px]:text-xl max-[480px]:text-lg">
                            Qum is a Mac app that puts the next prayer, the Qibla, and the adhan in the MacBook notch — so the workday still has salah in it. It does not require an account.
                        </p>
                    </div>
                </section>

                <section className="flex w-full flex-col items-center px-20 pb-20 max-[480px]:px-5 max-[480px]:pb-10">
                    <div className="flex w-full max-w-[1024px] flex-col max-[769px]:max-w-none">
                        <AboutSection heading="Who it is for">
                            <p>
                                A MacBook with a notch: MacBook Pro (2021 or later) or MacBook Air (2022 or later). Other Macs have no notch for Qum to sit in.
                            </p>
                        </AboutSection>

                        <AboutSection heading="What it does">
                            <ul className="list-disc space-y-2 ps-5">
                                {features.map((item) => (
                                    <li key={item.id}>
                                        <span className="font-medium text-[#2c363f]">{item.label}.</span> {item.caption}
                                    </li>
                                ))}
                            </ul>
                        </AboutSection>

                        <AboutSection heading="Prayer times">
                            <p>
                                Prayer times are calculated on this Mac. A coordinate or a city name may go to Apple Location Services so Qum can name or resolve a place — that is the only data that leaves this Mac.
                            </p>
                            <p>
                                Calculation methods: {CALCULATION_METHODS.join(", ")}. Asr can be {ASR_CONVENTIONS.join(" or ")}.
                            </p>
                        </AboutSection>

                        <AboutSection heading="Qibla on a Mac">
                            <p>
                                No Mac can measure heading. There is no magnetometer. Qum solves the bearing as geometry and shows Qibla direction from the desk after a one-time calibration. The direction stays in the notch.
                            </p>
                        </AboutSection>

                        <AboutSection heading="What it is not">
                            <p>
                                Qum is not an iPhone or iPad app. It is not a menu-bar countdown that runs on every Mac. Menu-bar prayer apps keep a timer in the status bar; Qum uses the notch on notched MacBooks, plays the adhan there, and keeps the streak on this Mac. If the Mac has no notch, Qum is the wrong app.
                            </p>
                            <p>Qum does not run analytics, show ads, or track you. The prayer log stays on this Mac. Location is optional.</p>
                        </AboutSection>
                    </div>
                </section>
            </div>
        </SiteLayout>
    );
}
