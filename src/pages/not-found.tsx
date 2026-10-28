import { Button } from "@/components/base/buttons/button";
import { PageMeta } from "@/components/marketing/page-meta";
import { SiteLayout } from "@/components/marketing/site-layout";
import { pageMeta } from "@/data/seo";

const recoveryLinkClassName =
    "min-h-7 font-normal text-[#1c6b7d] hover:font-semibold hover:text-brand-700 max-[480px]:min-h-11 *:data-text:no-underline hover:*:data-text:underline hover:*:data-text:decoration-brand-700 hover:*:data-text:decoration-from-font";

export function NotFound() {
    return (
        <SiteLayout footer="legal">
            <PageMeta {...pageMeta.notFound} />
            <section className="relative flex w-full flex-1 flex-col items-center justify-center overflow-hidden px-20 py-20 min-[769px]:max-xl:px-12 max-md:py-16 max-[480px]:px-5 max-[480px]:py-12">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-[19.78%_10.35%_19.78%_10.28%] z-0 select-none max-md:inset-x-0 max-md:inset-y-[22%]"
                >
                    <img
                        src="/assets/404-watermark.svg"
                        width={1143}
                        height={498}
                        alt=""
                        className="mx-auto block h-full w-full max-w-none object-contain"
                    />
                </div>

                <div className="relative z-10 flex w-full max-w-[1024px] flex-col items-center gap-6 px-8 text-center max-[480px]:gap-4 max-[480px]:px-0">
                    <h1 className="max-w-[768px] text-display-xl font-bold tracking-[-1.2px] text-[#232b32] max-md:text-display-lg max-md:tracking-[-0.96px] max-[480px]:text-display-md max-[480px]:font-semibold max-[480px]:tracking-[-0.72px]">
                        This page isn’t here
                    </h1>
                    <p className="max-w-[640px] text-display-xs font-normal text-[#606766] max-[480px]:text-lg">
                        There’s nothing at this address on Qum’s site.
                    </p>
                    <nav aria-label="Continue" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-2 max-[480px]:flex-col max-[480px]:gap-3">
                        <Button href="/" color="link-color" size="lg" className={recoveryLinkClassName}>
                            Home
                        </Button>
                        <Button href="/about" color="link-color" size="lg" className={recoveryLinkClassName}>
                            What Qum is
                        </Button>
                        <Button href="/privacy" color="link-color" size="lg" className={recoveryLinkClassName}>
                            Privacy
                        </Button>
                        <Button href="/terms" color="link-color" size="lg" className={recoveryLinkClassName}>
                            Terms
                        </Button>
                    </nav>
                </div>
            </section>
        </SiteLayout>
    );
}
