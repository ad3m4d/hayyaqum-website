import { useLang } from "@/providers/language-provider";
import { APP_STORE_URL } from "@/data/site";
import { QumBrand } from "@/components/marketing/qum-brand";

/*
 * Nav from Figma 822:4234.
 *
 *   outer:  flex items-center justify-center pt-24 w-full
 *   pill:   max-w-768 rounded-full, glass container (white/55 + backdrop-blur-xl
 *           + backdrop-saturate-150 + 1px white/40 border)
 *   logo:   gap-12; 40×40 QumBrand + wordmark
 *   nav:    gap-16; two pills each pl-12 pr-16 py-10, rounded-full, no border,
 *           no shadow. Rest wash = linear-gradient(90deg, white/40, white/40),
 *           linear-gradient(90deg, #e9f4f6, #e9f4f6). Hover is a left→right
 *           fill-in to #bbdce3 over 300ms ease-out — same pattern as the
 *           primary/secondary buttons on the body.
 */

const brandTeal = "#1e7285";
const pillWash: React.CSSProperties = {
    color: brandTeal,
    backgroundImage:
        "linear-gradient(90deg, rgba(251, 252, 252, 0.4) 0%, rgba(251, 252, 252, 0.4) 100%), linear-gradient(90deg, #e9f4f6 0%, #e9f4f6 100%)",
};

const navPillCls =
    "group relative inline-flex shrink-0 items-center gap-2 overflow-clip rounded-full pl-3 pr-4 py-2.5 text-sm font-semibold leading-5 outline-brand focus-visible:outline-2 focus-visible:outline-offset-2";

function FillInOverlay() {
    return (
        <span
            aria-hidden
            className="pointer-events-none absolute inset-0 origin-left scale-x-0 rounded-full bg-[#DEEEF2] transition-transform duration-300 ease-out group-hover:scale-x-100"
        />
    );
}

/**
 * Language toggle is hidden while the AR translation pass is still in review.
 * Flip this to true (and `LANGUAGE_TOGGLE_ENABLED` in language-provider.tsx)
 * to bring it back.
 */
const LANGUAGE_TOGGLE_ENABLED = false;

export function SiteNav({ plain = false }: { plain?: boolean }) {
    const { copy, toggle, lang } = useLang();
    void toggle;
    void lang;

    return (
        <header className="sticky top-0 z-50 flex w-full justify-center pt-6 pb-0">
            <div
                className="mx-auto flex w-full max-w-[768px] items-center justify-between gap-4 rounded-full border border-white/40 bg-white/55 py-3 pl-5 pr-3 shadow-[0_1px_2px_rgba(15,19,22,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-xl backdrop-saturate-150 min-sm:max-lg:pl-8 min-sm:max-lg:pr-8 max-sm:mx-4 max-sm:max-w-none max-[480px]:py-2 max-[480px]:pl-3 max-[480px]:pr-2"
                style={plain ? {
                    border: 0,
                    background: "transparent",
                    boxShadow: "none",
                    backdropFilter: "none",
                    WebkitBackdropFilter: "none",
                } : { WebkitBackdropFilter: "saturate(150%) blur(24px)" }}
            >
                <a
                    href="/"
                    className="flex min-w-0 items-center gap-3 outline-brand focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{ unicodeBidi: "isolate" }}
                >
                    <QumBrand size={40} />
                    <span className="text-xl font-semibold leading-[30px] text-[color:#2c363f]">
                        {copy.homeV2.wordmark}{" "}
                        <span className="font-normal" lang="ar" style={{ unicodeBidi: "isolate" }}>
                            {copy.homeV2.wordmarkParenthetical}
                        </span>
                    </span>
                </a>
                <div className="flex items-center gap-4 max-[480px]:gap-2">
                    {LANGUAGE_TOGGLE_ENABLED ? (
                        <button
                            type="button"
                            onClick={toggle}
                            aria-label={copy.nav.toggleAria}
                            className={navPillCls}
                            style={pillWash}
                        >
                            <FillInOverlay />
                            <img src="/assets/figma/translate-02.svg" alt="" className="relative size-5" />
                            <span className="relative">{lang === "en" ? copy.homeV2.langShort : "EN"}</span>
                        </button>
                    ) : null}
                    {APP_STORE_URL ? (
                        <a href={APP_STORE_URL} className={navPillCls} style={pillWash}>
                            <FillInOverlay />
                            <img src="/assets/figma/apple-secondary.svg" alt="" className="relative size-5" />
                            <span className="relative max-[480px]:hidden">{copy.homeV2.downloadCTAShort}</span>
                        </a>
                    ) : (
                        <span role="status" className={navPillCls} style={pillWash}>
                            <FillInOverlay />
                            <img src="/assets/figma/apple-secondary.svg" alt="" className="relative size-5" />
                            <span className="relative max-[480px]:hidden">{copy.homeV2.downloadCTAShort}</span>
                        </span>
                    )}
                </div>
            </div>
        </header>
    );
}
