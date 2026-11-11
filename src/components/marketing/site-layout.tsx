import { type PropsWithChildren } from "react";
import { SiteFooter, type SiteFooterVariant } from "@/components/marketing/site-footer";
import { SiteNav } from "@/components/marketing/site-nav";
import { useLang } from "@/providers/language-provider";

export function SiteLayout({ children, footer = "full", background = "gradient" }: PropsWithChildren<{ footer?: SiteFooterVariant; background?: "gradient" | "plain" }>) {
    const { copy } = useLang();
    return (
        <div
            className="flex min-h-dvh w-full max-w-full flex-col items-center overflow-clip"
            style={{
                /*
                 * Parallax backdrop — matches the pasted recipe:
                 *   background-image: url(...);
                 *   background-attachment: fixed;
                 *   background-position: center;
                 *   background-repeat: no-repeat;
                 *   background-size: cover;
                 *
                 * No background.jpg in the repo yet, so the image is a subtle
                 * brand-tinted gradient stack. To swap in a real photo later,
                 * replace the first `linear-gradient(...)` block with
                 * `url("/your-image.jpg")`.
                 *
                 * iOS Safari ignores `background-attachment: fixed` and renders
                 * it as `scroll` — accepted trade-off for this technique.
                 */
                backgroundColor: "#fbfcfc",
                backgroundImage: background === "plain" ? "none" :
                    "radial-gradient(60% 40% at 15% 20%, rgba(222, 238, 242, 0.7), transparent 70%), radial-gradient(50% 35% at 85% 70%, rgba(233, 244, 246, 0.55), transparent 70%), linear-gradient(180deg, #fbfcfc 0%, #f6f9f8 100%)",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:start-3 focus:z-50 focus:rounded-full focus:bg-[#fbfcfc] focus:px-4 focus:py-2 focus:text-md focus:font-semibold focus:text-[#2c363f] focus:outline-2 focus:outline-offset-2 focus:outline-brand"
            >
                {copy.aria.skipToContent}
            </a>
            <SiteNav plain={background === "plain"} />
            <main id="main" className="flex w-full min-w-0 flex-1 flex-col">
                {children}
            </main>
            {footer === "none" ? null : <SiteFooter variant={footer} />}
        </div>
    );
}
