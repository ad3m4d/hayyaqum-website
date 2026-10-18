import { Route, Routes } from "react-router";
import { AboutScreen } from "@/pages/about-screen";
import { HomeScreen } from "@/pages/home-screen";
import { NotFound } from "@/pages/not-found";
import { PrivacyScreen } from "@/pages/privacy-screen";
import { RouteProvider } from "@/providers/router-provider";
import { ScrollToTop } from "@/providers/scroll-to-top";
import { ThemeProvider } from "@/providers/theme-provider";

export function App() {
    return (
        <ThemeProvider defaultTheme="light">
            <RouteProvider>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/about" element={<AboutScreen />} />
                    <Route path="/privacy" element={<PrivacyScreen />} />
                    <Route path="/privacy.html" element={<PrivacyScreen />} />
                    <Route path="/404" element={<NotFound />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </RouteProvider>
        </ThemeProvider>
    );
}
