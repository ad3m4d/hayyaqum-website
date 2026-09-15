import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { copyFileSync, mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        {
            name: "privacy-html",
            closeBundle() {
                const index = path.resolve(rootDir, "dist/index.html");
                copyFileSync(index, path.resolve(rootDir, "dist/privacy.html"));
                mkdirSync(path.resolve(rootDir, "dist/privacy"), { recursive: true });
                copyFileSync(index, path.resolve(rootDir, "dist/privacy/index.html"));
            },
        },
    ],
    resolve: {
        alias: {
            "@": path.resolve(rootDir, "./src"),
        },
    },
});
