/* =========================================================
   THE DETECTIVE ARCHIVE v41 — MODULAR CONTENT
   RANKING FRAMEWORK — keep scores unpublished until verified.
   Keep IDs unique. Leave unknown/unverified values blank.
========================================================= */

// =========================
// RANKING FRAMEWORK
// =========================

/*
    Ranking v1 intentionally publishes no numeric scores yet.
    This structure is the future source of truth for the ranking UI.

    Add verified values to scores only after the test context and
    reference build are documented. The website will automatically
    sort characters once numeric scores are present.

    A score record may optionally contain topPercent. If omitted,
    the ranking UI calculates Top % from the published roster in the
    active category.
*/
const rankingSystemData = {
    version: "preview-v2",
    scope: "Dichotomy CBT2",
    published: false,
    categories: ["overall", "damage", "break", "support", "survival"],
    scores: {}
};


