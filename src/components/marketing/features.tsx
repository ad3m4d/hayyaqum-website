import { useState } from "react";
import { features } from "@/data/site";
import { cx } from "@/utils/cx";

export function Features() {
    const [selected, setSelected] = useState(0);
    const feature = features[selected];

    return (
        <section className="flex w-full flex-col items-center gap-16 px-20 pb-20 min-[769px]:max-xl:px-12 max-md:px-0 max-md:pb-20 max-[480px]:gap-8" aria-label="Features">
            <div className="flex w-full max-w-container min-w-0 flex-col items-center gap-10 max-md:max-w-none max-[480px]:gap-8">
                <div className="relative aspect-[1280/640] w-full max-w-container min-w-0 overflow-hidden rounded-[32px] border-2 border-black/5 shadow-xl max-md:aspect-auto min-[481px]:max-md:h-[480px] max-md:max-w-none max-md:rounded-none min-[481px]:max-md:border-[1.5px] max-[480px]:h-80 max-[480px]:border">
                    <img src="/assets/demo.png" width={1280} height={640} alt="Qum in the MacBook notch" className="size-full object-cover" />
                    <p
                        className="absolute top-1/2 left-1/2 w-[min(665px,90%)] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-800 to-brand-700 bg-clip-text text-center text-display-lg font-semibold text-transparent min-[481px]:max-md:text-display-md max-[480px]:w-[min(330px,90%)] max-[480px]:text-[22.4px] max-[480px]:leading-7 max-[480px]:tracking-[-0.448px]"
                        aria-live="polite"
                    >
                        {feature.label}
                    </p>
                </div>
                <p className="max-w-[1024px] px-4 text-center text-xl text-tertiary italic min-[481px]:max-md:max-w-[640px] max-[480px]:max-w-none max-[480px]:px-5 max-[480px]:text-md" aria-live="polite">
                    {feature.caption}
                </p>
            </div>

            <div className="flex w-full max-w-container flex-nowrap items-start justify-start gap-x-2 overflow-x-auto overscroll-x-contain scrollbar-hide min-[1280px]:justify-center max-md:max-w-none max-md:px-5">
                {features.map((item, index) => {
                    const isSelected = index === selected;

                    return (
                        <button
                            key={item.id}
                            type="button"
                            aria-pressed={isSelected}
                            onClick={() => setSelected(index)}
                            className="flex w-60 max-w-60 shrink-0 flex-col items-center gap-5 p-3 min-[481px]:max-md:w-[200px] min-[481px]:max-md:max-w-[200px] max-[480px]:w-40 max-[480px]:max-w-40"
                        >
                            <span className="relative h-[62.4px] w-[63.6px] shrink-0 min-[481px]:max-md:h-[60px] min-[481px]:max-md:w-[61.154px] max-[480px]:h-12 max-[480px]:w-[48.923px]">
                                <img src={isSelected ? item.iconOn : item.iconOff} width={63.6} height={62.4} alt="" className="absolute inset-0 size-full object-contain" />
                            </span>
                            <span
                                className={cx(
                                    "w-[200px] max-w-full text-center text-lg min-[481px]:max-md:w-40 min-[481px]:max-md:text-md max-[480px]:w-40 max-[480px]:max-w-none max-[480px]:text-sm",
                                    isSelected ? "font-semibold text-brand-700" : "font-medium text-tertiary",
                                )}
                            >
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </section>
    );
}
