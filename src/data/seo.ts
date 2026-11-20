import { CALCULATION_METHODS, features, SITE_ORIGIN } from "@/data/site";

export type PageMeta = {
    path: string;
    title: string;
    description: string;
};

export const pageMeta = {
    home: {
        path: "/",
        title: "Qum · Prayer times in the MacBook notch",
        description: "Prayer times, Qibla direction, silent reminders, and a private prayer log in your MacBook notch. Designed for MacBooks with a notched built-in display.",
    },
    about: {
        path: "/about",
        title: "What Qum is · Qum",
        description: "Learn about Qum’s prayer times, sun-calibrated Qibla direction, local prayer log, and supported MacBook models.",
    },
    faqs: {
        path: "/faqs",
        title: "Frequently asked questions · Qum",
        description: "Answers about Qum’s silent prayer reminders, check-ins, qada, Qibla, supported Macs, location, privacy, and local prayer history.",
    },
    privacy: {
        path: "/privacy",
        title: "Privacy Policy · Qum",
        description: "How Qum handles local prayer history, Apple location and place searches, notifications, website preferences, support messages and data retention.",
    },
    terms: {
        path: "/terms",
        title: "Terms of Use · Qum",
        description: "Read the terms for using Qum, including calculation accuracy, optional Location Services, third-party services, and privacy.",
    },
    notFound: {
        path: "/404",
        title: "Page not found · Qum",
        description: "We can’t find this page. Return to the Qum homepage.",
    },
} as const satisfies Record<string, PageMeta>;

export const prerenderPaths = ["/", "/about", "/faqs", "/privacy", "/privacy.html", "/terms"] as const;

export function canonicalUrl(path: string) {
    if (path === "/privacy.html") return `${SITE_ORIGIN}/privacy`;
    if (path === "/") return `${SITE_ORIGIN}/`;
    return `${SITE_ORIGIN}${path}`;
}

export function metaForPath(path: string): PageMeta {
    if (path === "/about") return pageMeta.about;
    if (path === "/faqs") return pageMeta.faqs;
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
        softwareRequirements: "macOS 14.6 or later and a MacBook with a built-in notch: MacBook Pro (2021 or later) or MacBook Air (2022 or later)",
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
