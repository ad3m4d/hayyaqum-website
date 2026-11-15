import { FooterLink } from "@/components/marketing/footer-link";
import { useLang } from "@/providers/language-provider";

export function FooterLinks() {
    const { copy, lang } = useLang();
    const arabic = lang === "ar";

    return (
        <nav aria-label={copy.footer.legalAria} className="flex items-center gap-2">
            <FooterLink href="/about">{arabic ? "عن Qum" : "About"}</FooterLink>
            <img src="/assets/figma/dot.svg" alt="" className="size-1" aria-hidden />
            <FooterLink href="/faqs">{arabic ? "أسئلة شائعة" : "FAQs"}</FooterLink>
            <img src="/assets/figma/dot.svg" alt="" className="size-1" aria-hidden />
            <FooterLink href="/privacy">{arabic ? "الخصوصية" : "Privacy"}</FooterLink>
            <img src="/assets/figma/dot.svg" alt="" className="size-1" aria-hidden />
            <FooterLink href="/terms">{arabic ? "الشروط" : "Terms"}</FooterLink>
        </nav>
    );
}
