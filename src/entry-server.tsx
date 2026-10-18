import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { App } from "@/app";
import { jsonLdForPath, metaForPath } from "@/data/seo";

export function render(url: string) {
    const html = renderToString(
        <StaticRouter location={url === "/404" ? "/missing-page-for-prerender" : url}>
            <App />
        </StaticRouter>,
    );

    return {
        html,
        jsonLd: jsonLdForPath(url),
        ...metaForPath(url),
    };
}
