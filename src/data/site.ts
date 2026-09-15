export const APP_STORE_URL = "https://apps.apple.com/app/qum";
export const SUPPORT_EMAIL = "hello@hayyaqum.com";

export const features = [
    {
        id: "reminder",
        label: "A reminder before each prayer",
        caption: "Before each prayer, Qum reminds you in the notch. At prayer time, the adhan plays.",
        iconOn: "/assets/feature-reminder-on.svg",
        iconOff: "/assets/feature-reminder-off.svg",
    },
    {
        id: "adhan",
        label: "The adhan, played on your Mac",
        caption: "When it’s time, the notch plays the adhan. Confirm with I Prayed.",
        iconOn: "/assets/feature-adhan-on.svg",
        iconOff: "/assets/feature-adhan-off.svg",
    },
    {
        id: "streak",
        label: "A prayer streak on your Mac",
        caption: "Mark each prayer with I Prayed. Your streak stays on this Mac.",
        iconOn: "/assets/feature-streak-on.svg",
        iconOff: "/assets/feature-streak-off.svg",
    },
    {
        id: "qibla",
        label: "Qibla direction from your desk",
        caption: "Qum shows Qibla direction from your desk. Calibrate once, and the direction stays in the notch.",
        iconOn: "/assets/feature-qibla-on.svg",
        iconOff: "/assets/feature-qibla-off.svg",
    },
    {
        id: "theme",
        label: "A theme that follows each prayer",
        caption: "The notch follows the day. Fajr does not look like Maghrib.",
        iconOn: "/assets/feature-theme-on.svg",
        iconOff: "/assets/feature-theme-off.svg",
    },
] as const;

export const privacySections = [
    {
        heading: "What Qum is",
        paragraphs: [
            "Qum does not require an account, and this website does not track you. Prayer times and your log stay on this Mac.",
        ],
    },
    {
        heading: "Location",
        paragraphs: [
            "Location Services are optional. If you allow them, Qum reads this Mac’s position to calculate prayer times and the Qibla. The coordinate is stored on this Mac. You can type a city instead, or turn Location Services off for Qum in System Settings.",
        ],
    },
    {
        heading: "Place names",
        paragraphs: [
            "To show a city name, Qum may send a coordinate to Apple Location Services (reverse geocoding). If you type a city, Qum may send that name to Apple Location Services to resolve a coordinate (forward geocoding).",
            "Prayer-time and Qibla maths themselves run on this Mac.",
        ],
    },
    {
        heading: "Prayer log",
        paragraphs: [
            "Completions you mark are stored on this Mac with SwiftData. They are not uploaded. Uninstalling Qum removes the sandbox container that holds them.",
        ],
    },
    {
        heading: "Notifications",
        paragraphs: [
            "If you turn reminders on, Qum schedules local notifications on this Mac. Apple’s notification service delivers them. Qum does not send marketing notifications.",
            "Turn them off in Qum › Sounds, or in System Settings.",
        ],
    },
    {
        heading: "Settings",
        paragraphs: [
            "Preferences such as calculation method, theme, and volume are stored in UserDefaults on this Mac.",
        ],
    },
    {
        heading: "Meeting silence",
        paragraphs: [
            "If you enable Stay silent in meetings, Qum checks whether another app is already using an audio input. It does not record the microphone.",
        ],
    },
    {
        heading: "What Qum does not collect",
        paragraphs: [
            "Qum does not create an account, run an analytics SDK, show advertising, or track you across apps.",
        ],
    },
    {
        heading: "Third parties",
        paragraphs: [
            "Apple provides Location Services when you use automatic location or a typed city, and delivers the local notifications you have enabled.",
        ],
    },
    {
        heading: "Keeping and deleting data",
        paragraphs: [
            "Data stays on this Mac until you change it or uninstall Qum. Switch to a typed city, or revoke Location Services, to stop using this Mac’s position.",
            "Uninstalling Qum deletes its sandbox container, including the prayer log and settings.",
        ],
    },
    {
        heading: "This website",
        paragraphs: [
            "hayyaqum.com does not set cookies, run analytics, or show advertising. Visiting the Mac App Store is handled by Apple. Qum does not receive that visit.",
        ],
    },
] as const;
