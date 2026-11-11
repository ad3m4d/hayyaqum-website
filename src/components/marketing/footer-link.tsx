/**
 * Footer link from Figma 829:27927 (rest) / 500:8007 (hover).
 *
 *   outer link: inline-flex gap-16 items-center
 *   text_Wrapper: inline-flex gap-6 items-center max-h-20 shrink-0
 *   rest:  SF Pro Regular 14/20 color #a1acaa
 *   hover: SF Pro Medium 14/20 color #258ea6 + solid underline at #218095
 *
 * Fill-in transition: colour fades from grey to teal, and an underline sweeps
 * in from the left (scale-x 0 → 1) over 300ms ease-out.
 */
type Props = {
    href: string;
    children: React.ReactNode;
};

export function FooterLink({ href, children }: Props) {
    return (
        <a
            href={href}
            className="group relative inline-flex items-center gap-4 text-sm leading-5 text-[#a1acaa] transition-colors duration-300 ease-out outline-brand hover:font-medium hover:text-[#258ea6] focus-visible:outline-2 focus-visible:outline-offset-2"
        >
            <span className="relative inline-flex max-h-5 shrink-0 items-center gap-1.5">
                {children}
                <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#218095] transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
            </span>
        </a>
    );
}
