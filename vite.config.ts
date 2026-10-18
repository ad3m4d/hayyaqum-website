import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    appType: "mpa",
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(rootDir, "./src"),
        },
    },
});
