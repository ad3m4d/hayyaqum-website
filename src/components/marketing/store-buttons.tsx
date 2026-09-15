import { Button } from "@/components/base/buttons/button";
import { AppleLogo } from "@/components/foundations/apple-logo";
import { APP_STORE_URL } from "@/data/site";
import { cx } from "@/utils/cx";

export function NavStoreButton() {
    return (
        <Button
            href={APP_STORE_URL}
            color="secondary"
            size="md"
            iconLeading={<AppleLogo data-icon="leading" />}
            aria-label="Mac App Store"
            className="h-10 shrink-0 rounded-full bg-transparent px-4 pl-3 font-semibold text-brand-600 !shadow-[0_1px_2px_rgba(0,0,0,0.05)] ring-brand-200 hover:bg-transparent hover:text-brand-700 hover:ring-brand-300 before:hidden *:data-icon:size-5 *:data-icon:text-current hover:*:data-icon:text-current"
        >
            <span className="max-[480px]:hidden">Mac App Store</span>
            <span className="hidden max-[480px]:inline">Download</span>
        </Button>
    );
}

export function DownloadStoreButton({ className }: { className?: string }) {
    return (
        <Button
            href={APP_STORE_URL}
            color="primary"
            size="xl"
            iconLeading={<AppleLogo data-icon="leading" />}
            className={cx(
                "h-[52px] rounded-full px-4 pl-3 text-lg font-semibold before:rounded-full max-md:h-12 max-md:text-md max-[480px]:w-full *:data-icon:size-6 *:data-icon:text-white hover:*:data-icon:text-white",
                className,
            )}
        >
            Download on the Mac App Store
        </Button>
    );
}
