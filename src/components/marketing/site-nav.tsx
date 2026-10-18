import { NavStoreButton } from "@/components/marketing/store-buttons";

export function SiteNav() {
    return (
        <header className="w-full max-w-[1440px] px-20 pt-3 min-[769px]:max-xl:px-12 min-[481px]:max-[769px]:px-8 max-[480px]:px-4">
            <div className="mx-auto flex max-w-container min-w-0 items-center justify-between gap-3 rounded-full border border-secondary_alt bg-[#fbfcfc] py-3 pr-3 pl-5 shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
                <a href="/" className="flex min-w-0 items-center gap-2.5 rounded-full text-xl font-semibold text-primary outline-brand focus-visible:outline-2 focus-visible:outline-offset-2" style={{ unicodeBidi: "isolate" }}>
                    <img src="/assets/logomark-nav.png" srcSet="/assets/logomark-nav.png 114w, /assets/icon-brand.png 456w" sizes="32px" width={32} height={32} alt="" className="size-8 shrink-0" />
                    <span>
                        Qum (<span lang="ar">قُمْ</span>)
                    </span>
                </a>
                <NavStoreButton />
            </div>
        </header>
    );
}
