/* =========================================================
   THE DETECTIVE ARCHIVE v41 — MODULAR CONTENT
   SIMULATION / IMPLEMENT SETS — add new sets here.
   Optional media field:
   - cardImage: image used on the database card
   - image: legacy fallback for the database card
   Simulation detail intentionally uses the archive placeholder instead of artwork.
   Example: images/simulation/<file>
   Keep IDs unique. Leave unknown/unverified values blank.
========================================================= */

// =========================
// SIMULATION / IMPLEMENT SETS
// =========================


/*
    Optional image usage example:
    cardImage: "images/simulation/embers-and-flame-card.webp"
*/

/*
    Dichotomy CBT2 terminology:
    - "Simulation" is the character equipment screen/system.
    - The four set pieces are called "Implements" in the in-game UI.
    - Implement slots: Head, Neck, Secondary Weapon, Accessory.
    - Implements use fixed stats; copies of the same piece/set/rarity do not
      randomly roll different substats.
    - Epiphany is equipped in a separate slot and is NOT one of the four Implements.

    Only set names/piece values that are directly supported by current beta
    documentation are listed below. Unknown set effects remain intentionally blank.
*/

const simulationData = [
    {
        id: "embers-and-flame",
        name: "Embers and Flame",
        type: "Implement Set",
        observedStatus: "Observed 4/4 in Dichotomy CBT2",
        observedOn: "Bentham",
        cardImage: "images/simulation/embers-and-flame-card.png",
        fullSetObserved: true,
        sourceLabel: "SilverPalaceMeta — Equipment & Gear System (Dichotomy CBT2)",
        slots: [
            {
                slot: "Head",
                name: "Death Is Now the Phoenix' Nest",
                verified: true,
                levelObserved: 60,
                knownStats: {
                    greenLv60: [
                        { label: "ATK%", value: "≈ 3.09%" },
                        { label: "DMG Bonus", value: "≈ 1.93%" }
                    ],
                    purpleLv60: [
                        { label: "ATK%", value: "≈ 6.18%" },
                        { label: "DMG Bonus", value: "≈ 3.86%" }
                    ]
                },
                additionalObservedStatLabels: [
                    "DEF",
                    "HP",
                    "HP%"
                ],
                note: {
                    en: "The source screenshot also shows DEF, HP and HP% stat lines on the purple Lv.60 piece, but their exact values are not transcribed in the current archive.",
                    vi: "Ảnh nguồn cũng cho thấy các dòng DEF, HP và HP% trên món tím Lv.60, nhưng giá trị chính xác hiện chưa được chép vào kho dữ liệu."
                }
            },
            {
                slot: "Neck",
                name: "",
                verified: false
            },
            {
                slot: "Secondary Weapon",
                name: "",
                verified: false
            },
            {
                slot: "Accessory",
                name: "",
                verified: false
            }
        ],
        setEffect: "",
        setEffectStatus: "Observed active at 4/4, exact text not yet transcribed",
        description: {
            en: "A complete Embers and Flame four-piece Implement set was observed on Bentham in the Dichotomy beta. Death Is Now the Phoenix' Nest is a verified Head piece. The exact names of the other three pieces and the full set-effect wording remain unpublished until they can be transcribed reliably.",
            vi: "Bộ Implement Embers and Flame đủ 4 món đã được quan sát trên Bentham trong Dichotomy beta. Death Is Now the Phoenix' Nest là món Head đã xác minh. Tên chính xác của ba món còn lại và toàn bộ nội dung hiệu ứng bộ vẫn để trống cho đến khi được chép lại đủ tin cậy."
        }
    },

    {
        id: "elitism",
        name: "Elitism",
        type: "Implement Set",
        observedStatus: "Observed 4/4 in Dichotomy CBT2",
        observedOn: "Lorin",
        cardImage: "images/simulation/elitism-card.png",
        fullSetObserved: true,
        sourceLabel: "SilverPalaceMeta — Equipment & Gear System (Dichotomy CBT2)",
        slots: [
            {
                slot: "Head",
                name: "",
                verified: false
            },
            {
                slot: "Neck",
                name: "",
                verified: false
            },
            {
                slot: "Secondary Weapon",
                name: "",
                verified: false
            },
            {
                slot: "Accessory",
                name: "",
                verified: false
            }
        ],
        setEffect: "",
        setEffectStatus: "Observed active at 4/4, exact text not yet transcribed",
        description: {
            en: "A complete 4/4 Elitism Implement set was observed on Lorin in the Dichotomy beta. The set name and full-set state are verified from the Character Simulation screen, while the individual piece names, exact stat lines and full set-effect wording remain untranscribed.",
            vi: "Bộ Implement Elitism đủ 4/4 đã được quan sát trên Lorin trong Dichotomy beta. Tên bộ và trạng thái đủ bộ được xác nhận từ màn hình Character Simulation; tên từng món, chỉ số chính xác và nội dung hiệu ứng bộ đầy đủ hiện vẫn chưa được chép lại."
        }
    }
];

const simulationSystemInfo = {
    slotNames: [
        "Head",
        "Neck",
        "Secondary Weapon",
        "Accessory"
    ],
    rarities: [
        "Grey",
        "Green",
        "Blue",
        "Purple"
    ],
    yellowTierStatus: "Yellow exists in beta game data but was not obtainable in the documented Dichotomy build.",
    fixedStats: true,
    randomSubstats: false,
    autoMaxLevelOnAcquire: true,
    levelRequirement: "Character level must be at least the equipment level.",
    epiphanySeparate: true,
    conditionalSetBonuses: true,
    observedCompletedSetValue: "A completed set was described as worth roughly 24% ATK in the documented CBT2 build; this is a general build-scale reference, not the exact effect text of Embers and Flame or Elitism.",
    statGlossary: [
        {
            name: "Ultimate Charge Efficiency",
            description: {
                en: "Multiplies how quickly an Ultimate charges; functionally the game's Energy Recharge-style stat.",
                vi: "Nhân tốc độ nạp Ultimate; về chức năng tương tự chỉ số Hồi Năng lượng."
            }
        },
        {
            name: "Amplitude Coefficient",
            description: {
                en: "Chance for a Resonance Effect's damage to be multiplied — effectively CRIT Rate for Resonance Effects.",
                vi: "Xác suất sát thương Resonance Effect được nhân lên — tương tự CRIT Rate dành cho Resonance Effect."
            }
        },
        {
            name: "Amplitude Multiplier",
            description: {
                en: "The multiplier applied when an Amplitude proc occurs — effectively CRIT DMG for Resonance Effects.",
                vi: "Hệ số nhân khi Amplitude kích hoạt — tương tự CRIT DMG dành cho Resonance Effect."
            }
        },
        {
            name: "Stun Buildup Bonus",
            description: {
                en: "Increases the Stun applied by attacks, helping reach an Execution sooner.",
                vi: "Tăng lượng Stun do đòn đánh gây ra, giúp đạt trạng thái Execution sớm hơn."
            }
        },
        {
            name: "Break Exploit",
            description: {
                en: "Speeds up Defense Reduction and Resonance Accumulation.",
                vi: "Tăng tốc tích lũy Defense Reduction và Resonance."
            }
        },
        {
            name: "DMG%",
            description: {
                en: "Damage Bonus can appear as universal DMG%, Reactor Attribute DMG%, or ability-specific DMG%.",
                vi: "Tăng sát thương có thể xuất hiện dưới dạng DMG% chung, DMG% thuộc tính Reactor hoặc DMG% theo loại kỹ năng."
            }
        }
    ]
};

