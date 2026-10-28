import { Route, Routes } from "react-router";
import { AboutScreen } from "@/pages/about-screen";
import { HomeScreen } from "@/pages/home-screen";
import { NotFound } from "@/pages/not-found";
import { PrivacyScreen } from "@/pages/privacy-screen";
import { TermsScreen } from "@/pages/terms-screen";
import { RouteProvider } from "@/providers/router-provider";
import { ScrollToTop } from "@/providers/scroll-to-top";
import { ThemeProvider } from "@/providers/theme-provider";

/** Marketing site is light-only; surfaces use fixed brand fills, not system dark. */
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
                    <Route path="/terms" element={<TermsScreen />} />
                    <Route path="/404" element={<NotFound />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </RouteProvider>
        </ThemeProvider>
    );
}
