import { type PropsWithChildren } from "react";
import { SiteFooter, type SiteFooterVariant } from "@/components/marketing/site-footer";
import { SiteNav } from "@/components/marketing/site-nav";

export function SiteLayout({ children, footer = "full" }: PropsWithChildren<{ footer?: SiteFooterVariant }>) {
    return (
        <div className="flex min-h-dvh w-full max-w-full flex-col items-center overflow-x-clip bg-[#fbfcfc]">
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-[#fbfcfc] focus:px-4 focus:py-2 focus:text-md focus:font-semibold focus:text-[#2c363f] focus:outline-2 focus:outline-offset-2 focus:outline-brand"
            >
                Skip to content
            </a>
            <SiteNav />
            <main id="main" className="w-full min-w-0">
                {children}
            </main>
            <SiteFooter variant={footer} />
        </div>
    );
}
