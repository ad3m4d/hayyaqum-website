import { PageMeta } from "@/components/marketing/page-meta";
import { QumBrand } from "@/components/marketing/qum-brand";
import { SiteLayout } from "@/components/marketing/site-layout";
import { APP_STORE_URL } from "@/data/site";
import { pageMeta } from "@/data/seo";

/** Figma 874:38554 (desktop), 922:57468 (tablet). */
export function NotFound() {
    const buttonClassName = "inline-flex h-[52px] items-center justify-center gap-2.5 rounded-full bg-[#258ea6] px-8 text-lg font-semibold leading-7 text-[#fbfcfc] shadow-[0_1px_2px_#0000000d,inset_0_-2px_0_#0000000d,inset_0_0_0_1px_#0000002e] hover:bg-[#1e7285] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#258ea6]";
    const buttonContent = <><img src="/assets/figma/apple-primary.svg" alt="" className="size-6" /><span>Go to Mac App Store</span></>;
    return (
        <SiteLayout footer="legal" background="plain">
            <PageMeta {...pageMeta.notFound} />
            <section className="relative flex w-full flex-1 items-center justify-center overflow-hidden py-20 max-sm:px-8 max-sm:py-12">
                <img
                    src="/assets/404-watermark.svg"
                    width={1143}
                    height={498}
                    alt=""
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-1/2 w-[calc(100%-64px)] max-w-[1143px] -translate-x-1/2 -translate-y-1/2 select-none max-lg:w-full max-sm:w-[400px] max-sm:max-w-none max-sm:h-[248px] max-sm:object-fill"
                />
                <div className="relative flex w-full max-w-[768px] flex-col items-center gap-8 text-center">
                    <QumBrand size={96} className="max-sm:size-16" />
                    <div className="flex w-full flex-col items-center gap-4 px-8 max-sm:px-0">
                        <h1 className="w-full max-w-[600px] text-[48px] font-bold leading-[60px] tracking-[-0.96px] text-[#232b32] max-sm:text-[36px] max-sm:leading-[44px] max-sm:font-semibold max-sm:tracking-[-0.72px]">
                            Oops! Looks like you've hit a dead end!
                        </h1>
                        <p className="w-full max-w-[600px] text-[24px] font-normal leading-[32px] text-[#808988] max-sm:text-[20px] max-sm:leading-[30px]">
                            The page you were searching for has vanished into thin air. Why not click below and head over to the Mac App Store? It's just a click away!
                        </p>
                    </div>
                    <div className="flex h-[68px] items-end justify-center max-sm:w-full max-sm:[&>*]:w-full">
                        {APP_STORE_URL ? <a href={APP_STORE_URL} className={buttonClassName}>{buttonContent}</a> : <span role="status" className={buttonClassName}>{buttonContent}</span>}
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
