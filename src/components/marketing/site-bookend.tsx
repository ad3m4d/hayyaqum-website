import { FooterLinks } from "@/components/marketing/footer-links";
import { APP_STORE_URL } from "@/data/site";
import { useLang } from "@/providers/language-provider";

/** Shared footer CTA: Figma 822:3861 (desktop), 922:57224 (tablet), 1071:13275 (mobile). */

const colorHeadline = "#232b32";
const colorBody = "#808988";
const colorMuted = "#a1acaa";

function FooterDownload({ label, mobileLabel }: { label: string; mobileLabel: string }) {
    const base = "group relative inline-flex shrink-0 items-center gap-2.5 overflow-clip rounded-full pl-4 pr-5 py-3 text-lg font-semibold leading-7 max-sm:w-full max-sm:justify-center outline-brand focus-visible:outline-2 focus-visible:outline-offset-2";
    const style = { backgroundColor: "#eaf4f6", color: "#1e7285" };
    const content = (
        <>
            <span
                aria-hidden
                className="pointer-events-none absolute inset-0 origin-left scale-x-0 rounded-full bg-[#bbdce3] transition-transform duration-300 ease-out group-hover:scale-x-100"
            />
            <img src="/assets/figma/apple-secondary.svg" alt="" className="relative size-6" />
            <span className="relative hidden sm:inline">{label}</span><span className="relative sm:hidden">{mobileLabel}</span>
        </>
    );
    return APP_STORE_URL ? (
        <a href={APP_STORE_URL} className={base} style={style}>{content}</a>
    ) : (
        <span role="status" className={base} style={style}>{content}</span>
    );
}

export function SiteBookend() {
    const { copy, lang } = useLang();
    const v2 = copy.homeV2;
    return (
        <section className="flex w-full flex-col items-center gap-16 px-20 min-sm:max-lg:px-0 pt-20 pb-10 max-sm:pt-10 max-sm:pb-8 max-sm:px-6">
            <div className="flex w-full max-w-[768px] flex-col items-start gap-8 px-8 max-sm:px-0">
                <div className="flex w-full flex-col gap-4">
                    <h3
                        className="text-[36px] font-semibold leading-[44px] tracking-[-0.72px] max-sm:text-[30px] max-sm:leading-[38px] max-sm:tracking-normal"
                        style={{ color: colorHeadline }}
                        lang={lang}
                    >
                        {v2.bookend.homeHeadline}
                    </h3>
                    <p
                        className="text-[24px] font-normal leading-[32px] max-sm:text-[20px] max-sm:leading-[30px]"
                        style={{ color: colorBody }}
                    >
                        {v2.bookend.homeSub}
                    </p>
                </div>
                <FooterDownload label={v2.downloadCTA} mobileLabel={v2.downloadCTAShort} />
                <div className="flex flex-col text-base italic leading-6 max-sm:gap-4" style={{ color: colorBody }}>
                    {v2.bookend.fine.split("\n").map((line) => <p key={line}>{line}</p>)}
                </div>
            </div>

            <div
                className="flex w-full max-w-[768px] items-center justify-between gap-6 px-8 min-sm:max-lg:flex-wrap text-sm leading-5 max-sm:flex-col max-sm:items-start max-sm:-mx-1 max-sm:w-[calc(100%+8px)] max-sm:px-0 max-sm:gap-6"
                style={{ color: colorMuted }}
            >
                <p>{v2.footer.copyright}</p>
                <FooterLinks />
            </div>
        </section>
    );
}

