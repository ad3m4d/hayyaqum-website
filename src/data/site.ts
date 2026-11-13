import { siteCopy, PRIVACY_EFFECTIVE_DATE_EN, PRIVACY_LAST_UPDATED_EN, TERMS_LAST_UPDATED_EN } from "@/data/i18n";

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

// Legal copy has one source of truth; legacy consumers use the canonical English copy.
export const PRIVACY_EFFECTIVE_DATE = PRIVACY_EFFECTIVE_DATE_EN;
export const PRIVACY_LAST_UPDATED = PRIVACY_LAST_UPDATED_EN;
export const TERMS_LAST_UPDATED = TERMS_LAST_UPDATED_EN;
export type { PrivacyTableRow, PrivacySection, LegalSection } from "@/data/i18n";
export const privacySummary = siteCopy.en.privacy.summary;
export const privacySections = siteCopy.en.privacy.sections;
export const termsIntro = siteCopy.en.terms.intro;
export const termsSections = siteCopy.en.terms.sections;
export const productDisclaimer = {
    label: siteCopy.en.terms.disclaimerLabel,
    paragraphs: siteCopy.en.terms.disclaimerParagraphs,
};
export const LOCATION_PURPOSE_STRING = "Qum uses your location to calculate prayer times and Qibla direction.";
