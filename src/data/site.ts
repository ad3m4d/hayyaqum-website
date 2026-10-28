/** Mac App Store listing. Null until Apple assigns an ID — do not invent one. */
export const APP_STORE_URL: string | null = null;
export const SITE_ORIGIN = "https://hayyaqum.com";
export const SUPPORT_EMAIL = "hello@hayyaqum.com";

export const CALCULATION_METHODS = [
    "Muslim World League",
    "Umm al-Qura",
    "Egyptian Authority",
    "University of Karachi",
    "ISNA",
    "Diyanet",
] as const;

export const ASR_CONVENTIONS = ["Shafi", "Hanafi"] as const;

export const features = [
    {
        id: "reminder",
        label: "A reminder before each prayer",
        caption: "Before each prayer, Qum reminds you in the notch. At prayer time, the adhan plays.",
        overlayTitle: "Prayer times that live in the notch",
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
    overlayTitle?: string;
    iconOn: string;
    iconOff: string;
    video?: string;
}[];

export const PRIVACY_EFFECTIVE_DATE = "28 October 2026";
export const PRIVACY_LAST_UPDATED = "28 October 2026";
export const TERMS_LAST_UPDATED = "28 October 2026";

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

export type LegalSection = {
    heading: string;
    paragraphs: string[];
    table?: readonly PrivacyTableRow[];
};

export type PrivacySection = LegalSection;

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
            "Qum uses location to calculate prayer times and Qibla direction for the place in use. Automatic Location Services are how Qum gets precise times for where this Mac is, because those times differ from place to place. Location Services remain optional: Qum asks when you choose automatic location — not at launch, and not for advertising.",
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
            "A Mac App Store listing, when it exists, is Apple’s; Qum does not receive that visit.",
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

export const LOCATION_PURPOSE_STRING =
    "Qum uses your location to calculate prayer times and Qibla direction for where this Mac is." as const;

export const productDisclaimer = {
    label: "Utility & Location Disclaimer:",
    paragraphs: [
        "Qum is a personal Mac utility for prayer times, Qibla direction, and local reminders for people who already keep salah in the day. It is NOT a religious authority, preaching app, fatwa service, or source of religious instruction.",
        "Automatic Location Services are how Qum gets precise prayer times and Qibla for where this Mac is, because those times differ from place to place; if you decline Location, you can type a city instead. Calculated times depend on the method you choose and are not a guarantee that they match every mosque or scholarly timetable — follow a local authority when that is what you intend.",
    ],
} as const;

export const termsIntro = [
    'These Terms of Use (“Terms”) govern use of the Qum Mac app (the “App”) and related information on hayyaqum.com. By downloading, installing, or using Qum, you agree to these Terms. If you do not agree, stop using the App and uninstall it.',
] as const;

export const termsSections: readonly LegalSection[] = [
    {
        heading: "1. What Qum is",
        paragraphs: [
            "Qum is a personal utility for MacBook models with a notch. It calculates and displays prayer times, Qibla direction, optional local reminders, and a private on-device prayer log.",
            "Qum is not a mosque, school, charity, religious authority, or preaching platform. It does not issue religious rulings, teach doctrine, host sermons, or replace a local imam, mosque timetable, or published scholarly schedule.",
        ],
    },
    {
        heading: "2. Accuracy of prayer times and Qibla",
        paragraphs: [
            "Prayer times and Qibla are astronomical and geographic calculations that run on this Mac. They depend on the place used (automatic Location Services, or a city you type), the calculation method and conventions you choose in Settings, and the date together with this Mac’s clock and time zone.",
            "Times differ by location. Automatic location exists so times and Qibla can follow where this Mac is. Qum does not guarantee that a calculated time matches every mosque schedule or every regional practice. Where a local authority publishes different times, follow that authority if that is what you intend.",
        ],
    },
    {
        heading: "3. Location Services",
        paragraphs: [
            "Location is used only for prayer-time calculation and Qibla direction for the place in use. That use is directly relevant to the App’s features.",
            "Prayer-time and Qibla maths run on this Mac. A coordinate or typed city name may be sent to Apple Location Services only to name or resolve a place. Location is not used for advertising, analytics, or tracking across apps or websites.",
            "Qum asks for Location Services when you choose automatic location — not for marketing. If you decline, Qum does not read this Mac’s position. Type a city instead. You can change or revoke access later in System Settings › Privacy & Security.",
            `Location purpose string used in the App: “${LOCATION_PURPOSE_STRING}”`,
            "Data practices for location are also described in the Privacy Policy.",
        ],
    },
    {
        heading: "4. Notifications and related permissions",
        paragraphs: [
            "Local reminders, if enabled, are for prayer-time alerts you chose. They are not marketing messages. You can leave reminders off; the App still works.",
            "If Stay silent in meetings (or a similar setting) is enabled, Qum may check whether another app is already using an audio input. It does not record the microphone and does not request microphone access for that check.",
        ],
    },
    {
        heading: "5. Acceptable use",
        paragraphs: [
            "You agree that you will not reverse-engineer, decompile, or attempt to extract source code from the App except where applicable law allows; bypass or tamper with security or sandbox protections; or use the App for any unlawful purpose.",
        ],
    },
    {
        heading: "6. Intellectual property",
        paragraphs: [
            "The App’s name, design, icons, and software are protected by applicable intellectual property laws. These Terms do not grant ownership of the App.",
        ],
    },
    {
        heading: "7. Third-party services",
        paragraphs: [
            "Qum has no servers of its own for accounts or analytics. Apple may provide Location Services, deliver local notifications you enable, and handle Mac App Store purchase or download. Apple’s terms and privacy practices apply to those services. Qum does not receive your Apple Account or payment details.",
        ],
    },
    {
        heading: "8. Disclaimer of warranties",
        paragraphs: [
            "The App is provided on an “AS IS” and “AS AVAILABLE” basis, without warranties of any kind, express or implied, to the maximum extent permitted by law. Qum does not warrant that calculated prayer times or Qibla are error-free, uninterrupted, or suitable for every religious, legal, or personal purpose.",
        ],
    },
    {
        heading: "9. Limitation of liability",
        paragraphs: [
            "To the maximum extent permitted by law, the publisher of Qum will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss arising from reliance on calculated times, Qibla direction, reminders, or inability to use the App.",
        ],
    },
    {
        heading: "10. Privacy",
        paragraphs: [
            "How Qum uses data is described in the Privacy Policy. If these Terms and the Privacy Policy ever conflict on a data practice, the Privacy Policy controls for that practice.",
        ],
    },
    {
        heading: "11. Changes",
        paragraphs: [
            `These Terms took effect on ${TERMS_LAST_UPDATED}. If they change, this page and Settings › About will say so. Qum cannot email you about a change, because it has no account.`,
        ],
    },
    {
        heading: "12. Contact",
        paragraphs: [
            `Questions about these Terms: write to ${SUPPORT_EMAIL}.`,
        ],
    },
];
