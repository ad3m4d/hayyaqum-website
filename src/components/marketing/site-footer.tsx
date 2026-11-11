import { FooterLink } from "@/components/marketing/footer-link";
import { useLang } from "@/providers/language-provider";

export type SiteFooterVariant = "full" | "legal" | "minimal" | "none";

/**
 * Site-wide footer from Figma 874:38763.
 *
 *   outer:   flex flex-col items-center gap-64 px-80 py-40 w-full
 *   content: flex items-center justify-between w-768 px-32
 *     left:  "Copyright © 2026 Qum. All rights reserved." 14/20 #a1acaa
 *     right: FooterLink · 4px dot · FooterLink · 4px dot · FooterLink
 *
 * The home page replaces this with its own in-bookend copyright row (passes
 * `footer="none"` to SiteLayout). About / privacy / terms render this.
 */
export function SiteFooter(_props: { variant?: SiteFooterVariant }) {
    const { copy } = useLang();
    const v2 = copy.homeV2.footer;

    return (
        <footer className="flex w-full flex-col items-center gap-16 px-20 min-sm:max-lg:px-0 py-10 max-sm:py-5 max-sm:px-8">
            <div
                className="flex w-full max-w-[768px] items-center justify-between gap-6 px-8 min-sm:max-lg:flex-wrap text-sm leading-5 max-sm:flex-col max-sm:items-start max-sm:gap-8 max-sm:px-0 max-sm:text-left"
                style={{ color: "#a1acaa" }}
            >
                <p>{v2.copyright}</p>
                <nav aria-label={copy.footer.legalAria} className="flex items-center gap-2">
                    <FooterLink href="/about">{v2.about}</FooterLink>
                    <img src="/assets/figma/dot.svg" alt="" className="size-1" aria-hidden />
                    <FooterLink href="/privacy">{v2.privacy}</FooterLink>
                    <img src="/assets/figma/dot.svg" alt="" className="size-1" aria-hidden />
                    <FooterLink href="/terms">{v2.terms}</FooterLink>
                </nav>
            </div>
        </footer>
    );
}
