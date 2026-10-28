import { LegalParagraph } from "@/components/marketing/legal-copy";
import { PageMeta } from "@/components/marketing/page-meta";
import { SiteLayout } from "@/components/marketing/site-layout";
import { pageMeta } from "@/data/seo";
import {
    PRIVACY_LAST_UPDATED,
    privacySections,
    privacySummary,
    type PrivacyTableRow,
} from "@/data/site";
import { cx } from "@/utils/cx";

function PrivacyTable({ rows }: { rows: readonly PrivacyTableRow[] }) {
    return (
        <>
            <div className="hidden w-full overflow-x-auto md:block">
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
                                    Why
                                </th>
                                <th scope="col" className="h-11 border-b border-black/5 px-6 py-3 text-xs font-semibold text-[#4b504f]">
                                    Shared with
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
            <ul className="flex flex-col gap-4 md:hidden">
                {rows.map((row) => (
                    <li key={row.data} className="rounded-3xl border border-black/5 bg-[#fbfcfc] px-5 py-4">
                        <p className="text-md font-medium text-[#2c363f]">{row.data}</p>
                        <dl className="mt-3 grid gap-3 text-md">
                            <div>
                                <dt className="text-xs font-semibold text-[#4b504f]">Why</dt>
                                <dd className="mt-1 font-normal text-[#606766]">{row.why}</dd>
                            </div>
                            <div>
                                <dt className="text-xs font-semibold text-[#4b504f]">Shared with</dt>
                                <dd className="mt-1 font-normal text-[#606766]">{row.sharedWith}</dd>
                            </div>
                            <div>
                                <dt className="text-xs font-semibold text-[#4b504f]">Kept</dt>
                                <dd className="mt-1 font-normal text-[#606766]">{row.retention}</dd>
                            </div>
                        </dl>
                    </li>
                ))}
            </ul>
        </>
    );
}

export const PrivacyScreen = () => {
    return (
        <SiteLayout footer="legal">
            <PageMeta {...pageMeta.privacy} />
            <div className="w-full min-w-0">
                <section className="flex w-full flex-col items-center px-20 py-20 max-[769px]:pt-10 max-[769px]:pb-16 max-[480px]:px-5 max-[480px]:py-10">
                    <div className="flex w-full max-w-container flex-col items-center">
                        <div className="flex w-full max-w-[1024px] flex-col items-start gap-8 max-[769px]:max-w-none max-[480px]:gap-6">
                            <div className="flex flex-col items-start gap-3">
                                <p className="text-md font-normal text-brand-secondary">Last updated {PRIVACY_LAST_UPDATED}</p>
                                <h1 className="text-display-lg font-bold tracking-[-0.96px] text-[#232b32] max-[769px]:text-display-md max-[769px]:font-semibold max-[769px]:tracking-[-0.72px]">
                                    Privacy Policy
                                </h1>
                            </div>
                            <div className="flex flex-col gap-6 min-[481px]:max-[769px]:gap-5 max-[480px]:gap-[18px]">
                                {privacySummary.map((paragraph) => (
                                    <LegalParagraph
                                        key={paragraph}
                                        className="text-display-xs font-normal text-[#606766] min-[481px]:max-[769px]:text-xl max-[480px]:text-lg"
                                    >
                                        {paragraph}
                                    </LegalParagraph>
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
                                        <LegalParagraph key={paragraph}>{paragraph}</LegalParagraph>
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
