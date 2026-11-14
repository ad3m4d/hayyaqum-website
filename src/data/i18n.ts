/**
 * Flat translation keys for the Qum marketing site.
 * English is canonical. Arabic is reviewed; do not alter either language without
 * the user's approval (see shared hand-over notes).
 */

export const SUPPORTED_LANGS = ["en", "ar"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

export const SUPPORT_EMAIL = "hello@hayyaqum.com";
export const PRIVACY_EFFECTIVE_DATE_EN = "13 November 2026";
export const PRIVACY_LAST_UPDATED_EN = "13 November 2026";
export const TERMS_LAST_UPDATED_EN = "13 November 2026";
export const PRIVACY_EFFECTIVE_DATE_AR = "13 نوفمبر 2026";
export const PRIVACY_LAST_UPDATED_AR = "13 نوفمبر 2026";
export const TERMS_LAST_UPDATED_AR = "13 نوفمبر 2026";

export const CALCULATION_METHODS_EN = [
    "Muslim World League",
    "Umm al-Qura",
    "Egyptian Authority",
    "University of Karachi",
    "ISNA",
    "Diyanet",
] as const;

export const CALCULATION_METHODS_AR = [
    "رابطة العالم الإسلامي",
    "أم القرى",
    "الهيئة المصرية",
    "جامعة كراتشي",
    "ISNA",
    "ديانت",
] as const;

export const ASR_CONVENTIONS_EN = ["Shafi", "Hanafi"] as const;
export const ASR_CONVENTIONS_AR = ["شافعي", "حنفي"] as const;

export type FeatureCopy = {
    id: "reminder" | "adhan" | "streak" | "qibla" | "theme";
    label: string;
    caption: string;
    overlayTitle?: string;
};

export type LegalSection = {
    heading: string;
    paragraphs: string[];
};

export type PrivacyTableRow = {
    data: string;
    why: string;
    sharedWith: string;
    retention: string;
};

export type PrivacySection = LegalSection & {
    table?: readonly PrivacyTableRow[];
};

export type FeatureV2Id = "expand" | "streak" | "qibla" | "adhan" | "reminder";
export type FeatureV2Copy = {
    id: FeatureV2Id;
    headline: string;
    sub: string;
};

export type SiteCopy = {
    dir: "ltr" | "rtl";
    langLabel: string;
    otherLangLabel: string;
    nav: {
        about: string;
        privacy: string;
        comingSoon: string;
        downloadLabel: string;
        downloadLabelShort: string;
        macAppStore: string;
        toggleAria: string;
    };
    footer: {
        tagline: string;
        about: string;
        privacy: string;
        terms: string;
        copyright: string;
        legalAria: string;
    };
    home: {
        beta: string;
        downloadCTA: string;
        hero: { headlineA: string; headlineB: string; sub: string };
        always: { headlineA: string; headlineB: string; sub: string };
        qibla: { headlineA: string; headlineB: string; sub: string };
        adhan: { headlineA: string; headlineB: string; sub: string };
        quietly: { headlineA: string; headlineB: string; sub: string };
        bookend: { headline: string };
        demoAriaLabel: string;
    };
    homeV2: {
        wordmark: string;
        wordmarkParenthetical: string;
        langShort: string;
        hero: { headlineA: string; headlineB: string; sub: string; requirement: string };
        downloadCTA: string;
        downloadCTAShort: string;
        sections: readonly FeatureV2Copy[];
        bookend: { wordmark: string; sub: string; fine: string };
        footer: {
            copyright: string;
            about: string;
            privacy: string;
            terms: string;
        };
    };
    features: readonly FeatureCopy[];
    player: {
        play: (name: string) => string;
        pause: (name: string) => string;
        demoLabel: (name: string, state: string) => string;
        playing: string;
        paused: string;
        seek: (name: string) => string;
        playbackSpeed: string;
        speedLabel: (rate: number) => string;
        ariaSection: string;
    };
    ui: {
        today: string;
        hijriDate: string;
        prayers: { fajr: string; dhuhr: string; asr: string; maghrib: string; isha: string };
        nextMaghrib: string;
        sunrise: (t: string) => string;
        sunset: (t: string) => string;
        zuhrNote: (t: string) => string;
        friday: string;
        khutbah: string;
        khutbahWhen: string;
        set: string;
        qibla: string;
        fromNorth: string;
        facing: string;
        southeast: string;
        offQibla: string;
        mecca: string;
        meccaDistance: string;
        adhan: string;
        playing: string;
        notifTitle: string;
        notifSubtitle: string;
        notifHint: string;
        notifWhen: string;
        staySilent: string;
        staySilentHint: string;
        zoomMic: string;
        calculation: string;
        asr: string;
        shafi: string;
        hanafi: string;
        menuHeaderNext: string;
        menuIPrayedAsr: string;
        notchNext: string;
        notchCountdown: string;
        notchQibla: string;
    };
    privacy: {
        title: string;
        sub: string;
        lastUpdated: string;
        lastUpdatedDate: string;
        tableHeaders: { data: string; why: string; shared: string; kept: string };
        tableCaption: string;
        summary: string[];
        sections: readonly PrivacySection[];
    };
    terms: {
        title: string;
        sub: string;
        lastUpdated: string;
        lastUpdatedDate: string;
        intro: string[];
        disclaimerLabel: string;
        disclaimerParagraphs: string[];
        disclaimerAria: string;
        sections: readonly LegalSection[];
    };
    about: {
        kicker: string;
        title: string;
        lede: string;
        whatItIs: { heading: string; body: string };
        whoFor: { heading: string; body: string };
        whatItDoes: { heading: string };
        prayerTimes: { heading: string; body1: string; methodsLabel: (methods: string) => string; asrLabel: (asr: string) => string };
        qiblaSection: { heading: string; body: string };
        whatItIsNot: { heading: string; body1: string; body2: string };
    };
    aria: {
        skipToContent: string;
        logo: string;
        primaryNav: string;
    };
};

/* ---------------- ENGLISH ---------------- */

const en: SiteCopy = {
    dir: "ltr",
    langLabel: "English",
    otherLangLabel: "العربية",
    nav: {
        about: "About",
        privacy: "Privacy",
        comingSoon: "Coming soon",
        downloadLabel: "Download on the Mac App Store",
        downloadLabelShort: "Download",
        macAppStore: "Mac App Store",
        toggleAria: "Switch to Arabic",
    },
    footer: {
        tagline: "Prayer times. In the notch.",
        about: "About",
        privacy: "Privacy",
        terms: "Terms",
        copyright: "© 2026",
        legalAria: "Legal",
    },
    home: {
        beta: "Currently in beta",
        downloadCTA: "Download for Mac",
        hero: { headlineA: "Prayer times.", headlineB: "In the notch.", sub: "Qum puts the next prayer, the Qibla, and the adhan in the MacBook notch. Quietly, five times a day." },
        always: { headlineA: "The next prayer,", headlineB: "always visible.", sub: "A countdown to Maghrib while you work. Jumuʿah on Friday. Sunrise and sunset in the same breath." },
        qibla: { headlineA: "Qibla,", headlineB: "from your Mac.", sub: "Mac has no compass. Qum solves the bearing as geometry — calibrate once and the direction stays." },
        adhan: { headlineA: "Adhan at the", headlineB: "right second.", sub: "Pick a reciter you know. The notch plays it the moment Maghrib enters, then steps aside." },
        quietly: { headlineA: "Quietly", headlineB: "in your day.", sub: "Nothing on your Dock, no banners. Qum reads a busy microphone and waits." },
        bookend: { headline: "Prayer times. In the notch." },
        demoAriaLabel: "Interactive demo",
    },
    homeV2: {
        wordmark: "Qum",
        wordmarkParenthetical: "(قُمْ)",
        langShort: "EN",
        hero: {
            headlineA: "Hayya Qum,",
            headlineB: "five times a day, get on your feet.",
            sub: "Qum puts the next prayer, the Qibla, and the adhan in the MacBook notch, so the workday still has salah in it.",
            requirement: "Requires a MacBook with a notch:\nPro (2021+) or Air (2022+).",
        },
        downloadCTA: "Download on the Mac App Store",
        downloadCTAShort: "Download for Mac",
        sections: [
            { id: "expand",   headline: "Give it a click, I’ll open the day.",         sub: "When you want more than a glance, give me a hover and the whole day unfolds under the notch." },
            { id: "streak",   headline: "Keep the hours, I’ll keep the count.",       sub: "I’ve been quietly counting since Monday. Four prayers on time, four small acts of good deeds." },
            { id: "qibla",    headline: "Wherever you land, I’ll already know.",      sub: "You boarded in Doha and you’ll land in London; the prayer times, the Qibla, will be ready for you." },
            { id: "adhan",    headline: "When the hour comes, I’ll call it.",         sub: "The same words that have called people to prayer for fourteen centuries, arriving now beside your keyboard." },
            { id: "reminder", headline: "Ten minutes out, I’ll lean in and whisper.", sub: "People once watched the sun for this quarter-hour. Now a reminder before each prayer lives on your notch." },
        ],
        bookend: {
            wordmark: "Hayya Qum · هَيَّا قُمْ",
            sub: "Made for workdays that still have salah in them.",
            fine: "No account, no ads, no tracking. Your prayer log stays on your Mac. Location is optional.\nRequires a MacBook with a notch. MacBook Pro (2021 or later) or MacBook Air (2022 or later).",
        },
        footer: {
            copyright: "Copyright © 2026 Qum. All rights reserved.",
            about: "About Qum",
            privacy: "Privacy Policy",
            terms: "Terms of Use",
        },
    },
    features: [
        { id: "reminder", label: "A reminder before each prayer", caption: "Before each prayer, Qum reminds you in the notch. At prayer time, the adhan plays.", overlayTitle: "Prayer times that live in the notch" },
        { id: "adhan", label: "The adhan, played on your Mac", caption: "When it’s time, the notch plays the adhan. Confirm with I Prayed." },
        { id: "streak", label: "A prayer streak on your Mac", caption: "Mark each prayer with I Prayed. Your streak stays on this Mac." },
        { id: "qibla", label: "Qibla direction from your desk", caption: "Qum shows Qibla direction from your desk. Calibrate once, and the direction stays in the notch." },
        { id: "theme", label: "A theme that follows each prayer", caption: "The notch follows the day. Fajr does not look like Maghrib." },
    ],
    player: {
        play: (name) => `Play ${name}`,
        pause: (name) => `Pause ${name}`,
        demoLabel: (name, state) => `${name} demo, ${state}`,
        playing: "playing",
        paused: "paused",
        seek: (name) => `Seek ${name}`,
        playbackSpeed: "Playback speed",
        speedLabel: (rate) => `Playback speed, ${rate} times`,
        ariaSection: "Features",
    },
    ui: {
        today: "Today",
        hijriDate: "Mon 17 Rabīʿ al-Thānī",
        prayers: { fajr: "Fajr", dhuhr: "Dhuhr", asr: "Asr", maghrib: "Maghrib", isha: "Isha" },
        nextMaghrib: "Maghrib in",
        sunrise: (t) => `Sunrise ${t}`,
        sunset: (t) => `Sunset ${t}`,
        zuhrNote: (t) => `Zuhr enters at local noon · ${t}`,
        friday: "Friday · Jumuʿah",
        khutbah: "Khutbah",
        khutbahWhen: "12:42 at local masjid",
        set: "Set",
        qibla: "Qibla",
        fromNorth: "from North",
        facing: "You are facing",
        southeast: "Southeast",
        offQibla: "6° off Qibla · turn right",
        mecca: "Mecca",
        meccaDistance: "4,872 km",
        adhan: "Adhan",
        playing: "Playing",
        notifTitle: "Qum",
        notifSubtitle: "Maghrib · 17:08",
        notifHint: "Tap to confirm I Prayed",
        notifWhen: "now",
        staySilent: "Stay silent in meetings",
        staySilentHint: "Pauses the adhan when the mic is busy",
        zoomMic: "Zoom is using the microphone",
        calculation: "Calculation",
        asr: "Asr",
        shafi: "Shafi",
        hanafi: "Hanafi",
        menuHeaderNext: "Next",
        menuIPrayedAsr: "I Prayed · Asr",
        notchNext: "Next · Maghrib",
        notchCountdown: "17:08 · in 42 min",
        notchQibla: "Qibla 114°",
    },
    privacy: {
        "title": "Privacy Policy",
        "sub": "Local app data, Apple services, this website and your choices.",
        "lastUpdated": "Last Updated",
        "lastUpdatedDate": PRIVACY_LAST_UPDATED_EN,
        "tableHeaders": {
            "data": "Data type",
            "why": "Why …?",
            "shared": "Shared with …",
            "kept": "Kept"
        },
        "tableCaption": "What Qum uses, why, who receives it, and how long it is kept",
        "summary": [
            "Qum does not require an account. Prayer-time and Qibla calculations run on your Mac. Prayer history, settings, selected places and Qibla calibration are stored locally. Apple services process automatic-location and place-search requests; the website and support email have separate data flows described below.",
            "Qum does not run analytics, show ads or track you across apps or websites. This website does not set cookies or run analytics; browser preferences and ordinary hosting logs are described below."
        ],
        "sections": [
            {
                "heading": "What Qum uses …",
                "paragraphs": [
                    "The app does not ask you to register or provide payment details. The table distinguishes local app records from requests to Apple, visits to this website and messages you choose to send to support."
                ],
                "table": [
                    {
                        "data": "Automatic location (optional)",
                        "why": "Prayer times, Qibla and place names",
                        "sharedWith": "Apple Location Services; coordinates may be sent for reverse geocoding",
                        "retention": "A local cache may remain after switching to a typed city or revoking permission; retained until replaced or local app data is removed"
                    },
                    {
                        "data": "Place searches and selected city (optional)",
                        "why": "Suggestions as you type; resolve a selected place to a coordinate and time zone",
                        "sharedWith": "Apple MapKit search services",
                        "retention": "Search text is held in memory; the selected place is stored locally until replaced or local app data is removed. Apple handles requests under its own policy"
                    },
                    {
                        "data": "Prayer history",
                        "why": "Completions, missed and made-up prayers, streaks, check-ins and reminder suppression",
                        "sharedWith": "No upload by Qum",
                        "retention": "Stored locally without an automatic expiry. Clearing a completion does not necessarily delete its record or related timestamps"
                    },
                    {
                        "data": "Settings and calibration",
                        "why": "Calculation method, theme, volume, reminders and the orientation of your desk",
                        "sharedWith": "No upload by Qum",
                        "retention": "Stored locally until changed or local app data is removed. Calibration can remain stored after it becomes stale"
                    },
                    {
                        "data": "Audio-input activity",
                        "why": "Keep adhan silent during meetings when enabled; defer prayer check-ins while another app uses audio input",
                        "sharedWith": "No upload by Qum",
                        "retention": "Queried locally; Qum does not store the queried process identifiers or audio-input state"
                    },
                    {
                        "data": "Local notifications",
                        "why": "Prayer alerts and streak reminders",
                        "sharedWith": "The macOS notification subsystem",
                        "retention": "Pending alerts are managed locally and cancelled or replaced as plans change; delivered alerts may remain in Notification Center"
                    },
                    {
                        "data": "Website preferences and requests",
                        "why": "Display the site and remember available display preferences",
                        "sharedWith": "Browser storage on your device; website hosting infrastructure receives requests; Google if its font service is loaded",
                        "retention": "Browser preferences remain until cleared or changed. Hosting-log retention depends on the hosting provider"
                    },
                    {
                        "data": "Support messages (optional)",
                        "why": "Respond to questions you email to hello@hayyaqum.com",
                        "sharedWith": "The support inbox and email service providers",
                        "retention": "Messages and attachments may remain in email records and backups. Contact support with questions about retention or deletion"
                    }
                ]
            },
            {
                "heading": "Location and place searches",
                "paragraphs": [
                    "Automatic Location Services are optional and are used for prayer times and Qibla. On a first setup, Qum asks for location permission when you choose automatic location. If you have already allowed it, later launches and periodic refreshes can request an updated position.",
                    "If you decline or revoke permission, Qum does not obtain new automatic fixes. Previously saved coordinates or places may remain on your Mac. You can select a city instead in Settings › Prayer times. Finding a new city requires an internet connection.",
                    "When you type in the City field, Qum sends search fragments to Apple MapKit for suggestions before you select a result. Selecting a result sends a further request to resolve its coordinate and time zone. Qum may send an automatic coordinate to Apple to obtain a place name. These requests are not used by Qum for advertising or tracking.",
                    "Apple processes these requests on its own systems, potentially outside your country, under the Apple Privacy Policy and the notices for its location and Maps services. Qum does not control Apple’s retention of requests already received."
                ]
            },
            {
                "heading": "Notifications and audio-input activity",
                "paragraphs": [
                    "Prayer notifications and advance reminders are enabled by default in the current app. If notification permission has not yet been decided, Qum may ask when a prayer approaches or arrives, or when you enable notifications in Settings › Sounds. You can turn them off in Qum or deny or revoke notification permission in System Settings.",
                    "These are local notifications, not marketing messages or notifications sent through a Qum server. Denying notification permission prevents OS notifications; the notch display and in-app prayer panels can still operate. Adhan playback has its own setting and requires Qum to be running.",
                    "When Stay silent in meetings is enabled, Qum checks whether another process is using audio input to decide whether to suppress adhan sound. Prayer check-ins also consult audio-input activity to avoid interrupting you, independently of that adhan setting. The check can read process identifiers and bundle identifiers locally. Qum does not record microphone audio, request microphone access for this check, or upload or retain the queried identifiers and activity."
                ]
            },
            {
                "heading": "Apple, this website and support",
                "paragraphs": [
                    "The app has no Qum account or developer-operated backend for prayer history, analytics or crash reporting. Apple provides location and Maps services and handles Mac App Store purchases or downloads. Qum does not receive your Apple Account credentials or payment details.",
                    "This website does not set cookies, run analytics or show advertising. Its display code uses browser local storage for a theme preference (ui-theme); language controls, when available, may store a language preference (qum.lang). You can clear these through your browser’s website-data controls.",
                    "The infrastructure serving hayyaqum.com receives ordinary web requests, including an IP address, request time and requested page, and may retain server logs. Third-party sites you open, including Apple and recording-license pages, handle those visits under their own policies. The site’s styles also reference Google Fonts for Arabic typography. If your browser loads that service, Google receives the font request and associated connection data under the Google Privacy Policy.",
                    "If you email hello@hayyaqum.com, the support inbox and email providers receive your email address, message and any attachments you choose to send. Do not send prayer history, precise location or other sensitive details unless needed for your request. Support email is separate from the app’s local prayer store; it is not an account or a cloud backup of that store."
                ]
            },
            {
                "heading": "Tracking",
                "paragraphs": [
                    "Qum does not track you across apps or websites, show ads or sell data. It does not request Apple’s tracking permission. Local prayer history is not uploaded by Qum."
                ]
            },
            {
                "heading": "Keeping and deleting",
                "paragraphs": [
                    "There is no Qum account or developer-hosted copy of your prayer history. The current app does not provide an erase-all-local-data control. Local history may include completion state, missed or made-up status, scheduled times and check-in timestamps. It has no automatic expiry.",
                    "Unmarking a prayer changes its completion status; it does not necessarily erase the underlying record or related timestamps. Switching to a typed city or revoking Location Services stops new automatic fixes but does not necessarily erase cached coordinates, saved places or calibration.",
                    "Deleting the Qum app does not guarantee that its local data container, preferences or backup copies are removed. To remove local data, quit Qum and remove its associated data separately; if you need help identifying those files, contact hello@hayyaqum.com. Do not send us the files or your prayer history. Copies in backups must be managed separately using your backup system.",
                    "You can clear website preferences in your browser and contact hello@hayyaqum.com about support-email data. These actions do not delete requests already received by Apple or records controlled by hosting and email providers; their policies and applicable obligations govern those records."
                ]
            },
            {
                "heading": "Security",
                "paragraphs": [
                    "Qum stores its app data in its macOS sandbox. The sandbox is an access boundary, not a promise that a lost, compromised or backed-up Mac has no readable copy. Protect your Mac and its backups. Website hosting and support email are separate from local app storage."
                ]
            },
            {
                "heading": "Children",
                "paragraphs": [
                    "Qum is not designed for children and is not in Apple’s Kids Category. It has no account-registration or advertising system. The location, local-storage, website and support practices described here still apply when the app or site is used; the absence of an account is not a guarantee that no data about a child can be processed."
                ]
            },
            {
                "heading": "Changes and contact",
                "paragraphs": [
                    "This policy took effect on 13 November 2026. The current notice is available on this page and through Settings › About › Privacy Policy. Changes to these practices will be reflected here. Qum has no account email list for notices.",
                    "Questions about privacy or local-data removal: write to hello@hayyaqum.com."
                ]
            }
        ]
    },
    terms: {
        title: "Terms of Use",
        sub: "What Qum is, what it isn't, and the rules that come with it.",
        lastUpdated: "Last Updated",
        lastUpdatedDate: TERMS_LAST_UPDATED_EN,
        intro: ['These Terms of Use (“Terms”) govern use of the Qum Mac app (the “App”) and related information on hayyaqum.com. By downloading, installing, or using Qum, you agree to these Terms. If you do not agree, stop using the App and uninstall it.'],
        disclaimerLabel: "Utility & Location Disclaimer:",
        disclaimerAria: "Utility and location disclaimer",
        disclaimerParagraphs: [
            "Qum is a personal Mac utility for prayer times, Qibla direction, and local reminders for people who already keep salah in the day. It is NOT a religious authority, preaching app, fatwa service, or source of religious instruction.",
            "Automatic Location Services are how Qum gets precise prayer times and Qibla for where this Mac is, because those times differ from place to place; if you decline Location, you can type a city instead. Calculated times depend on the method you choose and are not a guarantee that they match every mosque or scholarly timetable — follow a local authority when that is what you intend.",
        ],
        sections: [
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
                    "Prayer-time and Qibla calculations run on your Mac. Search fragments go to Apple MapKit as you type; selecting a result resolves its coordinate and time zone. Automatic coordinates may go to Apple for place names. Qum does not use location for advertising or tracking. Stopping automatic location does not erase previously saved places or coordinates.",
                    "On first setup, Qum asks for Location Services when you choose automatic location. With an existing grant, launch and periodic refreshes can request updated fixes. Declining or revoking permission stops new automatic fixes; a previously saved place or coordinate may remain. You can select a city in Settings › Prayer times; a new search requires internet access.",
                    `The app explains that location is used to calculate prayer times and Qibla direction.`,
                    "Data practices for location are also described in the Privacy Policy.",
                ],
            },
            {
                heading: "4. Notifications and related permissions",
                paragraphs: [
                    "Prayer notifications and advance reminders are enabled by default. Qum may request notification permission when a prayer approaches or arrives, or when you enable notifications in Settings › Sounds. Denying OS notifications does not disable the notch or in-app panels. Adhan has a separate control and requires the app to be running. You can disable reminders; these are not marketing messages.",
                    "When Stay silent in meetings is enabled, local audio-input activity is used to suppress adhan sound. Prayer check-ins also use that activity to defer interruptions, independently of the adhan setting. Qum may read process and bundle identifiers locally, but does not record microphone audio or upload or retain the queried identifiers and activity.",
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
                paragraphs: ["The App’s name, design, icons, and software are protected by applicable intellectual property laws. These Terms do not grant ownership of the App."],
            },
            {
                heading: "7. Third-party services",
                paragraphs: ["Qum has no developer-hosted account or prayer-history service. Apple provides location and MapKit search and handles Mac App Store purchases; macOS manages local notifications. Apple’s terms and privacy practices apply to its services. Website hosting and support email process requests and messages separately, as described in the Privacy Policy. Qum does not receive Apple Account credentials or payment details."],
            },
            {
                heading: "8. Disclaimer of warranties",
                paragraphs: ['The App is provided on an “AS IS” and “AS AVAILABLE” basis, without warranties of any kind, express or implied, to the maximum extent permitted by law. Qum does not warrant that calculated prayer times or Qibla are error-free, uninterrupted, or suitable for every religious, legal, or personal purpose.'],
            },
            {
                heading: "9. Limitation of liability",
                paragraphs: ["To the maximum extent permitted by law, the publisher of Qum will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss arising from reliance on calculated times, Qibla direction, reminders, or inability to use the App."],
            },
            {
                heading: "10. Privacy",
                paragraphs: ["How Qum uses data is described in the Privacy Policy. If these Terms and the Privacy Policy ever conflict on a data practice, the Privacy Policy controls for that practice."],
            },
            {
                heading: "11. Changes",
                paragraphs: [`These Terms took effect on ${TERMS_LAST_UPDATED_EN}. If they change, this page and Settings › About will say so. Qum cannot email you about a change, because it has no account.`],
            },
            {
                heading: "12. Contact",
                paragraphs: [`Questions about these Terms: write to ${SUPPORT_EMAIL}.`],
            },
        ],
    },
    about: {
        kicker: "Qum",
        title: "What Qum is",
        lede: "Qum is a Mac app that puts the next prayer, the Qibla, and the adhan in the MacBook notch, so the workday still has salah in it. It does not require an account.",
        whatItIs: {
            heading: "What Qum is …",
            body: "Qum is a Mac app that puts the next prayer, the Qibla, and the adhan in the MacBook notch, so the workday still has salah in it. It does not require an account.",
        },
        whoFor: { heading: "Who it is for …", body: "A MacBook with a notch: MacBook Pro (2021 or later) or MacBook Air (2022 or later). Other Macs have no notch for Qum to sit in." },
        whatItDoes: { heading: "What it does …" },
        prayerTimes: {
            heading: "Prayer times",
            body1: "Prayer times are calculated on your Mac. Search fragments go to Apple MapKit as you type, and selected places and automatic coordinates may be sent to Apple for resolution or place names. Website requests and support messages are described separately in the Privacy Policy.",
            methodsLabel: (methods) => `Calculation methods: ${methods}.`,
            asrLabel: (asr) => `Asr can be ${asr}.`,
        },
        qiblaSection: { heading: "Qibla on a Mac", body: "No Mac can measure heading. There is no magnetometer. Qum solves the bearing as geometry and shows Qibla direction from the desk after a one-time calibration. The direction stays in the notch." },
        whatItIsNot: {
            heading: "What it is not",
            body1: "Qum is not an iPhone or iPad app. It is not a menu-bar countdown that runs on every Mac. Menu-bar prayer apps keep a timer in the status bar; Qum uses the notch on notched MacBooks, plays the adhan there, and keeps the streak on this Mac. If the Mac has no notch, Qum is the wrong app.",
            body2: "Qum does not run analytics, show ads, or track you. The prayer log stays on this Mac. Location is optional.",
        },
    },
    aria: {
        skipToContent: "Skip to content",
        logo: "Qum",
        primaryNav: "Primary",
    },
};

/* ---------------- ARABIC ---------------- */

const ar: SiteCopy = {
    dir: "rtl",
    langLabel: "العربية",
    otherLangLabel: "English",
    nav: {
        about: "عن التطبيق",
        privacy: "الخصوصية",
        comingSoon: "قريباً",
        downloadLabel: "التنزيل من متجر تطبيقات Mac",
        downloadLabelShort: "تنزيل",
        macAppStore: "متجر تطبيقات Mac",
        toggleAria: "التبديل إلى الإنجليزية",
    },
    footer: {
        tagline: "أوقات الصلاة. في الحزّ.",
        about: "عن التطبيق",
        privacy: "الخصوصية",
        terms: "الشروط",
        copyright: "© 2026",
        legalAria: "القانوني",
    },
    home: {
        beta: "في مرحلة التجربة حالياً",
        downloadCTA: "تنزيل لـ Mac",
        hero: { headlineA: "أوقات الصلاة.", headlineB: "في الحزّ.", sub: "يضع Qum الصلاة التالية والقبلة والأذان في حزّ الـ MacBook. بهدوء، خمس مرّات في اليوم." },
        always: { headlineA: "الصلاة التالية،", headlineB: "ظاهرة دائماً.", sub: "عدّ تنازلي حتى المغرب وأنت تعمل. الجمعة يوم الجمعة. الشروق والغروب في نَفَس واحد." },
        qibla: { headlineA: "القبلة،", headlineB: "من Mac الخاص بك.", sub: "لا يحتوي Mac على بوصلة. يحسب Qum الاتجاه هندسياً — عايِر مرّة واحدة ويبقى الاتجاه ثابتاً." },
        adhan: { headlineA: "الأذان في", headlineB: "اللحظة الصحيحة.", sub: "اختَر قارئاً تعرفه. يشغّله الحزّ في لحظة دخول المغرب، ثم يتنحّى جانباً." },
        quietly: { headlineA: "بهدوء", headlineB: "في يومك.", sub: "لا شيء في الـ Dock، ولا إشعارات مزعجة. يقرأ Qum حال الميكروفون وينتظر." },
        bookend: { headline: "أوقات الصلاة. في الحزّ." },
        demoAriaLabel: "عرض تفاعلي",
    },
    homeV2: {
        wordmark: "Qum",
        wordmarkParenthetical: "(قُمْ)",
        langShort: "AR",
        hero: {
            headlineA: "هيّا قم،",
            headlineB: "خمس مرّاتٍ في اليوم، قف على قدميك.",
            sub: "يضع Qum الصلاةَ التالية والقبلة والأذان في حزّ الـ MacBook، حتى يبقى في يوم عملك صلاة.",
            requirement: "يتطلّب MacBook به حزّ:\nPro (2021 فأحدث) أو Air (2022 فأحدث).",
        },
        downloadCTA: "تنزيل من Mac App Store",
        downloadCTAShort: "تنزيل لـ Mac",
        sections: [
            { id: "expand",   headline: "انقر عليَّ، لأفتح لك اليوم كلّه.",            sub: "حين تريد أكثر من لمحة، مرّر فوقي وسيُفتح لك اليوم كلّه تحت الحزّ." },
            { id: "streak",   headline: "احفظ الأوقات، وأنا أحفظ لك العدَّ.",          sub: "أعدّ لك بهدوء منذ الاثنين. أربعُ صلواتٍ في وقتها، أربعُ خطواتٍ صغيرة من البرّ." },
            { id: "qibla",    headline: "أينما حللت، سأكون قد عرفت.",                   sub: "أقلعتَ من الدوحة وستهبط في لندن؛ أوقات الصلاة والقبلة ستكون في انتظارك." },
            { id: "adhan",    headline: "حين يحين الوقت، أُنادي.",                     sub: "الكلماتُ ذاتها التي نادت للصلاة أربعةَ عشر قرناً، تصلك الآن بجوار لوحة مفاتيحك." },
            { id: "reminder", headline: "قبلها بعشرِ دقائق، أهمسُ في أذنك.",           sub: "كان الناسُ قديماً يراقبون الشمس لهذا الرُّبع. اليوم يسكن تذكيرٌ قبل كلّ صلاةٍ في حزّك." },
        ],
        bookend: {
            wordmark: "Hayya Qum · هَيَّا قُمْ",
            sub: "صُنع لأيّام العمل التي ما زالت فيها صلاة.",
            fine: "لا حساب، ولا إعلانات، ولا تتبُّع. سجلّ صلاتك يبقى على جهازك. تحديد الموقع اختياري.\nيتطلّب MacBook به حزّ. MacBook Pro (2021 فأحدث) أو MacBook Air (2022 فأحدث).",
        },
        footer: {
            copyright: "جميع الحقوق محفوظة © 2026 Qum.",
            about: "عن Qum",
            privacy: "سياسة الخصوصية",
            terms: "شروط الاستخدام",
        },
    },
    features: [
        { id: "reminder", label: "تذكير قبل كلّ صلاة", caption: "قبل كلّ صلاة، يذكّرك Qum في الحزّ. وعند الوقت، يُرفع الأذان.", overlayTitle: "أوقات الصلاة التي تسكن في الحزّ" },
        { id: "adhan", label: "الأذان، يُرفع على Mac", caption: "حين يحين الوقت، يُرفع الأذان من الحزّ. أكّد بـ «صلّيت»." },
        { id: "streak", label: "سلسلة صلاة على Mac", caption: "علّم كلّ صلاة بـ «صلّيت». سلسلتك تبقى على هذا الـ Mac." },
        { id: "qibla", label: "اتجاه القبلة من مكتبك", caption: "يعرض Qum اتجاه القبلة من مكتبك. عايِر مرّة واحدة، ويبقى الاتجاه في الحزّ." },
        { id: "theme", label: "مظهر يتبع كلّ صلاة", caption: "يتبع الحزّ تبدّل اليوم. الفجر لا يشبه المغرب." },
    ],
    player: {
        play: (name) => `تشغيل ${name}`,
        pause: (name) => `إيقاف ${name}`,
        demoLabel: (name, state) => `عرض ${name}، ${state}`,
        playing: "قيد التشغيل",
        paused: "متوقّف",
        seek: (name) => `تمرير ${name}`,
        playbackSpeed: "سرعة التشغيل",
        speedLabel: (rate) => `سرعة التشغيل، ${rate}×`,
        ariaSection: "المزايا",
    },
    ui: {
        today: "اليوم",
        hijriDate: "الإثنين 17 ربيع الآخِر",
        prayers: { fajr: "الفجر", dhuhr: "الظهر", asr: "العصر", maghrib: "المغرب", isha: "العشاء" },
        nextMaghrib: "المغرب خلال",
        sunrise: (t) => `الشروق ${t}`,
        sunset: (t) => `الغروب ${t}`,
        zuhrNote: (t) => `يدخل الظهر عند الزوال المحلّي · ${t}`,
        friday: "الجمعة · جمعة",
        khutbah: "الخطبة",
        khutbahWhen: "12:42 في المسجد المحلّي",
        set: "مضبوط",
        qibla: "القبلة",
        fromNorth: "من الشمال",
        facing: "أنت تواجه",
        southeast: "جنوب شرق",
        offQibla: "°6 عن القبلة · التف يميناً",
        mecca: "مكّة",
        meccaDistance: "4٬872 كم",
        adhan: "الأذان",
        playing: "قيد التشغيل",
        notifTitle: "Qum",
        notifSubtitle: "المغرب · 17:08",
        notifHint: "انقر لتأكيد «صلّيت»",
        notifWhen: "الآن",
        staySilent: "اكتم الصوت في الاجتماعات",
        staySilentHint: "يوقف الأذان حين يكون الميكروفون مشغولاً",
        zoomMic: "Zoom يستخدم الميكروفون",
        calculation: "طريقة الحساب",
        asr: "العصر",
        shafi: "شافعي",
        hanafi: "حنفي",
        menuHeaderNext: "التالي",
        menuIPrayedAsr: "صلّيت · العصر",
        notchNext: "التالي · المغرب",
        notchCountdown: "17:08 · خلال 42 د",
        notchQibla: "القبلة °114",
    },
    privacy: {
        "title": "سياسة الخصوصية",
        "sub": "بيانات التطبيق المحلّية وخدمات Apple والموقع الإلكتروني وخياراتك.",
        "lastUpdated": "آخر تحديث",
        "lastUpdatedDate": PRIVACY_LAST_UPDATED_AR,
        "tableHeaders": {
            "data": "نوع البيانات",
            "why": "السبب …؟",
            "shared": "يُشارَك مع …",
            "kept": "مدة الحفظ"
        },
        "tableCaption": "البيانات التي يستخدمها Qum، والغرض منها، ومن يتلقّاها، ومدة حفظها",
        "summary": [
            "لا يتطلّب Qum حساباً. تجري حسابات أوقات الصلاة والقبلة على جهاز Mac، ويُحفَظ سجلّ الصلاة والإعدادات والأماكن المختارة ومعايرة القبلة محلّياً. تعالج خدمات Apple طلبات الموقع التلقائي والبحث عن الأماكن. وللموقع الإلكتروني وبريد الدعم تدفّقات بيانات منفصلة موضّحة أدناه.",
            "لا يُجري Qum تحليلات، ولا يعرض إعلانات، ولا يتعقّبك بين التطبيقات والمواقع. لا يضع هذا الموقع ملفات ارتباط ولا يُجري تحليلات؛ ونوضّح أدناه تفضيلات المتصفّح وسجلات الاستضافة المعتادة."
        ],
        "sections": [
            {
                "heading": "البيانات التي يستخدمها Qum …",
                "paragraphs": [
                    "لا يطلب التطبيق التسجيل أو تقديم تفاصيل الدفع. يميّز الجدول بين سجلات التطبيق المحلّية وطلبات Apple وزيارات الموقع والرسائل التي تختار إرسالها إلى الدعم."
                ],
                "table": [
                    {
                        "data": "الموقع التلقائي (اختياري)",
                        "why": "أوقات الصلاة والقبلة وأسماء الأماكن",
                        "sharedWith": "خدمات موقع Apple؛ وقد تُرسَل الإحداثيات للحصول على اسم المكان",
                        "retention": "قد تبقى نسخة محلّية بعد اختيار مدينة مكتوبة أو إلغاء الإذن، إلى أن تُستبدَل أو تُحذَف بيانات التطبيق المحلّية"
                    },
                    {
                        "data": "البحث عن الأماكن والمدينة المختارة (اختياري)",
                        "why": "اقتراحات أثناء الكتابة وتحديد إحداثيات المكان المختار ومنطقته الزمنية",
                        "sharedWith": "خدمات البحث في Apple MapKit",
                        "retention": "يُحفَظ نص البحث في الذاكرة؛ ويُحفَظ المكان المختار محلّياً حتى يُستبدَل أو تُحذَف بيانات التطبيق. تعالج Apple الطلبات وفق سياستها"
                    },
                    {
                        "data": "سجلّ الصلاة",
                        "why": "الصلوات المؤدّاة والفائتة والمقضية والسلسلة والمتابعة وإيقاف التذكيرات المتعلّقة بالصلاة",
                        "sharedWith": "لا يرفعه Qum",
                        "retention": "يُحفَظ محلّياً دون انتهاء تلقائي. إلغاء علامة الأداء لا يحذف بالضرورة السجلّ أو توقيتاته المرتبطة"
                    },
                    {
                        "data": "الإعدادات والمعايرة",
                        "why": "طريقة الحساب والمظهر والصوت والتذكيرات واتجاه المكتب",
                        "sharedWith": "لا يرفعها Qum",
                        "retention": "تُحفَظ محلّياً حتى تُغيَّر أو تُحذَف بيانات التطبيق. قد تبقى المعايرة محفوظة بعد أن تصبح قديمة"
                    },
                    {
                        "data": "نشاط مُدخل الصوت",
                        "why": "كتم الأذان في الاجتماعات عند تفعيل الخيار، وتأجيل المتابعة أثناء استخدام تطبيق آخر لمُدخل الصوت",
                        "sharedWith": "لا يرفعه Qum",
                        "retention": "يُستعلَم عنه محلّياً؛ ولا يحتفظ Qum بمعرّفات العمليات أو حالة مُدخل الصوت الناتجة عن الاستعلام"
                    },
                    {
                        "data": "الإشعارات المحلّية",
                        "why": "تنبيهات الصلاة وتذكيرات السلسلة",
                        "sharedWith": "نظام الإشعارات في macOS",
                        "retention": "تُدار التنبيهات المنتظرة محلّياً وتُلغى أو تُستبدَل عند تغيّر الخطة؛ وقد تبقى التنبيهات المسلّمة في مركز الإشعارات"
                    },
                    {
                        "data": "تفضيلات الموقع وطلباته",
                        "why": "عرض الموقع وتذكّر تفضيلات العرض المتاحة",
                        "sharedWith": "تخزين المتصفّح على جهازك؛ وتتلقّى بنية الاستضافة الطلبات؛ وGoogle عند تحميل خدمة خطوطها",
                        "retention": "تبقى تفضيلات المتصفّح حتى تُمسَح أو تُغيَّر. تعتمد مدة حفظ سجلات الاستضافة على المزوّد"
                    },
                    {
                        "data": "رسائل الدعم (اختيارية)",
                        "why": "الرد على الأسئلة المرسلة إلى hello@hayyaqum.com",
                        "sharedWith": "صندوق بريد الدعم ومزوّدو البريد الإلكتروني",
                        "retention": "قد تبقى الرسائل والمرفقات في سجلات البريد والنسخ الاحتياطية. تواصل مع الدعم بشأن الحفظ أو الحذف"
                    }
                ]
            },
            {
                "heading": "الموقع والبحث عن الأماكن",
                "paragraphs": [
                    "خدمات الموقع التلقائية اختيارية وتُستخدم لأوقات الصلاة والقبلة. عند الإعداد الأول، يطلب Qum إذن الموقع حين تختار الموقع التلقائي. وإذا سبق أن منحته الإذن، فقد تطلب عمليات التشغيل والتحديثات الدورية اللاحقة موقعاً محدّثاً.",
                    "إذا رفضت الإذن أو ألغيته، فلن يحصل Qum على مواقع تلقائية جديدة. وقد تبقى الإحداثيات أو الأماكن المحفوظة سابقاً على جهازك. يمكنك اختيار مدينة بدلاً من ذلك من إعدادات ‹ أوقات الصلاة. يتطلّب البحث عن مدينة جديدة اتصالاً بالإنترنت.",
                    "عند الكتابة في حقل المدينة، يرسل Qum أجزاء نص البحث إلى Apple MapKit للحصول على اقتراحات قبل اختيار نتيجة. وعند اختيار نتيجة، يُرسَل طلب آخر لتحديد إحداثياتها ومنطقتها الزمنية. وقد يُرسِل Qum إحداثياً تلقائياً إلى Apple للحصول على اسم المكان. لا يستخدم Qum هذه الطلبات للإعلانات أو التعقّب.",
                    "تعالج Apple هذه الطلبات على أنظمتها، وربما خارج بلدك، وفق سياسة خصوصية Apple وإشعارات خدمات الموقع والخرائط. لا يتحكّم Qum في مدة حفظ Apple للطلبات التي تلقّتها."
                ]
            },
            {
                "heading": "الإشعارات ونشاط مُدخل الصوت",
                "paragraphs": [
                    "إشعارات الصلاة والتذكيرات المسبقة مفعّلة افتراضياً في التطبيق الحالي. إذا لم تكن قد قرّرت إذن الإشعارات، فقد يطلبه Qum عند اقتراب صلاة أو حلول وقتها، أو عند تفعيل الإشعارات من إعدادات ‹ الأصوات. يمكنك إيقافها في Qum أو رفض الإذن أو إلغاؤه من إعدادات النظام.",
                    "هذه إشعارات محلّية، وليست رسائل تسويقية أو إشعارات يرسلها خادم Qum. يمنع رفض الإذن إشعارات النظام؛ لكن عرض الحزّ ولوحات الصلاة داخل التطبيق قد تستمر في العمل. لتشغيل الأذان إعداد مستقل، ويلزم أن يبقى Qum قيد التشغيل.",
                    "عند تفعيل «اكتم الصوت في الاجتماعات»، يتحقّق Qum ممّا إذا كانت عملية أخرى تستخدم مُدخل الصوت ليقرّر كتم الأذان. وتستعلم متابعة الصلاة أيضاً عن نشاط مُدخل الصوت لتجنّب مقاطعتك، بصورة مستقلة عن إعداد كتم الأذان. قد يقرأ هذا التحقّق معرّفات العمليات والحزم محلّياً. لا يسجّل Qum صوت الميكروفون، ولا يطلب إذن الميكروفون لهذا التحقّق، ولا يرفع أو يحتفظ بالمعرّفات والنشاط الناتجين عنه."
                ]
            },
            {
                "heading": "Apple والموقع الإلكتروني والدعم",
                "paragraphs": [
                    "لا يحتوي التطبيق على حساب Qum أو خدمة خلفية يديرها المطوّر لسجلّ الصلاة أو التحليلات أو تقارير الأعطال. توفّر Apple خدمات الموقع والخرائط وتتولّى الشراء أو التنزيل من متجر تطبيقات Mac. لا يتلقّى Qum بيانات دخول حساب Apple أو تفاصيل الدفع.",
                    "لا يضع هذا الموقع ملفات ارتباط، ولا يُجري تحليلات، ولا يعرض إعلانات. تستخدم شيفرة العرض التخزين المحلّي للمتصفّح لتفضيل المظهر (ui-theme)؛ وقد تحفظ أدوات اللغة، عند إتاحتها، تفضيلاً للغة (qum.lang). يمكنك مسحها من أدوات بيانات المواقع في متصفّحك.",
                    "تتلقّى البنية التي تستضيف hayyaqum.com طلبات الويب المعتادة، ومنها عنوان IP ووقت الطلب والصفحة المطلوبة، وقد تحتفظ بسجلات الخادم. وتعالج المواقع الخارجية التي تفتحها، بما فيها Apple وصفحات تراخيص التسجيلات، زياراتك وفق سياساتها. وتشير أنماط الموقع أيضاً إلى Google Fonts للخط العربي. إذا حمّل متصفّحك هذه الخدمة، تتلقّى Google طلب الخط وبيانات الاتصال المرتبطة به وفق سياسة خصوصية Google.",
                    "إذا راسلت hello@hayyaqum.com، يتلقّى صندوق الدعم ومزوّدو البريد عنوان بريدك ورسالتك والمرفقات التي تختار إرسالها. لا ترسل سجلّ الصلاة أو موقعاً دقيقاً أو تفاصيل حسّاسة أخرى ما لم تلزم لطلبك. بريد الدعم منفصل عن سجلّ التطبيق المحلّي؛ وليس حساباً أو نسخة سحابية من السجلّ."
                ]
            },
            {
                "heading": "التعقّب",
                "paragraphs": [
                    "لا يتعقّبك Qum بين التطبيقات والمواقع، ولا يعرض إعلانات أو يبيع البيانات. ولا يطلب إذن التعقّب من Apple. لا يرفع Qum سجلّ الصلاة المحلّي."
                ]
            },
            {
                "heading": "الاحتفاظ والحذف",
                "paragraphs": [
                    "لا يوجد حساب Qum أو نسخة من سجلّ الصلاة يستضيفها المطوّر. لا يوفّر التطبيق الحالي أداة لحذف جميع البيانات المحلّية. قد يتضمّن السجلّ حالة الأداء والصلوات الفائتة أو المقضية والأوقات المجدولة وتوقيتات المتابعة، وليس له انتهاء تلقائي.",
                    "إلغاء علامة أداء صلاة يغيّر حالتها؛ ولا يمحو بالضرورة السجلّ الأساسي أو توقيتاته المرتبطة. إيقاف الموقع التلقائي أو إلغاء إذنه يمنع الحصول على مواقع جديدة، لكنه لا يمحو بالضرورة الإحداثيات المخزّنة أو الأماكن المحفوظة أو المعايرة.",
                    "حذف تطبيق Qum لا يضمن إزالة حاوية بياناته المحلّية أو تفضيلاته أو نسخه الاحتياطية. لإزالة البيانات المحلّية، أغلق Qum وأزل بياناته المرتبطة بصورة منفصلة؛ وإن احتجت المساعدة في تحديد تلك الملفات، راسل hello@hayyaqum.com. لا ترسل إلينا الملفات أو سجلّ الصلاة. وتُدار نسخ البيانات الاحتياطية بصورة منفصلة في نظام النسخ الاحتياطي لديك.",
                    "يمكنك مسح تفضيلات الموقع من المتصفّح والتواصل مع hello@hayyaqum.com بشأن بيانات بريد الدعم. لا تحذف هذه الإجراءات الطلبات التي تلقّتها Apple أو السجلات التي يتحكّم فيها مزوّدو الاستضافة والبريد؛ فتخضع تلك السجلات لسياساتهم والتزاماتهم المطبّقة."
                ]
            },
            {
                "heading": "الأمان",
                "paragraphs": [
                    "يحفظ Qum بيانات التطبيق داخل حاويته المعزولة في macOS. هذه الحماية حدّ للوصول وليست ضماناً لعدم وجود نسخة مقروءة على جهاز مفقود أو مخترق أو منسوخ احتياطياً. احمِ جهاز Mac ونسخه الاحتياطية. استضافة الموقع وبريد الدعم منفصلان عن التخزين المحلّي للتطبيق."
                ]
            },
            {
                "heading": "الأطفال",
                "paragraphs": [
                    "لم يُصمَّم Qum للأطفال، وليس ضمن فئة الأطفال لدى Apple، ولا يحتوي على تسجيل حسابات أو نظام إعلانات. تظل ممارسات الموقع والتخزين المحلّي والموقع الإلكتروني والدعم الموضّحة هنا منطبقة عند الاستخدام؛ فغياب الحساب لا يضمن عدم معالجة أي بيانات تتعلّق بطفل."
                ]
            },
            {
                "heading": "التغييرات والتواصل",
                "paragraphs": [
                    "بدأ العمل بهذه السياسة في 13 نوفمبر 2026. تتاح النسخة الحالية في هذه الصفحة ومن إعدادات ‹ عن ‹ سياسة الخصوصية. ستنعكس التغييرات على الممارسات هنا. لا يملك Qum قائمة بريدية للحسابات لإرسال الإشعارات.",
                    "لأسئلة الخصوصية أو إزالة البيانات المحلّية: راسل hello@hayyaqum.com."
                ]
            }
        ]
    },
    terms: {
        title: "شروط الاستخدام",
        sub: "ما هو Qum، وما ليس به، والقواعد التي تصحبه.",
        lastUpdated: "آخر تحديث",
        lastUpdatedDate: TERMS_LAST_UPDATED_AR,
        intro: ['تحكم شروط الاستخدام هذه (ويُشار إليها بـ «الشروط») استخدامَ تطبيق Qum على Mac (ويُشار إليه بـ «التطبيق») والمعلومات المتعلّقة به على hayyaqum.com. بتنزيل التطبيق أو تثبيته أو استخدامه، فإنّك توافق على هذه الشروط. وإن لم توافق، توقّف عن استخدام التطبيق وألغِ تثبيته.'],
        disclaimerLabel: "إخلاء مسؤولية الأداة والموقع:",
        disclaimerAria: "إخلاء مسؤولية الأداة والموقع",
        disclaimerParagraphs: [
            "Qum أداة Mac شخصية لأوقات الصلاة واتجاه القبلة والتذكيرات المحلّية لمن يحفظون الصلاة في يومهم. ليس سلطةً دينية، ولا تطبيق دعوة، ولا خدمة فتوى، ولا مصدر تعليم ديني.",
            "خدمات الموقع التلقائية هي الوسيلة للحصول على أوقات صلاة وقبلة دقيقة لمكان هذا الـ Mac، لأنّ هذه الأوقات تختلف بين الأماكن؛ وإن رفضت الموقع، فيمكنك كتابة مدينة بدلاً من ذلك. تعتمد الأوقات المحسوبة على الطريقة التي تختارها، وليست ضماناً لمطابقة كلّ مسجد أو جدول علمي — اتّبع السلطة المحلّية إن كان ذلك مرادك.",
        ],
        sections: [
            {
                heading: "1. ما هو Qum",
                paragraphs: [
                    "Qum أداة شخصية لأجهزة MacBook التي فيها حزّ. يحسب ويعرض أوقات الصلاة واتجاه القبلة، وتذكيرات محلّية اختيارية، وسجلّ صلاة خاصّاً على الجهاز.",
                    "Qum ليس مسجداً، ولا مدرسة، ولا جمعية، ولا سلطة دينية، ولا منصّة دعوة. لا يُصدر أحكاماً دينية، ولا يُدرّس العقيدة، ولا يستضيف خُطَباً، ولا يحلّ محلّ إمام محلّي أو جدول مسجد أو جدول علمي منشور.",
                ],
            },
            {
                heading: "2. دقّة أوقات الصلاة والقبلة",
                paragraphs: [
                    "أوقات الصلاة والقبلة حسابات فلكية وجغرافية تجري على هذا الـ Mac. تعتمد على المكان المستخدم (خدمات الموقع التلقائية أو مدينة تكتبها)، وعلى طريقة الحساب والاصطلاحات التي تختارها في الإعدادات، وعلى التاريخ مع ساعة هذا الـ Mac ومنطقته الزمنية.",
                    "تختلف الأوقات بحسب المكان. وجود الموقع التلقائي يُتيح للأوقات والقبلة متابعة مكان هذا الـ Mac. لا يضمن Qum أنّ الوقت المحسوب يطابق جدول كلّ مسجد أو كلّ ممارسة إقليمية. وحيث تنشر سلطة محلّية أوقاتاً مختلفة، اتّبع تلك السلطة إن كان ذلك مرادك.",
                ],
            },
            {
                heading: "3. خدمات الموقع",
                paragraphs: [
                    "يُستخدم الموقع فقط لحساب أوقات الصلاة واتجاه القبلة للمكان المستخدم. هذا الاستخدام ذو صلة مباشرة بوظائف التطبيق.",
                    "تجري حسابات الأوقات والقبلة على جهاز Mac. تُرسَل أجزاء البحث إلى Apple MapKit أثناء الكتابة، ويُرسَل طلب لتحديد إحداثيات النتيجة المختارة ومنطقتها الزمنية. وقد تُرسَل الإحداثيات التلقائية إلى Apple للحصول على اسم المكان. لا يستخدم Qum الموقع للإعلانات أو التعقّب. إيقاف الموقع التلقائي لا يمحو الأماكن أو الإحداثيات المحفوظة سابقاً.",
                    "عند الإعداد الأول، يطلب Qum إذن الموقع حين تختار الموقع التلقائي. وإذا سبق منح الإذن، فقد تطلب عمليات التشغيل والتحديثات الدورية مواقع محدّثة. الرفض أو إلغاء الإذن يمنع المواقع التلقائية الجديدة؛ وقد يبقى مكان أو إحداثي محفوظ سابقاً. يمكنك اختيار مدينة من إعدادات ‹ أوقات الصلاة؛ ويتطلّب البحث الجديد اتصالاً بالإنترنت.",
                    `يوضّح التطبيق أنّ الموقع يُستخدم لحساب أوقات الصلاة واتجاه القبلة.`,
                    "ممارسات بيانات الموقع موصوفة أيضاً في سياسة الخصوصية.",
                ],
            },
            {
                heading: "4. الإشعارات والأذونات ذات الصلة",
                paragraphs: [
                    "إشعارات الصلاة والتذكيرات المسبقة مفعّلة افتراضياً. قد يطلب Qum إذن الإشعارات عند اقتراب صلاة أو حلول وقتها، أو عند تفعيلها من إعدادات ‹ الأصوات. رفض إشعارات النظام لا يعطّل الحزّ أو اللوحات داخل التطبيق. للأذان إعداد مستقل، ويلزم أن يبقى التطبيق قيد التشغيل. يمكنك إيقاف التذكيرات؛ وهي ليست رسائل تسويقية.",
                    "عند تفعيل «اكتم الصوت في الاجتماعات»، يُستخدم نشاط مُدخل الصوت محلّياً لكتم الأذان. وتستخدم متابعة الصلاة هذا النشاط أيضاً لتأجيل المقاطعات، بصورة مستقلة عن إعداد الأذان. قد يقرأ Qum معرّفات العمليات والحزم محلّياً، لكنه لا يسجّل صوت الميكروفون ولا يرفع أو يحتفظ بالمعرّفات والنشاط الناتجين عن الاستعلام.",
                ],
            },
            {
                heading: "5. الاستخدام المقبول",
                paragraphs: ["توافق على ألّا تقوم بالهندسة العكسية للتطبيق، ولا بفكّ ترجمته، ولا بمحاولة استخراج شيفرته المصدرية إلّا حيث يُجيز القانون؛ ولا بتجاوز حمايات الأمان أو الـ sandbox أو العبث بها؛ ولا باستخدام التطبيق لأيّ غرض غير قانوني."],
            },
            {
                heading: "6. الملكية الفكرية",
                paragraphs: ["اسم التطبيق وتصميمه ورموزه وبرمجيّاته محميّة بقوانين الملكية الفكرية المطبّقة. لا تمنح هذه الشروط ملكية التطبيق."],
            },
            {
                heading: "7. خدمات الطرف الثالث",
                paragraphs: ["لا يوفّر Qum حساباً أو خدمة لسجلّ الصلاة يستضيفها المطوّر. توفّر Apple خدمات الموقع والبحث في MapKit وتتولّى مشتريات متجر تطبيقات Mac؛ ويدير macOS الإشعارات المحلّية. تطبّق شروط Apple وممارساتها الخصوصية على خدماتها. تعالج الاستضافة وبريد الدعم الطلبات والرسائل بصورة منفصلة كما توضّح سياسة الخصوصية. لا يتلقّى Qum بيانات دخول حساب Apple أو تفاصيل الدفع."],
            },
            {
                heading: "8. إخلاء الضمانات",
                paragraphs: ['يُقدَّم التطبيق «كما هو» و«كما هو متاح»، دون ضمانات من أيّ نوع، صريحة أو ضمنية، إلى أقصى حدّ يسمح به القانون. لا يضمن Qum أنّ أوقات الصلاة أو القبلة المحسوبة خالية من الأخطاء أو غير منقطعة أو ملائمة لكلّ غرض ديني أو قانوني أو شخصي.'],
            },
            {
                heading: "9. تحديد المسؤولية",
                paragraphs: ["إلى أقصى حدّ يسمح به القانون، لن يكون ناشر Qum مسؤولاً عن أيّ أضرار غير مباشرة أو عرضية أو خاصّة أو تبعية أو عقابية، ولا عن أيّ خسارة ناشئة عن الاعتماد على الأوقات المحسوبة أو اتجاه القبلة أو التذكيرات أو عن عدم القدرة على استخدام التطبيق."],
            },
            {
                heading: "10. الخصوصية",
                paragraphs: ["يُوصَف استخدام Qum للبيانات في سياسة الخصوصية. وإن تعارضت هذه الشروط مع سياسة الخصوصية بشأن ممارسة بيانات، فتسود سياسة الخصوصية في تلك الممارسة."],
            },
            {
                heading: "11. التغييرات",
                paragraphs: [`بدأ العمل بهذه الشروط في ${TERMS_LAST_UPDATED_AR}. إن تغيّرت، فستُذكَر التغييرات في هذه الصفحة وفي إعدادات ‹ عن. لا يمكن لـ Qum أن يُرسِل إليك بريداً بشأن التغيير، لأنّه ليس لديه حساب.`],
            },
            {
                heading: "12. التواصل",
                paragraphs: [`لأسئلة بشأن هذه الشروط: اكتب إلى ${SUPPORT_EMAIL}.`],
            },
        ],
    },
    about: {
        kicker: "Qum",
        title: "ما هو Qum",
        lede: "Qum تطبيق Mac يضع الصلاة التالية والقبلة والأذان في حزّ الـ MacBook، لتبقى الصلاة حاضرة في يوم العمل. لا يتطلّب حساباً.",
        whatItIs: {
            heading: "ما هو Qum …",
            body: "Qum تطبيق Mac يضع الصلاة التالية والقبلة والأذان في حزّ الـ MacBook، لتبقى الصلاة حاضرة في يوم العمل. لا يتطلّب حساباً.",
        },
        whoFor: { heading: "لمن هو …", body: "MacBook به حزّ: MacBook Pro (2021 أو أحدث) أو MacBook Air (2022 أو أحدث). الأجهزة الأخرى من Mac ليس فيها حزّ ليستقرّ فيه Qum." },
        whatItDoes: { heading: "ما الذي يفعله …" },
        prayerTimes: {
            heading: "أوقات الصلاة",
            body1: "تجري حسابات أوقات الصلاة على جهاز Mac. تُرسَل أجزاء البحث إلى Apple MapKit أثناء الكتابة، ويُحدَّد موقع النتيجة المختارة ومنطقتها الزمنية. وقد تُرسَل الإحداثيات التلقائية إلى Apple للحصول على اسم المكان. يوضّح إشعار الخصوصية تدفّقات الموقع الإلكتروني وبريد الدعم بصورة منفصلة.",
            methodsLabel: (methods) => `طرق الحساب: ${methods}.`,
            asrLabel: (asr) => `العصر يمكن أن يكون ${asr}.`,
        },
        qiblaSection: { heading: "القبلة على Mac", body: "لا يستطيع أيّ Mac قياس الاتجاه. لا يوجد مقياس مغناطيسي. يحلّ Qum الاتجاه هندسياً ويُظهر القبلة من المكتب بعد معايرة لمرّة واحدة. ويبقى الاتجاه في الحزّ." },
        whatItIsNot: {
            heading: "ما ليس به",
            body1: "Qum ليس تطبيق iPhone أو iPad. وليس عدّاداً في شريط القوائم يعمل على كلّ Mac. تطبيقات الصلاة في شريط القوائم تُبقي مؤقّتاً في الشريط؛ أمّا Qum فيستخدم الحزّ في أجهزة MacBook ذات الحزّ، ويرفع الأذان من هناك، ويحفظ السلسلة على هذا الـ Mac. إن لم يكن في الـ Mac حزّ، فـ Qum هو التطبيق غير المناسب.",
            body2: "لا يُجري Qum تحليلات، ولا يعرض إعلانات، ولا يتعقّبك. سجلّ الصلاة يبقى على هذا الـ Mac. والموقع اختياري.",
        },
    },
    aria: {
        skipToContent: "تخطَّ إلى المحتوى",
        logo: "Qum",
        primaryNav: "رئيسية",
    },
};

export const siteCopy = { en, ar } as const;

export function pickLang(input: string | undefined | null): Lang {
    if (!input) return "en";
    return input.toLowerCase().startsWith("ar") ? "ar" : "en";
}
