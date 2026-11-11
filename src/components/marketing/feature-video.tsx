import { forwardRef, useEffect, useRef, useState, type ForwardedRef } from "react";
import type { FeatureV2Id } from "@/data/i18n";
import { useLang } from "@/providers/language-provider";

type Props = {
    id: FeatureV2Id;
    label: string;
};

/**
 * `<video>` only. The outer card container owns hover-to-play by calling
 * play()/pause() through the forwarded ref. Video fills its container
 * (height + width, cropped to 1024:480 aspect by the card).
 *
 * EN ships .webm + .mp4; AR ships .mp4 only (no .webm encodes exist).
 */
export const FeatureVideo = forwardRef(function FeatureVideo(
    { id, label }: Props,
    forwardedRef: ForwardedRef<HTMLVideoElement>,
) {
    const { lang } = useLang();
    const localRef = useRef<HTMLVideoElement | null>(null);
    const setRef = (node: HTMLVideoElement | null) => {
        localRef.current = node;
        if (typeof forwardedRef === "function") forwardedRef(node);
        else if (forwardedRef) forwardedRef.current = node;
    };
    const [, setReduced] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const sync = () => setReduced(mq.matches);
        sync();
        mq.addEventListener("change", sync);
        return () => mq.removeEventListener("change", sync);
    }, []);

    // Reload when language changes so the correct track is used.
    useEffect(() => {
        const el = localRef.current;
        if (!el) return;
        el.load();
    }, [lang]);

    // Viewport-triggered preload. We ship preload="none" so the five demos
    // cost zero bytes at page load; when a card nears the viewport (200px
    // rootMargin) we flip to preload="auto" and call load() so the first
    // buffer is already warm by the time the cursor reaches it. Without
    // this, first hover pays the full fetch-and-buffer cost (~hundreds of
    // ms to seconds over real networks; the WebMs are 4.6–10 MB each).
    useEffect(() => {
        const el = localRef.current;
        if (!el) return;
        const io = new IntersectionObserver(
            (entries) => {
                for (const e of entries) {
                    if (e.isIntersecting) {
                        el.preload = "auto";
                        el.load();
                        io.unobserve(e.target);
                    }
                }
            },
            { rootMargin: "200px 0px" },
        );
        io.observe(el);
        return () => io.disconnect();
    }, [lang]);

    const webm = `/videos/${id}-${lang}.webm`;

    return (
        <video
            ref={setRef}
            className="block size-full bg-transparent object-cover [transform:translateZ(0)]"
            aria-label={label}
            muted
            playsInline
            loop
            preload="none"
        >
            <source src={webm} type="video/webm" />
        </video>
    );
});
