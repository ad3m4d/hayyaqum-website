import { FeatureVideo } from "@/components/marketing/feature-video";
import { RiseIn } from "@/components/marketing/parallax";
import { QumBrand } from "@/components/marketing/qum-brand";
import { PageMeta } from "@/components/marketing/page-meta";
import { SiteBookend } from "@/components/marketing/site-bookend";
import { SiteLayout } from "@/components/marketing/site-layout";
import { APP_STORE_URL } from "@/data/site";
import { pageMeta } from "@/data/seo";
import { useLang } from "@/providers/language-provider";
import type { FeatureV2Id } from "@/data/i18n";
// Layout and feature assets from Figma 822:3841. Reuse the shared brand,
// buttons and video player; keep the responsive layout in normal document flow.

const brandTeal = "#1e7285";
const brandDeep = "#258ea6";
const colorHeadline = "#232b32";
const colorFeatureHeadline = "#2c363f";
const colorBody = "#808988";

function Logomark96() {
    // Use the authored brand SVG (same component the nav renders) so hero and
    // bookend carry the full filter stack, gradient stroke highlight and
    // mix-blend mark — matching the nav's render quality.
    return <QumBrand size={96} className="max-sm:size-16" />;
}

function PrimaryDownload({ label, mobileLabel }: { label: string; mobileLabel: string }) {
    // Figma 912:53269 — flat teal pill (#258EA6). Hover is a left→right fill-in
    // to the darker teal #1E7285 (brand_Secondary/500) over 300ms ease-out.
    const base =
        "group relative inline-flex shrink-0 items-center max-sm:w-[311px] max-sm:max-w-full max-sm:justify-center gap-2.5 overflow-clip rounded-full pl-4 pr-5 py-3 text-lg font-semibold leading-7 text-[#fbfcfc] outline-brand focus-visible:outline-2 focus-visible:outline-offset-2";
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

function SecondaryDownload({ label }: { label: string }) {
    // Figma 908:53140 — rest wash #deeef2 (Secondary/100). Hover is the
    // "radial-in" pattern: an overlay layer carrying the hover wash (#bbdce3,
    // Secondary/200) scales from 0 → 1 from the button's centre over 300ms.
    // The base keeps its rest wash so the transition stays smooth.
    const base =
        "group relative inline-flex shrink-0 items-center gap-2.5 overflow-clip rounded-full pl-4 pr-5 py-3 text-lg font-semibold leading-7 shadow-[0_4px_6px_-1px_rgba(187,220,227,0.1),0_2px_4px_-2px_rgba(187,220,227,0.06)] outline-brand focus-visible:outline-2 focus-visible:outline-offset-2";
    const style = {
        color: brandTeal,
        backgroundImage:
            "linear-gradient(90deg, rgba(251, 252, 252, 0.4) 0%, rgba(251, 252, 252, 0.4) 100%), linear-gradient(90deg, #deeef2 0%, #deeef2 100%)",
    };
    const content = (
        <>
            <span
                aria-hidden
                className="pointer-events-none absolute inset-0 origin-left scale-x-0 rounded-full bg-[#bbdce3] transition-transform duration-300 ease-out group-hover:scale-x-100"
            />
            <img src="/assets/figma/apple-secondary.svg" alt="" className="relative size-6" />
            <span className="relative">{label}</span>
        </>
    );
    return APP_STORE_URL ? (
        <a href={APP_STORE_URL} className={base} style={style}>{content}</a>
    ) : (
        <span role="status" className={base} style={style}>{content}</span>
    );
}

const FEAT_ASSET: Record<FeatureV2Id, string> = {
    expand: "/assets/figma/feature-expand.svg",
    qibla: "/assets/figma/feature-qibla.svg",
    streak: "/assets/figma/feature-streak.svg",
    reminder: "/assets/figma/feature-reminder.svg",
    adhan: "/assets/figma/feature-adhan.svg",
    qada: "/assets/figma/feature-qada.svg",
};

function VideoCard({ id, label }: { id: FeatureV2Id; label: string }) {
    return (
        <div
            className="relative isolate aspect-[1024/480] min-sm:max-lg:aspect-[88/45] w-full max-w-[1024px] overflow-hidden rounded-[24px] max-sm:rounded-none max-sm:border-0 max-sm:aspect-[125/64] border-2 border-[rgba(15,19,22,0.05)] shadow-[0_20px_24px_-4px_rgba(0,0,0,0.08),0_8px_8px_-4px_rgba(0,0,0,0.03),0_3px_3px_-1.5px_rgba(0,0,0,0.04)]"
            style={{
                WebkitMaskImage:
                    "radial-gradient(white, black)",
            }}
        >
            <FeatureVideo id={id} label={label} />
        </div>
    );
}

/* --------------------------- page --------------------------- */

export const HomeScreen = () => {
    const { copy } = useLang();
    const v2 = copy.homeV2;

    return (
        <SiteLayout footer="none" background="plain" homeNavigation>
            <PageMeta {...pageMeta.home} />

            {/* ----------------------- hero (822:3849) ----------------------- */}
            <section className="flex w-full flex-col items-center gap-16 px-20 min-sm:max-lg:px-0 py-20 min-sm:max-lg:py-24 max-sm:px-8 max-sm:py-16">
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
                        <p className="w-[320px] whitespace-pre-line text-base italic leading-6 max-sm:w-auto" style={{ color: colorBody }}>
                            {v2.hero.requirement}
                        </p>
                    </div>
                </div>
            </section>

            {/* ----------------- 6 feature sections (829:...) ---------------- */}
            {v2.sections.map((section) => (
                <section
                    key={section.id}
                    id={section.id}
                    className="flex w-full flex-col items-center gap-16 px-20 min-sm:max-lg:px-0 pt-20 pb-32 max-sm:gap-16 max-sm:px-0 max-sm:pt-10 max-sm:pb-16"
                >
                    <RiseIn className="flex w-full max-w-[768px] flex-col items-start gap-8 px-8">
                        <img src={FEAT_ASSET[section.id]} alt="" className="size-18 max-sm:size-16" aria-hidden />
                        <div className="flex w-full flex-col gap-3">
                            <h2
                                className="text-[36px] font-bold leading-[44px] tracking-[-0.72px] max-sm:text-[30px] max-sm:leading-[38px] max-sm:font-semibold"
                                style={{ color: colorFeatureHeadline }}
                            >
                                {section.headline}
                            </h2>
                            <p
                                className="text-[24px] font-normal leading-[32px] max-sm:text-[20px] max-sm:leading-[30px]"
                                style={{ color: colorBody }}
                            >
                                {section.sub}
                            </p>
                        </div>
                        <SecondaryDownload label={v2.downloadCTAShort} />
                    </RiseIn>
                    <RiseIn distance={40} className="flex w-full justify-center min-sm:max-lg:px-8">
                        <VideoCard id={section.id} label={section.sub} />
                    </RiseIn>
                </section>
            ))}

            {/* --------------------- bookend / footer (822:3861) -------------------- */}
            <SiteBookend fullWidthMobileCTA home />
        </SiteLayout>
    );
};
