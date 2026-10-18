import { useEffect, type ReactNode } from "react";
import { SiteLayout } from "@/components/marketing/site-layout";
import {
    PRIVACY_LAST_UPDATED,
    privacySections,
    privacySummary,
    SUPPORT_EMAIL,
    type PrivacyTableRow,
} from "@/data/site";
import { cx } from "@/utils/cx";

function PrivacyParagraph({ children }: { children: string }) {
    if (!children.includes(SUPPORT_EMAIL)) {
        return <p className="text-lg font-normal text-[#606766]">{children}</p>;
    }

    const parts = children.split(SUPPORT_EMAIL);
    const nodes: ReactNode[] = [];

    parts.forEach((part, index) => {
        if (part.startsWith(".")) {
            nodes.push(
                <span key={`dot-${index}`} className="font-semibold text-[#258ea6]">
                    .
                </span>,
            );
            nodes.push(part.slice(1));
        } else {
            nodes.push(part);
        }
        if (index < parts.length - 1) {
            nodes.push(
                <a key={index} className="font-semibold text-[#258ea6] underline" href={`mailto:${SUPPORT_EMAIL}`}>
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
            <p className="mb-3 hidden text-sm text-[#606766] max-md:block">This table scrolls sideways.</p>
            <div className="w-[1024px] min-w-[1024px] overflow-hidden rounded-3xl border border-black/5 bg-[#fbfcfc]">
                <table className="w-full table-fixed border-collapse text-left">
                <caption className="sr-only">What Qum stores, why, who receives it, and how long it is kept</caption>
                <colgroup>
                    <col className="w-[200px]" />
                    <col />
                    <col />
                    <col />
                </colgroup>
                <thead>
                    <tr className="bg-[#f2f7f6]">
                        <th scope="col" className="h-11 border-b border-black/5 px-6 py-3 text-xs font-semibold text-[#4b504f]">
                            Data type
                        </th>
                        <th scope="col" className="h-11 border-b border-black/5 px-6 py-3 text-xs font-semibold text-[#4b504f]">
                            Why ...?
                        </th>
                        <th scope="col" className="h-11 border-b border-black/5 px-6 py-3 text-xs font-semibold text-[#4b504f]">
                            Shared with ...
                        </th>
                        <th scope="col" className="h-11 border-b border-black/5 px-6 py-3 text-xs font-semibold text-[#4b504f]">
                            Kept
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={row.data}>
                            <th
                                scope="row"
                                className={cx("px-6 py-4 align-top text-md font-medium text-[#2c363f]", index < rows.length - 1 && "border-b border-black/5")}
                            >
                                {row.data}
                            </th>
                            <td className={cx("px-6 py-4 align-top text-md font-normal text-[#606766]", index < rows.length - 1 && "border-b border-black/5")}>
                                {row.why}
                            </td>
                            <td className={cx("px-6 py-4 align-top text-md font-normal text-[#606766]", index < rows.length - 1 && "border-b border-black/5")}>
                                {row.sharedWith}
                            </td>
                            <td className={cx("px-6 py-4 align-top text-md font-normal text-[#606766]", index < rows.length - 1 && "border-b border-black/5")}>
                                {row.retention}
                            </td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
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
            <div className="w-full min-w-0">
                <section className="flex w-full flex-col items-center px-20 py-20 max-[769px]:pt-10 max-[769px]:pb-16 max-[480px]:px-5 max-[480px]:py-10">
                    <div className="flex w-full max-w-container flex-col items-center">
                        <div className="flex w-full max-w-[1024px] flex-col items-start gap-8 max-[769px]:max-w-none max-[480px]:gap-6">
                            <div className="flex flex-col items-start gap-3">
                                <p className="text-md font-normal text-[#1e7285]">Last updated {PRIVACY_LAST_UPDATED}</p>
                                <h1 className="text-display-lg font-bold tracking-[-0.96px] text-[#232b32] max-[769px]:text-display-md max-[769px]:font-semibold max-[769px]:tracking-[-0.72px]">
                                    Privacy Policy
                                </h1>
                            </div>
                            <div className="flex flex-col gap-6 min-[481px]:max-[769px]:gap-5 max-[480px]:gap-[18px]">
                                {privacySummary.map((paragraph) => (
                                    <p key={paragraph} className="text-display-xs font-normal text-[#606766] min-[481px]:max-[769px]:text-xl max-[480px]:text-lg">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex w-full flex-col items-center px-20 pb-20 max-[480px]:px-5 max-[480px]:pb-10">
                    <div className="flex w-full max-w-[1024px] flex-col max-[769px]:max-w-none">
                        {privacySections.map((section) => (
                            <section key={section.heading} className="flex flex-col gap-4 pb-8">
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
            </div>
        </SiteLayout>
    );
};
