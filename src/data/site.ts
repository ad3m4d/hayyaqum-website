export const APP_STORE_URL = "https://apps.apple.com/app/qum";
export const SUPPORT_EMAIL = "hello@hayyaqum.com";

export const features = [
    {
        id: "reminder",
        label: "A reminder before each prayer",
        caption: "Before each prayer, Qum reminds you in the notch. At prayer time, the adhan plays.",
        iconOn: "/assets/feature-reminder-on.svg",
        iconOff: "/assets/feature-reminder-off.svg",
        video: "/assets/demo-reminder.mp4",
    },
    {
        id: "adhan",
        label: "The adhan, played on your Mac",
        caption: "When it’s time, the notch plays the adhan. Confirm with I Prayed.",
        iconOn: "/assets/feature-adhan-on.svg",
        iconOff: "/assets/feature-adhan-off.svg",
        video: "/assets/demo-adhan.mp4",
    },
    {
        id: "streak",
        label: "A prayer streak on your Mac",
        caption: "Mark each prayer with I Prayed. Your streak stays on this Mac.",
        iconOn: "/assets/feature-streak-on.svg",
        iconOff: "/assets/feature-streak-off.svg",
        video: "/assets/demo-streak.mp4",
    },
    {
        id: "qibla",
        label: "Qibla direction from your desk",
        caption: "Qum shows Qibla direction from your desk. Calibrate once, and the direction stays in the notch.",
        iconOn: "/assets/feature-qibla-on.svg",
        iconOff: "/assets/feature-qibla-off.svg",
        video: "/assets/demo-qibla.mp4",
    },
    {
        id: "theme",
        label: "A theme that follows each prayer",
        caption: "The notch follows the day. Fajr does not look like Maghrib.",
        iconOn: "/assets/feature-theme-on.svg",
        iconOff: "/assets/feature-theme-off.svg",
        video: "/assets/demo-theme.mp4",
    },
] as const satisfies readonly {
    id: string;
    label: string;
    caption: string;
    iconOn: string;
    iconOff: string;
    video?: string;
}[];

export const PRIVACY_EFFECTIVE_DATE = "15 September 2026";
export const PRIVACY_LAST_UPDATED = "15 September 2026";

export const privacySummary = [
    "Qum is a Mac app that doesn’t require an account. Prayer times, the Qibla, your log, and your settings stay on this Mac. A coordinate or a city name may go to Apple Location Services so Qum can name or resolve a place — that is the only data that leaves this Mac.",
    "Qum does not run analytics, show ads, or track you, and this site does not set cookies.",
] as const;

export type PrivacyTableRow = {
    data: string;
    why: string;
    sharedWith: string;
    retention: string;
};

export type PrivacySection = {
    heading: string;
    paragraphs: string[];
    table?: readonly PrivacyTableRow[];
};

export const privacySections: readonly PrivacySection[] = [
    {
        heading: "What Qum stores",
        paragraphs: [
            "Qum does not ask for a name, email, or payment details. It uses only what the table lists, and only for the reason in that row.",
        ],
        table: [
            {
                data: "Location (optional)",
                why: "Prayer times and Qibla on this Mac",
                sharedWith: "Apple, when Qum asks for the city name",
                retention: "Until you switch to a typed city, revoke Location Services, or uninstall",
            },
            {
                data: "City you type (optional)",
                why: "Prayer times and Qibla without Location Services",
                sharedWith: "Apple, to turn the name into a coordinate",
                retention: "Until you change the city or uninstall",
            },
            {
                data: "Prayer log",
                why: "I Prayed, and the streak on this Mac",
                sharedWith: "No one",
                retention: "Until you unmark the prayer or uninstall",
            },
            {
                data: "Settings",
                why: "Calculation method, theme, volume, Qibla calibration",
                sharedWith: "No one",
                retention: "Until you change them or uninstall",
            },
            {
                data: "Reminders",
                why: "Local alerts at prayer time",
                sharedWith: "Apple, to deliver the alert",
                retention: "Until you turn reminders off or uninstall",
            },
        ],
    },
    {
        heading: "Location",
        paragraphs: [
            "Qum uses your location to calculate prayer times and Qibla direction. Location Services are optional. Qum asks when you choose automatic location — not at launch, and not for advertising.",
            "If you deny the permission, Qum does not read this Mac’s position. Type a city instead. You can turn Location Services off for Qum later in System Settings › Privacy & Security.",
            "To show a city name, Qum may send a coordinate to Apple Location Services. If you type a city, Qum may send that name to Apple to resolve a coordinate. Prayer-time and Qibla maths themselves run on this Mac. Apple may handle those place-name requests on its own systems, including outside the country you are in.",
        ],
    },
    {
        heading: "Notifications and the microphone",
        paragraphs: [
            "If you turn reminders on, Qum asks to show a local alert and play a sound. Apple delivers that notification. Qum does not send marketing notifications. If you deny the permission, the app still runs; reminders do not appear. Turn them off in Qum › Sounds, or in System Settings.",
            "If you enable Stay silent in meetings, Qum checks whether another app is already using an audio input. It does not record the microphone, and it does not ask for microphone access.",
        ],
    },
    {
        heading: "Apple and this website",
        paragraphs: [
            "Qum has no servers of its own. It does not run analytics, crash reporting, advertising, or a Qum account.",
            "Apple provides Location Services when you use automatic location or a typed city, and delivers the local notifications you have enabled. Buying or downloading Qum on the Mac App Store is handled by Apple. Qum does not receive your Apple Account or payment details.",
            "hayyaqum.com does not set cookies, run analytics, or show advertising. You can read this page without an account. The computers that serve it may keep ordinary web-server logs — IP address, time, and the page requested — as part of delivering the site.",
            "The Mac App Store button opens Apple’s store; Qum does not receive that visit.",
        ],
    },
    {
        heading: "Tracking",
        paragraphs: [
            "Qum does not track you across apps or websites, does not show ads, and does not sell data. It does not use Apple’s tracking permission, because there is nothing to ask for.",
        ],
    },
    {
        heading: "Keeping and deleting",
        paragraphs: [
            "There is no Qum account, so there is no cloud copy to export and no delete-my-account button on a server.",
            "You can use a typed city and never grant Location Services. You can leave reminders off. Completions are visible in Qum on this Mac; unmark a prayer to remove it.",
            "To stop using this Mac’s position, switch to a typed city or revoke Location Services in System Settings. To delete everything Qum stored here — the log, settings, cached coordinate, and calibration — uninstall Qum.",
            "A place-name request Apple has already received is kept under Apple’s own policy, which Qum does not control.",
        ],
    },
    {
        heading: "Security",
        paragraphs: [
            "What Qum stores stays in the macOS app sandbox on this Mac. Treat the prayer log like any other local file: a lost, stolen, or backed-up Mac still has it.",
        ],
    },
    {
        heading: "Children",
        paragraphs: [
            "Qum is not made for children and is not in Apple’s Kids Category. It has no accounts and does not collect a child’s data.",
        ],
    },
    {
        heading: "Changes",
        paragraphs: [
            `This policy took effect on ${PRIVACY_EFFECTIVE_DATE}. If what Qum does with data changes, this page and Settings › About › Privacy Policy will say so. Qum cannot email you about a change, because it has no account.`,
            `Questions: write to ${SUPPORT_EMAIL}.`,
        ],
    },
];
