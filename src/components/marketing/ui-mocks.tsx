import type { ReactNode } from "react";
import { useLang } from "@/providers/language-provider";
import { cx } from "@/utils/cx";

function Card({ children, className, style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
    return (
        <div
            style={style}
            className={cx(
                "rounded-[20px] border border-black/5 bg-white shadow-[0_18px_40px_-12px_rgba(16,24,40,0.18),0_4px_10px_-4px_rgba(16,24,40,0.06)]",
                className,
            )}
        >
            {children}
        </div>
    );
}

export function NotchWidget({ className }: { className?: string }) {
    const { copy } = useLang();
    return (
        <div className={cx("flex h-[52px] w-[320px] items-center gap-3 rounded-[26px] bg-[#0b0d10] px-4 text-white shadow-[0_18px_40px_-12px_rgba(0,0,0,0.6)]", className)}>
            <span className="inline-flex size-7 items-center justify-center rounded-full bg-white/10">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 3a9 9 0 109 9" stroke="#e8c268" strokeWidth="1.8" strokeLinecap="round" /><circle cx="12" cy="12" r="2.4" fill="#e8c268" /></svg>
            </span>
            <div className="flex min-w-0 flex-1 flex-col">
                <span className="text-[10px] font-medium tracking-wide text-white/55 uppercase">{copy.ui.notchNext}</span>
                <span className="text-[13px] font-semibold text-white">{copy.ui.notchCountdown}</span>
            </div>
            <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] font-semibold text-white/80">{copy.ui.notchQibla}</span>
        </div>
    );
}

export function ScheduleCard({ className }: { className?: string }) {
    const { copy } = useLang();
    const p = copy.ui.prayers;
    const rows = [
        { name: p.fajr, arabic: "الفجر", time: "05:42", done: true },
        { name: p.dhuhr, arabic: "الظهر", time: "12:14", done: true },
        { name: p.asr, arabic: "العصر", time: "15:31", done: true },
        { name: p.maghrib, arabic: "المغرب", time: "17:08", done: false, next: true },
        { name: p.isha, arabic: "العشاء", time: "18:37", done: false },
    ];
    return (
        <Card className={cx("w-[280px] p-5", className)}>
            <div className="flex items-center justify-between pb-3">
                <p className="text-sm font-semibold text-primary">{copy.ui.today}</p>
                <p className="text-xs font-medium text-tertiary">{copy.ui.hijriDate}</p>
            </div>
            <ul className="divide-y divide-black/5">
                {rows.map((r) => (
                    <li key={r.name} className={cx("flex items-center justify-between gap-3 py-2.5", r.next && "-mx-2 rounded-xl bg-brand-50 px-2")}>
                        <div className="flex items-center gap-2.5">
                            <span className={cx("inline-flex size-5 items-center justify-center rounded-full border text-[10px]", r.done ? "border-transparent bg-brand-solid text-white" : r.next ? "border-brand-solid" : "border-black/10")}>
                                {r.done ? (
                                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden><path d="M2 6.5l2.5 2.5L10 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                ) : null}
                            </span>
                            <span className={cx("text-sm font-medium", r.next ? "text-brand-800" : "text-primary")}>{r.name}</span>
                            <span lang="ar" className="text-xs text-tertiary">{r.arabic}</span>
                        </div>
                        <span className={cx("text-sm tabular-nums", r.next ? "font-semibold text-brand-800" : "text-tertiary")}>{r.time}</span>
                    </li>
                ))}
            </ul>
        </Card>
    );
}

export function CountdownChip({ className }: { className?: string }) {
    const { copy } = useLang();
    return (
        <Card className={cx("flex w-[220px] items-center gap-3 px-4 py-3", className)}>
            <span className="inline-flex size-9 items-center justify-center rounded-full bg-[#1b212b] text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" /><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
            </span>
            <div className="flex min-w-0 flex-col">
                <span className="text-[11px] font-medium text-tertiary uppercase tracking-wide">{copy.ui.nextMaghrib}</span>
                <span className="font-display text-xl font-semibold tabular-nums text-primary">00:42:11</span>
            </div>
        </Card>
    );
}

export function JummahCard({ className }: { className?: string }) {
    const { copy } = useLang();
    return (
        <Card className={cx("w-[260px] overflow-hidden p-0", className)}>
            <div className="relative h-16 bg-gradient-to-br from-[#0e7063] to-[#145a8f]">
                <span className="absolute start-4 bottom-2 text-xs font-semibold text-white/85">{copy.ui.friday}</span>
                <span aria-hidden className="absolute end-4 top-3 text-xs text-white/70" lang="ar">الجمعة</span>
            </div>
            <div className="flex items-center justify-between p-4">
                <div>
                    <p className="text-sm font-semibold text-primary">{copy.ui.khutbah}</p>
                    <p className="text-xs text-tertiary">{copy.ui.khutbahWhen}</p>
                </div>
                <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">{copy.ui.set}</span>
            </div>
        </Card>
    );
}

export function SunStrip({ className }: { className?: string }) {
    const { copy } = useLang();
    return (
        <Card className={cx("w-[280px] p-4", className)}>
            <div className="flex items-center justify-between pb-3 text-xs font-medium text-tertiary">
                <span>{copy.ui.sunrise("06:58")}</span>
                <span>{copy.ui.sunset("16:47")}</span>
            </div>
            <div className="relative h-20 overflow-hidden rounded-xl bg-gradient-to-r from-[#fde7c2] via-[#f6d19a] to-[#c9b4cf]">
                <svg viewBox="0 0 280 80" className="absolute inset-0 size-full">
                    <path d="M0 70 Q 140 -30 280 70" fill="none" stroke="#fff" strokeOpacity="0.55" strokeWidth="1" strokeDasharray="3 4" />
                    <circle cx="200" cy="30" r="8" fill="#fff" />
                    <circle cx="200" cy="30" r="14" fill="#fff" opacity="0.25" />
                </svg>
            </div>
            <p className="pt-3 text-xs text-tertiary">{copy.ui.zuhrNote("12:14")}</p>
        </Card>
    );
}

export function CompassCard({ className }: { className?: string }) {
    const { copy } = useLang();
    const bearing = 114;
    return (
        <Card className={cx("flex w-[260px] flex-col items-center gap-3 p-5", className)}>
            <p className="self-start text-xs font-semibold tracking-wide text-tertiary uppercase">{copy.ui.qibla}</p>
            <div className="relative size-40">
                <div className="absolute inset-0 rounded-full border border-black/8" />
                <div className="absolute inset-3 rounded-full border border-dashed border-black/10" />
                {["N", "E", "S", "W"].map((c, i) => (
                    <span
                        key={c}
                        className="absolute inset-0 flex items-start justify-center text-[10px] font-semibold text-tertiary"
                        style={{ transform: `rotate(${i * 90}deg)` }}
                    >
                        <span style={{ transform: `rotate(${-i * 90}deg)` }} className="pt-1">
                            {c}
                        </span>
                    </span>
                ))}
                <div
                    className="absolute left-1/2 top-1/2 h-16 w-[3px] origin-bottom -translate-x-1/2 -translate-y-full rounded-full bg-gradient-to-t from-brand-600 to-brand-800"
                    style={{ transform: `translate(-50%, -100%) rotate(${bearing}deg)`, transformOrigin: "50% 100%" }}
                />
                <div className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
            </div>
            <div className="flex items-baseline gap-1 self-center">
                <span className="text-2xl font-semibold tabular-nums text-primary">{bearing}°</span>
                <span className="text-sm text-tertiary">{copy.ui.fromNorth}</span>
            </div>
        </Card>
    );
}

export function BearingReadout({ className }: { className?: string }) {
    const { copy } = useLang();
    return (
        <Card className={cx("w-[200px] p-4", className)}>
            <p className="text-xs font-medium text-tertiary">{copy.ui.facing}</p>
            <p className="pt-1 text-xl font-semibold text-primary">{copy.ui.southeast}</p>
            <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-brand-50">
                <div className="h-full w-[62%] rounded-full bg-brand-solid" />
            </div>
            <p className="pt-2 text-xs text-tertiary">{copy.ui.offQibla}</p>
        </Card>
    );
}

export function MapInset({ className }: { className?: string }) {
    const { copy } = useLang();
    return (
        <Card className={cx("w-[220px] overflow-hidden p-0", className)}>
            <div className="relative h-32 bg-[radial-gradient(60%_80%_at_30%_40%,#dde8e7,transparent),radial-gradient(60%_80%_at_80%_70%,#e2ddd4,transparent),#f1efe9]">
                <svg viewBox="0 0 220 128" className="absolute inset-0 size-full">
                    <path d="M0 80 Q 40 60 90 70 T 220 55" stroke="#c9d5d4" strokeWidth="1.2" fill="none" />
                    <path d="M0 110 Q 80 85 150 95 T 220 90" stroke="#c9d5d4" strokeWidth="1.2" fill="none" />
                    <circle cx="70" cy="80" r="4" fill="#0e7063" />
                    <circle cx="70" cy="80" r="10" fill="#0e7063" fillOpacity="0.15" />
                    <path d="M70 80 L185 42" stroke="#0e7063" strokeWidth="1.2" strokeDasharray="2 3" />
                    <circle cx="185" cy="42" r="3" fill="#111214" />
                </svg>
            </div>
            <div className="flex items-center justify-between p-3">
                <p className="text-xs font-medium text-primary">{copy.ui.mecca}</p>
                <p className="text-xs text-tertiary">{copy.ui.meccaDistance}</p>
            </div>
        </Card>
    );
}

export function AudioPicker({ className }: { className?: string }) {
    const { copy } = useLang();
    const reciters = [
        { name: "Abdul Basit", place: "Egypt", on: true },
        { name: "Mishary Rashid", place: "Kuwait" },
        { name: "Hani ar-Rifai", place: "Saudi Arabia" },
        { name: "Mahmoud Khalil al-Husary", place: "Egypt" },
    ];
    return (
        <Card className={cx("w-[300px] p-5", className)}>
            <div className="flex items-center justify-between pb-3">
                <p className="text-sm font-semibold text-primary">{copy.ui.adhan}</p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700">
                    <span className="size-1.5 rounded-full bg-brand-solid" /> {copy.ui.playing}
                </span>
            </div>
            <ul className="divide-y divide-black/5">
                {reciters.map((r) => (
                    <li key={r.name} className="flex items-center gap-3 py-2.5">
                        <span className={cx("inline-flex size-4 items-center justify-center rounded-full border", r.on ? "border-brand-solid" : "border-black/15")}>
                            {r.on ? <span className="size-2 rounded-full bg-brand-solid" /> : null}
                        </span>
                        <div className="flex-1">
                            <p className="text-sm font-medium text-primary">{r.name}</p>
                            <p className="text-xs text-tertiary">{r.place}</p>
                        </div>
                        {r.on ? (
                            <div className="flex items-end gap-0.5" aria-hidden>
                                {[0, 1, 2, 3].map((i) => (
                                    <span key={i} className="w-0.5 rounded-full bg-brand-solid" style={{ height: `${6 + (i % 3) * 5}px` }} />
                                ))}
                            </div>
                        ) : null}
                    </li>
                ))}
            </ul>
        </Card>
    );
}

export function NotificationPreview({ className }: { className?: string }) {
    const { copy } = useLang();
    return (
        <Card className={cx("flex w-[300px] items-start gap-3 p-4", className)}>
            <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#0b0d10] text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M4 11c0-4 3-8 8-8s8 4 8 8v4l2 2H2l2-2v-4z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 20a2 2 0 004 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
            </span>
            <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-primary">{copy.ui.notifTitle}</p>
                    <p className="text-xs text-tertiary">{copy.ui.notifWhen}</p>
                </div>
                <p className="pt-0.5 text-sm text-primary">{copy.ui.notifSubtitle}</p>
                <p className="text-xs text-tertiary">{copy.ui.notifHint}</p>
            </div>
        </Card>
    );
}

export function DndCard({ className }: { className?: string }) {
    const { copy } = useLang();
    return (
        <Card className={cx("w-[260px] p-5", className)}>
            <div className="flex items-center justify-between pb-3">
                <div>
                    <p className="text-sm font-semibold text-primary">{copy.ui.staySilent}</p>
                    <p className="pt-1 text-xs text-tertiary">{copy.ui.staySilentHint}</p>
                </div>
                <span className="inline-flex h-6 w-10 shrink-0 items-center rounded-full bg-brand-solid px-0.5">
                    <span className="size-5 translate-x-4 rounded-full bg-white shadow-sm" />
                </span>
            </div>
            <div className="mt-2 flex items-center gap-2 rounded-xl bg-[#f3f5f3] p-3">
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-white text-brand-700 shadow-xs">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden><rect x="9" y="3" width="6" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" /><path d="M5 11a7 7 0 0014 0M12 18v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                </span>
                <p className="text-xs text-tertiary">{copy.ui.zoomMic}</p>
            </div>
        </Card>
    );
}

export function SettingsSheet({ className }: { className?: string }) {
    const { copy, lang } = useLang();
    const items = lang === "ar"
        ? [
            { label: "رابطة العالم الإسلامي", on: true },
            { label: "أم القرى" },
            { label: "الهيئة المصرية" },
            { label: "ديانت" },
        ]
        : [
            { label: "Muslim World League", on: true },
            { label: "Umm al-Qura" },
            { label: "Egyptian Authority" },
            { label: "Diyanet" },
        ];
    return (
        <Card className={cx("w-[280px] p-5", className)}>
            <p className="text-sm font-semibold text-primary">{copy.ui.calculation}</p>
            <ul className="mt-3 space-y-2">
                {items.map((r) => (
                    <li key={r.label} className={cx("flex items-center justify-between rounded-lg px-3 py-2 text-sm", r.on ? "bg-brand-50 font-semibold text-brand-800" : "text-primary")}>
                        {r.label}
                        {r.on ? (
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden><path d="M2.5 7.5l2.75 2.75L11.5 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        ) : null}
                    </li>
                ))}
            </ul>
            <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-4 text-sm">
                <span className="text-primary">{copy.ui.asr}</span>
                <span className="inline-flex rounded-full bg-[#f3f5f3] p-0.5 text-xs font-semibold">
                    <span className="rounded-full bg-white px-2.5 py-1 text-primary shadow-xs">{copy.ui.shafi}</span>
                    <span className="px-2.5 py-1 text-tertiary">{copy.ui.hanafi}</span>
                </span>
            </div>
        </Card>
    );
}

export function MenubarPopover({ className }: { className?: string }) {
    const { copy } = useLang();
    return (
        <Card className={cx("w-[320px] overflow-hidden p-0", className)}>
            <div className="flex items-center justify-between border-b border-black/5 bg-[#f9faf9] px-4 py-3">
                <p className="text-sm font-semibold text-primary">Qum</p>
                <p className="text-xs text-tertiary">Riyadh</p>
            </div>
            <div className="flex flex-col gap-2 p-4">
                <div className="flex items-baseline justify-between">
                    <p className="text-xs font-medium tracking-wide text-tertiary uppercase">{copy.ui.menuHeaderNext}</p>
                    <p className="text-xs text-tertiary">{copy.ui.notchCountdown.split("·")[1]?.trim() ?? ""}</p>
                </div>
                <div className="flex items-end justify-between">
                    <span className="text-3xl font-semibold text-primary">{copy.ui.prayers.maghrib}</span>
                    <span className="text-3xl font-semibold tabular-nums text-primary">17:08</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-brand-50">
                    <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-brand-500 to-brand-800" />
                </div>
                <button className="mt-3 inline-flex h-10 items-center justify-center rounded-full bg-[#111214] text-sm font-semibold text-white">{copy.ui.menuIPrayedAsr}</button>
            </div>
        </Card>
    );
}
