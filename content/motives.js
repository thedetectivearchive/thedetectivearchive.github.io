/* =========================================================
   THE DETECTIVE ARCHIVE v41 — MODULAR CONTENT
   MOTIVES — add new Motive records here.
   Keep IDs unique. Leave unknown/unverified values blank.
========================================================= */

// =========================
// MOTIVES — DICHOTOMY CBT2
// =========================

/*
    Source policy for this section:
    - Only Motive names/rarities/Identity labels that are directly visible in
      closed-beta banner/gallery data or clearly reported from CBT2 are stored.
    - Unknown stats/passives stay blank instead of being guessed.
    - Internal variable name stays "weaponsData" for backward compatibility
      with the existing website JavaScript.
*/

const weaponsData = [
    {
        id: "the-burning-stone-mystery",
        name: "The Burning Stone Mystery",
        image: "",
        rarity: 5,
        limited: true,
        featured: true,
        identity: "Outlaw",
        availability: "Featured CBT2 Motive Banner",
        stat1: {
            label: "ATK CriticalChance",
            value: "+3% → +5%",
            refine: "1–5",
            rawBetaLabel: true
        },
        upgrade: {
            silverium: 26875,
            materialQuantities: [12, 8, 8, 16],
            materialNamesVerified: false
        },
        effect: "",
        archiveNote: {
            en: "The secondary refine modifier and the listed upgrade quantities are transcribed from Ashley's CBT2 data page. The Motive Skill/passive text and Base ATK are not reliably transcribed in the current archive, so they remain unpublished.",
            vi: "Chỉ số tinh luyện phụ và các số lượng nâng cấp được chép từ trang dữ liệu CBT2 của Ashley. Nội dung Motive Skill/passive và Base ATK hiện chưa được chép đủ tin cậy, nên vẫn để chưa công bố."
        },
        sourceLabel: "Kaiden.gg CBT2 — Ashley (2026-07-29)"
    },
    {
        id: "the-bloodbath-mystery",
        name: "The Bloodbath Mystery",
        image: "",
        rarity: 5,
        limited: false,
        featured: false,
        identity: "Saviour",
        availability: "CBT2 Day 5 Login Reward",
        stat1: {
            label: "ATK Multi",
            value: "+2% → +4%",
            refine: "1–5",
            rawBetaLabel: true
        },
        upgrade: {
            silverium: 26875,
            materialQuantities: [12, 8, 8, 16],
            materialNamesVerified: false
        },
        effect: "",
        archiveNote: {
            en: "The CBT2 character database lists this refine modifier and upgrade quantities. The exact Motive Skill/passive text and Base ATK are still not reliably transcribed here.",
            vi: "Cơ sở dữ liệu nhân vật CBT2 có ghi chỉ số tinh luyện và số lượng nâng cấp này. Motive Skill/passive chính xác và Base ATK vẫn chưa được chép đủ tin cậy trong kho hiện tại."
        },
        sourceLabel: "Kaiden.gg CBT2 — Gucia / Captain Kaboom (2026-07-29)"
    },
    {
        id: "the-ivory-tower-mystery",
        name: "The Ivory Tower Mystery",
        image: "",
        rarity: 4,
        limited: false,
        featured: true,
        identity: "",
        availability: "Featured 4★ — CBT2 Motive Banner",
        stat1: {
            label: "Liquid AbsorbRate",
            value: "+1% → +2.5%",
            refine: "1–5",
            rawBetaLabel: true
        },
        upgrade: {
            silverium: 21500,
            materialQuantities: [10, 7, 7, 14],
            materialNamesVerified: false
        },
        effect: "",
        archiveNote: {
            en: "The archive preserves the CBT2 internal stat label exactly as transcribed. Its Identity and Motive Skill/passive text are not independently verified here.",
            vi: "Kho dữ liệu giữ nguyên nhãn chỉ số nội bộ CBT2 đúng như bản chép. Identity và Motive Skill/passive của Motive này chưa được xác minh độc lập ở đây."
        },
        sourceLabel: "Kaiden.gg CBT2 — Gucia (2026-07-29)"
    },
    {
        id: "the-would-be-adults-mystery",
        name: "The Would-Be Adults Mystery",
        image: "",
        rarity: 4,
        limited: false,
        featured: true,
        identity: "",
        availability: "Featured 4★ — CBT2 Motive Banner",
        stat1: {
            label: "ATK CriticalDamage",
            value: "+3% → +6.25%",
            refine: "1–5",
            rawBetaLabel: true
        },
        upgrade: {
            silverium: 21500,
            materialQuantities: [10, 7, 7, 14],
            materialNamesVerified: false
        },
        effect: "",
        archiveNote: {
            en: "The refine modifier and upgrade quantities are transcribed from CBT2 data. Identity and Motive Skill/passive text remain unverified in the current archive.",
            vi: "Chỉ số tinh luyện và số lượng nâng cấp được chép từ dữ liệu CBT2. Identity và Motive Skill/passive vẫn chưa được xác minh trong kho hiện tại."
        },
        sourceLabel: "Kaiden.gg CBT2 — Gucia (2026-07-29)"
    },
    {
        id: "the-duplicity-mystery",
        name: "The Duplicity Mystery",
        image: "",
        rarity: 4,
        limited: false,
        featured: true,
        identity: "",
        availability: "Featured 4★ — CBT2 Motive Banner",
        stat1: {
            label: "MAXHP Multi",
            value: "+1% → +2%",
            refine: "1–5",
            rawBetaLabel: true
        },
        upgrade: {
            silverium: 21500,
            materialQuantities: [10, 7, 7, 14],
            materialNamesVerified: false
        },
        effect: "",
        archiveNote: {
            en: "The refine modifier and upgrade quantities are transcribed from Argos's CBT2 data page. Identity and Motive Skill/passive text remain unverified here.",
            vi: "Chỉ số tinh luyện và số lượng nâng cấp được chép từ trang dữ liệu CBT2 của Argos. Identity và Motive Skill/passive vẫn chưa được xác minh ở đây."
        },
        sourceLabel: "Kaiden.gg CBT2 — Argos (2026-07-29)"
    },

    // 3-star Motives: Identity labels are transcribed from CBT2 gacha footage.
    // Where Kaiden character data directly lists an upgrade row, that row is
    // stored below. No secondary stat or Motive Skill is invented.
    {
        id: "the-fatuity-mystery",
        name: "The Fatuity Mystery",
        image: "",
        rarity: 3,
        limited: false,
        identity: "Witness",
        availability: "CBT2 Motive Pool",
        upgrade: {
            silverium: 17200,
            materialQuantities: [7, 5, 5, 10],
            materialNamesVerified: false
        },
        effect: "",
        archiveNote: {
            en: "A CBT2 upgrade row is transcribed, but no secondary refine stat or Motive Skill/passive line is currently available in the source used by this archive.",
            vi: "Đã chép được dòng nâng cấp CBT2, nhưng nguồn hiện dùng chưa có dòng chỉ số tinh luyện phụ hoặc Motive Skill/passive cho Motive này."
        },
        sourceLabel: "Kaiden.gg CBT2 — Argos (2026-07-29)"
    },
    {
        id: "the-bullet-mystery",
        name: "The Bullet Mystery",
        image: "",
        rarity: 3,
        limited: false,
        identity: "Saviour",
        availability: "CBT2 Motive Pool",
        upgrade: {
            silverium: 17200,
            materialQuantities: [7, 5, 5, 10],
            materialNamesVerified: false
        },
        effect: "",
        archiveNote: {
            en: "The CBT2 source exposes an upgrade row, but no secondary refine stat or Motive Skill/passive text for this 3-star Motive.",
            vi: "Nguồn CBT2 có dòng nâng cấp nhưng chưa cung cấp chỉ số tinh luyện phụ hoặc Motive Skill/passive cho Motive 3 sao này."
        },
        sourceLabel: "Kaiden.gg CBT2 — Gucia (2026-07-29)"
    },
    {
        id: "the-soft-songs-mystery",
        name: "The Soft Songs Mystery",
        image: "",
        rarity: 3,
        limited: false,
        identity: "Victim",
        availability: "CBT2 Motive Pool",
        effect: "",
        archiveNote: {
            en: "Name and Victim Identity are transcribed from CBT2 gacha footage. No sufficiently reliable stat, refine, upgrade-row or Motive Skill transcription has been added yet.",
            vi: "Tên và Identity Victim được chép từ footage gacha CBT2. Hiện chưa có bản chép đủ tin cậy về chỉ số, refine, dòng nâng cấp hoặc Motive Skill."
        },
        sourceLabel: "SilverPalaceMeta — CBT2 gacha footage"
    },
    {
        id: "the-blade-wind-mystery",
        name: "The Blade Wind Mystery",
        image: "",
        rarity: 3,
        limited: false,
        identity: "Saviour",
        availability: "CBT2 Motive Pool",
        upgrade: {
            silverium: 17200,
            materialQuantities: [7, 5, 5, 10],
            materialNamesVerified: false
        },
        effect: "",
        archiveNote: {
            en: "The CBT2 source exposes an upgrade row, but no secondary refine stat or Motive Skill/passive text for this 3-star Motive.",
            vi: "Nguồn CBT2 có dòng nâng cấp nhưng chưa cung cấp chỉ số tinh luyện phụ hoặc Motive Skill/passive cho Motive 3 sao này."
        },
        sourceLabel: "Kaiden.gg CBT2 — Gucia (2026-07-29)"
    },
    {
        id: "the-aberrant-mystery",
        name: "The Aberrant Mystery",
        image: "",
        rarity: 3,
        limited: false,
        identity: "Outlaw",
        availability: "CBT2 Motive Pool",
        upgrade: {
            silverium: 17200,
            materialQuantities: [7, 5, 5, 10],
            materialNamesVerified: false
        },
        effect: "",
        archiveNote: {
            en: "The CBT2 source exposes an upgrade row, but no secondary refine stat or Motive Skill/passive text for this 3-star Motive.",
            vi: "Nguồn CBT2 có dòng nâng cấp nhưng chưa cung cấp chỉ số tinh luyện phụ hoặc Motive Skill/passive cho Motive 3 sao này."
        },
        sourceLabel: "Kaiden.gg CBT2 — Ashley (2026-07-29)"
    },
    {
        id: "the-rich-fragrance-mystery",
        name: "The Rich Fragrance Mystery",
        image: "",
        rarity: 3,
        limited: false,
        identity: "Witness",
        availability: "CBT2 Motive Pool",
        upgrade: {
            silverium: 17200,
            materialQuantities: [7, 5, 5, 10],
            materialNamesVerified: false
        },
        effect: "",
        archiveNote: {
            en: "The CBT2 source exposes an upgrade row, but no secondary refine stat or Motive Skill/passive text for this 3-star Motive.",
            vi: "Nguồn CBT2 có dòng nâng cấp nhưng chưa cung cấp chỉ số tinh luyện phụ hoặc Motive Skill/passive cho Motive 3 sao này."
        },
        sourceLabel: "Kaiden.gg CBT2 — Argos (2026-07-29)"
    },
    {
        id: "the-pincers-mystery",
        name: "The Pincers Mystery",
        image: "",
        rarity: 3,
        limited: false,
        identity: "Guardian",
        availability: "CBT2 Motive Pool",
        upgrade: {
            silverium: 17200,
            materialQuantities: [7, 5, 5, 10],
            materialNamesVerified: false
        },
        effect: "",
        archiveNote: {
            en: "The CBT2 source exposes an upgrade row, but no secondary refine stat or Motive Skill/passive text for this 3-star Motive.",
            vi: "Nguồn CBT2 có dòng nâng cấp nhưng chưa cung cấp chỉ số tinh luyện phụ hoặc Motive Skill/passive cho Motive 3 sao này."
        },
        sourceLabel: "Kaiden.gg CBT2 — Gratia (2026-07-29)"
    },
    {
        id: "the-furious-speed-mystery",
        name: "The Furious Speed Mystery",
        image: "",
        rarity: 3,
        limited: false,
        identity: "Outlaw",
        availability: "CBT2 Motive Pool",
        upgrade: {
            silverium: 17200,
            materialQuantities: [7, 5, 5, 10],
            materialNamesVerified: false
        },
        effect: "",
        archiveNote: {
            en: "The CBT2 source exposes an upgrade row, but no secondary refine stat or Motive Skill/passive text for this 3-star Motive.",
            vi: "Nguồn CBT2 có dòng nâng cấp nhưng chưa cung cấp chỉ số tinh luyện phụ hoặc Motive Skill/passive cho Motive 3 sao này."
        },
        sourceLabel: "Kaiden.gg CBT2 — Ashley (2026-07-29)"
    },
    {
        id: "the-coin-mystery",
        name: "The Coin Mystery",
        image: "",
        rarity: 3,
        limited: false,
        identity: "Hero",
        availability: "CBT2 Motive Pool",
        upgrade: {
            silverium: 17200,
            materialQuantities: [7, 5, 5, 10],
            materialNamesVerified: false
        },
        effect: "",
        archiveNote: {
            en: "The CBT2 source exposes an upgrade row, but no secondary refine stat or Motive Skill/passive text for this 3-star Motive.",
            vi: "Nguồn CBT2 có dòng nâng cấp nhưng chưa cung cấp chỉ số tinh luyện phụ hoặc Motive Skill/passive cho Motive 3 sao này."
        },
        sourceLabel: "Kaiden.gg CBT2 — Hugin / Alf (2026-07-29)"
    },
    {
        id: "the-richness-mystery",
        name: "The Richness Mystery",
        image: "",
        rarity: 3,
        limited: false,
        identity: "Guardian",
        availability: "CBT2 Motive Pool",
        upgrade: {
            silverium: 17200,
            materialQuantities: [7, 5, 5, 10],
            materialNamesVerified: false
        },
        effect: "",
        archiveNote: {
            en: "The CBT2 source exposes an upgrade row, but no secondary refine stat or Motive Skill/passive text for this 3-star Motive.",
            vi: "Nguồn CBT2 có dòng nâng cấp nhưng chưa cung cấp chỉ số tinh luyện phụ hoặc Motive Skill/passive cho Motive 3 sao này."
        },
        sourceLabel: "Kaiden.gg CBT2 — Gratia / Firtho (2026-07-29)"
    },
    {
        id: "the-bellowing-mystery",
        name: "The Bellowing Mystery",
        image: "",
        rarity: 3,
        limited: false,
        identity: "Hero",
        availability: "CBT2 Motive Pool",
        upgrade: {
            silverium: 17200,
            materialQuantities: [7, 5, 5, 10],
            materialNamesVerified: false
        },
        effect: "",
        archiveNote: {
            en: "The CBT2 source exposes an upgrade row, but no secondary refine stat or Motive Skill/passive text for this 3-star Motive.",
            vi: "Nguồn CBT2 có dòng nâng cấp nhưng chưa cung cấp chỉ số tinh luyện phụ hoặc Motive Skill/passive cho Motive 3 sao này."
        },
        sourceLabel: "Kaiden.gg CBT2 — Hugin / Alf (2026-07-29)"
    },
    {
        id: "the-protection-mystery",
        name: "The Protection Mystery",
        image: "",
        rarity: 3,
        limited: false,
        identity: "Victim",
        availability: "CBT2 Motive Pool",
        effect: "",
        archiveNote: {
            en: "Name and Victim Identity are transcribed from CBT2 gacha footage. No sufficiently reliable stat, refine, upgrade-row or Motive Skill transcription has been added yet.",
            vi: "Tên và Identity Victim được chép từ footage gacha CBT2. Hiện chưa có bản chép đủ tin cậy về chỉ số, refine, dòng nâng cấp hoặc Motive Skill."
        },
        sourceLabel: "SilverPalaceMeta — CBT2 gacha footage"
    }
];

