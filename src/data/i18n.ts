/**
 * Flat translation keys for the Qum marketing site.
 * English is canonical. Arabic is reviewed; do not alter either language without
 * the user's approval (see shared hand-over notes).
 */

export const SUPPORTED_LANGS = ["en", "ar"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

export const SUPPORT_EMAIL = "hello@hayyaqum.com";
export const PRIVACY_EFFECTIVE_DATE_EN = "28 October 2026";
export const PRIVACY_LAST_UPDATED_EN = "28 October 2026";
export const TERMS_LAST_UPDATED_EN = "28 October 2026";
export const PRIVACY_EFFECTIVE_DATE_AR = "28 أكتوبر 2026";
export const PRIVACY_LAST_UPDATED_AR = "28 أكتوبر 2026";
export const TERMS_LAST_UPDATED_AR = "28 أكتوبر 2026";

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
        title: "Privacy Policy",
        sub: "What Qum stores, where it goes, and how to remove it.",
        lastUpdated: "Last Updated",
        lastUpdatedDate: PRIVACY_LAST_UPDATED_EN,
        tableHeaders: { data: "Data type", why: "Why …?", shared: "Shared with …", kept: "Kept" },
        tableCaption: "What Qum stores, why, who receives it, and how long it is kept",
        summary: [
            "Qum is a Mac app that doesn’t require an account. Prayer times, the Qibla, your log, and your settings stay on this Mac. A coordinate or a city name may go to Apple Location Services so Qum can name or resolve a place — that is the only data that leaves this Mac.",
            "Qum does not run analytics, show ads, or track you, and this site does not set cookies.",
        ],
        sections: [
            {
                heading: "What Qum stores …",
                paragraphs: ["Qum does not ask for a name, email, or payment details. It uses only what the table lists, and only for the reason in that row."],
                table: [
                    { data: "Location (optional)", why: "Prayer times and Qibla on this Mac", sharedWith: "Apple, when Qum asks for the city name", retention: "Until you switch to a typed city, revoke Location Services, or uninstall" },
                    { data: "City you type (optional)", why: "Prayer times and Qibla without Location Services", sharedWith: "Apple, to turn the name into a coordinate", retention: "Until you change the city or uninstall" },
                    { data: "Prayer log", why: "I Prayed, and the streak on this Mac", sharedWith: "No one", retention: "Until you unmark the prayer or uninstall" },
                    { data: "Settings", why: "Calculation method, theme, volume, Qibla calibration", sharedWith: "No one", retention: "Until you change them or uninstall" },
                    { data: "Reminders", why: "Local alerts at prayer time", sharedWith: "Apple, to deliver the alert", retention: "Until you turn reminders off or uninstall" },
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
                paragraphs: ["Qum does not track you across apps or websites, does not show ads, and does not sell data. It does not use Apple’s tracking permission, because there is nothing to ask for."],
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
                paragraphs: ["What Qum stores stays in the macOS app sandbox on this Mac. Treat the prayer log like any other local file: a lost, stolen, or backed-up Mac still has it."],
            },
            {
                heading: "Children",
                paragraphs: ["Qum is not made for children and is not in Apple’s Kids Category. It has no accounts and does not collect a child’s data."],
            },
            {
                heading: "Changes",
                paragraphs: [
                    `This policy took effect on ${PRIVACY_EFFECTIVE_DATE_EN}. If what Qum does with data changes, this page and Settings › About › Privacy Policy will say so. Qum cannot email you about a change, because it has no account.`,
                    `Questions: write to ${SUPPORT_EMAIL}.`,
                ],
            },
        ],
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
                    "Prayer-time and Qibla maths run on this Mac. A coordinate or typed city name may be sent to Apple Location Services only to name or resolve a place. Location is not used for advertising, analytics, or tracking across apps or websites.",
                    "Qum asks for Location Services when you choose automatic location — not for marketing. If you decline, Qum does not read this Mac’s position. Type a city instead. You can change or revoke access later in System Settings › Privacy & Security.",
                    `Location purpose string used in the App: “Qum uses your location to calculate prayer times and Qibla direction for where this Mac is.”`,
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
                paragraphs: ["The App’s name, design, icons, and software are protected by applicable intellectual property laws. These Terms do not grant ownership of the App."],
            },
            {
                heading: "7. Third-party services",
                paragraphs: ["Qum has no servers of its own for accounts or analytics. Apple may provide Location Services, deliver local notifications you enable, and handle Mac App Store purchase or download. Apple’s terms and privacy practices apply to those services. Qum does not receive your Apple Account or payment details."],
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
                heading: "13. Contact",
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
            body1: "Prayer times are calculated on this Mac. A coordinate or a city name may go to Apple Location Services so Qum can name or resolve a place; that is the only data that leaves this Mac.",
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
        title: "سياسة الخصوصية",
        sub: "ما يحفظه Qum، إلى أين يذهب، وكيف تزيله.",
        lastUpdated: "آخر تحديث",
        lastUpdatedDate: PRIVACY_LAST_UPDATED_AR,
        tableHeaders: { data: "نوع البيانات", why: "السبب …؟", shared: "يُشارَك مع …", kept: "يُحفَظ" },
        tableCaption: "ما يحفظه Qum، ولماذا، ومن يستلمه، وإلى متى يُحفَظ",
        summary: [
            "Qum تطبيق Mac لا يتطلّب حساباً. أوقات الصلاة والقبلة وسجلّك وإعداداتك تبقى على هذا الـ Mac. قد يُرسَل إحداثي أو اسم مدينة إلى خدمات موقع Apple لتسمية مكان أو تحديده — وهذه هي البيانات الوحيدة التي تغادر هذا الـ Mac.",
            "لا يُجري Qum تحليلات، ولا يعرض إعلانات، ولا يتعقّبك، ولا يضع هذا الموقع ملفّات ارتباط (cookies).",
        ],
        sections: [
            {
                heading: "ما يحفظه Qum …",
                paragraphs: ["لا يطلب Qum اسماً ولا بريداً ولا تفاصيل دفع. يستخدم فقط ما يرد في الجدول، ولكل صفّ سببُه المذكور فيه."],
                table: [
                    { data: "الموقع (اختياري)", why: "أوقات الصلاة والقبلة على هذا الـ Mac", sharedWith: "Apple، حين يطلب Qum اسم المدينة", retention: "حتى تنتقل إلى مدينة مكتوبة، أو تُلغي خدمات الموقع، أو تُلغي التثبيت" },
                    { data: "مدينة تكتبها (اختياري)", why: "أوقات الصلاة والقبلة دون خدمات الموقع", sharedWith: "Apple، لتحويل الاسم إلى إحداثي", retention: "حتى تُغيّر المدينة أو تُلغي التثبيت" },
                    { data: "سجلّ الصلاة", why: "«صلّيت» والسلسلة على هذا الـ Mac", sharedWith: "لا أحد", retention: "حتى تُلغي علامة الصلاة أو تُلغي التثبيت" },
                    { data: "الإعدادات", why: "طريقة الحساب والمظهر وشدّة الصوت ومعايرة القبلة", sharedWith: "لا أحد", retention: "حتى تُغيّرها أو تُلغي التثبيت" },
                    { data: "التذكيرات", why: "تنبيهات محلّية عند وقت الصلاة", sharedWith: "Apple، لتسليم التنبيه", retention: "حتى تُطفئ التذكيرات أو تُلغي التثبيت" },
                ],
            },
            {
                heading: "الموقع",
                paragraphs: [
                    "يستخدم Qum الموقع لحساب أوقات الصلاة واتجاه القبلة للمكان المستخدم. خدمات الموقع التلقائية هي الوسيلة للحصول على أوقات دقيقة لمكان هذا الـ Mac، لأنّ الأوقات تختلف بين الأماكن. تبقى خدمات الموقع اختيارية: يطلبها Qum حين تختار الموقع التلقائي — لا عند الإقلاع، ولا لأغراض إعلانية.",
                    "إن رفضت الإذن، لن يقرأ Qum موقع هذا الـ Mac. اكتب مدينة بدلاً من ذلك. يمكنك إيقاف خدمات الموقع لـ Qum لاحقاً من إعدادات النظام ‹ الخصوصية والأمان.",
                    "لعرض اسم مدينة، قد يُرسِل Qum إحداثياً إلى خدمات موقع Apple. إن كتبت مدينة، قد يُرسِل Qum الاسم إلى Apple لتحويله إلى إحداثي. أمّا حسابات الأوقات والقبلة فتجري على هذا الـ Mac. قد تعالج Apple طلبات تسمية الأماكن على أنظمتها، بما في ذلك خارج بلدك.",
                ],
            },
            {
                heading: "الإشعارات والميكروفون",
                paragraphs: [
                    "إن فعّلت التذكيرات، يطلب Qum إظهار تنبيه محلّي وتشغيل صوت. Apple تسلّم ذلك التنبيه. لا يُرسِل Qum إشعارات تسويقية. إن رفضت الإذن، يبقى التطبيق يعمل؛ ولا تظهر التذكيرات. أطفئها من Qum ‹ الأصوات، أو من إعدادات النظام.",
                    "إن فعّلت «اكتم الصوت في الاجتماعات»، يتحقّق Qum ممّا إذا كان تطبيق آخر يستخدم مُدخَل صوت. لا يُسجّل الميكروفون، ولا يطلب الإذن باستخدامه.",
                ],
            },
            {
                heading: "Apple وهذا الموقع",
                paragraphs: [
                    "ليست لـ Qum خوادم خاصّة. لا يُشغّل تحليلات، ولا تقارير أعطال، ولا إعلانات، ولا حساب Qum.",
                    "توفّر Apple خدمات الموقع حين تستخدم الموقع التلقائي أو مدينة مكتوبة، وتسلّم الإشعارات المحلّية التي فعّلتها. وشراء Qum أو تنزيله من متجر تطبيقات Mac تتولاه Apple. لا يستلم Qum حساب Apple ولا تفاصيل الدفع.",
                    "لا يضع hayyaqum.com ملفّات ارتباط، ولا يُجري تحليلات، ولا يعرض إعلانات. يمكنك قراءة هذه الصفحة دون حساب. قد تحتفظ حواسيب التقديم بسجلّات ويب اعتيادية — عنوان IP ووقت الطلب والصفحة المطلوبة — كجزء من تقديم الموقع.",
                    "صفحة Qum على متجر تطبيقات Mac، حين تُنشَأ، هي ملك Apple؛ لا يستلم Qum تلك الزيارة.",
                ],
            },
            {
                heading: "التعقّب",
                paragraphs: ["لا يتعقّبك Qum عبر التطبيقات أو المواقع، ولا يعرض إعلانات، ولا يبيع بيانات. ولا يستخدم إذن التعقّب في Apple، لأنّه ليس لديه ما يسأل عنه."],
            },
            {
                heading: "الحفظ والحذف",
                paragraphs: [
                    "لا يوجد حساب Qum، فلا توجد نسخة سحابية تُصدَّر، ولا زرّ «احذف حسابي» على خادم.",
                    "يمكنك استخدام مدينة مكتوبة وعدم منح خدمات الموقع أبداً. يمكنك ترك التذكيرات مطفأة. تظهر الصلوات المؤدّاة في Qum على هذا الـ Mac؛ ألغِ علامة الصلاة لإزالتها.",
                    "لإيقاف استخدام موقع هذا الـ Mac، انتقل إلى مدينة مكتوبة أو ألغِ خدمات الموقع من إعدادات النظام. ولحذف كلّ ما حفظه Qum هنا — السجلّ والإعدادات والإحداثي المخزّن والمعايرة — ألغِ تثبيت Qum.",
                    "ما استلمته Apple من طلبات تسمية الأماكن يُحفَظ وفق سياسة Apple نفسها، وهو خارج سيطرة Qum.",
                ],
            },
            {
                heading: "الأمان",
                paragraphs: ["ما يحفظه Qum يبقى داخل الـ sandbox الخاص بـ macOS على هذا الـ Mac. تعامَل مع سجلّ الصلاة كأيّ ملفّ محلّي: Mac مفقود أو مسروق أو منسوخ احتياطياً لا يزال يحتوي السجلّ."],
            },
            {
                heading: "الأطفال",
                paragraphs: ["Qum ليس مصنوعاً للأطفال وليس ضمن فئة الأطفال لدى Apple. لا توجد فيه حسابات ولا يجمع بيانات طفل."],
            },
            {
                heading: "التغييرات",
                paragraphs: [
                    `بدأ العمل بهذه السياسة في ${PRIVACY_EFFECTIVE_DATE_AR}. إن تغيّر ما يفعله Qum بالبيانات، فستُذكَر التغييرات في هذه الصفحة وفي إعدادات ‹ عن ‹ سياسة الخصوصية. لا يمكن لـ Qum أن يُرسِل إليك بريداً بشأن التغيير، لأنّه ليس لديه حساب.`,
                    `للأسئلة: اكتب إلى ${SUPPORT_EMAIL}.`,
                ],
            },
        ],
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
                    "حسابات الأوقات والقبلة تجري على هذا الـ Mac. قد يُرسَل إحداثي أو اسم مدينة مكتوبة إلى خدمات موقع Apple فقط لتسمية المكان أو تحديده. لا يُستخدم الموقع للإعلانات ولا للتحليلات ولا للتعقّب بين التطبيقات والمواقع.",
                    "يطلب Qum خدمات الموقع حين تختار الموقع التلقائي — لا للتسويق. إن رفضت، لن يقرأ Qum موقع هذا الـ Mac. اكتب مدينة بدلاً من ذلك. يمكنك تغيير الإذن أو إلغاؤه لاحقاً من إعدادات النظام ‹ الخصوصية والأمان.",
                    `نصّ غرض الموقع المستخدَم في التطبيق: «يستخدم Qum موقعك لحساب أوقات الصلاة واتجاه القبلة لمكان هذا الـ Mac.»`,
                    "ممارسات بيانات الموقع موصوفة أيضاً في سياسة الخصوصية.",
                ],
            },
            {
                heading: "4. الإشعارات والأذونات ذات الصلة",
                paragraphs: [
                    "التذكيرات المحلّية، عند تفعيلها، هي لتنبيهات أوقات الصلاة التي اخترتها. وليست رسائل تسويقية. يمكنك ترك التذكيرات مطفأة؛ ويبقى التطبيق يعمل.",
                    "إن فُعِّل «اكتم الصوت في الاجتماعات» (أو إعداد مشابه)، قد يتحقّق Qum ممّا إذا كان تطبيق آخر يستخدم مُدخَل صوت. لا يُسجّل الميكروفون ولا يطلب إذن الميكروفون لهذا التحقّق.",
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
                paragraphs: ["ليست لـ Qum خوادم خاصّة للحسابات أو التحليلات. قد توفّر Apple خدمات الموقع، وتسلّم الإشعارات المحلّية التي تفعّلها، وتتولّى الشراء أو التنزيل من متجر تطبيقات Mac. تطبّق شروط Apple وممارساتها الخصوصية على تلك الخدمات. لا يستلم Qum حساب Apple ولا تفاصيل الدفع."],
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
                heading: "13. التواصل",
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
            body1: "تُحسَب أوقات الصلاة على هذا الـ Mac. قد يُرسَل إحداثي أو اسم مدينة إلى خدمات موقع Apple لتسمية مكان أو تحديده؛ وهذه هي البيانات الوحيدة التي تغادر هذا الـ Mac.",
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
