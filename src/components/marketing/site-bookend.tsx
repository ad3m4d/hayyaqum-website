import { FooterLink } from "@/components/marketing/footer-link";
import { ParallaxDrift } from "@/components/marketing/parallax";
import { QumBrand } from "@/components/marketing/qum-brand";
import { APP_STORE_URL } from "@/data/site";
import { useLang } from "@/providers/language-provider";

/**
 * Bookend section used at the bottom of the home page (Figma 822:3861) and at
 * the bottom of the about / privacy / terms pages (Figma 845:30576 et al.).
 *
 *   96px logomark (QumBrand, bookend drift)
 *   "Hayya Qum · هَيَّا قُمْ" display-lg
 *   "Made for workdays that still have salah in them." display-sm
 *   Primary teal download pill (same fill-in hover as hero)
 *   Italic requirement text (no account / requires a notch)
 *   Copyright © … · About Qum · dot · Privacy · dot · Terms
 *
 * Replaces the per-page copy/legal row.
 */

const brandDeep = "#258ea6";
const colorHeadline = "#232b32";
const colorBody = "#808988";
const colorMuted = "#a1acaa";

function PrimaryDownload({ label }: { label: string }) {
    const base =
        "group relative inline-flex shrink-0 items-center gap-2.5 overflow-clip rounded-full pl-4 pr-5 py-3 text-lg font-semibold leading-7 text-[#fbfcfc] outline-brand focus-visible:outline-2 focus-visible:outline-offset-2";
    const style = { backgroundColor: brandDeep };
    const content = (
        <>
            <span
                aria-hidden
                className="pointer-events-none absolute inset-0 origin-left scale-x-0 rounded-full bg-[#1E7285] transition-transform duration-300 ease-out group-hover:scale-x-100"
            />
            <img src="/assets/figma/apple-primary.svg" alt="" className="relative size-6" />
            <span className="relative">{label}</span>
        </>
    );
    return APP_STORE_URL ? (
        <a href={APP_STORE_URL} className={base} style={style}>{content}</a>
    ) : (
        <span role="status" className={base} style={style}>{content}</span>
    );
}

export function SiteBookend() {
    const { copy } = useLang();
    const v2 = copy.homeV2;
    return (
        <section className="flex w-full flex-col items-center gap-16 px-20 pt-20 pb-10 max-md:px-6 max-md:pt-12">
            <div className="flex w-full max-w-[768px] flex-col items-start gap-8 px-8 max-md:items-center max-md:px-0 max-md:text-center">
                <ParallaxDrift speed={-0.08}>
                    <QumBrand size={96} />
                </ParallaxDrift>
                <div className="flex w-full flex-col gap-6 max-md:items-center">
                    <h3
                        className="text-[48px] font-semibold leading-[60px] tracking-[-0.96px] max-md:text-[36px] max-md:leading-[44px]"
                        style={{ color: colorHeadline }}
                        lang="en"
                    >
                        {v2.bookend.wordmark}
                    </h3>
                    <p
                        className="text-[30px] font-normal leading-[38px] max-md:text-[22px] max-md:leading-[30px]"
                        style={{ color: colorBody }}
                    >
                        {v2.bookend.sub}
                    </p>
                </div>
                <PrimaryDownload label={v2.downloadCTA} />
                <p className="whitespace-pre-line text-base italic leading-6" style={{ color: colorBody }}>
                    {v2.bookend.fine}
                </p>
            </div>

            <div
                className="flex w-full max-w-[768px] items-center justify-between gap-6 px-8 text-sm leading-5 max-md:flex-col max-md:items-start max-md:gap-3 max-md:px-0 max-md:text-center max-[480px]:items-center"
                style={{ color: colorMuted }}
            >
                <p>{v2.footer.copyright}</p>
                <nav aria-label={copy.footer.legalAria} className="flex items-center gap-2">
                    <FooterLink href="/about">{v2.footer.about}</FooterLink>
                    <img src="/assets/figma/dot.svg" alt="" className="size-1" aria-hidden />
                    <FooterLink href="/privacy">{v2.footer.privacy}</FooterLink>
                    <img src="/assets/figma/dot.svg" alt="" className="size-1" aria-hidden />
                    <FooterLink href="/terms">{v2.footer.terms}</FooterLink>
                </nav>
            </div>
        </section>
    );
}

