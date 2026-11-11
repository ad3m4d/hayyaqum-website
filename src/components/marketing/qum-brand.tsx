import { useId } from "react";
import brandSvg from "../../../public/assets/figma/qum-brand.svg?raw";

type Props = {
    size?: number;
    className?: string;
    cropToMark?: boolean;
};

/** Render the authored vector at display size, with isolated filter/gradient IDs. */
export function QumBrand({ size = 96, className, cropToMark = false }: Props) {
    const id = useId().replace(/:/g, "");
    const markup = brandSvg
        .replace(/<svg[^>]*>/, "")
        .replace(/<\/svg>\s*$/, "")
        .replace(/id="([^"]+)"/g, (_, name: string) => `id="${id}-${name}"`)
        .replace(/url\(#([^)]+)\)/g, (_, name: string) => `url(#${id}-${name})`);

    return (
        <svg
            width={size}
            height={size}
            viewBox={cropToMark ? "3 2 32 32" : "0 0 38 38"}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
            className={className}
            dangerouslySetInnerHTML={{ __html: markup }}
        />
    );
}
