import { useEffect } from "react";
import { SiteLayout } from "@/components/marketing/site-layout";
import { privacySections, SUPPORT_EMAIL } from "@/data/site";

export const PrivacyScreen = () => {
    useEffect(() => {
        document.title = "Privacy Policy — Qum";
        return () => {
            document.title = "Qum — Prayer times in the MacBook notch";
        };
    }, []);

    return (
        <SiteLayout footer="legal">
            <main className="w-full min-w-0">
                <section className="flex w-full flex-col items-center px-20 py-20 max-[769px]:py-10 max-[480px]:px-5">
                    <div className="flex w-full max-w-container flex-col items-center">
                        <div className="flex w-full max-w-[1024px] flex-col items-start gap-3 max-[769px]:max-w-none">
                            <p className="text-md font-normal text-brand-700">Last updated 10 September 2026</p>
                            <h1 className="text-display-lg font-bold text-[#232b32] max-[769px]:text-display-md max-[480px]:font-semibold">Privacy Policy</h1>
                        </div>
                    </div>
                </section>

                <section className="flex w-full flex-col items-center px-20 pb-20 max-[480px]:px-5">
                    <div className="flex w-full max-w-[1024px] flex-col max-[769px]:max-w-none">
                        {privacySections.map((section) => (
                            <section key={section.heading} className="flex flex-col gap-4 pb-6">
                                <h2 className="text-display-xs font-semibold text-[#2c363f]">{section.heading}</h2>
                                <div className="flex flex-col gap-[18px]">
                                    {section.paragraphs.map((paragraph) => (
                                        <p key={paragraph} className="text-lg font-normal text-[#606766]">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </section>
                        ))}

                        <section className="flex flex-col gap-4 pb-6">
                            <h2 className="text-display-xs font-semibold text-[#2c363f]">Questions</h2>
                            <p className="text-lg font-normal text-[#606766]">
                                Questions about this notice: write to{"\u00a0"}
                                <a className="font-semibold text-brand-600 underline" href={`mailto:${SUPPORT_EMAIL}`}>
                                    {SUPPORT_EMAIL}
                                </a><span className="font-semibold text-brand-600">.</span>
                            </p>
                        </section>
                    </div>
                </section>
            </main>
        </SiteLayout>
    );
};
