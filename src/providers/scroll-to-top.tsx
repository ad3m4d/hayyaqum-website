import { useLayoutEffect } from "react";
import { useLocation } from "react-router";

export function ScrollToTop() {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        if ("scrollRestoration" in history) {
            history.scrollRestoration = "manual";
        }

        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, [pathname]);

    return null;
}
