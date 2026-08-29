/* =========================================================
   THE DETECTIVE ARCHIVE v41 — MODULAR CONTENT
   CHARACTERS — add new character records here. Character images stay in images/character/.
   Keep IDs unique. Leave unknown/unverified values blank.
========================================================= */

// =========================
// CHARACTERS
// =========================

const charactersData = [

    {
        id: "the-detective",

        name: "The Detective",

        alias: "",
        title: "",

        images: {
            card: "images/character/the-detective.png",
            splash: "images/character/the-detective.png"
        },

        rarity: 5,
        limited: false,
        availability: "protagonist",

        /*
            Shared preview/beta information.
            Variant-specific fields below override these values.
        */
        reactorAttribute: "",
        combatStyle: "Striker DPS",
        identity: "Hero",
        affiliation: "",
        occupation: "Detective",

        /*
            The Detective has male / female playable variants.
            Female preview data is currently more complete.
        */
        defaultVariant: "female",
        previewData: true,

        variants: [

            {
                id: "female",
                labelKey: "female",

                /* Name shown on the female preview identity screen */
                displayName: "Munin",

                images: {
                    card: "images/character/the-detective.png",
                    splash: "images/character/the-detective.png"
                },

                reactorAttribute: "Gravitas",
                combatStyle: "Striker DPS",
                identity: "Hero",
                affiliation: "The Raven's Claws",
                occupation: "Detective",

                /* Dichotomy / preview-build data. Subject to change before release. */
                combatWeapon: {
                    en: "Sword + Gun",
                    vi: "Kiếm + Súng"
                },

                baseStats: {
                    levels: {
                        1: { hp: 720, atk: 72, def: 24 },
                        20: { hp: 1692, atk: 169, def: 121 },
                        30: { hp: 2340, atk: 234, def: 195 },
                        40: { hp: 2988, atk: 298, def: 270 },
                        50: { hp: 3636, atk: 363, def: 344 },
                        60: { hp: 4284, atk: 428, def: 418 },
                        70: { hp: 4932, atk: 493, def: 493 },
                        80: { hp: 5292, atk: 529, def: 529 }
                    },
                    verifiedOn: "2026-08-12",
                    snapshotType: "progression"
                },

                /*
                    CBT2 build guidance for Munin.
                    Only the stat direction is currently supported strongly enough to
                    publish as a recommendation. Exact BIS Motive / Simulation set /
                    Epiphany are intentionally not claimed until their effects are
                    independently verified.
                */
                build: {
                    confidence: {
                        en: "Beta guidance — exact best-in-slot equipment is not yet verified.",
                        vi: "Hướng dẫn beta — trang bị tối ưu chính xác vẫn chưa được xác minh."
                    },

                    motive: {
                        name: "",
                        candidates: [
                            "The Coin Mystery",
                            "The Bellowing Mystery"
                        ],
                        note: {
                            en: "Munin is a Hero. Two Hero-tagged 3-star Motives are confirmed in the CBT2 pool, but their full passive text has not been verified here, so they are shown as candidates rather than BIS recommendations.",
                            vi: "Munin có Identity Hero. Hai Motive 3 sao gắn nhãn Hero đã được xác nhận trong pool CBT2, nhưng nội tại đầy đủ chưa được xác minh ở đây, vì vậy chúng chỉ được hiển thị như lựa chọn tham khảo chứ chưa phải BIS."
                        }
                    },

                    simulation: {
                        setName: "",
                        pieces: [],
                        note: {
                            en: "No Simulation set has enough verified effect data to call it Munin's best set yet. Prefer offensive Implement stats that support her skill-focused Gravitas damage while this remains beta data.",
                            vi: "Chưa có bộ Simulation nào đủ dữ liệu hiệu ứng được xác minh để gọi là bộ tốt nhất cho Munin. Trong giai đoạn beta, ưu tiên Implement thiên về tấn công để hỗ trợ sát thương Gravitas dựa trên kỹ năng của cô ấy."
                        }
                    },

                    epiphany: {
                        name: "",
                        note: {
                            en: "The best Epiphany is still pending because the complete passive text for the CBT2 book pool has not been transcribed reliably.",
                            vi: "Epiphany tốt nhất vẫn đang chờ xác minh vì nội dung passive đầy đủ của pool sách CBT2 chưa được chép lại một cách đáng tin cậy."
                        }
                    },

                    methods: {
                        note: {
                            en: "Upgrade Methods that strengthen the core Raven Slayer → Gravity Overdrive → Ultimate loop first once exact node values are verified.",
                            vi: "Khi giá trị từng node được xác minh, ưu tiên Methods củng cố vòng lặp cốt lõi Raven Slayer → Gravity Overdrive → Ultimate."
                        }
                    },

                    statPriority: [
                        { en: "CRIT Rate / CRIT DMG", vi: "Tỷ lệ Bạo kích / ST Bạo kích" },
                        { en: "ATK%", vi: "ATK%" },
                        { en: "Gravitas DMG Bonus", vi: "Tăng ST Gravitas" },
                        { en: "Energy Recharge", vi: "Hồi Năng lượng" },
                        { en: "ATK", vi: "ATK" }
                    ],

                    notes: [
                        {
                            en: "Munin's damage loop is skill-driven: Basic Attack builds Ammunition, Raven Slayer spends it to build Gravity Overdrive, and the charged Skill strengthens the Ultimate.",
                            vi: "Vòng sát thương của Munin dựa nhiều vào kỹ năng: Basic Attack tích Ammunition, Raven Slayer tiêu hao để tích Gravity Overdrive, còn Charged Skill tăng sức mạnh Ultimate."
                        },
                        {
                            en: "These recommendations reflect Dichotomy/preview data and should be rechecked whenever a later test changes Motive, Simulation, Epiphany or stat values.",
                            vi: "Các đề xuất này dựa trên dữ liệu Dichotomy/preview và cần được kiểm tra lại nếu test sau thay đổi Motive, Simulation, Epiphany hoặc chỉ số."
                        }
                    ]
                },

                skills: [
                    {
                        type: "basicAttack",
                        name: "Double-Edged Sword: Truth & Deceit",
                        description: {
                            en: "A 5-hit Gravitas combo. The 3rd hit grants 1 Ammunition and the 5th grants 2. The final hit can chain into Raven Slayer, while a Perfect Dodge can immediately trigger the 5th hit.",
                            vi: "Chuỗi 5 đòn gây sát thương Gravitas. Đòn thứ 3 nhận 1 Ammunition và đòn thứ 5 nhận 2. Đòn cuối có thể nối sang Raven Slayer; Perfect Dodge có thể lập tức tung đòn thứ 5."
                        }
                    },
                    {
                        type: "skill",
                        name: "Raven Slayer",
                        description: {
                            en: "Consumes Ammunition to fire up to 3 consecutive Gravitas shots and build Gravity Overdrive. At full Overdrive, a charged shot pierces enemies and strengthens the Ultimate for a short duration.",
                            vi: "Tiêu hao Ammunition để bắn tối đa 3 phát Gravitas liên tiếp và tích Gravity Overdrive. Khi đầy Overdrive, phát bắn tích lực xuyên qua kẻ địch và tăng sức mạnh Ultimate trong thời gian ngắn."
                        }
                    },
                    {
                        type: "ultimate",
                        name: "Thus Spake the Raven",
                        description: {
                            en: "Leaps into the air for a powerful Gravitas attack and creates a Gravity Field. The field applies Time Dilation and continues dealing Gravitas damage for a brief period.",
                            vi: "Nhảy lên không trung rồi tung đòn Gravitas mạnh, đồng thời tạo Gravity Field. Khu vực này áp dụng Time Dilation và tiếp tục gây sát thương Gravitas trong thời gian ngắn."
                        }
                    },
                    {
                        type: "tacticalAssault",
                        name: "\"One-Half\" of a Retaliation",
                        description: {
                            en: "A switch-in Tactical Assault that unleashes a flurry of Gravitas attacks and rapidly builds Gravity Overdrive.",
                            vi: "Tactical Assault khi đổi nhân vật vào sân, tung chuỗi đòn Gravitas và nhanh chóng tích Gravity Overdrive."
                        }
                    },
                    {
                        type: "passive",
                        name: "Occam's Razor",
                        description: {
                            en: "Raven Slayer's charged shot increases Ultimate damage, while a successful parry grants Gravity Overdrive. Preview values may change before release.",
                            vi: "Phát bắn tích lực của Raven Slayer tăng sát thương Ultimate, còn parry thành công sẽ nhận Gravity Overdrive. Các giá trị beta có thể thay đổi trước khi phát hành."
                        }
                    }
                ]
            },

            {
                id: "male",
                labelKey: "male",

                displayName: "Hugin",

                images: {
                    card: "images/character/the-detective.png",
                    splash: "images/character/the-detective.png"
                },

                reactorAttribute: "Gravitas",
                combatStyle: "Striker DPS",
                identity: "Hero",
                affiliation: "The Raven's Beak",
                occupation: "Detective",

                combatWeapon: { en: "Sword + Gun", vi: "Kiếm + Súng" },
                baseStats: {
                    levels: {
                        1: { hp: 720, atk: 72, def: 24 },
                        20: { hp: 1692, atk: 169, def: 121 },
                        30: { hp: 2340, atk: 234, def: 195 },
                        40: { hp: 2988, atk: 298, def: 270 },
                        50: { hp: 3636, atk: 363, def: 344 },
                        60: { hp: 4284, atk: 428, def: 418 },
                        70: { hp: 4932, atk: 493, def: 493 },
                        80: { hp: 5292, atk: 529, def: 529 }
                    },
                    verifiedOn: "2026-08-12",
                    snapshotType: "progression"
                },
                skills: [
                    { type: "basicAttack", name: "Double-Edged Sword: Truth & Deceit", description: { en: "A 5-hit Gravitas combo that builds Ammunition and can chain into Raven Slayer.", vi: "Chuỗi 5 đòn Gravitas tích Ammunition và có thể nối sang Raven Slayer." } },
                    { type: "skill", name: "Raven Slayer", description: { en: "Consumes Ammunition for consecutive Gravitas shots and builds Gravity Overdrive.", vi: "Tiêu hao Ammunition để bắn Gravitas liên tiếp và tích Gravity Overdrive." } },
                    { type: "ultimate", name: "Thus Spake the Raven", description: { en: "A powerful Gravitas attack that creates a time-dilating Gravity Field.", vi: "Đòn Gravitas mạnh tạo Gravity Field gây hiệu ứng làm chậm thời gian." } },
                    { type: "tacticalAssault", name: "Half Retaliation", description: { en: "A switch-in flurry that deals Gravitas damage and builds Gravity Overdrive.", vi: "Chuỗi đòn khi đổi vào sân, gây Gravitas và tích Gravity Overdrive." } },
                    { type: "passive", name: "Occam's Razor", description: { en: "Charged Raven Slayer hits strengthen the Ultimate; parries grant Gravity Overdrive.", vi: "Raven Slayer tích lực tăng sức mạnh Ultimate; parry nhận Gravity Overdrive." } }
                ]
            }

        ],

        description: {

            en:
                "The protagonist of Silver Palace. The player takes on the role of a Detective who investigates cases and uncovers the mysteries hidden throughout Silvernia.",

            vi:
                "Nhân vật chính của Silver Palace. Người chơi vào vai một Thám tử, điều tra các vụ án và khám phá những bí ẩn ẩn giấu khắp Silvernia."

        }
    },

    {
        id: "cinderella",
        name: '"Cinderella"',
        alias: "Ashley",
        title: "The Vengeful Ant",
        images: { card: "images/character/cinderella.png", splash: "images/character/cinderella.png" },
        rarity: 5, limited: true, availability: "limited", previewData: true,
        reactorAttribute: "Ignis", combatStyle: "Striker DPS", identity: "Outlaw",
        affiliation: "Fableborne", occupation: "Cinderella",
        combatWeapon: { en: "Flame Sword + Machine Gun", vi: "Kiếm lửa + Súng máy" },
        baseStats: {
            levels: {
                1: { hp: 739, atk: 95, def: 22 },
                20: { hp: 1737, atk: 223, def: 111 },
                30: { hp: 2402, atk: 308, def: 179 },
                40: { hp: 3067, atk: 394, def: 247 },
                50: { hp: 3732, atk: 479, def: 315 },
                60: { hp: 4398, atk: 565, def: 383 },
                70: { hp: 5063, atk: 651, def: 452 },
                80: { hp: 5433, atk: 698, def: 485 }
            },
            verifiedOn: "2026-08-12",
            snapshotType: "progression"
        },
        build: {
            confidence: {
                en: "Beta guidance — stat direction follows the documented CBT2 role/kit, while exact BIS Motive, Simulation and Epiphany remain unverified.",
                vi: "Hướng dẫn beta — hướng chỉ số dựa trên vai trò/bộ kỹ năng CBT2 đã ghi nhận; Motive, Simulation và Epiphany BIS chính xác vẫn chưa được xác minh."
            },
            motive: {
                name: "",
                candidates: [
                            "The Burning Stone Mystery",
                            "The Aberrant Mystery",
                            "The Furious Speed Mystery"
                ],
                note: {
                    en: "These are same-Identity Motive candidates confirmed in the CBT2 pool. They are not labelled best-in-slot because complete passive comparisons are still incomplete.",
                    vi: "Đây là các Motive cùng Identity đã được xác nhận trong pool CBT2. Chưa gắn nhãn BIS vì dữ liệu so sánh passive đầy đủ vẫn chưa hoàn chỉnh."
                }
            },
            simulation: {
                setName: "",
                pieces: [],
                note: {
                    en: "No Simulation set is being labelled best-in-slot yet. Prefer offensive Implement stats that reinforce Cinderella's skill-driven Ignis burst and Quenched windows.",
                    vi: "Chưa gắn nhãn bộ Simulation nào là BIS. Ưu tiên Implement thiên về tấn công để hỗ trợ sát thương Ignis dựa trên kỹ năng và giai đoạn Quenched của Cinderella."
                }
            },
            epiphany: {
                name: "",
                note: {
                    en: "No Epiphany is labelled best-in-slot yet because the full passive pool has not been verified well enough for character-by-character ranking.",
                    vi: "Chưa gắn nhãn Epiphany nào là BIS vì toàn bộ passive của pool sách chưa được xác minh đủ tốt để xếp theo từng nhân vật."
                }
            },
            methods: {
                note: {
                    en: "Prioritize Methods that strengthen Re-Smelt, Quenched uptime and her Ultimate burst once exact node values are verified.",
                    vi: "Ưu tiên Methods tăng sức mạnh Re-Smelt, thời gian Quenched và sát thương Ultimate khi giá trị từng node được xác minh."
                }
            },
            statPriority: [
                        { en: "CRIT Rate / CRIT DMG", vi: "Tỷ lệ Bạo kích / ST Bạo kích" },
                        { en: "ATK%", vi: "ATK%" },
                        { en: "Ignis DMG Bonus", vi: "Tăng ST Ignis" },
                        { en: "Energy Recharge", vi: "Hồi Năng lượng" },
                        { en: "ATK", vi: "ATK" }
            ],
            notes: [
                {
                    en: "Cinderella is a Striker DPS whose beta kit builds Vengeful Flame, converts it into gunfire/Overheat, then cashes out during Quenched.",
                    vi: "Cinderella là Striker DPS; bộ kỹ năng beta tích Vengeful Flame, chuyển thành xả đạn/Overheat rồi dồn sát thương trong trạng thái Quenched."
                },
                {
                    en: "All recommendations reflect pre-release Dichotomy/CBT2 data and should be rechecked after balance, equipment or terminology changes.",
                    vi: "Mọi đề xuất đều dựa trên dữ liệu Dichotomy/CBT2 trước phát hành và cần kiểm tra lại nếu cân bằng, trang bị hoặc thuật ngữ thay đổi."
                }
            ]
        },

        skills: [
            { type: "basicAttack", name: "Double-Quenched Blade", description: { en: "A multi-hit Ignis sword combo that builds Vengeful Flame and can branch into ranged attacks.", vi: "Chuỗi kiếm Ignis nhiều đòn, tích Vengeful Flame và có thể chuyển sang đòn tầm xa." } },
            { type: "skill", name: "Re-Smelt", description: { en: "Consumes Vengeful Flame to unleash sustained gunfire and build Overheat.", vi: "Tiêu hao Vengeful Flame để xả đạn liên tục và tích Overheat." } },
            { type: "ultimate", name: "Carriage of Conflagration", description: { en: "Activates Quenched, empowering her kit; a follow-up Ultimate summons an explosive chariot.", vi: "Kích hoạt Quenched để cường hóa bộ kỹ năng; Ultimate tiếp theo triệu hồi cỗ xe phát nổ." } },
            { type: "tacticalAssault", name: "Thermal Contact", description: { en: "A flying-kick switch-in attack that deals Ignis damage and grants Overheat.", vi: "Đòn đá bay khi đổi vào sân, gây Ignis và nhận Overheat." } },
            { type: "passive", name: "Thermal Rampage", description: { en: "Grants a major CRIT Rate bonus while Quenched in the beta build.", vi: "Tăng mạnh Tỷ lệ Bạo kích khi ở trạng thái Quenched trong bản beta." } }
        ],
        description: { en: "Ashley fights under the Cinderella identity, a meticulous planner of vengeance who mixes flame-sword combat with machine-gun fire.", vi: "Ashley chiến đấu dưới danh xưng Cinderella, một người lên kế hoạch báo thù tỉ mỉ, kết hợp kiếm lửa và súng máy." }
    },

    {
        id: "argos", name: "Argos", alias: "", title: "The Eye of Argos",
        images: { card: "images/character/argos.png", splash: "images/character/argos.png" },
        rarity: 4, limited: false, availability: "preview", previewData: true,
        reactorAttribute: "Glacies", combatStyle: "Combat Support", identity: "Witness",
        affiliation: "MISS", occupation: "Bartender",
        combatWeapon: { en: "Cane Gun", vi: "Gậy súng" },
        baseStats: {
            levels: {
                1: { hp: 696, atk: 67, def: 27 },
                20: { hp: 1635, atk: 157, def: 136 },
                30: { hp: 2262, atk: 218, def: 220 },
                40: { hp: 2888, atk: 278, def: 303 },
                50: { hp: 3514, atk: 339, def: 387 },
                60: { hp: 4141, atk: 399, def: 471 },
                70: { hp: 4767, atk: 460, def: 554 },
                80: { hp: 5115, atk: 493, def: 595 }
            },
            verifiedOn: "2026-08-12",
            snapshotType: "progression"
        },
        build: {
            confidence: {
                en: "Beta guidance — stat direction follows the documented CBT2 role/kit, while exact BIS Motive, Simulation and Epiphany remain unverified.",
                vi: "Hướng dẫn beta — hướng chỉ số dựa trên vai trò/bộ kỹ năng CBT2 đã ghi nhận; Motive, Simulation và Epiphany BIS chính xác vẫn chưa được xác minh."
            },
            motive: {
                name: "",
                candidates: [
                            "The Fatuity Mystery",
                            "The Rich Fragrance Mystery"
                ],
                note: {
                    en: "These are same-Identity Motive candidates confirmed in the CBT2 pool. They are not labelled best-in-slot because complete passive comparisons are still incomplete.",
                    vi: "Đây là các Motive cùng Identity đã được xác nhận trong pool CBT2. Chưa gắn nhãn BIS vì dữ liệu so sánh passive đầy đủ vẫn chưa hoàn chỉnh."
                }
            },
            simulation: {
                setName: "",
                pieces: [],
                note: {
                    en: "Prefer support-oriented Implements. Argos' beta passive gains extra team-buff value from Max HP, so HP-focused pieces are especially relevant while exact set effects remain incomplete.",
                    vi: "Ưu tiên Implement thiên về hỗ trợ. Nội tại beta của Argos tăng thêm giá trị buff đội theo HP tối đa, nên các món thiên HP đặc biệt hữu ích khi hiệu ứng set chưa đầy đủ."
                }
            },
            epiphany: {
                name: "",
                note: {
                    en: "No Epiphany is labelled best-in-slot yet because the full passive pool has not been verified well enough for character-by-character ranking.",
                    vi: "Chưa gắn nhãn Epiphany nào là BIS vì toàn bộ passive của pool sách chưa được xác minh đủ tốt để xếp theo từng nhân vật."
                }
            },
            methods: {
                note: {
                    en: "Prioritize Ultimate and support-buff Methods first, then Skill uptime and personal damage.",
                    vi: "Ưu tiên Methods cho Ultimate và buff hỗ trợ trước, sau đó đến thời gian hoạt động của Skill và sát thương cá nhân."
                }
            },
            statPriority: [
                        { en: "Energy Recharge", vi: "Hồi Năng lượng" },
                        { en: "HP%", vi: "HP%" },
                        { en: "ATK%", vi: "ATK%" },
                        { en: "Glacies DMG Bonus", vi: "Tăng ST Glacies" },
                        { en: "DEF%", vi: "DEF%" }
            ],
            notes: [
                {
                    en: "Argos is Combat Support. His Ultimate creates an All-Seeing Domain, and his beta passive can raise team ATK with extra scaling from Max HP.",
                    vi: "Argos là Combat Support. Ultimate tạo All-Seeing Domain và nội tại beta có thể tăng ATK toàn đội với hiệu quả bổ sung dựa trên HP tối đa."
                },
                {
                    en: "All recommendations reflect pre-release Dichotomy/CBT2 data and should be rechecked after balance, equipment or terminology changes.",
                    vi: "Mọi đề xuất đều dựa trên dữ liệu Dichotomy/CBT2 trước phát hành và cần kiểm tra lại nếu cân bằng, trang bị hoặc thuật ngữ thay đổi."
                }
            ]
        },

        skills: [
            { type: "basicAttack", name: "Cane and Spirits", description: { en: "A Glacies cane-gun combo with charged and unsheathe follow-ups.", vi: "Chuỗi đòn Glacies bằng gậy súng, có đòn tích lực và rút súng nối tiếp." } },
            { type: "skill", name: "Celebratory Champagne", description: { en: "Mixes a combat drink that supports allies while dealing Glacies damage.", vi: "Pha đồ uống chiến đấu để hỗ trợ đồng đội đồng thời gây sát thương Glacies." } },
            { type: "ultimate", name: "The Eye of Argos", description: { en: "Creates an All-Seeing Domain that continuously damages enemies with Glacies.", vi: "Tạo All-Seeing Domain gây sát thương Glacies liên tục lên kẻ địch." } },
            { type: "tacticalAssault", name: "Screwdriver", description: { en: "A long-range switch-in charge followed by a cane-gun unsheathe strike.", vi: "Lao vào từ xa khi đổi nhân vật rồi tung đòn rút gậy súng." } },
            { type: "passive", name: "Bartending Insight", description: { en: "After his Ultimate, Argos boosts the team's ATK, with extra scaling from his Max HP.", vi: "Sau Ultimate, Argos tăng ATK toàn đội và nhận thêm hiệu quả theo HP tối đa." } }
        ],
        description: { en: "A charismatic MISS bartender who listens more than he talks and supports allies with therapeutic mixes.", vi: "Một bartender lôi cuốn của MISS, giỏi lắng nghe và hỗ trợ đồng đội bằng những hỗn hợp có tác dụng hồi phục/hỗ trợ." }
    },

    {
        id: "alf", name: "Alf", alias: "", title: "A Story Truly Yours",
        images: { card: "images/character/alf.png", splash: "images/character/alf.png" },
        rarity: 4, limited: false, availability: "preview", previewData: true,
        reactorAttribute: "Ignis", combatStyle: "Break Suppressor", identity: "Hero",
        affiliation: "MISS", occupation: "Maid",
        combatWeapon: { en: "Shotgun / Flamethrower", vi: "Shotgun / Súng phun lửa" },
        baseStats: {
            levels: {
                1: { hp: 648, atk: 74, def: 26 },
                20: { hp: 1522, atk: 174, def: 131 },
                30: { hp: 2106, atk: 241, def: 211 },
                40: { hp: 2689, atk: 308, def: 292 },
                50: { hp: 3272, atk: 375, def: 373 },
                60: { hp: 3855, atk: 442, def: 453 },
                70: { hp: 4438, atk: 509, def: 534 },
                80: { hp: 4762, atk: 546, def: 573 }
            },
            verifiedOn: "2026-08-12",
            snapshotType: "progression"
        },
        build: {
            confidence: {
                en: "Beta guidance — stat direction follows the documented CBT2 role/kit, while exact BIS Motive, Simulation and Epiphany remain unverified.",
                vi: "Hướng dẫn beta — hướng chỉ số dựa trên vai trò/bộ kỹ năng CBT2 đã ghi nhận; Motive, Simulation và Epiphany BIS chính xác vẫn chưa được xác minh."
            },
            motive: {
                name: "",
                candidates: [
                            "The Coin Mystery",
                            "The Bellowing Mystery"
                ],
                note: {
                    en: "These are same-Identity Motive candidates confirmed in the CBT2 pool. They are not labelled best-in-slot because complete passive comparisons are still incomplete.",
                    vi: "Đây là các Motive cùng Identity đã được xác nhận trong pool CBT2. Chưa gắn nhãn BIS vì dữ liệu so sánh passive đầy đủ vẫn chưa hoàn chỉnh."
                }
            },
            simulation: {
                setName: "",
                pieces: [],
                note: {
                    en: "Use offensive Implements while prioritizing whatever verified effects improve stun/break pressure. A dedicated break-scaling stat has not been confirmed here, so none is invented.",
                    vi: "Dùng Implement thiên tấn công và ưu tiên hiệu ứng đã xác minh giúp tăng áp lực phá choáng. Chưa xác minh được một chỉ số break chuyên biệt nên web không tự đặt tên."
                }
            },
            epiphany: {
                name: "",
                note: {
                    en: "No Epiphany is labelled best-in-slot yet because the full passive pool has not been verified well enough for character-by-character ranking.",
                    vi: "Chưa gắn nhãn Epiphany nào là BIS vì toàn bộ passive của pool sách chưa được xác minh đủ tốt để xếp theo từng nhân vật."
                }
            },
            methods: {
                note: {
                    en: "Prioritize Zeroth Shell and the flamethrower/Break loop, followed by Ultimate and Basic Attack upgrades.",
                    vi: "Ưu tiên Zeroth Shell và vòng súng phun lửa/phá choáng, sau đó đến Ultimate và Basic Attack."
                }
            },
            statPriority: [
                        { en: "ATK%", vi: "ATK%" },
                        { en: "CRIT Rate / CRIT DMG", vi: "Tỷ lệ Bạo kích / ST Bạo kích" },
                        { en: "Ignis DMG Bonus", vi: "Tăng ST Ignis" },
                        { en: "Energy Recharge", vi: "Hồi Năng lượng" },
                        { en: "ATK", vi: "ATK" }
            ],
            notes: [
                {
                    en: "Alf is a Break Suppressor, but her shotgun-to-flamethrower loop still deals direct Ignis damage, so offensive stats remain useful until break-specific scaling is documented.",
                    vi: "Alf là Break Suppressor nhưng vòng shotgun → súng phun lửa vẫn gây Ignis trực tiếp, vì vậy chỉ số tấn công vẫn hữu ích cho đến khi có dữ liệu scaling phá choáng cụ thể."
                },
                {
                    en: "All recommendations reflect pre-release Dichotomy/CBT2 data and should be rechecked after balance, equipment or terminology changes.",
                    vi: "Mọi đề xuất đều dựa trên dữ liệu Dichotomy/CBT2 trước phát hành và cần kiểm tra lại nếu cân bằng, trang bị hoặc thuật ngữ thay đổi."
                }
            ]
        },

        skills: [
            { type: "basicAttack", name: "Novice Shotgun", description: { en: "A close-range shotgun combo with movement and pursuit follow-ups.", vi: "Chuỗi shotgun tầm gần có các đòn di chuyển và truy kích nối tiếp." } },
            { type: "skill", name: "Zeroth Shell", description: { en: "Uses her Reactor to turn the shotgun into a flamethrower for Ignis damage and break pressure.", vi: "Dùng Reactor biến shotgun thành súng phun lửa để gây Ignis và tạo áp lực phá choáng." } },
            { type: "ultimate", name: "Flare of Enlightenment", description: { en: "An explosive Ignis finisher centered on Alf's converted weapon.", vi: "Đòn kết liễu Ignis bùng nổ xoay quanh vũ khí chuyển đổi của Alf." } },
            { type: "tacticalAssault", name: "Dustproof Magazine", description: { en: "A switch-in attack that immediately pressures enemies with her firearm.", vi: "Đòn đổi vào sân gây áp lực lên kẻ địch ngay bằng vũ khí của cô." } },
            { type: "passive", name: "Maid in Training", description: { en: "A beta passive that improves the flow of her shotgun/flamethrower combat loop.", vi: "Nội tại beta giúp tối ưu vòng chiến đấu shotgun/súng phun lửa của cô." } }
        ],
        description: { en: "A clumsy MISS maid who is far more dependable in combat, switching between a shotgun and flamethrower.", vi: "Một cô hầu vụng về của MISS nhưng đáng tin cậy hơn hẳn khi chiến đấu, luân chuyển giữa shotgun và súng phun lửa." }
    },

    {
        id: "lorin", name: "Lorin", alias: "", title: "The Indispensable",
        images: { card: "images/character/lorin.png", splash: "images/character/lorin.png" },
        rarity: 4, limited: false, availability: "preview", previewData: true,
        reactorAttribute: "Fulmen", combatStyle: "Break Suppressor", identity: "Guardian",
        affiliation: "River Constabulary", occupation: "Chief Inspector",
        combatWeapon: { en: "Electric Boxing Gloves", vi: "Găng boxing điện" },
        baseStats: {
            levels: {
                1: { hp: 744, atk: 76, def: 21 },
                20: { hp: 1748, atk: 180, def: 106 },
                30: { hp: 2418, atk: 249, def: 171 },
                40: { hp: 3087, atk: 318, def: 236 },
                50: { hp: 3757, atk: 387, def: 301 },
                60: { hp: 4426, atk: 456, def: 366 },
                70: { hp: 5096, atk: 526, def: 431 },
                80: { hp: 5468, atk: 564, def: 463 }
            },
            verifiedOn: "2026-08-12",
            snapshotType: "progression"
        },
        build: {
            confidence: {
                en: "Beta guidance — stat direction follows the documented CBT2 role/kit, while exact BIS Motive, Simulation and Epiphany remain unverified.",
                vi: "Hướng dẫn beta — hướng chỉ số dựa trên vai trò/bộ kỹ năng CBT2 đã ghi nhận; Motive, Simulation và Epiphany BIS chính xác vẫn chưa được xác minh."
            },
            motive: {
                name: "",
                candidates: [
                            "The Pincers Mystery",
                            "The Richness Mystery"
                ],
                note: {
                    en: "These are same-Identity Motive candidates confirmed in the CBT2 pool. They are not labelled best-in-slot because complete passive comparisons are still incomplete.",
                    vi: "Đây là các Motive cùng Identity đã được xác nhận trong pool CBT2. Chưa gắn nhãn BIS vì dữ liệu so sánh passive đầy đủ vẫn chưa hoàn chỉnh."
                }
            },
            simulation: {
                setName: "",
                pieces: [],
                note: {
                    en: "Favor durable Implements with enough Energy Recharge to keep his break-control rotation active. Exact best set remains unverified.",
                    vi: "Ưu tiên Implement tăng độ bền và đủ Hồi Năng lượng để duy trì vòng khống chế/phá choáng. Bộ tốt nhất chính xác vẫn chưa được xác minh."
                }
            },
            epiphany: {
                name: "",
                note: {
                    en: "No Epiphany is labelled best-in-slot yet because the full passive pool has not been verified well enough for character-by-character ranking.",
                    vi: "Chưa gắn nhãn Epiphany nào là BIS vì toàn bộ passive của pool sách chưa được xác minh đủ tốt để xếp theo từng nhân vật."
                }
            },
            methods: {
                note: {
                    en: "Prioritize Methods that improve Street Smarts generation, break pressure and Non-Lethal Current uptime.",
                    vi: "Ưu tiên Methods tăng tốc độ tích Street Smarts, áp lực phá choáng và khả năng dùng Non-Lethal Current."
                }
            },
            statPriority: [
                        { en: "HP% / DEF%", vi: "HP% / DEF%" },
                        { en: "Energy Recharge", vi: "Hồi Năng lượng" },
                        { en: "Fulmen DMG Bonus", vi: "Tăng ST Fulmen" },
                        { en: "ATK%", vi: "ATK%" },
                        { en: "HP / DEF", vi: "HP / DEF" }
            ],
            notes: [
                {
                    en: "Lorin is a Break Suppressor with a durable frontline kit built around Street Smarts, Sway and controlled Fulmen boxing.",
                    vi: "Lorin là Break Suppressor tuyến trước, xoay quanh Street Smarts, Sway và các đòn boxing Fulmen có kiểm soát."
                },
                {
                    en: "All recommendations reflect pre-release Dichotomy/CBT2 data and should be rechecked after balance, equipment or terminology changes.",
                    vi: "Mọi đề xuất đều dựa trên dữ liệu Dichotomy/CBT2 trước phát hành và cần kiểm tra lại nếu cân bằng, trang bị hoặc thuật ngữ thay đổi."
                }
            ]
        },

        skills: [
            { type: "basicAttack", name: "Reflex Fist", description: { en: "A Fulmen boxing combo built around controlled, non-lethal strikes.", vi: "Chuỗi quyền Fulmen tập trung vào các đòn điện được kiểm soát ở mức không gây chết người." } },
            { type: "skill", name: "Strategic Retreat", description: { en: "A defensive repositioning tool that supports his break-oriented frontline loop.", vi: "Kỹ năng tái định vị phòng thủ hỗ trợ vòng chiến đấu tuyến trước thiên về phá choáng." } },
            { type: "ultimate", name: "Non-Lethal Current", description: { en: "Slams his electrified gloves into the ground for a large Fulmen hit.", vi: "Nện găng điện xuống đất để tung một đòn Fulmen diện rộng mạnh." } },
            { type: "tacticalAssault", name: "Conflict Interception", description: { en: "Switches in with a charged punch and restores his Street Smarts resource.", vi: "Đổi vào sân bằng cú đấm tích lực và hồi đầy tài nguyên Street Smarts." } },
            { type: "passive", name: "Judgemental Intuition", description: { en: "Strategic Retreat temporarily increases his Basic Attack damage.", vi: "Strategic Retreat tạm thời tăng sát thương Đánh thường của Lorin." } }
        ],
        description: { en: "The weary but dutiful Chief Inspector of the River Constabulary, using non-lethal electrified boxing gloves to control crowds.", vi: "Chánh thanh tra tận tụy nhưng mệt mỏi của River Constabulary, dùng găng boxing điện không gây chết người để khống chế đám đông." }
    },

    {
        id: "firtho", name: "Firtho", alias: "", title: "The Medical Lancet",
        images: { card: "images/character/firtho.png", splash: "images/character/firtho.png" },
        rarity: 4, limited: false, availability: "preview", previewData: true,
        reactorAttribute: "Radiatio", combatStyle: "Survival & Healing", identity: "Guardian",
        affiliation: "The Corner Clinic", occupation: "Doctor",
        combatWeapon: { en: "Saw Cleaver + Syringes", vi: "Cưa phẫu thuật + Ống tiêm" },
        baseStats: {
            levels: {
                1: { hp: 816, atk: 60, def: 25 },
                20: { hp: 1917, atk: 141, def: 126 },
                30: { hp: 2652, atk: 195, def: 203 },
                40: { hp: 3386, atk: 249, def: 281 },
                50: { hp: 4120, atk: 303, def: 358 },
                60: { hp: 4855, atk: 357, def: 436 },
                70: { hp: 5589, atk: 411, def: 513 },
                80: { hp: 5997, atk: 441, def: 551 }
            },
            verifiedOn: "2026-08-12",
            snapshotType: "progression"
        },
        build: {
            confidence: {
                en: "Beta guidance — stat direction follows the documented CBT2 role/kit, while exact BIS Motive, Simulation and Epiphany remain unverified.",
                vi: "Hướng dẫn beta — hướng chỉ số dựa trên vai trò/bộ kỹ năng CBT2 đã ghi nhận; Motive, Simulation và Epiphany BIS chính xác vẫn chưa được xác minh."
            },
            motive: {
                name: "",
                candidates: [
                            "The Pincers Mystery",
                            "The Richness Mystery"
                ],
                note: {
                    en: "These are same-Identity Motive candidates confirmed in the CBT2 pool. They are not labelled best-in-slot because complete passive comparisons are still incomplete.",
                    vi: "Đây là các Motive cùng Identity đã được xác nhận trong pool CBT2. Chưa gắn nhãn BIS vì dữ liệu so sánh passive đầy đủ vẫn chưa hoàn chỉnh."
                }
            },
            simulation: {
                setName: "",
                pieces: [],
                note: {
                    en: "Prioritize HP and sustain-oriented Implements. Second Heart trades Firtho's HP for healing and a team ATK buff, so survival stats directly support her core loop.",
                    vi: "Ưu tiên Implement thiên HP và sinh tồn. Second Heart đổi HP của Firtho để hồi máu và buff ATK toàn đội, nên chỉ số sống sót hỗ trợ trực tiếp vòng kỹ năng chính."
                }
            },
            epiphany: {
                name: "",
                note: {
                    en: "No Epiphany is labelled best-in-slot yet because the full passive pool has not been verified well enough for character-by-character ranking.",
                    vi: "Chưa gắn nhãn Epiphany nào là BIS vì toàn bộ passive của pool sách chưa được xác minh đủ tốt để xếp theo từng nhân vật."
                }
            },
            methods: {
                note: {
                    en: "Prioritize Second Heart and Pain Management first, then Ultimate and personal damage nodes.",
                    vi: "Ưu tiên Second Heart và Pain Management trước, sau đó đến Ultimate và các node sát thương cá nhân."
                }
            },
            statPriority: [
                        { en: "HP%", vi: "HP%" },
                        { en: "Healing-oriented stats", vi: "Chỉ số thiên hồi phục" },
                        { en: "Energy Recharge", vi: "Hồi Năng lượng" },
                        { en: "DEF%", vi: "DEF%" },
                        { en: "Radiatio DMG Bonus", vi: "Tăng ST Radiatio" }
            ],
            notes: [
                {
                    en: "Firtho's beta build is primarily sustain/support: keep Second Heart's stacked team buff and healing active rather than chasing personal damage.",
                    vi: "Build beta của Firtho chủ yếu là sinh tồn/hỗ trợ: duy trì buff cộng dồn và hồi máu từ Second Heart thay vì chạy theo sát thương cá nhân."
                },
                {
                    en: "All recommendations reflect pre-release Dichotomy/CBT2 data and should be rechecked after balance, equipment or terminology changes.",
                    vi: "Mọi đề xuất đều dựa trên dữ liệu Dichotomy/CBT2 trước phát hành và cần kiểm tra lại nếu cân bằng, trang bị hoặc thuật ngữ thay đổi."
                }
            ]
        },

        skills: [
            { type: "basicAttack", name: "Amputation Saw", description: { en: "A close-range Radiatio saw combo with charged and pursuit options.", vi: "Chuỗi cưa Radiatio tầm gần có đòn tích lực và truy kích." } },
            { type: "skill", name: "Second Heart", description: { en: "Consumes Special Serum and can trade Firtho's HP to heal allies and stack a team ATK buff.", vi: "Tiêu hao Special Serum, có thể đổi HP của Firtho để hồi máu đồng đội và cộng dồn buff ATK toàn đội." } },
            { type: "ultimate", name: "Visage of Death", description: { en: "A heavy amputation-saw strike that deals Radiatio damage.", vi: "Vung cưa phẫu thuật thật mạnh để gây sát thương Radiatio." } },
            { type: "tacticalAssault", name: "Law of Exchange", description: { en: "A Radiatio switch-in attack using Reactor Energy.", vi: "Đòn đổi vào sân gây Radiatio bằng Reactor Energy." } },
            { type: "passive", name: "Pain Management", description: { en: "A sustain-oriented passive that supports Firtho's HP-trading healer playstyle.", vi: "Nội tại sinh tồn hỗ trợ lối chơi healer đánh đổi HP của Firtho." } }
        ],
        description: { en: "A doctor and coroner from The Corner Clinic whose risky medical kit converts self-sacrifice into team healing and support.", vi: "Bác sĩ kiêm pháp y của The Corner Clinic, sử dụng bộ kỹ năng y khoa mạo hiểm để biến sự đánh đổi bản thân thành hồi phục và hỗ trợ cho đội." }
    },

    {
        id: "cynthia-ii", name: "Cynthia II", alias: "", title: "The Goldbud",
        images: { card: "images/character/cynthia-ii.png", splash: "images/character/cynthia-ii.png" },
        rarity: 5, limited: false, availability: "preview", previewData: true,
        reactorAttribute: "Ignis", combatStyle: "Combat Support", identity: "Witness",
        affiliation: "House Luna", occupation: "Luna's Scion",
        combatWeapon: { en: "Kitty Knights Boomerang Slingshot", vi: "Ná boomerang Kitty Knights" },
        baseStats: {
            levels: {
                1: { hp: 844, atk: 71, def: 27 },
                20: { hp: 1985, atk: 167, def: 138 },
                30: { hp: 2745, atk: 231, def: 224 },
                40: { hp: 3505, atk: 295, def: 309 },
                50: { hp: 4266, atk: 359, def: 394 },
                60: { hp: 5026, atk: 424, def: 479 },
                70: { hp: 5786, atk: 488, def: 565 },
                80: { hp: 6209, atk: 523, def: 606 }
            },
            verifiedOn: "2026-08-12",
            snapshotType: "progression"
        },
        build: {
            confidence: {
                en: "Beta guidance — stat direction follows the documented CBT2 role/kit, while exact BIS Motive, Simulation and Epiphany remain unverified.",
                vi: "Hướng dẫn beta — hướng chỉ số dựa trên vai trò/bộ kỹ năng CBT2 đã ghi nhận; Motive, Simulation và Epiphany BIS chính xác vẫn chưa được xác minh."
            },
            motive: {
                name: "",
                candidates: [
                            "The Fatuity Mystery",
                            "The Rich Fragrance Mystery"
                ],
                note: {
                    en: "These are same-Identity Motive candidates confirmed in the CBT2 pool. They are not labelled best-in-slot because complete passive comparisons are still incomplete.",
                    vi: "Đây là các Motive cùng Identity đã được xác nhận trong pool CBT2. Chưa gắn nhãn BIS vì dữ liệu so sánh passive đầy đủ vẫn chưa hoàn chỉnh."
                }
            },
            simulation: {
                setName: "",
                pieces: [],
                note: {
                    en: "Use support-oriented Implements until Cynthia II's final attribute scaling and set interactions are fully reconciled. Current beta sources contain conflicting attribute labels.",
                    vi: "Dùng Implement thiên hỗ trợ cho đến khi scaling thuộc tính và tương tác set của Cynthia II được đối chiếu đầy đủ. Các nguồn beta hiện có nhãn thuộc tính mâu thuẫn."
                }
            },
            epiphany: {
                name: "",
                note: {
                    en: "No Epiphany is labelled best-in-slot yet because the full passive pool has not been verified well enough for character-by-character ranking.",
                    vi: "Chưa gắn nhãn Epiphany nào là BIS vì toàn bộ passive của pool sách chưa được xác minh đủ tốt để xếp theo từng nhân vật."
                }
            },
            methods: {
                note: {
                    en: "Prioritize Ultimate/support buffs and Sweetness-related control Methods before personal damage.",
                    vi: "Ưu tiên Methods cho Ultimate/buff hỗ trợ và cơ chế Sweetness khống chế trước sát thương cá nhân."
                }
            },
            statPriority: [
                        { en: "Energy Recharge", vi: "Hồi Năng lượng" },
                        { en: "HP% / DEF%", vi: "HP% / DEF%" },
                        { en: "Support / buff-oriented stats", vi: "Chỉ số thiên hỗ trợ / buff" },
                        { en: "ATK%", vi: "ATK%" },
                        { en: "Attribute DMG Bonus", vi: "Tăng ST thuộc tính" }
            ],
            notes: [
                {
                    en: "Cynthia II is Combat Support. Her documented beta kit emphasizes team ATK/DMG buffs and Sweetness-based control rather than acting as the primary carry.",
                    vi: "Cynthia II là Combat Support. Bộ kỹ năng beta đã ghi nhận tập trung vào buff ATK/DMG toàn đội và khống chế Sweetness hơn là làm carry chính."
                },
                {
                    en: "All recommendations reflect pre-release Dichotomy/CBT2 data and should be rechecked after balance, equipment or terminology changes.",
                    vi: "Mọi đề xuất đều dựa trên dữ liệu Dichotomy/CBT2 trước phát hành và cần kiểm tra lại nếu cân bằng, trang bị hoặc thuật ngữ thay đổi."
                }
            ]
        },

        skills: [
            { type: "basicAttack", name: "Plushie Vassals", description: { en: "CBT2 skill text describes a three-hit combo and charged attacks dealing Alba damage.", vi: "Mô tả kỹ năng CBT2 ghi chuỗi 3 đòn và đòn tích lực gây sát thương Alba." } },
            { type: "skill", name: "Sweet Slingshot", description: { en: "Consumes Sweetness for an AoE bomb; longer charging applies Sweetness Overload and increases enemy damage taken.", vi: "Tiêu hao Sweetness để ném bom AoE; tích lâu hơn áp dụng Sweetness Overload và tăng sát thương kẻ địch phải chịu." } },
            { type: "ultimate", name: "Crescent Compassion", description: { en: "Throws a crescent boomerang with her kitty knights, pulling enemies and dealing persistent damage.", vi: "Ném boomerang lưỡi liềm cùng các hiệp sĩ mèo, kéo kẻ địch và gây sát thương duy trì." } },
            { type: "tacticalAssault", name: "Cakeball's Present", description: { en: "A switch-in attack that deals Alba damage in the current CBT2 skill text.", vi: "Đòn đổi vào sân gây sát thương Alba theo mô tả kỹ năng CBT2 hiện tại." } },
            { type: "passive", name: "Toast's Lament", description: { en: "Sir Toast periodically takes a hit in Cynthia's place.", vi: "Sir Toast định kỳ đỡ một đòn thay cho Cynthia." } }
        ],
        description: { en: "The mischievous scion of House Luna and the Detective's landlady. Current community data is internally inconsistent: her profile lists Ignis while CBT2 skill text repeatedly deals Alba damage.", vi: "Tiểu thư tinh nghịch của House Luna và là chủ nhà của Thám tử. Dữ liệu cộng đồng hiện có mâu thuẫn: hồ sơ ghi Ignis trong khi mô tả kỹ năng CBT2 nhiều lần ghi sát thương Alba." }
    },

    {
        id: "rex", name: "Rex", alias: "", title: "The Scales of Black and White",
        images: { card: "images/character/rex.png", splash: "images/character/rex.png" },
        rarity: 5, limited: false, availability: "preview", previewData: true,
        reactorAttribute: "Fulmen", combatStyle: "Resonance DPS", identity: "Hero",
        affiliation: "River Constabulary", occupation: "Superintendent",
        combatWeapon: { en: "Composite Club (Dual Truncheons)", vi: "Côn ghép (song truncheon)" },
        baseStats: {
            levels: {
                1: { hp: 818, atk: 71, def: 28 },
                20: { hp: 1923, atk: 167, def: 144 },
                30: { hp: 2659, atk: 231, def: 233 },
                40: { hp: 3396, atk: 295, def: 321 },
                50: { hp: 4132, atk: 359, def: 410 },
                60: { hp: 4869, atk: 424, def: 499 },
                70: { hp: 5606, atk: 488, def: 587 },
                80: { hp: 6015, atk: 523, def: 630 }
            },
            verifiedOn: "2026-08-12",
            snapshotType: "progression"
        },
        build: {
            confidence: {
                en: "Beta guidance — stat direction follows the documented CBT2 role/kit, while exact BIS Motive, Simulation and Epiphany remain unverified.",
                vi: "Hướng dẫn beta — hướng chỉ số dựa trên vai trò/bộ kỹ năng CBT2 đã ghi nhận; Motive, Simulation và Epiphany BIS chính xác vẫn chưa được xác minh."
            },
            motive: {
                name: "",
                candidates: [
                            "The Coin Mystery",
                            "The Bellowing Mystery"
                ],
                note: {
                    en: "These are same-Identity Motive candidates confirmed in the CBT2 pool. They are not labelled best-in-slot because complete passive comparisons are still incomplete.",
                    vi: "Đây là các Motive cùng Identity đã được xác nhận trong pool CBT2. Chưa gắn nhãn BIS vì dữ liệu so sánh passive đầy đủ vẫn chưa hoàn chỉnh."
                }
            },
            simulation: {
                setName: "",
                pieces: [],
                note: {
                    en: "Favor offensive Implements for Resonance DPS. Exact set choice is pending because complete CBT2 set effects are not yet reliable enough for a BIS claim.",
                    vi: "Ưu tiên Implement tấn công cho Resonance DPS. Chưa chọn set chính xác vì hiệu ứng đầy đủ của các bộ CBT2 chưa đủ đáng tin để gắn nhãn BIS."
                }
            },
            epiphany: {
                name: "",
                note: {
                    en: "No Epiphany is labelled best-in-slot yet because the full passive pool has not been verified well enough for character-by-character ranking.",
                    vi: "Chưa gắn nhãn Epiphany nào là BIS vì toàn bộ passive của pool sách chưa được xác minh đủ tốt để xếp theo từng nhân vật."
                }
            },
            methods: {
                note: {
                    en: "Prioritize Rage generation, Signature Move damage and Ultimate upgrades.",
                    vi: "Ưu tiên Methods tăng Rage, sát thương Signature Move và Ultimate."
                }
            },
            statPriority: [
                        { en: "CRIT Rate / CRIT DMG", vi: "Tỷ lệ Bạo kích / ST Bạo kích" },
                        { en: "ATK%", vi: "ATK%" },
                        { en: "Fulmen DMG Bonus", vi: "Tăng ST Fulmen" },
                        { en: "Energy Recharge", vi: "Hồi Năng lượng" },
                        { en: "ATK", vi: "ATK" }
            ],
            notes: [
                {
                    en: "Rex is a Fulmen Resonance DPS whose Basic Attack builds Rage and whose beta passive rewards repeated Signature Move hits with an ATK-focused buff.",
                    vi: "Rex là Fulmen Resonance DPS; Basic Attack tích Rage và nội tại beta thưởng các lần đánh Signature Move liên tiếp bằng buff thiên ATK."
                },
                {
                    en: "All recommendations reflect pre-release Dichotomy/CBT2 data and should be rechecked after balance, equipment or terminology changes.",
                    vi: "Mọi đề xuất đều dựa trên dữ liệu Dichotomy/CBT2 trước phát hành và cần kiểm tra lại nếu cân bằng, trang bị hoặc thuật ngữ thay đổi."
                }
            ]
        },

        skills: [
            { type: "basicAttack", name: "Composite Club", description: { en: "A Fulmen combo using dual truncheons with pursuit and signature follow-ups.", vi: "Chuỗi Fulmen bằng song côn, có đòn truy kích và các đòn Signature nối tiếp." } },
            { type: "skill", name: "Adaptive Rule", description: { en: "Cycles through multiple Composite Club forms to extend Rex's Fulmen offense.", vi: "Luân chuyển nhiều dạng Composite Club để kéo dài chuỗi tấn công Fulmen của Rex." } },
            { type: "ultimate", name: "Thunderous Judgement", description: { en: "Calls his police dogs before delivering a major lightning strike.", vi: "Triệu hồi hai chó nghiệp vụ trước khi tung một đòn sét lớn." } },
            { type: "tacticalAssault", name: "Exemplar Enforcer", description: { en: "A switch-in attack that calls down Fulmen truncheon strikes.", vi: "Đòn đổi vào sân gọi xuống các cú đánh côn Fulmen." } },
            { type: "passive", name: "Righteous Spirit", description: { en: "Signature Move hits build an ATK-focused beta buff for Rex.", vi: "Các đòn Signature Move tích buff ATK cho Rex trong bản beta." } }
        ],
        description: { en: "A young superintendent whose uncompromising belief in law drives a Fulmen Resonance DPS kit built around a transforming Composite Club.", vi: "Một Superintendent trẻ có niềm tin tuyệt đối vào luật pháp, dùng bộ kỹ năng Fulmen Resonance DPS xoay quanh Composite Club biến đổi." }
    },

    {
        id: "red-rose", name: "Red Rose", alias: "", title: "The Rose as an Engine of War",
        images: { card: "images/character/red-rose.png", splash: "images/character/red-rose.png" },
        rarity: 5, limited: false, availability: "preview", previewData: true,
        reactorAttribute: "Ignis", combatStyle: "Combat Support", identity: "Saviour",
        affiliation: "Royalty and Aristocracy", occupation: "Dancer",
        combatWeapon: { en: "Vine-firing Gauntlet / Whip", vi: "Găng bắn dây leo / Roi" },
        baseStats: {
            levels: {
                1: { hp: 924, atk: 79, def: 20 },
                20: { hp: 2171, atk: 186, def: 105 },
                30: { hp: 3003, atk: 257, def: 170 },
                40: { hp: 3834, atk: 328, def: 235 },
                50: { hp: 4666, atk: 399, def: 299 },
                60: { hp: 5497, atk: 471, def: 364 },
                70: { hp: 6329, atk: 542, def: 429 },
                80: { hp: 6791, atk: 582, def: 460 }
            },
            verifiedOn: "2026-08-12",
            snapshotType: "progression"
        },
        build: {
            confidence: {
                en: "Beta guidance — stat direction follows the documented CBT2 role/kit, while exact BIS Motive, Simulation and Epiphany remain unverified.",
                vi: "Hướng dẫn beta — hướng chỉ số dựa trên vai trò/bộ kỹ năng CBT2 đã ghi nhận; Motive, Simulation và Epiphany BIS chính xác vẫn chưa được xác minh."
            },
            motive: {
                name: "",
                candidates: [
                            "The Bloodbath Mystery",
                            "The Bullet Mystery",
                            "The Blade Wind Mystery"
                ],
                note: {
                    en: "These are same-Identity Motive candidates confirmed in the CBT2 pool. They are not labelled best-in-slot because complete passive comparisons are still incomplete.",
                    vi: "Đây là các Motive cùng Identity đã được xác nhận trong pool CBT2. Chưa gắn nhãn BIS vì dữ liệu so sánh passive đầy đủ vẫn chưa hoàn chỉnh."
                }
            },
            simulation: {
                setName: "",
                pieces: [],
                note: {
                    en: "Prefer support-oriented Implements that keep Red Rose's buffs and rotation available. Exact best set remains pending.",
                    vi: "Ưu tiên Implement thiên hỗ trợ để giữ buff và vòng kỹ năng của Red Rose hoạt động ổn định. Bộ tốt nhất chính xác vẫn đang chờ."
                }
            },
            epiphany: {
                name: "",
                note: {
                    en: "No Epiphany is labelled best-in-slot yet because the full passive pool has not been verified well enough for character-by-character ranking.",
                    vi: "Chưa gắn nhãn Epiphany nào là BIS vì toàn bộ passive của pool sách chưa được xác minh đủ tốt để xếp theo từng nhân vật."
                }
            },
            methods: {
                note: {
                    en: "Prioritize team-buffing Skill/Ultimate Methods first, then personal Ignis damage.",
                    vi: "Ưu tiên Methods tăng buff đồng đội từ Skill/Ultimate trước, sau đó mới đến sát thương Ignis cá nhân."
                }
            },
            statPriority: [
                        { en: "Energy Recharge", vi: "Hồi Năng lượng" },
                        { en: "HP% / DEF%", vi: "HP% / DEF%" },
                        { en: "ATK%", vi: "ATK%" },
                        { en: "Ignis DMG Bonus", vi: "Tăng ST Ignis" },
                        { en: "Survivability", vi: "Khả năng sinh tồn" }
            ],
            notes: [
                {
                    en: "Red Rose is Combat Support, so rotation uptime and team utility take priority over maximizing her own damage.",
                    vi: "Red Rose là Combat Support, vì vậy thời gian hoạt động kỹ năng và tiện ích cho đội quan trọng hơn tối đa hóa sát thương cá nhân."
                },
                {
                    en: "All recommendations reflect pre-release Dichotomy/CBT2 data and should be rechecked after balance, equipment or terminology changes.",
                    vi: "Mọi đề xuất đều dựa trên dữ liệu Dichotomy/CBT2 trước phát hành và cần kiểm tra lại nếu cân bằng, trang bị hoặc thuật ngữ thay đổi."
                }
            ]
        },

        skills: [
            { type: "basicAttack", name: "Akimbo Overture", description: { en: "An Ignis attack sequence that sets up her rose-petal support mechanics.", vi: "Chuỗi đòn Ignis mở đầu cho cơ chế hỗ trợ cánh hoa hồng của cô." } },
            { type: "skill", name: "War of the Roses", description: { en: "Uses her floral weapon to pressure enemies and support the team's damage output.", vi: "Dùng vũ khí hoa hồng gây áp lực lên kẻ địch và hỗ trợ sát thương toàn đội." } },
            { type: "ultimate", name: "Grand Finale", description: { en: "A theatrical Ignis finisher that anchors her support rotation.", vi: "Đòn kết liễu Ignis mang tính trình diễn, là trung tâm của vòng hỗ trợ." } },
            { type: "tacticalAssault", name: "Epic Debut", description: { en: "A dramatic switch-in attack that immediately enters her support sequence.", vi: "Đòn đổi vào sân đầy kịch tính, lập tức bắt đầu chuỗi hỗ trợ của cô." } },
            { type: "passive", name: "Onstage Preparation", description: { en: "A beta passive that prepares and amplifies Red Rose's team-support effects.", vi: "Nội tại beta chuẩn bị và khuếch đại các hiệu ứng hỗ trợ đội của Red Rose." } }
        ],
        description: { en: "A dancer tied to the aristocracy who turns rose-themed weaponry into an Ignis Combat Support performance.", vi: "Một vũ công gắn với giới quý tộc, biến vũ khí chủ đề hoa hồng thành màn trình diễn Combat Support hệ Ignis." }
    },

    {
        id: "gucia", name: "Gucia", alias: "", title: "From the Ivory Tower",
        images: { card: "images/character/gucia.png", splash: "images/character/gucia.png" },
        rarity: 4, limited: false, availability: "preview", previewData: true,
        reactorAttribute: "Alba", combatStyle: "Combat Support", identity: "Saviour",
        affiliation: "Hunters' Guild", occupation: "Apprentice",
        combatWeapon: { en: "Lantern", vi: "Đèn lồng" },
        baseStats: {
            levels: {
                1: { hp: 720, atk: 67, def: 26 },
                20: { hp: 1692, atk: 157, def: 131 },
                30: { hp: 2340, atk: 218, def: 211 },
                40: { hp: 2988, atk: 278, def: 292 },
                50: { hp: 3636, atk: 339, def: 373 },
                60: { hp: 4284, atk: 399, def: 453 },
                70: { hp: 4932, atk: 460, def: 534 },
                80: { hp: 5292, atk: 493, def: 573 }
            },
            verifiedOn: "2026-08-12",
            snapshotType: "progression"
        },
        build: {
            confidence: {
                en: "Beta guidance — stat direction follows the documented CBT2 role/kit, while exact BIS Motive, Simulation and Epiphany remain unverified.",
                vi: "Hướng dẫn beta — hướng chỉ số dựa trên vai trò/bộ kỹ năng CBT2 đã ghi nhận; Motive, Simulation và Epiphany BIS chính xác vẫn chưa được xác minh."
            },
            motive: {
                name: "",
                candidates: [
                            "The Bloodbath Mystery",
                            "The Bullet Mystery",
                            "The Blade Wind Mystery"
                ],
                note: {
                    en: "These are same-Identity Motive candidates confirmed in the CBT2 pool. They are not labelled best-in-slot because complete passive comparisons are still incomplete.",
                    vi: "Đây là các Motive cùng Identity đã được xác nhận trong pool CBT2. Chưa gắn nhãn BIS vì dữ liệu so sánh passive đầy đủ vẫn chưa hoàn chỉnh."
                }
            },
            simulation: {
                setName: "",
                pieces: [],
                note: {
                    en: "Use support/offense hybrid Implements while her Erudition scaling is still being documented. Avoid claiming a specific set until its effect text is verified.",
                    vi: "Dùng Implement lai hỗ trợ/tấn công trong khi scaling Erudition vẫn đang được ghi nhận. Không gắn nhãn set cụ thể cho đến khi hiệu ứng được xác minh."
                }
            },
            epiphany: {
                name: "",
                note: {
                    en: "No Epiphany is labelled best-in-slot yet because the full passive pool has not been verified well enough for character-by-character ranking.",
                    vi: "Chưa gắn nhãn Epiphany nào là BIS vì toàn bộ passive của pool sách chưa được xác minh đủ tốt để xếp theo từng nhân vật."
                }
            },
            methods: {
                note: {
                    en: "Prioritize Seek the Supernatural and Erudition-related Methods, followed by Ultimate support value.",
                    vi: "Ưu tiên Seek the Supernatural và các Methods liên quan Erudition, sau đó đến giá trị hỗ trợ của Ultimate."
                }
            },
            statPriority: [
                        { en: "Energy Recharge", vi: "Hồi Năng lượng" },
                        { en: "Alba DMG Bonus", vi: "Tăng ST Alba" },
                        { en: "ATK%", vi: "ATK%" },
                        { en: "HP% / DEF%", vi: "HP% / DEF%" },
                        { en: "ATK", vi: "ATK" }
            ],
            notes: [
                {
                    en: "Gucia's Alba kit builds and consumes Erudition, so her build should preserve rotation uptime while supporting the team.",
                    vi: "Bộ kỹ năng Alba của Gucia tích và tiêu hao Erudition, nên build cần giữ nhịp xoay kỹ năng đồng thời hỗ trợ đội."
                },
                {
                    en: "All recommendations reflect pre-release Dichotomy/CBT2 data and should be rechecked after balance, equipment or terminology changes.",
                    vi: "Mọi đề xuất đều dựa trên dữ liệu Dichotomy/CBT2 trước phát hành và cần kiểm tra lại nếu cân bằng, trang bị hoặc thuật ngữ thay đổi."
                }
            ]
        },

        skills: [
            { type: "basicAttack", name: "Specimen Extraction Light", description: { en: "A four-hit Alba combo and charged lantern attacks that build Erudition.", vi: "Chuỗi 4 đòn Alba và các đòn đèn lồng tích lực để tích Erudition." } },
            { type: "skill", name: "Seek the Supernatural", description: { en: "Charges the lantern to build and consume Erudition for a powerful Alba attack.", vi: "Tích lực đèn lồng để tạo rồi tiêu hao Erudition cho một đòn Alba mạnh." } },
            { type: "ultimate", name: "Unknown Species Detected", description: { en: "A large support-oriented Alba attack tied to her research mechanics.", vi: "Đòn Alba diện rộng thiên về hỗ trợ, gắn với cơ chế nghiên cứu của cô." } },
            { type: "tacticalAssault", name: "Inter-Disciplinary", description: { en: "A switch-in Alba attack that feeds into her support rotation.", vi: "Đòn đổi vào sân hệ Alba nối vào vòng hỗ trợ của cô." } },
            { type: "passive", name: "Academite", description: { en: "A beta passive that reinforces her Erudition-based support toolkit.", vi: "Nội tại beta củng cố bộ kỹ năng hỗ trợ dựa trên Erudition." } }
        ],
        description: { en: "A shy Hunters' Guild researcher fascinated by the supernatural, using an Alba lantern kit to build Erudition and support allies.", vi: "Một nghiên cứu sinh nhút nhát của Hunters' Guild say mê điều siêu nhiên, dùng đèn lồng Alba để tích Erudition và hỗ trợ đồng đội." }
    },

    {
        id: "captain-kaboom", name: "Captain Kaboom", alias: "", title: "Of Tinkers and Tunes",
        images: { card: "images/character/captain-kaboom.png", splash: "images/character/captain-kaboom.png" },
        rarity: 4, limited: false, availability: "preview", previewData: true,
        reactorAttribute: "Radiatio", combatStyle: "Break Suppressor", identity: "Saviour",
        affiliation: "United Mining Industry", occupation: "Technician",
        combatWeapon: { en: "Wrench", vi: "Cờ lê" },
        baseStats: {
            levels: {
                1: { hp: 696, atk: 74, def: 24 },
                20: { hp: 1635, atk: 174, def: 121 },
                30: { hp: 2262, atk: 241, def: 195 },
                40: { hp: 2888, atk: 308, def: 270 },
                50: { hp: 3514, atk: 375, def: 344 },
                60: { hp: 4141, atk: 442, def: 418 },
                70: { hp: 4767, atk: 509, def: 493 },
                80: { hp: 5115, atk: 546, def: 529 }
            },
            verifiedOn: "2026-08-12",
            snapshotType: "progression"
        },
        build: {
            confidence: {
                en: "Beta guidance — stat direction follows the documented CBT2 role/kit, while exact BIS Motive, Simulation and Epiphany remain unverified.",
                vi: "Hướng dẫn beta — hướng chỉ số dựa trên vai trò/bộ kỹ năng CBT2 đã ghi nhận; Motive, Simulation và Epiphany BIS chính xác vẫn chưa được xác minh."
            },
            motive: {
                name: "",
                candidates: [
                            "The Bloodbath Mystery",
                            "The Bullet Mystery",
                            "The Blade Wind Mystery"
                ],
                note: {
                    en: "These are same-Identity Motive candidates confirmed in the CBT2 pool. They are not labelled best-in-slot because complete passive comparisons are still incomplete.",
                    vi: "Đây là các Motive cùng Identity đã được xác nhận trong pool CBT2. Chưa gắn nhãn BIS vì dữ liệu so sánh passive đầy đủ vẫn chưa hoàn chỉnh."
                }
            },
            simulation: {
                setName: "",
                pieces: [],
                note: {
                    en: "Favor Implements that support her Pressure/charged-attack break loop. A dedicated break stat has not been verified, so the archive does not invent one.",
                    vi: "Ưu tiên Implement hỗ trợ vòng Pressure/đòn tích lực để phá choáng. Chưa xác minh chỉ số break chuyên biệt nên kho dữ liệu không tự tạo."
                }
            },
            epiphany: {
                name: "",
                note: {
                    en: "No Epiphany is labelled best-in-slot yet because the full passive pool has not been verified well enough for character-by-character ranking.",
                    vi: "Chưa gắn nhãn Epiphany nào là BIS vì toàn bộ passive của pool sách chưa được xác minh đủ tốt để xếp theo từng nhân vật."
                }
            },
            methods: {
                note: {
                    en: "Prioritize Pressure generation, charged attacks and Captain's Ambush before general damage upgrades.",
                    vi: "Ưu tiên Methods tăng Pressure, đòn tích lực và Captain's Ambush trước các nâng cấp sát thương chung."
                }
            },
            statPriority: [
                        { en: "ATK%", vi: "ATK%" },
                        { en: "Energy Recharge", vi: "Hồi Năng lượng" },
                        { en: "Radiatio DMG Bonus", vi: "Tăng ST Radiatio" },
                        { en: "HP% / DEF%", vi: "HP% / DEF%" },
                        { en: "ATK", vi: "ATK" }
            ],
            notes: [
                {
                    en: "Captain Kaboom is an offense-leaning Break Suppressor whose wrench kit builds Pressure for stronger charged attacks.",
                    vi: "Captain Kaboom là Break Suppressor thiên tấn công; bộ kỹ năng cờ lê tích Pressure để cường hóa đòn tích lực."
                },
                {
                    en: "All recommendations reflect pre-release Dichotomy/CBT2 data and should be rechecked after balance, equipment or terminology changes.",
                    vi: "Mọi đề xuất đều dựa trên dữ liệu Dichotomy/CBT2 trước phát hành và cần kiểm tra lại nếu cân bằng, trang bị hoặc thuật ngữ thay đổi."
                }
            ]
        },

        skills: [
            { type: "basicAttack", name: "Maintenance Calliper", description: { en: "A wrench combo that builds Pressure for stronger charged attacks.", vi: "Chuỗi cờ lê tích Pressure để cường hóa các đòn tích lực." } },
            { type: "skill", name: "Captain's Ambush", description: { en: "Uses her repair-tech combat tools to build break pressure and set up charged attacks.", vi: "Dùng thiết bị sửa chữa chiến đấu để tăng áp lực phá choáng và chuẩn bị đòn tích lực." } },
            { type: "ultimate", name: "Explosive Bear", description: { en: "Deploys an explosive bear-themed finisher with Radiatio damage.", vi: "Triển khai đòn kết liễu gấu nổ gây sát thương Radiatio." } },
            { type: "tacticalAssault", name: "Maintenance Support", description: { en: "A switch-in maintenance strike that supports her Pressure rotation.", vi: "Đòn hỗ trợ bảo trì khi đổi vào sân, nối vào vòng Pressure." } },
            { type: "passive", name: "Repair Toolbox", description: { en: "A beta passive that improves her Pressure and charged-attack combat loop.", vi: "Nội tại beta cải thiện vòng Pressure và đòn tích lực." } }
        ],
        description: { en: "An upbeat United Mining Industry technician whose wrench-based Radiatio kit builds Pressure for Break Suppressor play.", vi: "Một kỹ thuật viên vui vẻ của United Mining Industry, dùng bộ kỹ năng Radiatio với cờ lê để tích Pressure và phá choáng." }
    },

    {
        id: "grimm", name: "Grimm", alias: "", title: "Silver-tongued Headliner",
        images: { card: "images/character/grimm.png", splash: "images/character/grimm.png" },
        rarity: 4, limited: false, availability: "preview", previewData: true,
        reactorAttribute: "Fulmen", combatStyle: "Combat Support", identity: "Witness",
        affiliation: "S.T.A.T.S.", occupation: "Journalist",
        combatWeapon: { en: "Camera + Gun", vi: "Máy ảnh + Súng" },
        baseStats: {
            levels: {
                1: { hp: 744, atk: 69, def: 24 },
                20: { hp: 1748, atk: 163, def: 121 },
                30: { hp: 2418, atk: 226, def: 195 },
                40: { hp: 3087, atk: 288, def: 270 },
                50: { hp: 3757, atk: 351, def: 344 },
                60: { hp: 4426, atk: 414, def: 418 },
                70: { hp: 5096, atk: 476, def: 493 },
                80: { hp: 5468, atk: 511, def: 529 }
            },
            verifiedOn: "2026-08-12",
            snapshotType: "progression"
        },
        build: {
            confidence: {
                en: "Beta guidance — stat direction follows the documented CBT2 role/kit, while exact BIS Motive, Simulation and Epiphany remain unverified.",
                vi: "Hướng dẫn beta — hướng chỉ số dựa trên vai trò/bộ kỹ năng CBT2 đã ghi nhận; Motive, Simulation và Epiphany BIS chính xác vẫn chưa được xác minh."
            },
            motive: {
                name: "",
                candidates: [
                            "The Fatuity Mystery",
                            "The Rich Fragrance Mystery"
                ],
                note: {
                    en: "These are same-Identity Motive candidates confirmed in the CBT2 pool. They are not labelled best-in-slot because complete passive comparisons are still incomplete.",
                    vi: "Đây là các Motive cùng Identity đã được xác nhận trong pool CBT2. Chưa gắn nhãn BIS vì dữ liệu so sánh passive đầy đủ vẫn chưa hoàn chỉnh."
                }
            },
            simulation: {
                setName: "",
                pieces: [],
                note: {
                    en: "Prefer support-oriented Implements that preserve Camera-based rotation uptime, with offensive stats as a secondary goal.",
                    vi: "Ưu tiên Implement thiên hỗ trợ để duy trì vòng kỹ năng dựa trên Camera, sau đó mới đến chỉ số tấn công."
                }
            },
            epiphany: {
                name: "",
                note: {
                    en: "No Epiphany is labelled best-in-slot yet because the full passive pool has not been verified well enough for character-by-character ranking.",
                    vi: "Chưa gắn nhãn Epiphany nào là BIS vì toàn bộ passive của pool sách chưa được xác minh đủ tốt để xếp theo từng nhân vật."
                }
            },
            methods: {
                note: {
                    en: "Prioritize camera/support mechanics and Ultimate Methods before Basic Attack damage.",
                    vi: "Ưu tiên Methods cho cơ chế camera/hỗ trợ và Ultimate trước sát thương Basic Attack."
                }
            },
            statPriority: [
                        { en: "Energy Recharge", vi: "Hồi Năng lượng" },
                        { en: "ATK%", vi: "ATK%" },
                        { en: "Fulmen DMG Bonus", vi: "Tăng ST Fulmen" },
                        { en: "HP% / DEF%", vi: "HP% / DEF%" },
                        { en: "ATK", vi: "ATK" }
            ],
            notes: [
                {
                    en: "Grimm is Combat Support; his beta kit turns Camera Battery and recording mechanics into team-oriented value.",
                    vi: "Grimm là Combat Support; bộ kỹ năng beta biến Camera Battery và cơ chế ghi hình thành giá trị hỗ trợ cho đội."
                },
                {
                    en: "All recommendations reflect pre-release Dichotomy/CBT2 data and should be rechecked after balance, equipment or terminology changes.",
                    vi: "Mọi đề xuất đều dựa trên dữ liệu Dichotomy/CBT2 trước phát hành và cần kiểm tra lại nếu cân bằng, trang bị hoặc thuật ngữ thay đổi."
                }
            ]
        },

        skills: [
            { type: "basicAttack", name: "Compact Handgun", description: { en: "A Fulmen handgun combo that builds Camera Battery for his reporting-themed mechanics.", vi: "Chuỗi súng ngắn Fulmen tích Camera Battery cho cơ chế chủ đề phóng viên." } },
            { type: "skill", name: "Photographic Proof", description: { en: "Uses his camera to turn evidence gathering into a combat support effect.", vi: "Dùng máy ảnh biến việc thu thập bằng chứng thành hiệu ứng hỗ trợ chiến đấu." } },
            { type: "ultimate", name: "Airborne Scoop", description: { en: "A headline-grabbing Fulmen Ultimate that supports his team-oriented rotation.", vi: "Ultimate Fulmen mang phong cách săn tin, phục vụ vòng hỗ trợ đồng đội." } },
            { type: "tacticalAssault", name: "Undercover Inquiry", description: { en: "A switch-in attack that immediately advances his camera-based setup.", vi: "Đòn đổi vào sân lập tức thúc đẩy cơ chế dựa trên máy ảnh." } },
            { type: "passive", name: "Live Recording", description: { en: "A beta passive tied to recording enemies and converting information into support value.", vi: "Nội tại beta gắn với việc ghi hình kẻ địch và chuyển thông tin thành giá trị hỗ trợ." } }
        ],
        description: { en: "A silver-tongued S.T.A.T.S. journalist who fights with a camera and handgun, turning information gathering into Fulmen support.", vi: "Một nhà báo khéo ăn nói của S.T.A.T.S., chiến đấu bằng máy ảnh và súng, biến việc thu thập thông tin thành hỗ trợ Fulmen." }
    },

    {
        id: "bentham", name: "Bentham", alias: "", title: "The Quartz Net",
        images: { card: "images/character/bentham.png", splash: "images/character/bentham.png" },
        rarity: 4, limited: false, availability: "preview", previewData: true,
        reactorAttribute: "Glacies", combatStyle: "Resonance DPS", identity: "Outlaw",
        affiliation: "United Mining Industry", occupation: "Secretary",
        combatWeapon: { en: "Whip + Bladed Boots", vi: "Roi + Giày lưỡi dao" },
        baseStats: {
            levels: {
                1: { hp: 624, atk: 79, def: 25 },
                20: { hp: 1466, atk: 186, def: 126 },
                30: { hp: 2028, atk: 257, def: 203 },
                40: { hp: 2589, atk: 328, def: 281 },
                50: { hp: 3151, atk: 399, def: 358 },
                60: { hp: 3712, atk: 471, def: 436 },
                70: { hp: 4274, atk: 542, def: 513 },
                80: { hp: 4586, atk: 582, def: 551 }
            },
            verifiedOn: "2026-08-12",
            snapshotType: "progression"
        },
        build: {
            confidence: {
                en: "Beta guidance — stat direction follows the documented CBT2 role/kit, while exact BIS Motive, Simulation and Epiphany remain unverified.",
                vi: "Hướng dẫn beta — hướng chỉ số dựa trên vai trò/bộ kỹ năng CBT2 đã ghi nhận; Motive, Simulation và Epiphany BIS chính xác vẫn chưa được xác minh."
            },
            motive: {
                name: "",
                candidates: [
                            "The Burning Stone Mystery",
                            "The Aberrant Mystery",
                            "The Furious Speed Mystery"
                ],
                note: {
                    en: "These are same-Identity Motive candidates confirmed in the CBT2 pool. They are not labelled best-in-slot because complete passive comparisons are still incomplete.",
                    vi: "Đây là các Motive cùng Identity đã được xác nhận trong pool CBT2. Chưa gắn nhãn BIS vì dữ liệu so sánh passive đầy đủ vẫn chưa hoàn chỉnh."
                }
            },
            simulation: {
                setName: "",
                pieces: [],
                note: {
                    en: "Favor offensive Implements that support her Funds/Liquid Assets resource engine. Exact best set remains pending.",
                    vi: "Ưu tiên Implement tấn công hỗ trợ hệ tài nguyên Funds/Liquid Assets. Bộ tốt nhất chính xác vẫn đang chờ."
                }
            },
            epiphany: {
                name: "",
                note: {
                    en: "No Epiphany is labelled best-in-slot yet because the full passive pool has not been verified well enough for character-by-character ranking.",
                    vi: "Chưa gắn nhãn Epiphany nào là BIS vì toàn bộ passive của pool sách chưa được xác minh đủ tốt để xếp theo từng nhân vật."
                }
            },
            methods: {
                note: {
                    en: "Prioritize Methods that improve Funds/Liquid Assets generation and Signature Move/Ultimate damage.",
                    vi: "Ưu tiên Methods tăng tích Funds/Liquid Assets và sát thương Signature Move/Ultimate."
                }
            },
            statPriority: [
                        { en: "CRIT Rate / CRIT DMG", vi: "Tỷ lệ Bạo kích / ST Bạo kích" },
                        { en: "ATK%", vi: "ATK%" },
                        { en: "Glacies DMG Bonus", vi: "Tăng ST Glacies" },
                        { en: "Energy Recharge", vi: "Hồi Năng lượng" },
                        { en: "ATK", vi: "ATK" }
            ],
            notes: [
                {
                    en: "Bentham is a Glacies Resonance DPS whose Contractual Circle and Liquid Assets convert resource management into sustained multi-hit damage.",
                    vi: "Bentham là Glacies Resonance DPS; Contractual Circle và Liquid Assets biến quản lý tài nguyên thành sát thương nhiều hit duy trì."
                },
                {
                    en: "All recommendations reflect pre-release Dichotomy/CBT2 data and should be rechecked after balance, equipment or terminology changes.",
                    vi: "Mọi đề xuất đều dựa trên dữ liệu Dichotomy/CBT2 trước phát hành và cần kiểm tra lại nếu cân bằng, trang bị hoặc thuật ngữ thay đổi."
                }
            ]
        },

        skills: [
            { type: "basicAttack", name: "Hidden Blade", description: { en: "A Glacies whip-and-bladed-boot combo tied to Funds and Liquid Assets.", vi: "Chuỗi Glacies bằng roi và giày lưỡi dao, gắn với Funds và Liquid Assets." } },
            { type: "skill", name: "Spot Check", description: { en: "Builds her contract/economy resources and sets up Resonance DPS attacks.", vi: "Tích tài nguyên hợp đồng/kinh tế để chuẩn bị các đòn Resonance DPS." } },
            { type: "ultimate", name: "Unflinching Order", description: { en: "A decisive Glacies Ultimate that cashes in on Bentham's resource engine.", vi: "Ultimate Glacies quyết đoán, tận dụng hệ tài nguyên của Bentham." } },
            { type: "tacticalAssault", name: "Emergency Meeting", description: { en: "A switch-in attack that starts her resource-driven combat sequence.", vi: "Đòn đổi vào sân khởi động chuỗi chiến đấu dựa trên tài nguyên." } },
            { type: "passive", name: "Set Schedule", description: { en: "A beta passive that stabilizes Bentham's Funds/Liquid Assets rotation.", vi: "Nội tại beta giúp ổn định vòng Funds/Liquid Assets của Bentham." } }
        ],
        description: { en: "A polished UMI secretary and behind-the-scenes power broker, fighting with a whip and bladed boots in a resource-heavy Glacies kit.", vi: "Một thư ký UMI lịch thiệp nhưng đầy quyền lực hậu trường, chiến đấu bằng roi và giày lưỡi dao với bộ kỹ năng Glacies nhiều tài nguyên." }
    },

    {
        id: "gratia", name: "Gratia", alias: "", title: "Her Majesty's Protégé",
        images: { card: "images/character/gratia.png", splash: "images/character/gratia.png" },
        rarity: 5, limited: false, availability: "preview", previewData: true,
        reactorAttribute: "Glacies", combatStyle: "Survival & Healing", identity: "Guardian",
        affiliation: "Royalty and Aristocracy", occupation: "Knight",
        combatWeapon: { en: "Sword + Shield", vi: "Kiếm + Khiên" },
        baseStats: {
            levels: {
                1: { hp: 844, atk: 71, def: 27 },
                20: { hp: 1985, atk: 167, def: 138 },
                30: { hp: 2745, atk: 231, def: 224 },
                40: { hp: 3505, atk: 295, def: 309 },
                50: { hp: 4266, atk: 359, def: 394 },
                60: { hp: 5026, atk: 424, def: 479 },
                70: { hp: 5786, atk: 488, def: 565 },
                80: { hp: 6209, atk: 523, def: 606 }
            },
            verifiedOn: "2026-08-12",
            snapshotType: "progression"
        },
        build: {
            confidence: {
                en: "Beta guidance — stat direction follows the documented CBT2 role/kit, while exact BIS Motive, Simulation and Epiphany remain unverified.",
                vi: "Hướng dẫn beta — hướng chỉ số dựa trên vai trò/bộ kỹ năng CBT2 đã ghi nhận; Motive, Simulation và Epiphany BIS chính xác vẫn chưa được xác minh."
            },
            motive: {
                name: "",
                candidates: [
                            "The Pincers Mystery",
                            "The Richness Mystery"
                ],
                note: {
                    en: "These are same-Identity Motive candidates confirmed in the CBT2 pool. They are not labelled best-in-slot because complete passive comparisons are still incomplete.",
                    vi: "Đây là các Motive cùng Identity đã được xác nhận trong pool CBT2. Chưa gắn nhãn BIS vì dữ liệu so sánh passive đầy đủ vẫn chưa hoàn chỉnh."
                }
            },
            simulation: {
                setName: "",
                pieces: [],
                note: {
                    en: "Prioritize HP/DEF Implements because Flowing Shield grants a team shield based on Max HP. Exact set selection remains unverified.",
                    vi: "Ưu tiên Implement HP/DEF vì Flowing Shield cấp khiên toàn đội dựa trên HP tối đa. Lựa chọn set chính xác vẫn chưa được xác minh."
                }
            },
            epiphany: {
                name: "",
                note: {
                    en: "No Epiphany is labelled best-in-slot yet because the full passive pool has not been verified well enough for character-by-character ranking.",
                    vi: "Chưa gắn nhãn Epiphany nào là BIS vì toàn bộ passive của pool sách chưa được xác minh đủ tốt để xếp theo từng nhân vật."
                }
            },
            methods: {
                note: {
                    en: "Prioritize Flowing Shield and survival-related Methods, then Ultimate damage.",
                    vi: "Ưu tiên Flowing Shield và các Methods sinh tồn, sau đó đến sát thương Ultimate."
                }
            },
            statPriority: [
                        { en: "HP%", vi: "HP%" },
                        { en: "DEF%", vi: "DEF%" },
                        { en: "Energy Recharge", vi: "Hồi Năng lượng" },
                        { en: "Glacies DMG Bonus", vi: "Tăng ST Glacies" },
                        { en: "HP / DEF", vi: "HP / DEF" }
            ],
            notes: [
                {
                    en: "Gratia is Survival & Healing with a Max-HP-based team shield, so defensive scaling has direct team value.",
                    vi: "Gratia thuộc Survival & Healing và có khiên toàn đội dựa trên HP tối đa, nên scaling phòng thủ mang giá trị trực tiếp cho cả đội."
                },
                {
                    en: "All recommendations reflect pre-release Dichotomy/CBT2 data and should be rechecked after balance, equipment or terminology changes.",
                    vi: "Mọi đề xuất đều dựa trên dữ liệu Dichotomy/CBT2 trước phát hành và cần kiểm tra lại nếu cân bằng, trang bị hoặc thuật ngữ thay đổi."
                }
            ]
        },

        skills: [
            { type: "basicAttack", name: "Blunted Blade", description: { en: "A five-hit Glacies sword-and-shield combo that builds Muscle Memory.", vi: "Chuỗi 5 đòn Glacies bằng kiếm-khiên để tích Muscle Memory." } },
            { type: "skill", name: "Flowing Shield", description: { en: "Consumes Muscle Memory to deal Glacies damage and grant the whole team a Max-HP-based shield.", vi: "Tiêu hao Muscle Memory để gây Glacies và cấp khiên cho toàn đội theo HP tối đa." } },
            { type: "ultimate", name: "Spear of Glory", description: { en: "Forms a spiral Silverium spear that deals continuous Glacies damage before exploding.", vi: "Tạo thương Silverium xoắn gây Glacies liên tục rồi phát nổ." } },
            { type: "tacticalAssault", name: "Severe Deterrent", description: { en: "A defensive switch-in strike that feeds into her shielding frontline role.", vi: "Đòn đổi vào sân thiên phòng thủ, nối vào vai trò tuyến trước tạo khiên." } },
            { type: "passive", name: "Silverium Blessing", description: { en: "A beta passive that reinforces Gratia's shield-and-survival toolkit.", vi: "Nội tại beta củng cố bộ kỹ năng khiên và sinh tồn của Gratia." } }
        ],
        description: { en: "A royal knight who combines sword-and-shield Glacies combat with team-wide shielding and survival support.", vi: "Một hiệp sĩ hoàng gia kết hợp chiến đấu Glacies bằng kiếm-khiên với khả năng tạo khiên và hỗ trợ sinh tồn cho toàn đội." }
    }

];


