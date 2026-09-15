import { useEffect, type ReactNode } from "react";
import { SiteLayout } from "@/components/marketing/site-layout";
import {
    PRIVACY_LAST_UPDATED,
    privacySections,
    privacySummary,
    SUPPORT_EMAIL,
    type PrivacyTableRow,
} from "@/data/site";

function PrivacyParagraph({ children }: { children: string }) {
    if (!children.includes(SUPPORT_EMAIL)) {
        return <p className="text-lg font-normal text-[#606766]">{children}</p>;
    }

    const parts = children.split(SUPPORT_EMAIL);
    const nodes: ReactNode[] = [];

    parts.forEach((part, index) => {
        nodes.push(part);
        if (index < parts.length - 1) {
            nodes.push(
                <a key={index} className="font-semibold text-brand-600 underline" href={`mailto:${SUPPORT_EMAIL}`}>
                    {SUPPORT_EMAIL}
                </a>,
            );
        }
    });

    return <p className="text-lg font-normal text-[#606766]">{nodes}</p>;
}

function PrivacyTable({ rows }: { rows: readonly PrivacyTableRow[] }) {
    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
                <caption className="sr-only">What Qum stores, why, who receives it, and how long it is kept</caption>
                <thead>
                    <tr className="border-b border-black/10">
                        <th scope="col" className="py-3 pr-4 text-sm font-semibold text-[#2c363f]">
                            Data type
                        </th>
                        <th scope="col" className="py-3 pr-4 text-sm font-semibold text-[#2c363f]">
                            Why
                        </th>
                        <th scope="col" className="py-3 pr-4 text-sm font-semibold text-[#2c363f]">
                            Shared with
                        </th>
                        <th scope="col" className="py-3 text-sm font-semibold text-[#2c363f]">
                            Kept
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.data} className="border-b border-black/5 align-top">
                            <th scope="row" className="py-3 pr-4 text-sm font-semibold text-[#2c363f]">
                                {row.data}
                            </th>
                            <td className="py-3 pr-4 text-sm font-normal text-[#606766]">{row.why}</td>
                            <td className="py-3 pr-4 text-sm font-normal text-[#606766]">{row.sharedWith}</td>
                            <td className="py-3 text-sm font-normal text-[#606766]">{row.retention}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

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
                            <p className="text-md font-normal text-brand-700">Last updated {PRIVACY_LAST_UPDATED}</p>
                            <h1 className="text-display-lg font-bold text-[#232b32] max-[769px]:text-display-md max-[480px]:font-semibold">Privacy Policy</h1>
                            <p className="pt-3 text-lg font-normal text-[#606766]">{privacySummary}</p>
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
                                        <PrivacyParagraph key={paragraph}>{paragraph}</PrivacyParagraph>
                                    ))}
                                    {section.table ? <PrivacyTable rows={section.table} /> : null}
                                </div>
                            </section>
                        ))}
                    </div>
                </section>
            </main>
        </SiteLayout>
    );
};
