/* =========================================================
   THE DETECTIVE ARCHIVE — RECORD CONTENT TRANSLATIONS

   Generated/maintained by Archive Content Studio.
   - English source text remains in /content/*.js.
   - Non-English record translations live here by record ID.
   - Missing fields safely fall back to the base English text.

   Do not rename record IDs after publishing translations.
========================================================= */

window.ArchiveContentTranslations = {
    "vi": {
        "characters": {},
        "motives": {},
        "simulation": {},
        "epiphanies": {},
        "news": {}
    },
    "th": {
        "characters": {},
        "motives": {},
        "simulation": {},
        "epiphanies": {},
        "news": {}
    },
    "ja": {
        "characters": {},
        "motives": {},
        "simulation": {},
        "epiphanies": {},
        "news": {}
    },
    "zh-CN": {
        "characters": {},
        "motives": {},
        "simulation": {},
        "epiphanies": {},
        "news": {}
    },
    "ko": {
        "characters": {},
        "motives": {},
        "simulation": {},
        "epiphanies": {},
        "news": {}
    },
    "fr": {
        "characters": {},
        "motives": {},
        "simulation": {},
        "epiphanies": {},
        "news": {}
    },
    "es": {
        "characters": {},
        "motives": {},
        "simulation": {},
        "epiphanies": {},
        "news": {}
    },
    "ru": {
        "characters": {},
        "motives": {},
        "simulation": {},
        "epiphanies": {},
        "news": {}
    }
};

(function applyArchiveContentTranslationFile() {
    if (typeof registerArchiveLocale !== "function") {
        return;
    }

    Object.keys(window.ArchiveContentTranslations).forEach(function (language) {
        registerArchiveLocale(language, {
            content: window.ArchiveContentTranslations[language]
        });
    });
})();
