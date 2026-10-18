import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig, type Plugin } from "vite";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

/** Serve index.html for app routes in `vite` so the client router can match /404 etc. Production still uses prerendered MPA files. */
function spaFallbackDev(): Plugin {
    return {
        name: "spa-fallback-dev",
        configureServer(server) {
            server.middlewares.use((req, _res, next) => {
                const url = req.url?.split("?")[0] ?? "";
                if (req.method !== "GET" && req.method !== "HEAD") return next();
                if (url.includes(".") || url.startsWith("/@") || url.startsWith("/node_modules") || url.startsWith("/src")) {
                    return next();
                }
                req.url = "/";
                next();
            });
        },
    };
}

export default defineConfig({
    appType: "mpa",
    plugins: [react(), tailwindcss(), spaFallbackDev()],
    resolve: {
        alias: {
            "@": path.resolve(rootDir, "./src"),
        },
    },
});
