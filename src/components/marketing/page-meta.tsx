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

        const ogImageUrl = `${SITE_ORIGIN}/assets/og-image.png`;
        const ogImageAlt =
            "A MacBook notch opens into the Qum panel: countdown and the five prayers for the day, with Qibla bearing. Tagline: Prayer, in the notch of your Mac.";

        const metaProperty = (property: string, content: string) => {
            const node = ensure(`meta[property="${property}"]`, () => {
                const meta = document.createElement("meta");
                meta.setAttribute("property", property);
                return meta;
            });
            node.setAttribute("content", content);
        };

        const metaName = (name: string, content: string) => {
            const node = ensure(`meta[name="${name}"]`, () => {
                const meta = document.createElement("meta");
                meta.setAttribute("name", name);
                return meta;
            });
            node.setAttribute("content", content);
        };

        metaProperty("og:image", ogImageUrl);
        metaProperty("og:image:secure_url", ogImageUrl);
        metaProperty("og:image:type", "image/png");
        metaProperty("og:image:width", "1200");
        metaProperty("og:image:height", "630");
        metaProperty("og:image:alt", ogImageAlt);

        metaName("twitter:card", "summary_large_image");
        metaName("twitter:title", title);
        metaName("twitter:description", description);
        metaName("twitter:image", ogImageUrl);
        metaName("twitter:image:alt", ogImageAlt);
    }, [canonical, description, title]);

    return null;
}
