import { FeatureCarousel } from "@/components/marketing/feature-carousel";
import { QumBrand } from "@/components/marketing/qum-brand";
import { PageMeta } from "@/components/marketing/page-meta";
import { SiteBookend } from "@/components/marketing/site-bookend";
import { SiteLayout } from "@/components/marketing/site-layout";
import { APP_STORE_URL } from "@/data/site";
import { pageMeta } from "@/data/seo";
import { useLang } from "@/providers/language-provider";

// Figma homepage 822:3841, tablet 922:57168, mobile 940:69790.

const brandDeep = "#258ea6";
const colorHeadline = "#232b32";
const colorBody = "#808988";

function Logomark96() {
    // Crop the authored SVG to its icon bounds to match the 96px / 64px design slot.
    return <QumBrand size={96} cropToMark className="overflow-visible max-sm:size-16" />;
}

function PrimaryDownload({ label, mobileLabel }: { label: string; mobileLabel: string }) {
    // Figma 912:53269 — flat teal pill (#258EA6). Hover is a left→right fill-in
    // to the darker teal #1E7285 (brand_Secondary/500) over 300ms ease-out.
    const base =
        "group relative inline-flex shrink-0 items-center max-sm:w-full max-sm:justify-center gap-2.5 overflow-clip rounded-full pl-4 pr-5 py-3 text-lg font-semibold leading-7 text-[#fbfcfc] outline-brand focus-visible:outline-2 focus-visible:outline-offset-2";
    const style = { backgroundColor: brandDeep };
    const content = (
        <>
            <span
                aria-hidden
                className="pointer-events-none absolute inset-0 origin-left scale-x-0 rounded-full bg-[#1E7285] transition-transform duration-300 ease-out group-hover:scale-x-100"
            />
            <img src="/assets/figma/apple-primary.svg" alt="" className="relative size-6" />
            <span className="relative hidden sm:inline">{label}</span><span className="relative sm:hidden">{mobileLabel}</span>
        </>
    );
    return APP_STORE_URL ? (
        <a href={APP_STORE_URL} className={base} style={style}>{content}</a>
    ) : (
        <span role="status" className={base} style={style}>{content}</span>
    );
}

/* --------------------------- page --------------------------- */

export const HomeScreen = () => {
    const { copy } = useLang();
    const v2 = copy.homeV2;

    return (
        <SiteLayout footer="none" background="plain" homeNavigation homepage>
            <PageMeta {...pageMeta.home} />

            {/* ----------------------- hero (822:3849) ----------------------- */}
            <section className="flex w-full flex-col items-center gap-16 px-20 min-sm:max-lg:px-0 py-20 min-sm:max-lg:py-20 max-sm:px-6 max-sm:py-16">
                <div className="flex w-full max-w-[768px] flex-col items-start gap-8 px-8 max-sm:px-0">
                    <Logomark96 />
                    <div className="flex w-full flex-col gap-6 max-sm:gap-4">
                        <h1
                            className="text-[48px] font-bold leading-[60px] tracking-[-0.96px] max-sm:text-[36px] max-sm:leading-[44px] max-sm:font-semibold"
                            style={{ color: colorHeadline }}
                        >
                            {v2.hero.headlineA}
                            <br />
                            {v2.hero.headlineB}
                        </h1>
                        <p
                            className="text-[30px] font-normal leading-[38px] max-sm:text-[24px] max-sm:leading-[32px]"
                            style={{ color: colorBody }}
                        >
                            {v2.hero.sub}
                        </p>
                    </div>
                    <div className="flex w-full flex-wrap items-center gap-x-8 gap-y-4 max-sm:flex-col max-sm:items-start max-sm:gap-5 max-sm:pt-4">
                        <PrimaryDownload label={v2.downloadCTA} mobileLabel={v2.downloadCTAShort} />
                        <p className="w-[320px] whitespace-pre-line text-lg italic leading-7 max-sm:w-auto max-sm:text-base max-sm:leading-6" style={{ color: colorBody }}>
                            {v2.hero.requirement}
                        </p>
                    </div>
                </div>
            </section>

            <FeatureCarousel />

            {/* --------------------- bookend / footer (822:3861) -------------------- */}
            <SiteBookend />
        </SiteLayout>
    );
};
