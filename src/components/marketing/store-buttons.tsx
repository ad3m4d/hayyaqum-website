import { Button } from "@/components/base/buttons/button";
import { APP_STORE_URL } from "@/data/site";
import { cx } from "@/utils/cx";

const comingSoonNavClassName =
    "inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-transparent px-4 text-md font-semibold text-brand-800/70 ring-1 ring-inset ring-brand-200/80";

const comingSoonDownloadClassName =
    "inline-flex h-[52px] items-center justify-center rounded-full bg-brand-600/55 px-5 text-lg font-semibold text-white max-md:h-12 max-md:text-md max-[480px]:w-full";

export function NavStoreButton() {
    if (!APP_STORE_URL) {
        return (
            <span role="status" className={comingSoonNavClassName}>
                Coming soon
            </span>
        );
    }

    return (
        <Button
            href={APP_STORE_URL}
            color="secondary"
            size="md"
            aria-label="Mac App Store"
            className="h-11 shrink-0 rounded-full bg-transparent px-4 font-semibold text-brand-800 !shadow-[0_1px_2px_rgba(0,0,0,0.05)] ring-brand-200 hover:bg-transparent hover:text-brand-900 hover:ring-brand-300 before:hidden"
        >
            <span className="max-[480px]:hidden">Mac App Store</span>
            <span className="hidden max-[480px]:inline">Download</span>
        </Button>
    );
}

export function DownloadStoreButton({ className }: { className?: string }) {
    if (!APP_STORE_URL) {
        return (
            <span role="status" className={cx(comingSoonDownloadClassName, className)}>
                Coming to the Mac App Store
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
            Download on the Mac App Store
        </Button>
    );
}
