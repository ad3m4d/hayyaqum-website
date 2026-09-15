import { Features } from "@/components/marketing/features";
import { SiteLayout } from "@/components/marketing/site-layout";
import { DownloadStoreButton } from "@/components/marketing/store-buttons";

export const HomeScreen = () => {
    return (
        <SiteLayout>
            <section className="flex w-full flex-col items-center px-20 py-20 min-[769px]:max-xl:px-12 min-[481px]:max-md:px-20 max-md:py-10 max-[480px]:px-5">
                <div className="flex w-full max-w-container min-w-0 flex-col items-center gap-6 max-[480px]:items-start">
                    <div className="flex w-full max-w-[1024px] items-start gap-10 min-[481px]:max-md:items-center max-md:gap-6 max-[480px]:flex-col max-[480px]:items-start">
                        <div className="flex shrink-0 items-center py-3 min-[481px]:max-md:py-2 max-[480px]:p-0">
                            <img
                                className="size-24 min-[481px]:max-md:size-20 max-[480px]:size-16"
                                src="/assets/logomark-hero.png"
                                width={96}
                                height={96}
                                alt="Qum"
                            />
                        </div>
                        <h1 className="max-w-[702px] text-display-lg font-bold text-primary max-md:max-w-none max-md:text-display-md max-md:font-semibold">
                            Hayya Qum,
                            <br />
                            five times a day, get on your feet.
                        </h1>
                    </div>
                    <p className="w-full max-w-[1024px] text-display-sm font-normal text-secondary min-[481px]:max-md:text-display-xs max-[480px]:text-lg">
                        Qum puts the next prayer, the Qibla, and the adhan in the MacBook notch — so the workday still has salah in it.
                    </p>
                    <div className="flex w-full max-w-[1024px] min-w-0 flex-wrap items-center gap-6 pt-6 max-[480px]:flex-col max-[480px]:items-stretch max-[480px]:pt-0">
                        <DownloadStoreButton />
                        <p className="m-0 min-w-0 max-w-full flex-[1_1_240px] text-md text-tertiary italic max-[480px]:flex-none max-[480px]:w-full">
                            Requires a MacBook with a notch:
                            <span className="max-[480px]:block"> </span>
                            Pro (2021+) or Air (2022+).
                        </p>
                    </div>
                </div>
            </section>
            <Features />
        </SiteLayout>
    );
};
