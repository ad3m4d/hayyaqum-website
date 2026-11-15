import { Fragment, useState, type KeyboardEvent } from "react";
import { PageMeta } from "@/components/marketing/page-meta";
import { SiteBookend } from "@/components/marketing/site-bookend";
import { SiteLayout } from "@/components/marketing/site-layout";
import { faqCopy } from "@/data/faq";
import { pageMeta } from "@/data/seo";
import { useLang } from "@/providers/language-provider";

/** Controlled, trusted copy supports policy and support links without injecting HTML. */
function AnswerText({ text }: { text: string }) {
    return text.split(/(\[[^\]]+\]\((?:\/[^)\s]*|mailto:[^)\s]+)\))/g).map((part, index) => {
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        return link ? (
            <a key={index} href={link[2]} className="font-semibold text-[#1c6b7d] underline rounded-sm outline-brand focus-visible:outline-2 focus-visible:outline-offset-2">
                {link[1]}
            </a>
        ) : <Fragment key={index}>{part}</Fragment>;
    });
}

/** Figma 1030:39382 / 1030:39788. Single-open accordion; first answer starts expanded. */
export function FaqsScreen() {
    const { lang } = useLang();
    const faq = faqCopy[lang];
    const [openId, setOpenId] = useState<string | null>(faq.items[0].id);

    function moveFocus(event: KeyboardEvent<HTMLButtonElement>, index: number) {
        let next: number;
        switch (event.key) {
            case "ArrowDown": next = (index + 1) % faq.items.length; break;
            case "ArrowUp": next = (index - 1 + faq.items.length) % faq.items.length; break;
            case "Home": next = 0; break;
            case "End": next = faq.items.length - 1; break;
            default: return;
        }
        event.preventDefault();
        document.getElementById(`faq-question-${faq.items[next].id}`)?.focus();
    }

    return (
        <SiteLayout footer="none" background="plain" homeNavigation>
            <PageMeta {...pageMeta.faqs} />
            <section aria-labelledby="faq-title" className="flex w-full flex-col items-center gap-10 py-20 max-sm:py-16">
                <header className="flex w-full max-w-[768px] flex-col gap-4 px-8">
                    <h1 id="faq-title" className="text-[36px] font-bold leading-[44px] tracking-[-0.72px] text-[#2c363f] max-sm:text-[30px] max-sm:leading-[38px] max-sm:tracking-[-0.6px]">
                        {faq.title}
                    </h1>
                    <p className="text-[20px] leading-[30px] text-[#606766] max-sm:text-[18px] max-sm:leading-7">{faq.intro}</p>
                </header>
                <div className="w-full max-w-[768px] px-8 max-sm:px-6">
                    {faq.items.map((item, index) => {
                        const open = openId === item.id;
                        const questionId = `faq-question-${item.id}`;
                        const answerId = `faq-answer-${item.id}`;
                        return (
                            <article key={item.id} data-open={open} className="faq-item rounded-[24px]">
                                <h2>
                                    <button
                                        id={questionId}
                                        type="button"
                                        aria-expanded={open}
                                        aria-controls={answerId}
                                        onClick={() => setOpenId(open ? null : item.id)}
                                        onKeyDown={(event) => moveFocus(event, index)}
                                        className="faq-trigger flex w-full items-start gap-4 rounded-[24px] px-6 pt-6 text-start outline-brand focus-visible:outline-2 focus-visible:outline-offset-[-2px]"
                                    >
                                        <span className="faq-question min-w-0 flex-1">{item.question}</span>
                                        <span className="faq-indicator" aria-hidden="true">
                                            <img src="/assets/figma/faq-plus-circle.svg" width="24" height="24" alt="" className="faq-plus" />
                                            <img src="/assets/figma/faq-minus-circle.svg" width="24" height="24" alt="" className="faq-minus" />
                                        </span>
                                    </button>
                                </h2>
                                <div id={answerId} aria-hidden={!open} inert={!open} className="faq-answer">
                                    <div className="faq-answer-clip">
                                        <div className="px-6 pb-6 pe-16 text-[16px] leading-6 text-[#2c363f]">
                                            {item.paragraphs.map((paragraph, i) => <p key={i} className={i ? "mt-4" : undefined}><AnswerText text={paragraph} /></p>)}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>
            <SiteBookend />
        </SiteLayout>
    );
}
