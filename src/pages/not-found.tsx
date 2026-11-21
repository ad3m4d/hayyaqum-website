import { PageMeta } from "@/components/marketing/page-meta";
import { QumBrand } from "@/components/marketing/qum-brand";
import { SiteLayout } from "@/components/marketing/site-layout";
import { APP_STORE_URL } from "@/data/site";
import { pageMeta } from "@/data/seo";
import { useLang } from "@/providers/language-provider";

/** Figma 874:38562 (desktop), 922:57470 (tablet), 940:70092 (mobile). */
export function NotFound() {
    const { copy } = useLang();
    const buttonClassName = "inline-flex h-[52px] w-[280px] items-center justify-center gap-2.5 rounded-full bg-[#258ea6] px-8 text-lg font-semibold leading-7 text-[#fbfcfc] shadow-[0_1px_2px_#0000000d,inset_0_-2px_0_#0000000d,inset_0_0_0_1px_#0000002e] hover:bg-[#1e7285] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#258ea6]";
    const downloadContent = (
        <>
            <img src="/assets/figma/apple-secondary.svg" alt="" className="size-6 brightness-0 invert" />
            {copy.notFound.action}
        </>
    );
    return (
        <SiteLayout footer="legal" background="plain">
            <PageMeta {...pageMeta.notFound} />
            <section className="relative flex w-full flex-1 items-center justify-center overflow-hidden min-h-[772px] py-20 max-lg:min-h-[836px] max-sm:min-h-[608px] max-sm:py-12">
                <img
                    src="/assets/404-watermark.svg"
                    width={1143}
                    height={498}
                    alt=""
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-1/2 w-[calc(100%-64px)] max-w-[1143px] -translate-x-1/2 -translate-y-1/2 select-none max-lg:w-full max-lg:h-[313.5px] max-lg:object-fill max-sm:w-[400px] max-sm:max-w-none max-sm:h-[248px]"
                />
                <div className="relative flex w-full max-w-[768px] flex-col items-start gap-8 px-8 text-start">
                    <QumBrand size={96} cropToMark className="shrink-0 max-sm:size-16" />
                    <div className="flex w-full flex-col items-start gap-4">
                        <h1 className="w-full max-w-[600px] text-[48px] font-bold leading-[60px] tracking-[-0.96px] text-[#232b32] max-sm:text-[36px] max-sm:leading-[44px] max-sm:font-semibold max-sm:tracking-[-0.72px]">
                            {copy.notFound.title}
                        </h1>
                        <p className="w-full max-w-[600px] text-[24px] font-normal leading-[32px] text-[#808988] max-sm:text-[20px] max-sm:leading-[30px]">
                            {copy.notFound.body}
                        </p>
                    </div>
                    <div className="flex h-[68px] w-full items-end justify-start max-sm:w-full max-sm:[&>*]:w-full">
                        {APP_STORE_URL ? (
                            <a href={APP_STORE_URL} className={buttonClassName}>{downloadContent}</a>
                        ) : (
                            <span role="status" className={buttonClassName}>{downloadContent}</span>
                        )}
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
