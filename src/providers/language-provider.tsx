import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { pickLang, siteCopy, type Lang, type SiteCopy } from "@/data/i18n";

const STORAGE_KEY = "qum.lang";

type LanguageContextValue = {
    lang: Lang;
    copy: SiteCopy;
    setLang: (next: Lang) => void;
    toggle: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

/**
 * Always renders English on the server and during the first client render so
 * hydration matches the prerendered HTML. After mount, read localStorage —
 * falling back to navigator.language — and switch if needed.
 */
/**
 * Translation locked to English while the AR copy is still being finalised.
 * Flip this to true once the AR pass is ready (and re-mount the EN/AR toggle
 * in `site-nav.tsx`). Nothing else needs to change — the rest of the provider
 * keeps the stored-preference and navigator.language detection intact.
 */
const LANGUAGE_TOGGLE_ENABLED = false;

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Lang>("en");

    useEffect(() => {
        if (!LANGUAGE_TOGGLE_ENABLED) return;
        let next: Lang = "en";
        try {
            const stored = window.localStorage.getItem(STORAGE_KEY);
            if (stored === "en" || stored === "ar") {
                next = stored;
            } else {
                next = pickLang(window.navigator.language);
            }
        } catch {
            next = pickLang(window.navigator.language);
        }
        if (next !== "en") setLangState(next);
    }, []);

    useEffect(() => {
        if (typeof document === "undefined") return;
        const root = document.documentElement;
        root.setAttribute("lang", lang);
        root.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    }, [lang]);

    const setLang = useCallback((next: Lang) => {
        setLangState(next);
        try {
            window.localStorage.setItem(STORAGE_KEY, next);
        } catch {
            /* ignore */
        }
    }, []);

    const toggle = useCallback(() => {
        setLang(lang === "ar" ? "en" : "ar");
    }, [lang, setLang]);

    return (
        <LanguageContext.Provider value={{ lang, copy: siteCopy[lang], setLang, toggle }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLang() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLang must be used within LanguageProvider");
    return ctx;
}
