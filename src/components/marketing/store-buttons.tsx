import { Button } from "@/components/base/buttons/button";
import { useLang } from "@/providers/language-provider";
import { APP_STORE_URL } from "@/data/site";
import { cx } from "@/utils/cx";

const comingSoonNavClassName =
    "inline-flex h-9 shrink-0 items-center justify-center rounded-full bg-transparent px-3 text-sm font-semibold text-brand-800/70 ring-1 ring-inset ring-brand-200/80";

const comingSoonDownloadClassName =
    "inline-flex h-[52px] items-center justify-center rounded-full bg-brand-600/55 px-5 text-lg font-semibold text-white max-md:h-12 max-md:text-md max-[480px]:w-full";

export function NavStoreButton() {
    const { copy } = useLang();
    if (!APP_STORE_URL) {
        return (
            <span role="status" className={comingSoonNavClassName}>
                {copy.nav.comingSoon}
            </span>
        );
    }

    return (
        <Button
            href={APP_STORE_URL}
            color="secondary"
            size="md"
            aria-label={copy.nav.macAppStore}
            className="h-9 shrink-0 rounded-full bg-transparent px-3 text-sm font-semibold text-brand-800 !shadow-[0_1px_2px_rgba(0,0,0,0.05)] ring-brand-200 hover:bg-transparent hover:text-brand-900 hover:ring-brand-300 before:hidden"
        >
            <span className="max-[480px]:hidden">{copy.nav.macAppStore}</span>
            <span className="hidden max-[480px]:inline">{copy.nav.downloadLabelShort}</span>
        </Button>
    );
}

export function DownloadStoreButton({ className }: { className?: string }) {
    const { copy } = useLang();
    if (!APP_STORE_URL) {
        return (
            <span role="status" className={cx(comingSoonDownloadClassName, className)}>
                {copy.nav.comingSoon}
            </span>
        );
    }

    return (
        <Button
            href={APP_STORE_URL}
            color="primary"
            size="xl"
            className={cx("h-[52px] rounded-full px-5 text-lg font-semibold before:rounded-full max-md:h-12 max-md:text-md max-[480px]:w-full", className)}
        >
            {copy.nav.downloadLabel}
        </Button>
    );
}
