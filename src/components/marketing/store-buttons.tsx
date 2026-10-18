import { Button } from "@/components/base/buttons/button";
import { APP_STORE_URL } from "@/data/site";
import { cx } from "@/utils/cx";

export function NavStoreButton() {
    if (!APP_STORE_URL) {
        return (
            <Button
                color="secondary"
                size="md"
                isDisabled
                className="h-11 shrink-0 rounded-full bg-transparent px-4 font-semibold text-brand-800 !shadow-[0_1px_2px_rgba(0,0,0,0.05)] ring-brand-200 before:hidden disabled:!cursor-default disabled:!opacity-100"
            >
                Coming soon
            </Button>
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
    const label = APP_STORE_URL ? "Download on the Mac App Store" : "Coming to the Mac App Store";

    return (
        <Button
            href={APP_STORE_URL ?? undefined}
            color="primary"
            size="xl"
            isDisabled={!APP_STORE_URL}
            className={cx(
                "h-[52px] rounded-full px-5 text-lg font-semibold before:rounded-full max-md:h-12 max-md:text-md max-[480px]:w-full disabled:!cursor-default disabled:!opacity-100",
                className,
            )}
        >
            {label}
        </Button>
    );
}
