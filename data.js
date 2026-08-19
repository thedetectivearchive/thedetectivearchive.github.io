// =========================
// SILVER PALACE NEWS
// =========================


const newsData = [

    {
        id: "news-001",
        category: "update",
        title: {
            en: "Dichotomy CBT2 Archive",
            vi: "Kho dữ liệu Dichotomy CBT2"
        },
        date: "2026-08-13",
        image: "",
        description: {
            en: "The archive is currently organized around systems and combat data observed during the Dichotomy closed beta. All beta values remain subject to change.",
            vi: "Kho dữ liệu hiện được xây dựng quanh các hệ thống và dữ liệu chiến đấu quan sát trong closed beta Dichotomy. Mọi giá trị beta vẫn có thể thay đổi."
        },
        content: {
            en: [
                "The Detective Archive currently uses Dichotomy CBT2 as its main reference point for character kits, Motives, Simulation Implements, Epiphanies and combat-system notes.",
                "Information recorded from a closed beta is not treated as final release data. Values, names, availability and system rules may change before launch.",
                "When newer verified material becomes available, the archive will update the relevant database entries while keeping beta context clearly labeled."
            ],
            vi: [
                "The Detective Archive hiện dùng Dichotomy CBT2 làm mốc tham khảo chính cho bộ kỹ năng nhân vật, Motive, Simulation Implements, Epiphany và các ghi chú về hệ thống chiến đấu.",
                "Thông tin ghi nhận từ closed beta không được xem là dữ liệu cuối cùng của bản phát hành. Chỉ số, tên gọi, khả năng sở hữu và quy tắc hệ thống đều có thể thay đổi trước khi game ra mắt.",
                "Khi có nguồn mới đáng tin cậy hơn, kho dữ liệu sẽ cập nhật từng mục liên quan nhưng vẫn giữ nhãn beta rõ ràng để người xem biết bối cảnh của dữ liệu."
            ]
        },
        tags: ["Dichotomy CBT2", "Beta Archive", "Systems"]
    },

    {
        id: "news-002",
        category: "announcement",
        title: {
            en: "Cinderella — Featured 5★",
            vi: "Cinderella — 5★ giới hạn nổi bật"
        },
        date: "2026-07-23",
        image: "",
        description: {
            en: "Ashley / Cinderella was the featured 5-star on the Dichotomy CBT2 Limited-Time Repertoire, The Vengeful Ant. Cynthia II, Rex and Gratia were the standard 5-stars in that banner pool.",
            vi: "Ashley / Cinderella là nhân vật 5 sao nổi bật trong Limited-Time Repertoire The Vengeful Ant của Dichotomy CBT2. Cynthia II, Rex và Gratia là các 5 sao thường trong pool banner đó."
        },
        content: {
            en: [
                "Ashley / Cinderella is marked as a limited 5-star in the archive because she appeared as the featured 5-star of the Dichotomy CBT2 Limited-Time Repertoire, The Vengeful Ant.",
                "Cynthia II, Rex and Gratia are kept as standard 5-stars in the current CBT2 archive context. The Detective remains classified separately as the protagonist rather than as a normal banner unit.",
                "This availability label describes the observed beta banner structure and may be revised if the release version changes its gacha pool."
            ],
            vi: [
                "Ashley / Cinderella được đánh dấu là 5 sao giới hạn trong kho dữ liệu vì cô xuất hiện với vai trò 5 sao nổi bật của Limited-Time Repertoire The Vengeful Ant trong Dichotomy CBT2.",
                "Cynthia II, Rex và Gratia hiện được giữ ở nhóm 5 sao thường theo bối cảnh banner CBT2. The Detective được phân loại riêng là nhân vật chính, không xếp như một nhân vật banner thông thường.",
                "Nhãn khả năng sở hữu này mô tả cấu trúc banner đã quan sát trong beta và có thể được sửa nếu phiên bản phát hành thay đổi pool gacha."
            ]
        },
        tags: ["Cinderella", "5★ Limited", "Banner"]
    },

    {
        id: "news-003",
        category: "news",
        title: {
            en: "Archive Systems Connected",
            vi: "Các hệ thống dữ liệu đã được kết nối"
        },
        date: "2026-08-18",
        image: "",
        description: {
            en: "Characters, builds, Motives, Simulation Implements, Epiphanies and the ranking framework are now connected inside The Detective Archive.",
            vi: "Nhân vật, build, Motive, Simulation Implements, Epiphany và khung xếp hạng hiện đã được kết nối trong The Detective Archive."
        },
        content: {
            en: [
                "The core archive sections now share one data structure: character pages can reference Motives, Simulation, Epiphanies, builds and the ranking framework without duplicating the same information in multiple places.",
                "The ranking system is deliberately score-ready rather than score-filled. Numeric scores and tiers remain unpublished until a repeatable evaluation method and sufficiently reliable combat data are available.",
                "The UID player lookup remains a future-facing placeholder and will only be connected if a reliable public or official data source becomes available."
            ],
            vi: [
                "Các khu vực dữ liệu chính hiện dùng chung một cấu trúc: trang nhân vật có thể liên kết tới Motive, Simulation, Epiphany, build và khung xếp hạng mà không cần lặp cùng một dữ liệu ở nhiều nơi.",
                "Hệ thống ranking hiện được chuẩn bị sẵn để nhận điểm chứ chưa công bố điểm. Score và Tier vẫn để trống cho tới khi có phương pháp đánh giá lặp lại được và đủ dữ liệu chiến đấu đáng tin cậy.",
                "Phần tra cứu UID vẫn là tính năng dành cho tương lai và chỉ được kết nối khi có nguồn dữ liệu công khai hoặc chính thức đủ đáng tin."
            ]
        },
        tags: ["Archive", "Builds", "Rankings"]
    }

];


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


// =========================
// CHARACTER FILTERS
// =========================

/*
    The filter system is already ready for official icons.
    Leave icon as an empty string for now.

    Later, only replace it with paths such as:
    icon: "images/icons/elements/ignis.png"
*/

const reactorAttributeFilters = [
    { id: "Ignis", icon: "" },
    { id: "Glacies", icon: "" },
    { id: "Fulmen", icon: "" },
    { id: "Gravitas", icon: "" },
    { id: "Radiatio", icon: "" },
    { id: "Ferrugo", icon: "" },
    { id: "Alba", icon: "" }
];


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
            card: "images/characters/the-detective-card.png",
            splash: "images/characters/the-detective-splash.png"
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
                    card: "images/characters/the-detective-female-card.png",
                    splash: "images/characters/the-detective-female-splash.png"
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
                    level: 1,
                    hp: 720,
                    atk: 72,
                    def: 24,
                    critRate: "5%",
                    critDamage: "50%"
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
                    card: "images/characters/the-detective-male-card.png",
                    splash: "images/characters/the-detective-male-splash.png"
                },

                reactorAttribute: "Gravitas",
                combatStyle: "Striker DPS",
                identity: "Hero",
                affiliation: "The Raven's Beak",
                occupation: "Detective",

                combatWeapon: { en: "Sword + Gun", vi: "Kiếm + Súng" },
                baseStats: { level: 1, hp: 720, atk: 72, def: 24, critRate: "5%", critDamage: "50%" },
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
        images: { card: "images/characters/cinderella-card.png", splash: "images/characters/cinderella-splash.png" },
        rarity: 5, limited: true, availability: "limited", previewData: true,
        reactorAttribute: "Ignis", combatStyle: "Striker DPS", identity: "Outlaw",
        affiliation: "Fableborne", occupation: "Cinderella",
        combatWeapon: { en: "Flame Sword + Machine Gun", vi: "Kiếm lửa + Súng máy" },
        baseStats: { level: 1, hp: 739, atk: 95, def: 22 },
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
        images: { card: "images/characters/argos-card.png", splash: "images/characters/argos-splash.png" },
        rarity: 4, limited: false, availability: "preview", previewData: true,
        reactorAttribute: "Glacies", combatStyle: "Combat Support", identity: "Witness",
        affiliation: "MISS", occupation: "Bartender",
        combatWeapon: { en: "Cane Gun", vi: "Gậy súng" },
        baseStats: { level: 1, hp: 696, atk: 67, def: 27 },
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
        images: { card: "images/characters/alf-card.png", splash: "images/characters/alf-splash.png" },
        rarity: 4, limited: false, availability: "preview", previewData: true,
        reactorAttribute: "Ignis", combatStyle: "Break Suppressor", identity: "Hero",
        affiliation: "MISS", occupation: "Maid",
        combatWeapon: { en: "Shotgun / Flamethrower", vi: "Shotgun / Súng phun lửa" },
        baseStats: { level: 1, hp: 648, atk: 74, def: 26 },
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
        images: { card: "images/characters/lorin-card.png", splash: "images/characters/lorin-splash.png" },
        rarity: 4, limited: false, availability: "preview", previewData: true,
        reactorAttribute: "Fulmen", combatStyle: "Break Suppressor", identity: "Guardian",
        affiliation: "River Constabulary", occupation: "Chief Inspector",
        combatWeapon: { en: "Electric Boxing Gloves", vi: "Găng boxing điện" },
        baseStats: { level: 1, hp: 744, atk: 76, def: 21 },
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
        images: { card: "images/characters/firtho-card.png", splash: "images/characters/firtho-splash.png" },
        rarity: 4, limited: false, availability: "preview", previewData: true,
        reactorAttribute: "Radiatio", combatStyle: "Survival & Healing", identity: "Guardian",
        affiliation: "The Corner Clinic", occupation: "Doctor",
        combatWeapon: { en: "Saw Cleaver + Syringes", vi: "Cưa phẫu thuật + Ống tiêm" },
        baseStats: { level: 6, hp: 1482, atk: 139, def: 43 },
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
        images: { card: "images/characters/cynthia-ii-card.png", splash: "images/characters/cynthia-ii-splash.png" },
        rarity: 5, limited: false, availability: "preview", previewData: true,
        reactorAttribute: "Ignis", combatStyle: "Combat Support", identity: "Witness",
        affiliation: "House Luna", occupation: "Luna's Scion",
        combatWeapon: { en: "Kitty Knights Boomerang Slingshot", vi: "Ná boomerang Kitty Knights" },
        baseStats: { level: 1, hp: 844, atk: 71, def: 27 },
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
        images: { card: "images/characters/rex-card.png", splash: "images/characters/rex-splash.png" },
        rarity: 5, limited: false, availability: "preview", previewData: true,
        reactorAttribute: "Fulmen", combatStyle: "Resonance DPS", identity: "Hero",
        affiliation: "River Constabulary", occupation: "Superintendent",
        combatWeapon: { en: "Composite Club (Dual Truncheons)", vi: "Côn ghép (song truncheon)" },
        baseStats: { level: 1, hp: 818, atk: 71, def: 28 },
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
        images: { card: "images/characters/red-rose-card.png", splash: "images/characters/red-rose-splash.png" },
        rarity: 5, limited: false, availability: "preview", previewData: true,
        reactorAttribute: "Ignis", combatStyle: "Combat Support", identity: "Saviour",
        affiliation: "Royalty and Aristocracy", occupation: "Dancer",
        combatWeapon: { en: "Vine-firing Gauntlet / Whip", vi: "Găng bắn dây leo / Roi" },
        baseStats: { level: 1, hp: 924, atk: 79, def: 20 },
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
        images: { card: "images/characters/gucia-card.png", splash: "images/characters/gucia-splash.png" },
        rarity: 4, limited: false, availability: "preview", previewData: true,
        reactorAttribute: "Alba", combatStyle: "Combat Support", identity: "Saviour",
        affiliation: "Hunters' Guild", occupation: "Apprentice",
        combatWeapon: { en: "Lantern", vi: "Đèn lồng" },
        baseStats: { level: 1, hp: 720, atk: 67, def: 26 },
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
        images: { card: "images/characters/captain-kaboom-card.png", splash: "images/characters/captain-kaboom-splash.png" },
        rarity: 4, limited: false, availability: "preview", previewData: true,
        reactorAttribute: "Radiatio", combatStyle: "Break Suppressor", identity: "Saviour",
        affiliation: "United Mining Industry", occupation: "Technician",
        combatWeapon: { en: "Wrench", vi: "Cờ lê" },
        baseStats: { level: 1, hp: 696, atk: 74, def: 24 },
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
        images: { card: "images/characters/grimm-card.png", splash: "images/characters/grimm-splash.png" },
        rarity: 4, limited: false, availability: "preview", previewData: true,
        reactorAttribute: "Fulmen", combatStyle: "Combat Support", identity: "Witness",
        affiliation: "S.T.A.T.S.", occupation: "Journalist",
        combatWeapon: { en: "Camera + Gun", vi: "Máy ảnh + Súng" },
        baseStats: { level: 80, hp: 14082, atk: 1298, def: 1057 },
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
        images: { card: "images/characters/bentham-card.png", splash: "images/characters/bentham-splash.png" },
        rarity: 4, limited: false, availability: "preview", previewData: true,
        reactorAttribute: "Glacies", combatStyle: "Resonance DPS", identity: "Outlaw",
        affiliation: "United Mining Industry", occupation: "Secretary",
        combatWeapon: { en: "Whip + Bladed Boots", vi: "Roi + Giày lưỡi dao" },
        baseStats: { level: 28, hp: 2761, atk: 339, def: 191, critRate: "6.08%", critDamage: "51.80%" },
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
        images: { card: "images/characters/gratia-card.png", splash: "images/characters/gratia-splash.png" },
        rarity: 5, limited: false, availability: "preview", previewData: true,
        reactorAttribute: "Glacies", combatStyle: "Survival & Healing", identity: "Guardian",
        affiliation: "Royalty and Aristocracy", occupation: "Knight",
        combatWeapon: { en: "Sword + Shield", vi: "Kiếm + Khiên" },
        baseStats: { level: 1, hp: 844, atk: 71, def: 27 },
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
        effect: {
            en: "Featured 5-star Outlaw Motive from the Dichotomy closed beta. Detailed stat and passive values are intentionally left blank until they can be verified from a reliable in-game source.",
            vi: "Motive Outlaw 5 sao nổi bật trong Dichotomy CBT2. Chỉ số và nội tại chi tiết được để trống cho đến khi có thể xác minh từ nguồn trong game đáng tin cậy."
        }
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
            value: "+2% → +4% (Refine 1–5)"
        },
        effect: {
            en: "A 5-star Saviour Motive distributed as a Dichotomy CBT2 login reward. The displayed refine modifier comes from beta database coverage and may change before release.",
            vi: "Motive Saviour 5 sao được tặng qua đăng nhập trong Dichotomy CBT2. Giá trị tinh luyện hiển thị lấy từ dữ liệu beta và có thể thay đổi trước khi phát hành."
        }
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
            value: "+1% → +2.5% (Refine 1–5)"
        },
        effect: {
            en: "Featured 4-star Motive observed on the Dichotomy beta banner. Its Identity label is left blank here until independently verified.",
            vi: "Motive 4 sao nổi bật trên banner Dichotomy beta. Identity hiện được để trống cho đến khi có xác minh độc lập."
        }
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
            value: "+3% → +6.25% (Refine 1–5)"
        },
        effect: {
            en: "Featured 4-star Motive observed on the Dichotomy beta banner. Its Identity label is left blank here until independently verified.",
            vi: "Motive 4 sao nổi bật trên banner Dichotomy beta. Identity hiện được để trống cho đến khi có xác minh độc lập."
        }
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
        effect: {
            en: "Featured 4-star Motive observed on the Dichotomy beta banner. Detailed beta stat/passive values have not yet been verified for this archive.",
            vi: "Motive 4 sao nổi bật trên banner Dichotomy beta. Chỉ số và nội tại beta chi tiết chưa được xác minh cho kho dữ liệu này."
        }
    },

    // 3-star Motive gallery — Identity labels transcribed from beta gacha footage.
    {
        id: "the-fatuity-mystery",
        name: "The Fatuity Mystery",
        image: "",
        rarity: 3,
        limited: false,
        identity: "Witness",
        availability: "CBT2 Motive Pool"
    },
    {
        id: "the-bullet-mystery",
        name: "The Bullet Mystery",
        image: "",
        rarity: 3,
        limited: false,
        identity: "Saviour",
        availability: "CBT2 Motive Pool"
    },
    {
        id: "the-soft-songs-mystery",
        name: "The Soft Songs Mystery",
        image: "",
        rarity: 3,
        limited: false,
        identity: "Victim",
        availability: "CBT2 Motive Pool"
    },
    {
        id: "the-blade-wind-mystery",
        name: "The Blade Wind Mystery",
        image: "",
        rarity: 3,
        limited: false,
        identity: "Saviour",
        availability: "CBT2 Motive Pool"
    },
    {
        id: "the-aberrant-mystery",
        name: "The Aberrant Mystery",
        image: "",
        rarity: 3,
        limited: false,
        identity: "Outlaw",
        availability: "CBT2 Motive Pool"
    },
    {
        id: "the-rich-fragrance-mystery",
        name: "The Rich Fragrance Mystery",
        image: "",
        rarity: 3,
        limited: false,
        identity: "Witness",
        availability: "CBT2 Motive Pool"
    },
    {
        id: "the-pincers-mystery",
        name: "The Pincers Mystery",
        image: "",
        rarity: 3,
        limited: false,
        identity: "Guardian",
        availability: "CBT2 Motive Pool"
    },
    {
        id: "the-furious-speed-mystery",
        name: "The Furious Speed Mystery",
        image: "",
        rarity: 3,
        limited: false,
        identity: "Outlaw",
        availability: "CBT2 Motive Pool"
    },
    {
        id: "the-coin-mystery",
        name: "The Coin Mystery",
        image: "",
        rarity: 3,
        limited: false,
        identity: "Hero",
        availability: "CBT2 Motive Pool"
    },
    {
        id: "the-richness-mystery",
        name: "The Richness Mystery",
        image: "",
        rarity: 3,
        limited: false,
        identity: "Guardian",
        availability: "CBT2 Motive Pool"
    },
    {
        id: "the-bellowing-mystery",
        name: "The Bellowing Mystery",
        image: "",
        rarity: 3,
        limited: false,
        identity: "Hero",
        availability: "CBT2 Motive Pool"
    },
    {
        id: "the-protection-mystery",
        name: "The Protection Mystery",
        image: "",
        rarity: 3,
        limited: false,
        identity: "Victim",
        availability: "CBT2 Motive Pool"
    }
];

// =========================================================
// CHARACTER DETAIL DATA EXTENSIONS
// Added for the expanded Character Database UI.
// Beta / preview information remains subject to change.
// =========================================================

(function enhanceCharacterDetailData() {

    charactersData.forEach(function (character) {
        if (!character.baseStats) {
            return;
        }

        if (character.baseStats.level === 1) {
            character.baseStats.snapshotType = "level1";
        }
        else if (character.baseStats.isMaxLevel === true) {
            character.baseStats.snapshotType = "max";
        }
        else {
            character.baseStats.snapshotType = "preview";
        }
    });

    const grimm = charactersData.find(function (character) {
        return character.id === "grimm";
    });

    if (grimm && grimm.baseStats && grimm.baseStats.level === 80) {
        grimm.baseStats.isMaxLevel = true;
        grimm.baseStats.snapshotType = "max";
    }

    const detective = charactersData.find(function (character) {
        return character.id === "the-detective";
    });

    if (!detective) {
        return;
    }

    detective.specialMechanics = [
        {
            name: { en: "Ammunition", vi: "Ammunition" },
            max: 6,
            description: {
                en: "Generated by parts of the Basic Attack combo and spent by Raven Slayer.",
                vi: "Được tạo từ một số đòn trong chuỗi Đánh thường và được Raven Slayer tiêu hao."
            }
        },
        {
            name: { en: "Gravity Overdrive", vi: "Gravity Overdrive" },
            max: 100,
            description: {
                en: "Built through Raven Slayer, Tactical Assault, charged attacks and successful parries. At full value it enables Raven Slayer's Charged Shot.",
                vi: "Được tích qua Raven Slayer, Tactical Assault, đòn tích lực và parry thành công. Khi đầy sẽ mở khóa Charged Shot của Raven Slayer."
            }
        }
    ];

    detective.psyches = [
        {
            name: "Detectives' Golden Age",
            description: {
                en: "After Tactical Assault, gain 3 Ammunition and increase the damage of the next 2 Charged Skills by 10%.",
                vi: "Sau Tactical Assault, nhận 3 Ammunition và tăng 10% sát thương cho 2 Charged Skill tiếp theo."
            }
        },
        {
            name: "Crow Flies the Nest",
            description: {
                en: "When skills hit an enemy, ATK increases by 13% for 16s, stacking up to 2 times.",
                vi: "Khi kỹ năng trúng kẻ địch, ATK tăng 13% trong 16 giây, cộng dồn tối đa 2 lần."
            }
        },
        {
            name: "Falling From the Heights",
            description: {
                en: "Tactical Assault or Skill can mark a target. A Charged Skill consumes the mark to deal additional Skill damage.",
                vi: "Tactical Assault hoặc Skill có thể đánh dấu mục tiêu. Charged Skill tiêu dấu ấn để gây thêm sát thương Skill."
            }
        },
        {
            name: "Defying Gravity",
            description: {
                en: "Increases Ultimate damage and extends Gravity Field duration in the beta build.",
                vi: "Tăng sát thương Ultimate và kéo dài thời gian Gravity Field trong bản beta."
            }
        },
        {
            name: "True Reflections",
            description: {
                en: "After Tactical Assault, increases the ATK of all team characters for a period of time.",
                vi: "Sau Tactical Assault, tăng ATK cho toàn bộ nhân vật trong đội trong một khoảng thời gian."
            }
        },
        {
            name: "Thought and Memory",
            description: {
                en: "The first enemy hit by the Charged Skill takes increased damage in the beta build.",
                vi: "Kẻ địch đầu tiên bị Charged Skill đánh trúng sẽ nhận thêm sát thương trong bản beta."
            }
        }
    ];

    const detailedDetectiveSkills = [
        {
            type: "basicAttack",
            name: "Double-Edged Sword: Truth & Deceit",
            description: {
                en: "A five-hit Gravitas combo with charged, pursuit and Perfect Dodge follow-ups.",
                vi: "Chuỗi 5 đòn Gravitas có đòn tích lực, truy kích và follow-up từ Perfect Dodge."
            },
            mechanics: [
                {
                    en: "Press Basic Attack to perform up to 5 hits of Gravitas damage.",
                    vi: "Nhấn Đánh thường để thực hiện tối đa 5 đòn gây sát thương Gravitas."
                },
                {
                    en: "The 3rd hit grants 1 Ammunition; the 5th hit grants 2 Ammunition.",
                    vi: "Đòn thứ 3 nhận 1 Ammunition; đòn thứ 5 nhận 2 Ammunition."
                },
                {
                    en: "Parrying does not break the Basic Attack combo.",
                    vi: "Parry không làm gián đoạn chuỗi Đánh thường."
                },
                {
                    en: "After Perfect Dodge, Basic Attack can immediately unleash the 5th hit and interrupt enemies hit.",
                    vi: "Sau Perfect Dodge, Đánh thường có thể lập tức tung đòn thứ 5 và ngắt hành động kẻ địch trúng đòn."
                }
            ],
            combo: [
                {
                    en: "Basic Attack 5th hit → Raven Slayer 3rd shot by consuming 1 Ammunition.",
                    vi: "Đòn Đánh thường thứ 5 → phát Raven Slayer thứ 3 bằng cách tiêu 1 Ammunition."
                },
                {
                    en: "Before Raven Slayer's 3rd shot ends → Basic Attack can immediately trigger the higher-level Charged Attack.",
                    vi: "Trước khi phát Raven Slayer thứ 3 kết thúc → Đánh thường có thể lập tức kích hoạt Charged Attack cấp cao hơn."
                }
            ],
            resource: {
                en: "Generates Ammunition; the higher-level Charged Attack can also generate Gravity Overdrive.",
                vi: "Tạo Ammunition; Charged Attack cấp cao hơn còn có thể tạo Gravity Overdrive."
            }
        },
        {
            type: "skill",
            name: "Raven Slayer",
            description: {
                en: "Consumes Ammunition for a three-shot Gravitas sequence and converts full Gravity Overdrive into a piercing Charged Shot.",
                vi: "Tiêu Ammunition cho chuỗi 3 phát Gravitas và chuyển Gravity Overdrive đầy thành Charged Shot xuyên mục tiêu."
            },
            mechanics: [
                {
                    en: "Each use consumes 1 Ammunition and up to 3 shots can be fired consecutively.",
                    vi: "Mỗi lần dùng tiêu 1 Ammunition và có thể bắn liên tiếp tối đa 3 phát."
                },
                {
                    en: "The three shots build 10 / 20 / 30 Gravity Overdrive respectively.",
                    vi: "Ba phát lần lượt tích 10 / 20 / 30 Gravity Overdrive."
                },
                {
                    en: "At full Gravity Overdrive, hold Skill to consume it all and fire a piercing Charged Shot.",
                    vi: "Khi Gravity Overdrive đầy, giữ Skill để tiêu toàn bộ và bắn Charged Shot xuyên mục tiêu."
                },
                {
                    en: "The Charged Shot temporarily strengthens Ultimate damage in the beta build.",
                    vi: "Charged Shot tạm thời tăng sát thương Ultimate trong bản beta."
                }
            ],
            combo: [
                {
                    en: "Raven Slayer 2nd shot → Basic Attack 5th hit.",
                    vi: "Phát Raven Slayer thứ 2 → đòn Đánh thường thứ 5."
                }
            ],
            resource: {
                en: "Cost: 1 Ammunition per shot. Max Ammunition: 6. Max Gravity Overdrive: 100.",
                vi: "Chi phí: 1 Ammunition mỗi phát. Ammunition tối đa: 6. Gravity Overdrive tối đa: 100."
            }
        },
        {
            type: "ultimate",
            name: "Thus Spake the Raven",
            description: {
                en: "A powerful Gravitas finisher that creates a Gravity Field.",
                vi: "Đòn kết liễu Gravitas mạnh tạo ra Gravity Field."
            },
            mechanics: [
                {
                    en: "At full Ultimate charge, leap into the air and unleash a powerful Gravitas attack.",
                    vi: "Khi Ultimate đầy, nhảy lên không trung và tung một đòn Gravitas mạnh."
                },
                {
                    en: "Creates a Gravity Field that applies Time Dilation and continues dealing Gravitas damage.",
                    vi: "Tạo Gravity Field áp dụng Time Dilation và tiếp tục gây sát thương Gravitas."
                },
                {
                    en: "The preview-build Gravity Field lasts 3 seconds before Psyche upgrades.",
                    vi: "Gravity Field trong bản preview kéo dài 3 giây trước các nâng cấp Psyche."
                }
            ]
        },
        {
            type: "tacticalAssault",
            name: "\"One-Half\" of a Retaliation",
            description: {
                en: "A switch-in flurry that deals Gravitas damage and rapidly fills Gravity Overdrive.",
                vi: "Chuỗi đòn khi đổi vào sân gây Gravitas và nhanh chóng lấp đầy Gravity Overdrive."
            },
            mechanics: [
                {
                    en: "Switch in with sufficient Reactor Energy to unleash a flurry of Gravitas attacks.",
                    vi: "Đổi vào sân khi có đủ Reactor Energy để tung chuỗi đòn Gravitas."
                },
                {
                    en: "Can grant up to 100 Gravity Overdrive in the beta build.",
                    vi: "Có thể nhận tối đa 100 Gravity Overdrive trong bản beta."
                }
            ]
        },
        {
            type: "passive",
            name: "Occam's Razor",
            description: {
                en: "Rewards Charged Shot timing and successful parries.",
                vi: "Thưởng cho việc căn Charged Shot và parry thành công."
            },
            mechanics: [
                {
                    en: "Raven Slayer's Charged Shot increases Ultimate damage, stacking up to 2 times for a short duration in the beta build.",
                    vi: "Charged Shot của Raven Slayer tăng sát thương Ultimate, cộng dồn tối đa 2 lần trong thời gian ngắn ở bản beta."
                },
                {
                    en: "Successful parries grant 5 Gravity Overdrive.",
                    vi: "Parry thành công nhận 5 Gravity Overdrive."
                }
            ]
        }
    ];

    if (Array.isArray(detective.variants)) {
        detective.variants.forEach(function (variant) {
            variant.skills = detailedDetectiveSkills;
        });
    }

})();

// =========================
// SIMULATION / IMPLEMENT SETS
// =========================

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
        observedStatus: "Observed in Dichotomy CBT2",
        slots: [
            {
                slot: "Head",
                name: "Death Is Now the Phoenix' Nest",
                knownStats: {
                    greenLv60: [
                        { label: "ATK%", value: "≈ 3.09%" },
                        { label: "DMG Bonus", value: "≈ 1.93%" }
                    ],
                    purpleLv60: [
                        { label: "ATK%", value: "≈ 6.18%" },
                        { label: "DMG Bonus", value: "≈ 3.86%" }
                    ]
                }
            },
            { slot: "Neck", name: "" },
            { slot: "Secondary Weapon", name: "" },
            { slot: "Accessory", name: "" }
        ],
        setEffect: "",
        description: {
            en: "A four-piece Implement set observed on the Character Simulation screen in the Dichotomy beta. One confirmed Head piece is Death Is Now the Phoenix' Nest. The exact full set-effect text has not yet been independently transcribed for this archive.",
            vi: "Một bộ Implement 4 món được quan sát trong màn hình Character Simulation của Dichotomy beta. Món Head đã xác nhận là Death Is Now the Phoenix' Nest. Nội dung chính xác của hiệu ứng đủ bộ hiện chưa được chép lại độc lập cho kho dữ liệu này."
        }
    },

    {
        id: "elitism",
        name: "Elitism",
        type: "Implement Set",
        observedStatus: "Observed 4/4 in Dichotomy CBT2",
        observedOn: "Lorin",
        slots: [
            { slot: "Head", name: "" },
            { slot: "Neck", name: "" },
            { slot: "Secondary Weapon", name: "" },
            { slot: "Accessory", name: "" }
        ],
        setEffect: "",
        description: {
            en: "A complete 4/4 Elitism Implement set was observed on Lorin in Dichotomy beta footage. The exact individual piece names and full set-effect text are intentionally left blank until independently verified.",
            vi: "Bộ Implement Elitism đủ 4/4 đã được quan sát trên Lorin trong footage Dichotomy beta. Tên từng món và nội dung đầy đủ của hiệu ứng bộ được để trống cho đến khi có xác minh độc lập."
        }
    }
];

const simulationSystemInfo = {
    slotNames: ["Head", "Neck", "Secondary Weapon", "Accessory"],
    rarities: ["Grey", "Green", "Blue", "Purple"],
    yellowTierStatus: "Exists in beta game data but was not obtainable in the documented build.",
    fixedStats: true,
    autoMaxLevelOnAcquire: true,
    levelRequirement: "Character level must be at least the equipment level.",
    epiphanySeparate: true
};

// =========================
// EPIPHANIES
// =========================

/*
    Dichotomy CBT2 includes 30 Epiphanies. They are books equipped in a
    dedicated slot on the Character Simulation screen and are separate from
    the four Implements. Each grants a passive, but passive text is left blank
    here unless independently transcribed. The literary-source mapping below
    follows current CBT2 documentation.
*/

const epiphanyData = [
    {
        id: "bloodline-feud",
        name: "Bloodline Feud",
        sourceText: "Hamlet",
        authorOrigin: "William Shakespeare, c. 1600",
        category: "Shakespeare",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    },

    {
        id: "cinderella-book",
        name: "Cinderella",
        sourceText: "Cinderella",
        authorOrigin: "European folk tale; Perrault and the Brothers Grimm",
        category: "Fairy Tale",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    },

    {
        id: "death-of-a-clerk",
        name: "Death of a Clerk",
        sourceText: "The Death of a Government Clerk",
        authorOrigin: "Anton Chekhov, 1883",
        category: "19th-Century Realism",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    },

    {
        id: "diamond-necklace",
        name: "Diamond Necklace",
        sourceText: "The Necklace",
        authorOrigin: "Guy de Maupassant, 1884",
        category: "19th-Century Realism",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    },

    {
        id: "farewell-chivalrous-age",
        name: "Farewell, Chivalrous Age",
        sourceText: "Don Quixote",
        authorOrigin: "Miguel de Cervantes, 1605",
        category: "Wider Canon",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    },

    {
        id: "flattery-and-honesty",
        name: "Flattery and Honesty",
        sourceText: "King Lear",
        authorOrigin: "William Shakespeare, c. 1606",
        category: "Shakespeare",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    },

    {
        id: "frustrations-of-youth",
        name: "Frustrations of Youth",
        sourceText: "The Sorrows of Young Werther",
        authorOrigin: "Johann Wolfgang von Goethe, 1774",
        category: "Wider Canon",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    },

    {
        id: "killing-that-which-you-love",
        name: "Killing That Which You Love",
        sourceText: "The Gospel of Mark",
        authorOrigin: "New Testament, c. AD 70",
        category: "Myth / Epic / Scripture",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    },

    {
        id: "resurrected-monstrosity",
        name: "Resurrected Monstrosity",
        sourceText: "Frankenstein",
        authorOrigin: "Mary Shelley, 1818",
        category: "Wider Canon",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    },

    {
        id: "return-from-the-underworld",
        name: "Return From the Underworld",
        sourceText: "Orpheus and Eurydice",
        authorOrigin: "Greek myth",
        category: "Myth / Epic / Scripture",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    },

    {
        id: "song-of-the-paladin",
        name: "Song of the Paladin",
        sourceText: "The Song of Roland",
        authorOrigin: "Old French chanson de geste, c. 1100",
        category: "Myth / Epic / Scripture",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    },

    {
        id: "barber-of-meadow",
        name: "The Barber of Meadow",
        sourceText: "The Barber of Seville",
        authorOrigin: "Pierre Beaumarchais, 1775",
        category: "Wider Canon",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    },

    {
        id: "castaways-tale",
        name: "The Castaway's Tale",
        sourceText: "Robinson Crusoe",
        authorOrigin: "Daniel Defoe, 1719",
        category: "Wider Canon",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    },

    {
        id: "count-of-the-cavern",
        name: "The Count of the Cavern",
        sourceText: "The Count of Monte Cristo",
        authorOrigin: "Alexandre Dumas, 1844",
        category: "19th-Century Realism",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    },

    {
        id: "cursed-hound",
        name: "The Cursed Hound",
        sourceText: "The Hound of the Baskervilles",
        authorOrigin: "Arthur Conan Doyle, 1902",
        category: "Poe & Doyle",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    },

    {
        id: "destined-death",
        name: "The Destined Death",
        sourceText: "The Prose Edda & The Poetic Edda",
        authorOrigin: "Snorri Sturluson and anonymous Old Norse poets",
        category: "Myth / Epic / Scripture",
        observedStatus: "Dichotomy CBT2",
        observedOn: "Bentham \u00b7 The Detective",
        passive: "",
        storyAvailable: true
    },

    {
        id: "fall-of-house-of-rot",
        name: "The Fall of the House of Rot",
        sourceText: "The Fall of the House of Usher",
        authorOrigin: "Edgar Allan Poe, 1839",
        category: "Poe & Doyle",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    },

    {
        id: "heros-shoulder",
        name: "The Hero's Shoulder",
        sourceText: "The Nibelungenlied",
        authorOrigin: "Anonymous Middle High German epic, c. 1200",
        category: "Myth / Epic / Scripture",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    },

    {
        id: "last-leaf",
        name: "The Last Leaf",
        sourceText: "The Last Leaf",
        authorOrigin: "O. Henry, 1907",
        category: "19th-Century Realism",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    },

    {
        id: "metamorphosis",
        name: "The Metamorphosis",
        sourceText: "The Metamorphosis",
        authorOrigin: "Franz Kafka, 1915",
        category: "Wider Canon",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    },

    {
        id: "morgue-street-murder",
        name: "The Morgue Street Murder",
        sourceText: "The Murders in the Rue Morgue",
        authorOrigin: "Edgar Allan Poe, 1841",
        category: "Poe & Doyle",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    },

    {
        id: "priest-and-bread-thief",
        name: "The Priest and the Bread Thief",
        sourceText: "Les Mis\u00e9rables",
        authorOrigin: "Victor Hugo, 1862",
        category: "19th-Century Realism",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    },

    {
        id: "prince-of-safe-passage",
        name: "The Prince of Safe Passage",
        sourceText: "Mother Courage and Her Children",
        authorOrigin: "Bertolt Brecht, 1939",
        category: "Wider Canon",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    },

    {
        id: "red-shoes",
        name: "The Red Shoes",
        sourceText: "The Red Shoes",
        authorOrigin: "Hans Christian Andersen, 1845",
        category: "Fairy Tale",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    },

    {
        id: "sword-in-silvernia",
        name: "The Sword in Silvernia",
        sourceText: "King Arthur / Excalibur",
        authorOrigin: "Arthurian legend",
        category: "Myth / Epic / Scripture",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    },

    {
        id: "tragedy-of-man",
        name: "The Tragedy of Man",
        sourceText: "Le P\u00e8re Goriot",
        authorOrigin: "Honor\u00e9 de Balzac, 1835",
        category: "19th-Century Realism",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    },

    {
        id: "until-death-do-us-part",
        name: "Until Death Do Us Part",
        sourceText: "Romeo and Juliet",
        authorOrigin: "William Shakespeare, c. 1595",
        category: "Shakespeare",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    },

    {
        id: "vengeance-from-void",
        name: "Vengeance From the Void",
        sourceText: "Theogony",
        authorOrigin: "Hesiod, c. 700 BC",
        category: "Myth / Epic / Scripture",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    },

    {
        id: "villainous-crown",
        name: "Villainous Crown",
        sourceText: "Macbeth",
        authorOrigin: "William Shakespeare, c. 1606",
        category: "Shakespeare",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    },

    {
        id: "white-beast-deep",
        name: "White Beast of the Deep",
        sourceText: "Moby-Dick",
        authorOrigin: "Herman Melville, 1851",
        category: "Wider Canon",
        observedStatus: "Dichotomy CBT2",
        observedOn: "",
        passive: "",
        storyAvailable: true
    }
];

const epiphanySystemInfo = {
    count: 30,
    separateSlot: true,
    characterLocked: false,
    storyButton: true,
    documentedExample: "The Destined Death appears on both Bentham and The Detective with identical effect text."
};


