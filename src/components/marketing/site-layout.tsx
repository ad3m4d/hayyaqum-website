import { type PropsWithChildren } from "react";
import { SiteFooter, type SiteFooterVariant } from "@/components/marketing/site-footer";
import { SiteNav } from "@/components/marketing/site-nav";

export function SiteLayout({ children, footer = "full" }: PropsWithChildren<{ footer?: SiteFooterVariant }>) {
    return (
        <div className="flex min-h-dvh w-full max-w-full flex-col items-center overflow-x-clip bg-[#fbfcfc]">
            <SiteNav />
            {children}
            <SiteFooter variant={footer} />
        </div>
    );
}
