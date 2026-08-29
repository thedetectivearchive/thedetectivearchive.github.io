/* =========================================================
   THE DETECTIVE ARCHIVE — PLAYER BUILD LEADERBOARD DATA
   v59.4 bridge

   The canonical build store now lives in:
   content/player-build-foundation.js

   Keep the canonical store empty until a reliable Silver Palace
   player-data source and verified scoring model exist.
========================================================= */

(function () {
    "use strict";

    const foundation = window.SILVER_PALACE_BUILD_DATA || {
        schemaVersion: "1.0",
        currentScoreVersion: null,
        minimumDataConfidence: 90,
        activeRecords: []
    };

    /* Compatibility surface for v59.3 integrations. */
    window.SILVER_PALACE_PLAYER_BUILD_LEADERBOARD = {
        schemaVersion: "1.1",
        get scoreVersion() {
            return foundation.currentScoreVersion || null;
        },
        get minimumDataConfidence() {
            return Number.isFinite(Number(foundation.minimumDataConfidence))
                ? Number(foundation.minimumDataConfidence)
                : 90;
        },
        get records() {
            return Array.isArray(foundation.activeRecords)
                ? foundation.activeRecords
                : [];
        }
    };

})();

/* Canonical record shape — documentation only, NOT live data:
{
    scanId: "optional-stable-scan-id",
    uid: "123456789",
    playerName: "Player",
    profileId: "character-id-or-character:variant",
    characterId: "optional-character-id",

    score: 92.6,
    grade: "SS",
    equipmentScore: 88.4,
    breakpointScore: 95.0,

    stats: {},
    equipment: {},
    breakpoints: {},
    build: {},

    dataConfidence: 100,
    scoreVersion: "1.0",
    scoringVerified: true,

    verificationStatus: "verified",
    verificationReasons: [],
    source: "public-player-data-source",

    checkedAt: "2026-08-28T00:00:00Z",
    updatedAt: "2026-08-28T00:00:00Z",
    isActive: true
}
*/
