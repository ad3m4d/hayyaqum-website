import { LegalParagraph } from "@/components/marketing/legal-copy";
import { PageMeta } from "@/components/marketing/page-meta";
import { SiteLayout } from "@/components/marketing/site-layout";
import { pageMeta } from "@/data/seo";
import { useLang } from "@/providers/language-provider";
import type { PrivacyTableRow } from "@/data/i18n";

/**
 * Privacy page from Figma 845:33889.
 *
 *   body:    flex-col gap-40, 768px content column, left-aligned
 *   title:   "Privacy Policy" display-xs semibold #2c363f +
 *            "Last Updated: <date>" text-sm, "Last Updated:" semibold
 *   summary: text-xl regular #606766
 *   section: heading (display-xs semibold #2c363f) + body paragraphs
 *            (text-xl regular #606766). First section includes a table.
 *   footer:  legal (compact copyright row + About / Privacy / Terms)
 */

const colorHeadline = "#2c363f";
const colorBody = "#606766";
const colorBorder = "rgba(15,19,22,0.05)";
const colorHeaderBg = "#f2f7f6";
const colorHeaderText = "#4b504f";

/*
 * Privacy table from Figma 865:36784.
 *
 *   wrapper: rounded-2xl bg-white, 1px border #0f131608 (5% black), overflow-clip
 *   grid:    4 columns — col 1 fixed 158px, cols 2-4 1fr each
 *   header:  bg #f2f7f6, 44px tall, px-24 py-12, 14/20 medium-510 #4b504f
 *   row:     cells px-24 py-16, border-b (except last row)
 *   col 1:   16/24 medium-510 #2c363f (row header)
 *   cols 2-4: 16/24 regular #606766
 *
 * Uses CSS grid so cells in the same row share a height even when their text
 * lengths differ — otherwise independent flex columns misalign rows.
 */
function PrivacyTable({ rows }: { rows: readonly PrivacyTableRow[] }) {
    const { copy } = useLang();
    const h = copy.privacy.tableHeaders;

    const headerCellCls = "flex items-center gap-3 px-6 py-3 border-b";
    const bodyCellCls = "flex gap-3 px-6 py-4 items-start";

    return (
        <div className="w-full overflow-x-auto overscroll-x-contain rounded-2xl focus-visible:outline-2 focus-visible:outline-[#258ea6]" tabIndex={0} role="region" aria-label={copy.privacy.tableCaption}>
            <div
                className="grid w-full min-w-[704px] overflow-clip rounded-2xl border"
                style={{
                    backgroundColor: "#fbfcfc",
                    borderColor: colorBorder,
                    gridTemplateColumns: "158px 1fr 1fr 1fr",
                }}
                role="table"
                aria-label={copy.privacy.tableCaption}
            >
                {/* header row */}
                <div role="row" className="contents">
                {[h.data, h.why, h.shared, h.kept].map((label) => (
                    <div
                        key={label}
                        className={headerCellCls}
                        style={{ backgroundColor: colorHeaderBg, borderColor: colorBorder }}
                        role="columnheader"
                    >
                        <span className="text-sm font-medium leading-5" style={{ color: colorHeaderText }}>
                            {label}
                        </span>
                    </div>
                ))}

                </div>
                {/* body rows */}
                {rows.map((row, i) => {
                    const isLast = i === rows.length - 1;
                    const borderCls = isLast ? "" : "border-b";
                    return (
                        <div key={row.data} role="row" className="contents">
                            <div
                                className={`${bodyCellCls} ${borderCls}`}
                                style={{ borderColor: colorBorder }}
                                role="rowheader"
                            >
                                <span className="text-base font-medium leading-6" style={{ color: colorHeadline }}>
                                    {row.data}
                                </span>
                            </div>
                            <div
                                className={`${bodyCellCls} ${borderCls}`}
                                style={{ borderColor: colorBorder }}
                                role="cell"
                            >
                                <span className="text-base font-normal leading-6" style={{ color: colorBody }}>
                                    {row.why}
                                </span>
                            </div>
                            <div
                                className={`${bodyCellCls} ${borderCls}`}
                                style={{ borderColor: colorBorder }}
                                role="cell"
                            >
                                <span className="text-base font-normal leading-6" style={{ color: colorBody }}>
                                    {row.sharedWith}
                                </span>
                            </div>
                            <div
                                className={`${bodyCellCls} ${borderCls}`}
                                style={{ borderColor: colorBorder }}
                                role="cell"
                            >
                                <span className="text-base font-normal leading-6" style={{ color: colorBody }}>
                                    {row.retention}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}

export const PrivacyScreen = () => {
    const { copy } = useLang();
    const p = copy.privacy;

    return (
        <SiteLayout footer="legal">
            <PageMeta {...pageMeta.privacy} />

            <div className="flex w-full flex-col items-center gap-10 px-20 min-sm:max-lg:px-0 py-20 max-sm:px-8 max-sm:py-16">
                {/* title + last updated (Figma 845:33892) */}
                <section className="flex w-full max-w-[768px] flex-col items-start gap-4 px-8 max-sm:px-0" style={{ color: colorHeadline }}>
                    <h1 className="text-[36px] font-bold leading-[44px] tracking-[-0.72px]">
                        {p.title}
                    </h1>
                    <p className="text-[20px] leading-[30px]">
                        <span className="font-bold">{p.lastUpdated}:</span>{" "}
                        {p.lastUpdatedDate}
                    </p>
                </section>

                {/* summary */}
                <section className="flex w-full max-w-[768px] flex-col items-start gap-5 px-8 max-sm:px-0 text-[20px] font-normal leading-[30px]" style={{ color: colorBody }}>
                    {p.summary.map((paragraph) => (
                        <LegalParagraph key={paragraph}>{paragraph}</LegalParagraph>
                    ))}
                </section>

                {/* sections */}
                {p.sections.map((section) => (
                    <section
                        key={section.heading}
                        className="flex w-full max-w-[768px] flex-col items-start gap-4 px-8 max-sm:px-0"
                    >
                        <h2 className="text-[24px] font-semibold leading-[32px]" style={{ color: colorHeadline }}>
                            {section.heading}
                        </h2>
                        <div className="flex w-full flex-col gap-5 text-[20px] font-normal leading-[30px]" style={{ color: colorBody }}>
                            {section.paragraphs.map((paragraph) => (
                                <LegalParagraph key={paragraph}>{paragraph}</LegalParagraph>
                            ))}
                            {section.table ? <PrivacyTable rows={section.table} /> : null}
                        </div>
                    </section>
                ))}
            </div>
        </SiteLayout>
    );
};
