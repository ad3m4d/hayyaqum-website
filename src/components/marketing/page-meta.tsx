import { useEffect } from "react";
import { canonicalUrl, type PageMeta } from "@/data/seo";
import { SITE_ORIGIN } from "@/data/site";

export function PageMeta({ title, description, path }: PageMeta) {
    const canonical = canonicalUrl(path);

    useEffect(() => {
        document.title = title;

        const descriptionTag = document.querySelector('meta[name="description"]');
        if (descriptionTag) descriptionTag.setAttribute("content", description);

        const ensure = (selector: string, create: () => HTMLElement) => {
            const existing = document.head.querySelector(selector);
            if (existing) return existing;
            const node = create();
            document.head.appendChild(node);
            return node;
        };

        const canonicalTag = ensure('link[rel="canonical"]', () => {
            const link = document.createElement("link");
            link.rel = "canonical";
            return link;
        });
        canonicalTag.setAttribute("href", canonical);

        const ogTitle = ensure('meta[property="og:title"]', () => {
            const meta = document.createElement("meta");
            meta.setAttribute("property", "og:title");
            return meta;
        });
        ogTitle.setAttribute("content", title);

        const ogDescription = ensure('meta[property="og:description"]', () => {
            const meta = document.createElement("meta");
            meta.setAttribute("property", "og:description");
            return meta;
        });
        ogDescription.setAttribute("content", description);

        const ogUrl = ensure('meta[property="og:url"]', () => {
            const meta = document.createElement("meta");
            meta.setAttribute("property", "og:url");
            return meta;
        });
        ogUrl.setAttribute("content", canonical);

        const ogImage = ensure('meta[property="og:image"]', () => {
            const meta = document.createElement("meta");
            meta.setAttribute("property", "og:image");
            return meta;
        });
        ogImage.setAttribute("content", `${SITE_ORIGIN}/assets/logomark-hero.png`);
    }, [canonical, description, title]);

    return null;
}
