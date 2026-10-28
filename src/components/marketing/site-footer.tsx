import { useLocation } from "react-router";
import { Button } from "@/components/base/buttons/button";
import { DownloadStoreButton } from "@/components/marketing/store-buttons";
import { cx } from "@/utils/cx";

export type SiteFooterVariant = "full" | "legal";

const legalLinks = [
    { href: "/about", label: "What Qum is" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Use" },
] as const;

function LegalBar() {
    const { pathname } = useLocation();

    return (
        <div className="flex w-full max-w-container items-center justify-between max-[480px]:flex-col max-[480px]:items-center max-[480px]:gap-6 max-[480px]:text-center">
            <p className="text-sm font-normal text-[#606766]">Copyright © 2026 Qum. All rights reserved.</p>
            <nav aria-label="Legal" className="flex items-center gap-6 max-[480px]:flex-col max-[480px]:gap-3">
                {legalLinks.map((link) => {
                    const isCurrent = pathname === link.href || (link.href === "/privacy" && pathname === "/privacy.html");

                    return (
                        <Button
                            key={link.href}
                            href={link.href}
                            color="link-gray"
                            size="sm"
                            aria-current={isCurrent ? "page" : undefined}
                            className={cx(
                                "min-h-7 max-[480px]:min-h-11 *:data-text:no-underline hover:*:data-text:underline hover:*:data-text:decoration-brand-700 hover:*:data-text:decoration-from-font",
                                isCurrent
                                    ? "font-semibold text-brand-700 hover:text-brand-700"
                                    : "font-normal text-[#606766] hover:font-semibold hover:text-brand-700",
                            )}
                        >
                            {link.label}
                        </Button>
                    );
                })}
            </nav>
        </div>
    );
}

export function SiteFooter({ variant = "full" }: { variant?: SiteFooterVariant }) {
    if (variant === "legal") {
        return (
            <footer className="flex w-full flex-col items-center px-20 pb-10 max-[480px]:px-5">
                <LegalBar />
            </footer>
        );
    }

    return (
        <footer className="flex w-full flex-col items-center gap-16 px-20 pb-10 min-[769px]:max-xl:px-12 min-[481px]:max-md:px-20 max-[480px]:px-5">
            <div className="flex w-full max-w-container flex-col items-center gap-12 text-center">
                <div className="flex flex-col items-center gap-4 text-center">
                    <p className="text-lg font-medium text-primary max-[480px]:max-w-[280px]">Made for workdays that still have salah in them.</p>
                    <p className="text-display-sm font-semibold text-tertiary max-[480px]:max-w-[280px]">
                        Hayya Qum · <span lang="ar">هَيَّا قُمْ</span>
                    </p>
                </div>
                <DownloadStoreButton />
                <p className="text-md text-tertiary italic">
                    No account, no ads, no tracking. Your prayer log stays on your Mac. Location is optional.
                    <br />
                    Requires a MacBook with a notch. MacBook Pro (2021 or later) or MacBook Air (2022 or later).
                </p>
            </div>
            <LegalBar />
        </footer>
    );
}
