import { CALCULATION_METHODS, features, SITE_ORIGIN } from "@/data/site";

export type PageMeta = {
    path: string;
    title: string;
    description: string;
};

export const pageMeta = {
    home: {
        path: "/",
        title: "Qum — Prayer times in the MacBook notch",
        description: "Qum is a Mac app that puts the next prayer, the Qibla, and the adhan in the MacBook notch. No account, no ads, no tracking. Requires a MacBook with a notch.",
    },
    about: {
        path: "/about",
        title: "What Qum is — Qum",
        description: "Qum is a prayer-times Mac app for notched MacBooks. It is not an iPhone app and not a menu-bar timer. Prayer times and Qibla stay on this Mac.",
    },
    privacy: {
        path: "/privacy",
        title: "Privacy Policy — Qum",
        description: "Qum does not require an account. Prayer times, the Qibla, the log, and settings stay on this Mac. This site does not set cookies.",
    },
    terms: {
        path: "/terms",
        title: "Terms of Use — Qum",
        description: "Qum is a personal Mac utility for prayer times and Qibla. It is not a religious authority. Location is used to calculate times for where this Mac is.",
    },
    notFound: {
        path: "/404",
        title: "This page isn’t here — Qum",
        description: "There’s nothing at this address on Qum’s site.",
    },
} as const satisfies Record<string, PageMeta>;

export const prerenderPaths = ["/", "/about", "/privacy", "/privacy.html", "/terms"] as const;

export function canonicalUrl(path: string) {
    if (path === "/privacy.html") return `${SITE_ORIGIN}/privacy`;
    if (path === "/") return `${SITE_ORIGIN}/`;
    return `${SITE_ORIGIN}${path}`;
}

export function metaForPath(path: string): PageMeta {
    if (path === "/about") return pageMeta.about;
    if (path === "/privacy" || path === "/privacy.html") return pageMeta.privacy;
    if (path === "/terms") return pageMeta.terms;
    if (path === "/404") return pageMeta.notFound;
    return pageMeta.home;
}

export function jsonLdForPath(path: string): object | null {
    const canonical = canonicalUrl(path);
    const software = {
        "@type": "SoftwareApplication",
        "@id": `${SITE_ORIGIN}/#app`,
        name: "Qum",
        alternateName: ["Hayya Qum", "هَيَّا قُمْ"],
        applicationCategory: "LifestyleApplication",
        operatingSystem: "macOS",
        description: pageMeta.home.description,
        url: `${SITE_ORIGIN}/`,
        featureList: features.map((item) => item.label),
        softwareRequirements: "MacBook Pro (2021 or later) or MacBook Air (2022 or later), with a notch",
        creator: { "@id": `${SITE_ORIGIN}/#org` },
    };

    if (path === "/" ) {
        return {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "Organization",
                    "@id": `${SITE_ORIGIN}/#org`,
                    name: "Qum",
                    url: `${SITE_ORIGIN}/`,
                    email: "hello@hayyaqum.com",
                    logo: `${SITE_ORIGIN}/assets/icon-brand.png`,
                },
                {
                    "@type": "WebSite",
                    "@id": `${SITE_ORIGIN}/#site`,
                    name: "Qum",
                    url: `${SITE_ORIGIN}/`,
                    description: pageMeta.home.description,
                    publisher: { "@id": `${SITE_ORIGIN}/#org` },
                },
                software,
            ],
        };
    }

    if (path === "/about") {
        return {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: pageMeta.about.title,
            url: canonical,
            description: pageMeta.about.description,
            about: software,
            mentions: CALCULATION_METHODS.map((name) => ({ "@type": "Thing", name })),
        };
    }

    if (path === "/privacy" || path === "/privacy.html") {
        return {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: pageMeta.privacy.title,
            url: canonical,
            description: pageMeta.privacy.description,
            about: { "@id": `${SITE_ORIGIN}/#app` },
        };
    }

    if (path === "/terms") {
        return {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: pageMeta.terms.title,
            url: canonical,
            description: pageMeta.terms.description,
            about: { "@id": `${SITE_ORIGIN}/#app` },
        };
    }

    return null;
}
