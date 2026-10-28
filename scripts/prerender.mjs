import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(rootDir, "dist");
const serverEntry = path.join(distDir, "server", "entry-server.js");

const { render } = await import(pathToFileURL(serverEntry).href);
const template = readFileSync(path.join(distDir, "index.html"), "utf8");

const routes = [
    { url: "/", file: "index.html" },
    { url: "/about", file: "about/index.html" },
    { url: "/about", file: "about.html" },
    { url: "/privacy", file: "privacy/index.html" },
    { url: "/privacy.html", file: "privacy.html" },
    { url: "/terms", file: "terms/index.html" },
    { url: "/404", file: "404.html" },
];

function setMeta(html, { title, description, canonical, jsonLd }) {
    let next = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);

    next = next.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeAttr(description)}" />`);

    const ogImage = "https://hayyaqum.com/assets/og-image.png";
    const ogImageAlt =
        "A MacBook notch opens into the Qum panel: countdown and the five prayers for the day, with Qibla bearing. Tagline: Prayer, in the notch of your Mac.";

    const extra = [
        `<link rel="canonical" href="${escapeAttr(canonical)}" />`,
        `<meta property="og:type" content="website" />`,
        `<meta property="og:site_name" content="Qum" />`,
        `<meta property="og:locale" content="en_US" />`,
        `<meta property="og:title" content="${escapeAttr(title)}" />`,
        `<meta property="og:description" content="${escapeAttr(description)}" />`,
        `<meta property="og:url" content="${escapeAttr(canonical)}" />`,
        `<meta property="og:image" content="${ogImage}" />`,
        `<meta property="og:image:secure_url" content="${ogImage}" />`,
        `<meta property="og:image:type" content="image/png" />`,
        `<meta property="og:image:width" content="1200" />`,
        `<meta property="og:image:height" content="630" />`,
        `<meta property="og:image:alt" content="${escapeAttr(ogImageAlt)}" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:title" content="${escapeAttr(title)}" />`,
        `<meta name="twitter:description" content="${escapeAttr(description)}" />`,
        `<meta name="twitter:image" content="${ogImage}" />`,
        `<meta name="twitter:image:alt" content="${escapeAttr(ogImageAlt)}" />`,
        jsonLd
            ? `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</script>`
            : "",
    ]
        .filter(Boolean)
        .join("\n        ");

    next = next.replace("</head>", `        ${extra}\n    </head>`);
    return next;
}

function escapeHtml(value) {
    return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function escapeAttr(value) {
    return escapeHtml(value).replaceAll('"', "&quot;");
}

function canonicalFor(url) {
    if (url === "/privacy.html") return "https://hayyaqum.com/privacy";
    if (url === "/") return "https://hayyaqum.com/";
    return `https://hayyaqum.com${url}`;
}

for (const route of routes) {
    const rendered = render(route.url);
    let page = template.replace('<div id="root"></div>', `<div id="root">${rendered.html}</div>`);
    page = setMeta(page, {
        title: rendered.title,
        description: rendered.description,
        canonical: canonicalFor(route.url),
        jsonLd: rendered.jsonLd,
    });

    const out = path.join(distDir, route.file);
    mkdirSync(path.dirname(out), { recursive: true });
    writeFileSync(out, page);
    console.log(`prerendered ${route.url} -> ${route.file} (${page.length} bytes)`);
}

rmSync(path.join(distDir, "server"), { recursive: true, force: true });
