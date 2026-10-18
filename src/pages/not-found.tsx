import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/base/buttons/button";
import { PageMeta } from "@/components/marketing/page-meta";
import { SiteLayout } from "@/components/marketing/site-layout";
import { pageMeta } from "@/data/seo";

export function NotFound() {
    const goBack = useNavigate();
    const [canBack, setCanBack] = useState(false);

    useEffect(() => {
        try {
            const referrer = document.referrer;
            setCanBack(referrer !== "" && new URL(referrer).origin === window.location.origin);
        } catch {
            setCanBack(false);
        }
    }, []);

    return (
        <SiteLayout footer="legal">
            <PageMeta {...pageMeta.notFound} />
            <section className="flex w-full flex-col items-center px-20 py-20 max-[480px]:px-5 max-[480px]:py-10">
                <div className="flex w-full max-w-[1024px] flex-col items-start gap-8">
                    <div className="flex flex-col gap-3">
                        <p className="text-md font-normal text-[#1e7285]">404</p>
                        <h1 className="text-display-lg font-bold tracking-[-0.96px] text-[#232b32] max-[769px]:text-display-md max-[769px]:font-semibold">
                            This page isn’t here
                        </h1>
                    </div>
                    <p className="text-display-xs font-normal text-[#606766] max-[480px]:text-lg">The address may have moved, or it was never on this site.</p>
                    <div className="flex flex-col-reverse gap-3 sm:flex-row">
                        {canBack ? (
                            <Button color="secondary" size="xl" onClick={() => goBack(-1)}>
                                Back
                            </Button>
                        ) : null}
                        <Button size="xl" href="/">
                            Go home
                        </Button>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
