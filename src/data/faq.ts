import type { Lang } from "@/data/i18n";

export type FaqItem = { id: string; question: string; paragraphs: string[] };
export type FaqCopy = { title: string; intro: string; items: FaqItem[] };

export const faqCopy: Record<Lang, FaqCopy> = {
    "en": {
        "title": "A few things you might be wondering.",
        "intro": "Prayer times, quiet reminders, and a little clarity about how Qum works.",
        "items": [
            {
                "id": "what-is-qum",
                "question": "What is Qum?",
                "paragraphs": [
                    "Qum keeps prayer times, Qibla direction, silent reminders, and a personal prayer log in the MacBook notch. It supports English and Arabic."
                ]
            },
            {
                "id": "supported-macs",
                "question": "Which Macs does Qum support?",
                "paragraphs": [
                    "Qum requires macOS 14.6 or later and a MacBook with a built-in notch: MacBook Pro models introduced in 2021 or later, or MacBook Air models introduced in 2022 or later.",
                    "It isn’t designed for external displays or closed-lid use."
                ]
            },
            {
                "id": "adhan",
                "question": "Does Qum play the adhan?",
                "paragraphs": [
                    "No. The current version displays silent prayer reminders. It does not include adhan recordings or playback controls."
                ]
            },
            {
                "id": "confirm-prayer",
                "question": "What does “Confirm prayer” do?",
                "paragraphs": [
                    "It acknowledges and closes the prayer-time prompt. It does not mark the prayer as completed. Choose “Yes, I prayed …” in the later check-in to record completion."
                ]
            },
            {
                "id": "check-in",
                "question": "When does the post-prayer check-in appear?",
                "paragraphs": [
                    "Qum can ask whether you prayed around six minutes after prayer time, while that prayer’s window remains open.",
                    "Check-ins depend on reminder settings, quiet hours, and whether Qum can interrupt you. If your Mac is asleep, another panel is active, or another app uses audio input during the short check-in window, the prompt may not appear."
                ]
            },
            {
                "id": "qada",
                "question": "How do missed prayers and qada reminders work?",
                "paragraphs": [
                    "When a tracked prayer window closes without recorded completion, Qum marks the entry missed. This reflects your record; Qum cannot know whether you actually prayed.",
                    "Choose “Log qada” to record a prayer you made up. Qum updates the original prayer day and removes that entry from the outstanding list. “Later” only dismisses the prompt.",
                    "An optional daily qada reminder is available in Settings → Streak. You can choose its time or turn it off."
                ]
            },
            {
                "id": "streak",
                "question": "How does my streak work?",
                "paragraphs": [
                    "Your streak follows your selected daily prayer goal and recorded completions. Missed required prayers can pause it. Logging qada can update the affected days and restore the streak when its requirements are met.",
                    "Your streak is a personal record, not a judgment about your worship."
                ]
            },
            {
                "id": "running",
                "question": "Why didn’t a reminder appear?",
                "paragraphs": [
                    "Keep Qum running and your Mac awake for notch reminders and in-app check-ins. Check prayer-notification and advance-reminder options in Settings → Sounds, and qada-reminder options in Settings → Streak. Quiet hours and interruption checks can suppress prompts.",
                    "macOS notifications are separate. Check Qum’s notification permission and your Focus settings in System Settings. Denying OS notification permission does not, by itself, disable the notch panels."
                ]
            },
            {
                "id": "location",
                "question": "Do I need location access or an internet connection?",
                "paragraphs": [
                    "Location access is optional. Allow Location Services or choose a city in Settings → Prayer Times. Automatic location lets Qum refresh its position; a manually selected city remains in use until you change it.",
                    "Apple services process city-search text as you type and may process coordinates for place names. These lookups require internet access. Once a location is available, prayer-time and Qibla calculations run locally."
                ]
            },
            {
                "id": "calculation",
                "question": "Why might Qum’s prayer times differ from my mosque?",
                "paragraphs": [
                    "Times depend on location, calculation method, Asr convention, high-latitude settings, and date. Different communities follow different conventions.",
                    "Choose the settings that match your practice. If you follow a local authority, use its published timetable."
                ]
            },
            {
                "id": "qibla",
                "question": "How does Qibla direction work without a compass?",
                "paragraphs": [
                    "Qum calculates the bearing from the selected location to the Kaaba. Macs do not provide compass heading, so Qum uses sun calibration to orient the on-screen direction.",
                    "Calibrate in daylight and recalibrate after moving or rotating your Mac. Never look directly at the sun."
                ]
            },
            {
                "id": "prayer-history",
                "question": "Does Qum keep my prayer history private?",
                "paragraphs": [
                    "Prayer history and settings are stored locally on your Mac, without a Qum account or cloud sync. Qum does not upload prayer history, run analytics, show ads, or track you across apps and websites.",
                    "Apple handles location and place searches. To avoid interrupting you, check-ins can inspect whether another app uses audio input; Qum does not record microphone audio or upload or retain the identifiers and activity read for this check.",
                    "See the [Privacy Policy](/privacy) for details about storage, Apple services, website visits, and support messages."
                ]
            },
            {
                "id": "delete-data",
                "question": "How can I delete my local data?",
                "paragraphs": [
                    "The current version has no Erase All Data control. Unmarking a prayer changes completion status but does not necessarily erase its record or timestamps. Revoking location permission does not necessarily erase saved location data.",
                    "Deleting the app alone does not guarantee removal of its local data or backups. Quit Qum and contact [hello@hayyaqum.com](mailto:hello@hayyaqum.com) for help identifying the associated files. Do not send your prayer history or data files. Manage backup copies separately."
                ]
            },
            {
                "id": "help",
                "question": "Where can I find help and the full policies?",
                "paragraphs": [
                    "Email [hello@hayyaqum.com](mailto:hello@hayyaqum.com) with your Qum version, macOS version, and a description of the issue. Avoid sending precise location or prayer history unless necessary.",
                    "Read the [Privacy Policy](/privacy) and [Terms of Use](/terms), also available in Settings → About. Qum is a personal utility, not a religious authority."
                ]
            }
        ]
    },
    "ar": {
        "title": "إجابات عن أسئلتك حول Qum.",
        "intro": "أوقات الصلاة، وتذكيرات هادئة، وتوضيح لطريقة عمل Qum.",
        "items": [
            {
                "id": "what-is-qum",
                "question": "ما هو Qum؟",
                "paragraphs": [
                    "يجمع Qum أوقات الصلاة واتجاه القبلة والتذكيرات الصامتة وسجلّ الصلاة الشخصي في حزّ MacBook. يدعم الإنجليزية والعربية."
                ]
            },
            {
                "id": "supported-macs",
                "question": "ما أجهزة Mac التي يدعمها Qum؟",
                "paragraphs": [
                    "يتطلب Qum نظام macOS 14.6 أو أحدث وجهاز MacBook بحزّ مدمج في الشاشة: طرازات MacBook Pro التي طُرحت عام 2021 أو بعده، أو طرازات MacBook Air التي طُرحت عام 2022 أو بعده.",
                    "لم يُصمَّم للشاشات الخارجية أو للاستخدام مع إغلاق غطاء الجهاز."
                ]
            },
            {
                "id": "adhan",
                "question": "هل يشغّل Qum الأذان؟",
                "paragraphs": [
                    "لا. يعرض الإصدار الحالي تذكيرات صلاة صامتة، ولا يتضمن تسجيلات أذان أو أدوات لتشغيلها."
                ]
            },
            {
                "id": "confirm-prayer",
                "question": "ماذا يفعل «تأكيد الصلاة»؟",
                "paragraphs": [
                    "يُقرّ بتنبيه دخول وقت الصلاة ويغلقه، ولا يسجّل الصلاة كمكتملة. اختر «نعم، صلّيت…» في المتابعة اللاحقة لتسجيل إتمامها."
                ]
            },
            {
                "id": "check-in",
                "question": "متى تظهر المتابعة بعد الصلاة؟",
                "paragraphs": [
                    "قد يسألك Qum عمّا إذا كنت قد صلّيت بعد نحو ست دقائق من دخول الوقت، ما دام وقت الصلاة لم ينتهِ.",
                    "تعتمد المتابعة على إعدادات التذكير وساعات الهدوء وإمكانية مقاطعتك. وقد لا تظهر إذا كان Mac في وضع السكون، أو كانت لوحة أخرى نشطة، أو كان تطبيق آخر يستخدم مُدخل الصوت خلال نافذتها الزمنية القصيرة."
                ]
            },
            {
                "id": "qada",
                "question": "كيف تعمل الصلوات الفائتة وتذكيرات القضاء؟",
                "paragraphs": [
                    "عند انتهاء وقت صلاة يتابعها Qum دون تسجيل إتمامها، يسجّلها كفائتة. هذا يعكس سجلّك؛ فلا يمكن للتطبيق معرفة ما إذا كنت قد صلّيت فعلًا.",
                    "اختر تسجيل قضاء لتسجيل صلاة قضيتها. يحدّث Qum يوم الصلاة الأصلي ويحذف الإدخال من قائمة الصلوات المتبقية. أما «لاحقًا» فيغلق التنبيه فقط.",
                    "يتوفر تذكير يومي اختياري بالقضاء في الإعدادات ← السلسلة. يمكنك تحديد وقته أو إيقافه."
                ]
            },
            {
                "id": "streak",
                "question": "كيف تعمل سلسلة الصلاة؟",
                "paragraphs": [
                    "تعتمد السلسلة على هدف الصلاة اليومي الذي تختاره والصلوات التي تسجّل إتمامها. وقد تتوقف بسبب صلوات مطلوبة فائتة. ويمكن لتسجيل القضاء تحديث الأيام المتأثرة واستعادة السلسلة عند استيفاء شروطها.",
                    "السلسلة سجلّ شخصي، وليست حكمًا على عبادتك."
                ]
            },
            {
                "id": "running",
                "question": "لماذا لم يظهر التذكير؟",
                "paragraphs": [
                    "أبقِ Qum قيد التشغيل وMac مستيقظًا لتذكيرات الحزّ والمتابعة داخل التطبيق. راجع إشعارات الصلاة والتذكير المسبق في الإعدادات ← الأصوات، وتذكير القضاء في الإعدادات ← السلسلة. قد تمنع ساعات الهدوء والتحقق من المقاطعات ظهور التنبيهات.",
                    "إشعارات macOS منفصلة. راجع إذن إشعارات Qum وإعدادات التركيز في إعدادات النظام. رفض إذن إشعارات النظام وحده لا يعطّل لوحات الحزّ."
                ]
            },
            {
                "id": "location",
                "question": "هل أحتاج إلى إذن الموقع أو اتصال بالإنترنت؟",
                "paragraphs": [
                    "إذن الموقع اختياري. اسمح بخدمات الموقع أو اختر مدينة من الإعدادات ← أوقات الصلاة. يتيح الموقع التلقائي تحديث موقع الجهاز؛ وتبقى المدينة المختارة يدويًا قيد الاستخدام حتى تغيّرها.",
                    "تعالج خدمات Apple نص البحث عن المدن أثناء الكتابة، وقد تعالج الإحداثيات للحصول على أسماء الأماكن. تتطلب هذه الطلبات اتصالًا بالإنترنت. وبمجرد توفر موقع، تُجرى حسابات أوقات الصلاة والقبلة محليًا."
                ]
            },
            {
                "id": "calculation",
                "question": "لماذا قد تختلف أوقات Qum عن أوقات مسجدي؟",
                "paragraphs": [
                    "تعتمد الأوقات على الموقع وطريقة الحساب وطريقة حساب العصر وإعدادات خطوط العرض العالية والتاريخ. وتتبع المجتمعات طرقًا مختلفة.",
                    "اختر الإعدادات المناسبة لممارستك. وإذا كنت تتبع جهة محلية، فاستخدم جدولها المنشور."
                ]
            },
            {
                "id": "qibla",
                "question": "كيف يعمل اتجاه القبلة دون بوصلة؟",
                "paragraphs": [
                    "يحسب Qum الاتجاه من الموقع المختار إلى الكعبة. لا توفر أجهزة Mac اتجاه بوصلة، لذلك يستخدم Qum المعايرة بالشمس لتوجيه العرض على الشاشة.",
                    "عاير في ضوء النهار، وأعد المعايرة بعد تحريك Mac أو تدويره. لا تنظر مباشرة إلى الشمس."
                ]
            },
            {
                "id": "prayer-history",
                "question": "هل يحافظ Qum على خصوصية سجلّ صلاتي؟",
                "paragraphs": [
                    "يُحفظ سجلّ الصلاة والإعدادات محليًا على Mac، دون حساب Qum أو مزامنة سحابية. لا يرفع Qum سجلّ الصلاة أو يشغّل تحليلات أو يعرض إعلانات أو يتتبعك عبر التطبيقات والمواقع.",
                    "تتولى Apple معالجة الموقع والبحث عن الأماكن. ولتجنّب مقاطعتك، قد تتحقق المتابعة من استخدام تطبيق آخر لمُدخل الصوت؛ ولا يسجّل Qum صوت الميكروفون أو يرفع أو يحتفظ بالمعرّفات والنشاط المقروء لهذا التحقق.",
                    "راجع [سياسة الخصوصية](/privacy) لتفاصيل التخزين وخدمات Apple وزيارات الموقع ورسائل الدعم."
                ]
            },
            {
                "id": "delete-data",
                "question": "كيف يمكنني حذف بياناتي المحلية؟",
                "paragraphs": [
                    "لا يتضمن الإصدار الحالي زرًا لمسح جميع البيانات. إلغاء علامة الصلاة يغيّر حالة إتمامها، لكنه لا يمحو بالضرورة السجلّ أو طوابعه الزمنية. وسحب إذن الموقع لا يمحو بالضرورة بيانات الموقع المحفوظة.",
                    "حذف التطبيق وحده لا يضمن حذف بياناته المحلية أو نسخه الاحتياطية. أنهِ Qum وتواصل مع [hello@hayyaqum.com](mailto:hello@hayyaqum.com) للمساعدة في تحديد الملفات المرتبطة به. لا ترسل سجلّ صلاتك أو ملفات بياناتك. أدر النسخ الاحتياطية بشكل منفصل."
                ]
            },
            {
                "id": "help",
                "question": "أين أجد المساعدة والسياسات الكاملة؟",
                "paragraphs": [
                    "راسل [hello@hayyaqum.com](mailto:hello@hayyaqum.com) مع ذكر إصدار Qum وإصدار macOS ووصف المشكلة. تجنّب إرسال الموقع الدقيق أو سجلّ الصلاة إلا عند الضرورة.",
                    "اقرأ [سياسة الخصوصية](/privacy) و[شروط الاستخدام](/terms)، المتاحتين أيضًا من الإعدادات ← حول التطبيق. Qum أداة شخصية وليس جهة دينية مرجعية."
                ]
            }
        ]
    }
};
