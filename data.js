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
                    card: "images/character/the-detective.png",
                    splash: "images/character/the-detective.png"
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
        images: { card: "images/character/cinderella.png", splash: "images/character/cinderella.png" },
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
        images: { card: "images/character/argos.png", splash: "images/character/argos.png" },
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
        images: { card: "images/character/alf.png", splash: "images/character/alf.png" },
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
        images: { card: "images/character/lorin.png", splash: "images/character/lorin.png" },
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
        images: { card: "images/character/firtho.png", splash: "images/character/firtho.png" },
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
        images: { card: "images/character/cynthia-ii.png", splash: "images/character/cynthia-ii.png" },
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
        images: { card: "images/character/rex.png", splash: "images/character/rex.png" },
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
        images: { card: "images/character/red-rose.png", splash: "images/character/red-rose.png" },
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
        images: { card: "images/character/gucia.png", splash: "images/character/gucia.png" },
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
        images: { card: "images/character/captain-kaboom.png", splash: "images/character/captain-kaboom.png" },
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
        images: { card: "images/character/grimm.png", splash: "images/character/grimm.png" },
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
        images: { card: "images/character/bentham.png", splash: "images/character/bentham.png" },
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
        images: { card: "images/character/gratia.png", splash: "images/character/gratia.png" },
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
        observedStatus: "Observed 4/4 in Dichotomy CBT2",
        observedOn: "Bentham",
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
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
        storyAvailable: true,
        passiveStatus: "Exact passive text pending",
        sourceLabel: "SilverPalaceMeta — Epiphany literary-source mapping (Dichotomy CBT2)"
    }
];

const epiphanySystemInfo = {
    count: 30,
    separateSlot: true,
    characterLocked: false,
    onePerCharacter: true,
    storyButton: true,
    rollableSubstats: true,
    passivePerBook: true,
    documentedExample: "The Destined Death appears on both Bentham and The Detective with identical effect text.",
    sourceLabel: "SilverPalaceMeta — Epiphanies: All 30 Literary Sources / Equipment Glossary (Dichotomy CBT2)",
    archivePolicy: {
        en: "The archive treats the 30 book names, literary sources, dedicated-slot behavior, transferable use and rollable-substat system as CBT2-observed data. Exact per-book passive text and specific rolled substat lines remain unpublished unless they can be transcribed reliably.",
        vi: "Kho dữ liệu xem 30 tên sách, nguồn văn học, cơ chế ô riêng, khả năng chuyển giữa nhân vật và hệ substat có thể roll là dữ liệu đã quan sát trong CBT2. Nội dung passive riêng từng sách và các dòng substat cụ thể sẽ để trống nếu chưa chép được đủ tin cậy."
    }
};
/* =========================================================
   FULL CHARACTER SKILLS CBT2 v26
   Community CBT2 transcription source: Kaiden.gg (updated 2026-07-29).
   This patch intentionally prioritizes mechanics/resources/combos and does
   not invent missing level multipliers or reconcile conflicting beta text.
========================================================= */

const characterSkillDetailPatchV26 = {
  "the-detective": {
    "variants": {
      "female": [
        {
          "type": "basicAttack",
          "name": "Double-Edged Sword: Truth & Deceit",
          "description": {
            "en": "A five-hit Gravitas sword-and-gun combo that generates Ammunition and links directly into Raven Slayer.",
            "vi": "Chuỗi kiếm-súng Gravitas 5 đòn, tạo Ammunition và có thể nối trực tiếp sang Raven Slayer."
          },
          "resource": {
            "en": "Ammunition: hit 3 grants 1; hit 5 grants 2. Maximum Ammunition: 6.",
            "vi": "Ammunition: đòn 3 nhận 1; đòn 5 nhận 2. Tối đa 6 Ammunition."
          },
          "mechanics": [
            {
              "en": "Parrying does not break the current Basic Attack combo.",
              "vi": "Parry không làm đứt chuỗi Đánh thường hiện tại."
            },
            {
              "en": "After a Perfect Dodge, Basic Attack immediately performs hit 5 and can interrupt enemies.",
              "vi": "Sau Perfect Dodge, Đánh thường lập tức tung đòn 5 và có thể ngắt kẻ địch."
            },
            {
              "en": "Charged Attack Lv.1 is a multi-hit flurry. Lv.2 also grants 1 Ammunition and 15 Gravity Overdrive on hit.",
              "vi": "Charged Attack Lv.1 là chuỗi nhiều đòn. Lv.2 còn nhận 1 Ammunition và 15 Gravity Overdrive khi trúng."
            },
            {
              "en": "After Dodge or Dash, Basic Attack performs a Pursuit Attack.",
              "vi": "Sau Dodge hoặc Dash, Đánh thường tung Pursuit Attack."
            }
          ],
          "combo": [
            {
              "en": "Basic hit 5 → Skill: consume 1 Ammunition to jump directly into the third Raven Slayer shot.",
              "vi": "Đòn thường 5 → Skill: tiêu 1 Ammunition để nối thẳng vào phát Raven Slayer thứ 3."
            },
            {
              "en": "Raven Slayer third shot → Basic Attack: immediately use Charged Attack Lv.2.",
              "vi": "Phát Raven Slayer thứ 3 → Đánh thường: lập tức dùng Charged Attack Lv.2."
            }
          ],
          "source": {
            "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
            "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
          }
        },
        {
          "type": "skill",
          "name": "Raven Slayer",
          "description": {
            "en": "Consumes Ammunition for up to three consecutive Gravitas shots and builds Gravity Overdrive.",
            "vi": "Tiêu Ammunition để bắn tối đa 3 phát Gravitas liên tiếp và tích Gravity Overdrive."
          },
          "resource": {
            "en": "Each shot consumes 1 Ammunition. The three shots build 10 / 20 / 30 Gravity Overdrive. Maximum Gravity Overdrive: 100.",
            "vi": "Mỗi phát tiêu 1 Ammunition. Ba phát lần lượt tạo 10 / 20 / 30 Gravity Overdrive. Tối đa 100 Gravity Overdrive."
          },
          "mechanics": [
            {
              "en": "The second shot can route back into the fifth Basic Attack hit.",
              "vi": "Phát thứ 2 có thể nối trở lại đòn Đánh thường thứ 5."
            },
            {
              "en": "At full Gravity Overdrive, hold Skill to consume all Overdrive and fire a piercing Charged Shot.",
              "vi": "Khi Gravity Overdrive đầy, giữ Skill để tiêu toàn bộ và bắn Charged Shot xuyên mục tiêu."
            },
            {
              "en": "The Charged Shot temporarily strengthens the Ultimate.",
              "vi": "Charged Shot tạm thời cường hóa Ultimate."
            }
          ],
          "combo": [
            {
              "en": "Basic hit 5 → Raven Slayer shot 3.",
              "vi": "Đòn thường 5 → Raven Slayer phát 3."
            },
            {
              "en": "Raven Slayer shot 3 → Charged Attack Lv.2.",
              "vi": "Raven Slayer phát 3 → Charged Attack Lv.2."
            }
          ],
          "source": {
            "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
            "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
          }
        },
        {
          "type": "ultimate",
          "name": "Thus Spake the Raven",
          "description": {
            "en": "Leaps into the air for a heavy Gravitas attack and creates a Gravity Field.",
            "vi": "Nhảy lên không rồi tung đòn Gravitas mạnh và tạo Gravity Field."
          },
          "resource": "",
          "mechanics": [
            {
              "en": "The Gravity Field applies Time Dilation to enemies inside it.",
              "vi": "Gravity Field áp dụng Time Dilation lên kẻ địch bên trong."
            },
            {
              "en": "The field continues dealing Gravitas damage for 3 seconds.",
              "vi": "Khu vực tiếp tục gây sát thương Gravitas trong 3 giây."
            },
            {
              "en": "Raven Slayer Charged Shot can increase Ultimate damage by the passive effect.",
              "vi": "Charged Shot của Raven Slayer có thể tăng sát thương Ultimate nhờ nội tại."
            }
          ],
          "combo": [],
          "source": {
            "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
            "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
          }
        },
        {
          "type": "tacticalAssault",
          "name": "Half Retaliation",
          "description": {
            "en": "A switch-in Gravitas flurry that rapidly fills Gravity Overdrive.",
            "vi": "Chuỗi Gravitas khi đổi vào sân, nhanh chóng nạp Gravity Overdrive."
          },
          "resource": {
            "en": "Can grant up to 100 Gravity Overdrive.",
            "vi": "Có thể nhận tối đa 100 Gravity Overdrive."
          },
          "mechanics": [
            {
              "en": "Requires sufficient Reactor Energy to perform the Tactical Assault.",
              "vi": "Cần đủ Reactor Energy để thực hiện Tactical Assault."
            }
          ],
          "combo": [],
          "source": {
            "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
            "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
          }
        },
        {
          "type": "passive",
          "name": "Occam's Razor",
          "description": {
            "en": "Rewards Raven Slayer Charged Shots and successful parries with stronger Ultimate setup.",
            "vi": "Thưởng cho Charged Shot của Raven Slayer và parry thành công để chuẩn bị Ultimate mạnh hơn."
          },
          "resource": "",
          "mechanics": [
            {
              "en": "Raven Slayer Charged Shot increases Ultimate DMG by 10% for 6s, stacking up to 2 times.",
              "vi": "Charged Shot của Raven Slayer tăng 10% sát thương Ultimate trong 6 giây, cộng dồn tối đa 2 lần."
            },
            {
              "en": "A successful parry grants 5 Gravity Overdrive.",
              "vi": "Parry thành công nhận 5 Gravity Overdrive."
            }
          ],
          "combo": [],
          "source": {
            "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
            "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
          }
        }
      ],
      "male": [
        {
          "type": "basicAttack",
          "name": "Double-Edged Sword: Truth & Deceit",
          "description": {
            "en": "A five-hit Gravitas sword-and-gun combo that generates Ammunition and links directly into Raven Slayer.",
            "vi": "Chuỗi kiếm-súng Gravitas 5 đòn, tạo Ammunition và có thể nối trực tiếp sang Raven Slayer."
          },
          "resource": {
            "en": "Ammunition: hit 3 grants 1; hit 5 grants 2. Maximum Ammunition: 6.",
            "vi": "Ammunition: đòn 3 nhận 1; đòn 5 nhận 2. Tối đa 6 Ammunition."
          },
          "mechanics": [
            {
              "en": "Parrying does not break the current Basic Attack combo.",
              "vi": "Parry không làm đứt chuỗi Đánh thường hiện tại."
            },
            {
              "en": "After a Perfect Dodge, Basic Attack immediately performs hit 5 and can interrupt enemies.",
              "vi": "Sau Perfect Dodge, Đánh thường lập tức tung đòn 5 và có thể ngắt kẻ địch."
            },
            {
              "en": "Charged Attack Lv.1 is a multi-hit flurry. Lv.2 also grants 1 Ammunition and 15 Gravity Overdrive on hit.",
              "vi": "Charged Attack Lv.1 là chuỗi nhiều đòn. Lv.2 còn nhận 1 Ammunition và 15 Gravity Overdrive khi trúng."
            },
            {
              "en": "After Dodge or Dash, Basic Attack performs a Pursuit Attack.",
              "vi": "Sau Dodge hoặc Dash, Đánh thường tung Pursuit Attack."
            }
          ],
          "combo": [
            {
              "en": "Basic hit 5 → Skill: consume 1 Ammunition to jump directly into the third Raven Slayer shot.",
              "vi": "Đòn thường 5 → Skill: tiêu 1 Ammunition để nối thẳng vào phát Raven Slayer thứ 3."
            },
            {
              "en": "Raven Slayer third shot → Basic Attack: immediately use Charged Attack Lv.2.",
              "vi": "Phát Raven Slayer thứ 3 → Đánh thường: lập tức dùng Charged Attack Lv.2."
            }
          ],
          "source": {
            "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
            "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
          }
        },
        {
          "type": "skill",
          "name": "Raven Slayer",
          "description": {
            "en": "Consumes Ammunition for up to three consecutive Gravitas shots and builds Gravity Overdrive.",
            "vi": "Tiêu Ammunition để bắn tối đa 3 phát Gravitas liên tiếp và tích Gravity Overdrive."
          },
          "resource": {
            "en": "Each shot consumes 1 Ammunition. The three shots build 10 / 20 / 30 Gravity Overdrive. Maximum Gravity Overdrive: 100.",
            "vi": "Mỗi phát tiêu 1 Ammunition. Ba phát lần lượt tạo 10 / 20 / 30 Gravity Overdrive. Tối đa 100 Gravity Overdrive."
          },
          "mechanics": [
            {
              "en": "The second shot can route back into the fifth Basic Attack hit.",
              "vi": "Phát thứ 2 có thể nối trở lại đòn Đánh thường thứ 5."
            },
            {
              "en": "At full Gravity Overdrive, hold Skill to consume all Overdrive and fire a piercing Charged Shot.",
              "vi": "Khi Gravity Overdrive đầy, giữ Skill để tiêu toàn bộ và bắn Charged Shot xuyên mục tiêu."
            },
            {
              "en": "The Charged Shot temporarily strengthens the Ultimate.",
              "vi": "Charged Shot tạm thời cường hóa Ultimate."
            }
          ],
          "combo": [
            {
              "en": "Basic hit 5 → Raven Slayer shot 3.",
              "vi": "Đòn thường 5 → Raven Slayer phát 3."
            },
            {
              "en": "Raven Slayer shot 3 → Charged Attack Lv.2.",
              "vi": "Raven Slayer phát 3 → Charged Attack Lv.2."
            }
          ],
          "source": {
            "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
            "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
          }
        },
        {
          "type": "ultimate",
          "name": "Thus Spake the Raven",
          "description": {
            "en": "Leaps into the air for a heavy Gravitas attack and creates a Gravity Field.",
            "vi": "Nhảy lên không rồi tung đòn Gravitas mạnh và tạo Gravity Field."
          },
          "resource": "",
          "mechanics": [
            {
              "en": "The Gravity Field applies Time Dilation to enemies inside it.",
              "vi": "Gravity Field áp dụng Time Dilation lên kẻ địch bên trong."
            },
            {
              "en": "The field continues dealing Gravitas damage for 3 seconds.",
              "vi": "Khu vực tiếp tục gây sát thương Gravitas trong 3 giây."
            },
            {
              "en": "Raven Slayer Charged Shot can increase Ultimate damage by the passive effect.",
              "vi": "Charged Shot của Raven Slayer có thể tăng sát thương Ultimate nhờ nội tại."
            }
          ],
          "combo": [],
          "source": {
            "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
            "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
          }
        },
        {
          "type": "tacticalAssault",
          "name": "Half Retaliation",
          "description": {
            "en": "A switch-in Gravitas flurry that rapidly fills Gravity Overdrive.",
            "vi": "Chuỗi Gravitas khi đổi vào sân, nhanh chóng nạp Gravity Overdrive."
          },
          "resource": {
            "en": "Can grant up to 100 Gravity Overdrive.",
            "vi": "Có thể nhận tối đa 100 Gravity Overdrive."
          },
          "mechanics": [
            {
              "en": "Requires sufficient Reactor Energy to perform the Tactical Assault.",
              "vi": "Cần đủ Reactor Energy để thực hiện Tactical Assault."
            }
          ],
          "combo": [],
          "source": {
            "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
            "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
          }
        },
        {
          "type": "passive",
          "name": "Occam's Razor",
          "description": {
            "en": "Rewards Raven Slayer Charged Shots and successful parries with stronger Ultimate setup.",
            "vi": "Thưởng cho Charged Shot của Raven Slayer và parry thành công để chuẩn bị Ultimate mạnh hơn."
          },
          "resource": "",
          "mechanics": [
            {
              "en": "Raven Slayer Charged Shot increases Ultimate DMG by 10% for 6s, stacking up to 2 times.",
              "vi": "Charged Shot của Raven Slayer tăng 10% sát thương Ultimate trong 6 giây, cộng dồn tối đa 2 lần."
            },
            {
              "en": "A successful parry grants 5 Gravity Overdrive.",
              "vi": "Parry thành công nhận 5 Gravity Overdrive."
            }
          ],
          "combo": [],
          "source": {
            "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
            "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
          }
        }
      ]
    }
  },
  "cinderella": {
    "skills": [
      {
        "type": "basicAttack",
        "name": "Double-Quenched Blade",
        "description": {
          "en": "A five-hit Ignis sword combo that builds Vengeful Flame; Quenched changes it into a faster four-hit sequence built around Overheat.",
          "vi": "Chuỗi kiếm Ignis 5 đòn tích Vengeful Flame; khi Quenched, nó đổi thành chuỗi 4 đòn nhanh hơn xoay quanh Overheat."
        },
        "resource": {
          "en": "Normal hits grant 2 / 3 / 5 / 5 / 5 Vengeful Flame. In Quenched, hits grant 15 / 15 / 30 / 60 Overheat. Maximum Overheat: 120.",
          "vi": "Đòn thường nhận 2 / 3 / 5 / 5 / 5 Vengeful Flame. Khi Quenched, các đòn nhận 15 / 15 / 30 / 60 Overheat. Tối đa 120 Overheat."
        },
        "mechanics": [
          {
            "en": "Parry can route directly into Basic hit 3.",
            "vi": "Parry có thể nối trực tiếp vào đòn thường 3."
          },
          {
            "en": "After Basic hit 4, a Charged Shot can be used.",
            "vi": "Sau đòn thường 4 có thể dùng Charged Shot."
          },
          {
            "en": "Perfect Dodge triggers a long-range barrage, interrupts enemies and grants 25 Overheat.",
            "vi": "Perfect Dodge kích hoạt loạt bắn tầm xa, ngắt kẻ địch và nhận 25 Overheat."
          },
          {
            "en": "In Quenched, Basic hit 4 negates incoming damage during the attack.",
            "vi": "Khi Quenched, đòn thường 4 vô hiệu sát thương nhận vào trong lúc ra đòn."
          },
          {
            "en": "A full-Overheat Charged Attack consumes all Overheat.",
            "vi": "Charged Attack khi Overheat đầy sẽ tiêu toàn bộ Overheat."
          }
        ],
        "combo": [
          {
            "en": "Normal Basic hit 4 → Charged Shot → Re-Smelt pressure.",
            "vi": "Đòn thường 4 → Charged Shot → tiếp tục gây áp lực bằng Re-Smelt."
          }
        ],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "skill",
        "name": "Re-Smelt",
        "description": {
          "en": "Turns Vengeful Flame into sustained machine-gun fire, building Overheat for Cinderella’s Quenched burst windows.",
          "vi": "Chuyển Vengeful Flame thành loạt súng máy liên tục, tích Overheat cho giai đoạn bùng nổ Quenched."
        },
        "resource": {
          "en": "Requires at least 20 Vengeful Flame. Each shot consumes 4 Vengeful Flame and grants 4.5 Overheat. Maximum Vengeful Flame: 80; while active it also regenerates over time.",
          "vi": "Cần ít nhất 20 Vengeful Flame. Mỗi phát tiêu 4 Vengeful Flame và nhận 4,5 Overheat. Tối đa 80 Vengeful Flame; khi hoạt động còn hồi dần theo thời gian."
        },
        "mechanics": [
          {
            "en": "Fire rate accelerates during sustained fire and the sequence ends with a Charged Shot.",
            "vi": "Tốc độ bắn tăng dần khi xả liên tục và chuỗi kết thúc bằng Charged Shot."
          },
          {
            "en": "During the rapid-fire window Cinderella can negate incoming damage.",
            "vi": "Trong cửa sổ xả đạn nhanh Cinderella có thể vô hiệu sát thương nhận vào."
          },
          {
            "en": "The Charged Shot after Basic hit 4 grants 25 Vengeful Flame.",
            "vi": "Charged Shot sau đòn thường 4 nhận 25 Vengeful Flame."
          },
          {
            "en": "While Quenched, Skill becomes a backward leap burst that grants 15 Overheat and negates damage.",
            "vi": "Khi Quenched, Skill trở thành cú lùi-bắn nổ, nhận 15 Overheat và vô hiệu sát thương."
          }
        ],
        "combo": [
          {
            "en": "Quenched Skill → Basic before landing: Signature Pursuit, +30 Overheat, then chains into Basic hit 4.",
            "vi": "Quenched Skill → Đánh thường trước khi chạm đất: Signature Pursuit, +30 Overheat, rồi nối vào đòn thường 4."
          }
        ],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "ultimate",
        "name": "Carriage of Conflagration",
        "description": {
          "en": "Activates Quenched, transforming Cinderella’s combat loop for a 12-second burst window.",
          "vi": "Kích hoạt Quenched, biến đổi vòng chiến đấu của Cinderella trong cửa sổ bùng nổ 12 giây."
        },
        "resource": {
          "en": "Quenched lasts 12s.",
          "vi": "Quenched kéo dài 12 giây."
        },
        "mechanics": [
          {
            "en": "Enemies near Cinderella take continuous Ignis damage while Quenched is active.",
            "vi": "Kẻ địch gần Cinderella chịu sát thương Ignis liên tục khi Quenched hoạt động."
          },
          {
            "en": "Press Ultimate again to summon an explosive chariot and immediately end Quenched.",
            "vi": "Bấm Ultimate lần nữa để triệu hồi cỗ xe phát nổ và kết thúc Quenched ngay."
          },
          {
            "en": "If not manually triggered, the finishing Ultimate activates automatically when Quenched expires.",
            "vi": "Nếu không chủ động dùng, Ultimate kết thúc sẽ tự kích hoạt khi Quenched hết thời gian."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "tacticalAssault",
        "name": "Thermal Contact",
        "description": {
          "en": "Switches in with a flying kick that deals Ignis damage and starts her Overheat setup.",
          "vi": "Đổi vào sân bằng cú đá bay gây Ignis và bắt đầu tích Overheat."
        },
        "resource": {
          "en": "Grants 30 Overheat.",
          "vi": "Nhận 30 Overheat."
        },
        "mechanics": [
          {
            "en": "Requires sufficient Reactor Energy.",
            "vi": "Cần đủ Reactor Energy."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "passive",
        "name": "Thermal Rampage",
        "description": {
          "en": "Massively improves critical consistency during Quenched.",
          "vi": "Tăng mạnh độ ổn định bạo kích trong trạng thái Quenched."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "While Quenched, CRIT Rate increases by 35%.",
            "vi": "Khi Quenched, Tỷ lệ Bạo kích tăng 35%."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      }
    ]
  },
  "cynthia-ii": {
    "skills": [
      {
        "type": "basicAttack",
        "name": "Plushie Vassals",
        "description": {
          "en": "A three-hit Alba combo with rolling Charged Attacks that build Sweetness and pressure enemies.",
          "vi": "Chuỗi Alba 3 đòn với Charged Attack lăn, giúp tích Sweetness và gây áp lực lên kẻ địch."
        },
        "resource": {
          "en": "Charged actions increase Sweetness buildup.",
          "vi": "Các hành động tích lực tăng khả năng tích Sweetness."
        },
        "mechanics": [
          {
            "en": "Perfect Dodge can immediately trigger a jump attack; targets under Sweetness Overload are interrupted and take extra Alba damage.",
            "vi": "Perfect Dodge có thể lập tức tung đòn nhảy; mục tiêu đang Sweetness Overload bị ngắt và chịu thêm sát thương Alba."
          },
          {
            "en": "Hold Basic to roll forward; releasing during the roll triggers a jump attack.",
            "vi": "Giữ Đánh thường để lăn tiến; thả trong lúc lăn sẽ tung đòn nhảy."
          },
          {
            "en": "A Pursuit Attack is available while dashing.",
            "vi": "Có thể dùng Pursuit Attack khi đang Dash."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "skill",
        "name": "Sweet Slingshot",
        "description": {
          "en": "Consumes Sweetness to launch an AoE bomb; longer charging increases area and enables Sweetness Overload.",
          "vi": "Tiêu Sweetness để ném bom AoE; tích lực lâu hơn tăng phạm vi và kích hoạt Sweetness Overload."
        },
        "resource": {
          "en": "Maximum Sweetness: 100; regenerates over time.",
          "vi": "Tối đa 100 Sweetness; hồi dần theo thời gian."
        },
        "mechanics": [
          {
            "en": "Lv.1 creates a smaller explosion. Lv.2 creates a larger persistent AoE.",
            "vi": "Lv.1 tạo vụ nổ nhỏ hơn. Lv.2 tạo AoE lớn hơn và duy trì."
          },
          {
            "en": "Sweetness Overload increases damage taken by affected enemies by 10% for 40s.",
            "vi": "Sweetness Overload tăng 10% sát thương mục tiêu phải chịu trong 40 giây."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "ultimate",
        "name": "Crescent Compassion",
        "description": {
          "en": "Throws a crescent boomerang with the kitty knights, pulling enemies and dealing persistent Alba damage.",
          "vi": "Ném boomerang lưỡi liềm cùng các hiệp sĩ mèo, kéo kẻ địch và gây Alba liên tục."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "The persistent effect remains even after Cynthia II leaves the field.",
            "vi": "Hiệu ứng duy trì vẫn tồn tại sau khi Cynthia II rời sân."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "tacticalAssault",
        "name": "Cakeball's Present",
        "description": {
          "en": "A switch-in Alba attack that immediately contributes to her support rotation.",
          "vi": "Đòn Alba khi đổi vào sân, lập tức nối vào vòng hỗ trợ của cô."
        },
        "resource": "",
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "passive",
        "name": "Toast's Lament",
        "description": {
          "en": "Sir Toast periodically intercepts a hit that would have struck Cynthia II.",
          "vi": "Sir Toast định kỳ đỡ một đòn lẽ ra trúng Cynthia II."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "This protection can occur once every 10 seconds.",
            "vi": "Hiệu ứng bảo vệ có thể xảy ra mỗi 10 giây một lần."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      }
    ]
  },
  "red-rose": {
    "skills": [
      {
        "type": "basicAttack",
        "name": "Akimbo Overture",
        "description": {
          "en": "A five-hit Ignis sequence that generates Rose Petals and enables charged follow-ups.",
          "vi": "Chuỗi Ignis 5 đòn tạo Rose Petals và mở các đòn tích lực nối tiếp."
        },
        "resource": {
          "en": "Hit 3 grants 1 Rose Petal; hit 5 grants 2.",
          "vi": "Đòn 3 nhận 1 Rose Petal; đòn 5 nhận 2."
        },
        "mechanics": [
          {
            "en": "Perfect Dodge immediately triggers Charged Attack Lv.2 and interrupts enemies.",
            "vi": "Perfect Dodge lập tức kích hoạt Charged Attack Lv.2 và ngắt kẻ địch."
          },
          {
            "en": "Charged Attack Lv.2 grants 1 Rose Petal.",
            "vi": "Charged Attack Lv.2 nhận 1 Rose Petal."
          },
          {
            "en": "After Dodge or Dash, Basic performs a Pursuit Attack.",
            "vi": "Sau Dodge hoặc Dash, Đánh thường tung Pursuit Attack."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "skill",
        "name": "War of the Roses",
        "description": {
          "en": "Consumes a full Rose Petal stock to enter Bright Rhythm and prepare a major team CRIT DMG buff.",
          "vi": "Tiêu đầy Rose Petals để vào Bright Rhythm và chuẩn bị buff CRIT DMG lớn cho đội."
        },
        "resource": {
          "en": "Maximum Rose Petals: 6. Bright Rhythm lasts 8s.",
          "vi": "Tối đa 6 Rose Petals. Bright Rhythm kéo dài 8 giây."
        },
        "mechanics": [
          {
            "en": "During Bright Rhythm, hold Basic to perform a powerful attack and create 3 Rose Blooms.",
            "vi": "Trong Bright Rhythm, giữ Đánh thường để tung đòn mạnh và tạo 3 Rose Blooms."
          },
          {
            "en": "That attack grants the team +50% CRIT DMG for 40s and immediately ends Bright Rhythm.",
            "vi": "Đòn đó cho cả đội +50% CRIT DMG trong 40 giây và kết thúc Bright Rhythm ngay."
          },
          {
            "en": "Rose Blooms explode after 5s or when struck by an Ignis attack.",
            "vi": "Rose Blooms nổ sau 5 giây hoặc khi bị đòn Ignis đánh trúng."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "ultimate",
        "name": "Grand Finale",
        "description": {
          "en": "Unleashes a theatrical Ignis thorn attack and leaves a field of Rose Blooms for follow-up support.",
          "vi": "Tung đòn gai Ignis mang tính trình diễn và để lại Rose Blooms cho hỗ trợ nối tiếp."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "Creates 8 Rose Blooms after the Ultimate.",
            "vi": "Tạo 8 Rose Blooms sau Ultimate."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "tacticalAssault",
        "name": "Epic Debut",
        "description": {
          "en": "Switches in on a vine attack, dealing Ignis damage and immediately filling her Rose Petal resource.",
          "vi": "Đổi vào sân bằng đòn dây leo, gây Ignis và lập tức nạp Rose Petals."
        },
        "resource": {
          "en": "Grants 6 Rose Petals.",
          "vi": "Nhận 6 Rose Petals."
        },
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "passive",
        "name": "Onstage Preparation",
        "description": {
          "en": "Turns Rose Bloom explosions into a long-duration Ignis team buff.",
          "vi": "Biến vụ nổ Rose Bloom thành buff Ignis dài cho toàn đội."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "Each Rose Bloom explosion grants the team +3% Ignis DMG for 40s, stacking up to 5 times.",
            "vi": "Mỗi Rose Bloom nổ cho đội +3% Ignis DMG trong 40 giây, cộng dồn tối đa 5 lần."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      }
    ]
  },
  "rex": {
    "skills": [
      {
        "type": "basicAttack",
        "name": "Composite Club",
        "description": {
          "en": "A four-hit Fulmen truncheon combo that generates Rage and changes after Adaptive Rule.",
          "vi": "Chuỗi côn Fulmen 4 đòn tạo Rage và thay đổi sau Adaptive Rule."
        },
        "resource": {
          "en": "Hits grant 4 / 12 / 14 / 20 Rage. Maximum Rage: 120; Rage also regenerates over time.",
          "vi": "Các đòn nhận 4 / 12 / 14 / 20 Rage. Tối đa 120 Rage; Rage còn hồi dần theo thời gian."
        },
        "mechanics": [
          {
            "en": "Parry does not break the Basic Attack combo.",
            "vi": "Parry không làm đứt chuỗi Đánh thường."
          },
          {
            "en": "Perfect Dodge counter grants 10 Rage and chains into hit 3.",
            "vi": "Perfect Dodge Counter nhận 10 Rage và nối vào đòn 3."
          },
          {
            "en": "After Dual Truncheons, Basic becomes a two-hit Signature Move; each hit grants 15 Rage and reduces incoming damage by 20% during the move.",
            "vi": "Sau Dual Truncheons, Đánh thường thành Signature Move 2 đòn; mỗi đòn nhận 15 Rage và giảm 20% sát thương nhận vào trong lúc ra đòn."
          },
          {
            "en": "Holding Basic after Dual Truncheons performs a Charged Signature Move, grants 20 Rage and reduces incoming damage by 20%.",
            "vi": "Giữ Đánh thường sau Dual Truncheons tung Charged Signature Move, nhận 20 Rage và giảm 20% sát thương nhận vào."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "skill",
        "name": "Adaptive Rule",
        "description": {
          "en": "Cycles Rex through multiple Composite Club forms by spending Rage and building Volt Charge.",
          "vi": "Luân chuyển nhiều dạng Composite Club bằng cách tiêu Rage và tích Volt Charge."
        },
        "resource": {
          "en": "Dual Truncheons and Extended Truncheon each consume 60 Rage and grant 1 Volt Charge.",
          "vi": "Dual Truncheons và Extended Truncheon mỗi lần tiêu 60 Rage và nhận 1 Volt Charge."
        },
        "mechanics": [
          {
            "en": "Dual Truncheons grants damage immunity during activation and can link into Signature Moves, Charged Signature, or another Skill.",
            "vi": "Dual Truncheons cho miễn nhiễm sát thương khi kích hoạt và có thể nối Signature Move, Charged Signature hoặc Skill tiếp."
          },
          {
            "en": "Extended Truncheon follows Dual Truncheons with a flurry, also grants immunity, and can chain into Basic hit 4.",
            "vi": "Extended Truncheon nối sau Dual Truncheons bằng chuỗi đánh, cũng cho miễn nhiễm và có thể nối vào đòn thường 4."
          },
          {
            "en": "At full Volt Charge, Nunchucks Law unleashes a storm of attacks and lightning.",
            "vi": "Khi Volt Charge đầy, Nunchucks Law tung bão đòn đánh và sét."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "ultimate",
        "name": "Thunderous Judgement",
        "description": {
          "en": "Calls Rex’s police dogs before delivering a major Fulmen lightning strike.",
          "vi": "Triệu hồi chó nghiệp vụ rồi tung đòn sét Fulmen lớn."
        },
        "resource": {
          "en": "Grants 120 Rage.",
          "vi": "Nhận 120 Rage."
        },
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "tacticalAssault",
        "name": "Exemplar Enforcer",
        "description": {
          "en": "A switch-in attack that calls down Fulmen truncheon strikes together with the police dogs.",
          "vi": "Đòn đổi vào sân gọi các cú đánh côn Fulmen cùng chó nghiệp vụ."
        },
        "resource": "",
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "passive",
        "name": "Righteous Spirit",
        "description": {
          "en": "Signature Move hits build a temporary ATK buff and Fulmen Resonance gains extra hits.",
          "vi": "Các đòn Signature Move tích buff ATK tạm thời và Fulmen Resonance nhận thêm hit."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "Signature Move damage grants +7% ATK for 16s, stacking up to 4 times; new stacks refresh duration.",
            "vi": "Sát thương Signature Move cho +7% ATK trong 16 giây, cộng dồn tối đa 4; cộng dồn mới làm mới thời gian."
          },
          {
            "en": "Fulmen Resonance effects deal 2 additional instances of Fulmen damage.",
            "vi": "Hiệu ứng Fulmen Resonance gây thêm 2 lần sát thương Fulmen."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      }
    ]
  },
  "bentham": {
    "skills": [
      {
        "type": "basicAttack",
        "name": "Hidden Blade",
        "description": {
          "en": "A four-hit Glacies whip-and-blade combo built around Funds, Liquid Assets, and Contractual Circle.",
          "vi": "Chuỗi Glacies 4 đòn bằng roi/lưỡi dao xoay quanh Funds, Liquid Assets và Contractual Circle."
        },
        "resource": {
          "en": "Hits grant 1.5 / 3.2 / 6 / 10 Funds. Maximum Funds: 80; Funds also regenerate over time. Maximum Liquid Assets: 6.",
          "vi": "Các đòn nhận 1,5 / 3,2 / 6 / 10 Funds. Tối đa 80 Funds và hồi dần theo thời gian. Tối đa 6 Liquid Assets."
        },
        "mechanics": [
          {
            "en": "Parry can route into Basic hit 2; Perfect Dodge performs a heavy counter, grants 4 Funds and chains into hit 3.",
            "vi": "Parry có thể nối vào đòn thường 2; Perfect Dodge tung phản đòn nặng, nhận 4 Funds và nối vào đòn 3."
          },
          {
            "en": "Hold Dodge or Basic to draw a Contractual Circle.",
            "vi": "Giữ Dodge hoặc Đánh thường để vẽ Contractual Circle."
          },
          {
            "en": "Inside the circle, holding Basic performs a multi-hit Signature Move. Each hit grants Funds and can consume Liquid Assets for bonus damage.",
            "vi": "Trong vòng tròn, giữ Đánh thường tung Signature Move nhiều hit. Mỗi hit nhận Funds và có thể tiêu Liquid Assets để tăng sát thương."
          },
          {
            "en": "Sequentially consuming 6 Liquid Assets triggers an additional attack.",
            "vi": "Tiêu liên tiếp đủ 6 Liquid Assets sẽ kích hoạt đòn bổ sung."
          },
          {
            "en": "Inside the circle, parry can become a multi-hit Signature counter that consumes Liquid Assets and negates incoming damage.",
            "vi": "Trong vòng tròn, parry có thể thành Signature counter nhiều hit, tiêu Liquid Assets và vô hiệu sát thương nhận vào."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "skill",
        "name": "Spot Check",
        "description": {
          "en": "Spends Funds to dash through enemies and converts the action into Liquid Assets for Contractual Circle attacks.",
          "vi": "Tiêu Funds để lướt qua kẻ địch và chuyển hành động thành Liquid Assets cho các đòn trong Contractual Circle."
        },
        "resource": {
          "en": "Consumes 40 Funds and grants 2 Liquid Assets. If another 40 Funds remain, Skill can be pressed again for a follow-up and 2 more Liquid Assets.",
          "vi": "Tiêu 40 Funds và nhận 2 Liquid Assets. Nếu còn thêm 40 Funds, có thể bấm Skill lần nữa để đánh nối và nhận thêm 2 Liquid Assets."
        },
        "mechanics": [
          {
            "en": "The sequence can chain into Basic hit 3.",
            "vi": "Chuỗi có thể nối vào đòn thường 3."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "ultimate",
        "name": "Unflinching Order",
        "description": {
          "en": "Calls security personnel for a coordinated barrage that deals Glacies damage.",
          "vi": "Gọi lực lượng an ninh phối hợp tấn công, gây sát thương Glacies."
        },
        "resource": "",
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "tacticalAssault",
        "name": "Emergency Meeting",
        "description": {
          "en": "Switches in with a fast blade flurry that deals Glacies damage.",
          "vi": "Đổi vào sân bằng chuỗi lưỡi dao nhanh gây Glacies."
        },
        "resource": "",
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "passive",
        "name": "Set Schedule",
        "description": {
          "en": "Creates a short Amplitude Multiplier window from Bentham’s Tactical Assault and Skill, while Glacies Resonance gains additional hits.",
          "vi": "Tạo cửa sổ Amplitude Multiplier ngắn từ Tactical Assault và Skill của Bentham, đồng thời Glacies Resonance nhận thêm hit."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "Current CBT2 transcription lists a 6s Amplitude Multiplier window, but its +40% / +10% / maximum wording is internally inconsistent; the archive does not assert the disputed cap yet.",
            "vi": "Bản chép CBT2 hiện ghi cửa sổ Amplitude Multiplier 6 giây, nhưng cách ghi +40% / +10% / giới hạn tối đa mâu thuẫn nội bộ; kho dữ liệu chưa khẳng định con số trần gây tranh cãi."
          },
          {
            "en": "Glacies Resonance effects deal 2 additional instances of Glacies damage.",
            "vi": "Hiệu ứng Glacies Resonance gây thêm 2 lần sát thương Glacies."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      }
    ]
  },
  "grimm": {
    "skills": [
      {
        "type": "basicAttack",
        "name": "Compact Handgun",
        "description": {
          "en": "A five-hit Fulmen handgun combo that charges Camera Battery and marks enemies as News Targets.",
          "vi": "Chuỗi súng Fulmen 5 đòn nạp Camera Battery và đánh dấu kẻ địch thành News Target."
        },
        "resource": {
          "en": "Hits grant 2 / 2 / 2 / 5 / 5 Camera Battery. Maximum Camera Battery: 40; regenerates over time.",
          "vi": "Các đòn nhận 2 / 2 / 2 / 5 / 5 Camera Battery. Tối đa 40 Camera Battery; hồi dần theo thời gian."
        },
        "mechanics": [
          {
            "en": "Hit 5 applies News Target. Opening Move and Perfect Dodge can route directly to hit 5; Perfect Dodge also interrupts.",
            "vi": "Đòn 5 áp dụng News Target. Opening Move và Perfect Dodge có thể nối thẳng vào đòn 5; Perfect Dodge còn ngắt kẻ địch."
          },
          {
            "en": "Parry can route into Basic hit 3.",
            "vi": "Parry có thể nối vào đòn thường 3."
          },
          {
            "en": "Charged Attack Lv.1 grants 5 Battery; Lv.2 grants 6 and applies News Target.",
            "vi": "Charged Attack Lv.1 nhận 5 Battery; Lv.2 nhận 6 và áp dụng News Target."
          },
          {
            "en": "Pursuit Attack grants 2 Battery.",
            "vi": "Pursuit Attack nhận 2 Battery."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "skill",
        "name": "Photographic Proof",
        "description": {
          "en": "Spends Camera Battery to photograph enemies and apply Fulmen resistance debuffs.",
          "vi": "Tiêu Camera Battery để chụp kẻ địch và áp dụng debuff kháng Fulmen."
        },
        "resource": {
          "en": "At full Battery, tap consumes 20 for rapid photos; hold/release consumes all Battery for the stronger evidence shot.",
          "vi": "Khi Battery đầy, bấm nhanh tiêu 20 để chụp liên tục; giữ/thả tiêu toàn bộ Battery cho phát Evidence mạnh hơn."
        },
        "mechanics": [
          {
            "en": "The aimed shot applies Photo Evidence for 15s; if the target is a News Target it instead applies Full Exposé for 15s.",
            "vi": "Phát ngắm áp dụng Photo Evidence trong 15 giây; nếu mục tiêu là News Target thì thay bằng Full Exposé trong 15 giây."
          },
          {
            "en": "Photo Evidence reduces Fulmen RES by 5%; Full Exposé reduces Fulmen RES by 15%.",
            "vi": "Photo Evidence giảm 5% Fulmen RES; Full Exposé giảm 15% Fulmen RES."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "ultimate",
        "name": "Airborne Scoop",
        "description": {
          "en": "Takes a dramatic snapshot that deals Fulmen damage and extends Grimm’s evidence debuffs.",
          "vi": "Chụp ảnh trên không gây Fulmen và kéo dài các debuff Evidence của Grimm."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "Refreshes Photo Evidence or Full Exposé duration to 40s.",
            "vi": "Làm mới thời gian Photo Evidence hoặc Full Exposé thành 40 giây."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "tacticalAssault",
        "name": "Undercover Inquiry",
        "description": {
          "en": "Switches in with a camera-based move; being attacked during it triggers a counter and rapidly charges the camera.",
          "vi": "Đổi vào sân bằng động tác máy ảnh; nếu bị tấn công trong lúc đó sẽ phản đòn và nạp nhanh máy ảnh."
        },
        "resource": {
          "en": "The counter grants 40 Camera Battery.",
          "vi": "Phản đòn nhận 40 Camera Battery."
        },
        "mechanics": [
          {
            "en": "The counter can interrupt the attacking enemy.",
            "vi": "Phản đòn có thể ngắt kẻ địch đang tấn công."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "passive",
        "name": "Live Recording",
        "description": {
          "en": "Converts a successful Full Exposé application into a long team Fulmen damage buff.",
          "vi": "Chuyển việc áp dụng Full Exposé thành buff Fulmen dài cho đội."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "Applying Full Exposé with Skill grants the team +5% Fulmen DMG for 40s.",
            "vi": "Áp dụng Full Exposé bằng Skill cho đội +5% Fulmen DMG trong 40 giây."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      }
    ]
  },
  "captain-kaboom": {
    "skills": [
      {
        "type": "basicAttack",
        "name": "Maintenance Calliper",
        "description": {
          "en": "A four-hit Radiatio wrench combo that builds Pressure for Charged Coup de Grâce attacks.",
          "vi": "Chuỗi cờ lê Radiatio 4 đòn tích Pressure cho Charged Coup de Grâce."
        },
        "resource": {
          "en": "Hits grant 5 / 10 / 10 / 40 Pressure. Maximum Pressure: 90.",
          "vi": "Các đòn nhận 5 / 10 / 10 / 40 Pressure. Tối đa 90 Pressure."
        },
        "mechanics": [
          {
            "en": "Perfect Dodge immediately performs Charged Coup de Grâce Lv.2 and interrupts enemies.",
            "vi": "Perfect Dodge lập tức tung Charged Coup de Grâce Lv.2 và ngắt kẻ địch."
          },
          {
            "en": "Parry can route into Basic hit 3.",
            "vi": "Parry có thể nối vào đòn thường 3."
          },
          {
            "en": "Below 30 Pressure, Charged Attack is a heavy strike that grants 5 Pressure.",
            "vi": "Dưới 30 Pressure, Charged Attack là đòn nặng nhận 5 Pressure."
          },
          {
            "en": "Above 30 Pressure, holding Basic consumes Pressure in 30-point steps for Charged Coup de Grâce Lv.1–3; during the spin, incoming damage is reduced by 50%.",
            "vi": "Trên 30 Pressure, giữ Đánh thường tiêu Pressure theo từng mốc 30 để dùng Charged Coup de Grâce Lv.1–3; khi xoay giảm 50% sát thương nhận vào."
          },
          {
            "en": "Pursuit Attack grants 5 Pressure.",
            "vi": "Pursuit Attack nhận 5 Pressure."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "skill",
        "name": "Captain's Ambush",
        "description": {
          "en": "At full Maximum Current, spends the resource to launch a balloon-based Radiatio attack and refill Pressure.",
          "vi": "Khi Maximum Current đầy, tiêu tài nguyên để tung đòn bóng bay Radiatio và nạp Pressure."
        },
        "resource": {
          "en": "Maximum Current: 60 and regenerates over time. Consuming it grants 45 Pressure.",
          "vi": "Tối đa 60 Maximum Current và hồi dần theo thời gian. Tiêu hết sẽ nhận 45 Pressure."
        },
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "ultimate",
        "name": "Explosive Bear",
        "description": {
          "en": "Deploys a clockwork bear that detonates for a large Radiatio explosion.",
          "vi": "Triển khai gấu máy rồi phát nổ gây Radiatio diện rộng."
        },
        "resource": "",
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "tacticalAssault",
        "name": "Maintenance Support",
        "description": {
          "en": "Switches in by balloon; the balloon explodes and deals Radiatio damage.",
          "vi": "Đổi vào sân bằng bóng bay; bóng phát nổ gây sát thương Radiatio."
        },
        "resource": "",
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "passive",
        "name": "Repair Toolbox",
        "description": {
          "en": "Rewards Pressure expenditure with a short ATK buff.",
          "vi": "Thưởng việc tiêu Pressure bằng buff ATK ngắn."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "Each time Pressure is consumed, ATK increases by 15% for 4s, stacking up to 2 times.",
            "vi": "Mỗi lần tiêu Pressure, ATK tăng 15% trong 4 giây, cộng dồn tối đa 2 lần."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      }
    ]
  },
  "firtho": {
    "skills": [
      {
        "type": "basicAttack",
        "name": "Amputation Saw",
        "description": {
          "en": "A four-hit Radiatio saw combo with two Charged Attack levels and a Perfect Dodge conversion.",
          "vi": "Chuỗi cưa Radiatio 4 đòn với 2 cấp Charged Attack và chuyển đổi từ Perfect Dodge."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "Perfect Dodge immediately performs Charged Attack Lv.2 and can interrupt enemies.",
            "vi": "Perfect Dodge lập tức tung Charged Attack Lv.2 và có thể ngắt kẻ địch."
          },
          {
            "en": "Charged Attack has Lv.1 and Lv.2 versions.",
            "vi": "Charged Attack có phiên bản Lv.1 và Lv.2."
          },
          {
            "en": "After Dodge or Dash, Basic performs a Pursuit Attack.",
            "vi": "Sau Dodge hoặc Dash, Đánh thường tung Pursuit Attack."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "skill",
        "name": "Second Heart",
        "description": {
          "en": "Uses Special Serum and Firtho’s own HP to combine Radiatio damage, healing, and a stacking team ATK buff.",
          "vi": "Dùng Special Serum và chính HP của Firtho để kết hợp sát thương Radiatio, hồi máu và buff ATK cộng dồn cho đội."
        },
        "resource": {
          "en": "Tap consumes 2.5 Special Serum. Hold consumes 10 and repeatedly drains Firtho’s HP. Maximum Special Serum: 10; regenerates over time.",
          "vi": "Bấm nhanh tiêu 2,5 Special Serum. Giữ tiêu 10 và liên tục rút HP của Firtho. Tối đa 10 Special Serum; hồi dần theo thời gian."
        },
        "mechanics": [
          {
            "en": "Releasing the held Skill attacks and grants the team +1.5% ATK per stack, up to 8 stacks, lasting 40s.",
            "vi": "Thả Skill sau khi giữ sẽ tấn công và cho đội +1,5% ATK mỗi tầng, tối đa 8 tầng, kéo dài 40 giây."
          },
          {
            "en": "While holding, the team is healed over time; teammates other than Firtho also receive an immediate heal.",
            "vi": "Trong lúc giữ, cả đội được hồi máu theo thời gian; đồng đội ngoài Firtho còn nhận một lần hồi ngay."
          },
          {
            "en": "Parrying while holding and losing HP can immediately trigger the fully charged Skill, consuming all Serum.",
            "vi": "Parry trong lúc đang giữ và mất HP có thể lập tức kích hoạt Skill tích lực đầy, tiêu toàn bộ Serum."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "ultimate",
        "name": "Visage of Death",
        "description": {
          "en": "A heavy amputation-saw finisher that deals Radiatio damage.",
          "vi": "Đòn kết liễu bằng cưa phẫu thuật gây sát thương Radiatio mạnh."
        },
        "resource": "",
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "tacticalAssault",
        "name": "Law of Exchange",
        "description": {
          "en": "A switch-in Radiatio attack powered by Reactor Energy.",
          "vi": "Đòn Radiatio khi đổi vào sân bằng Reactor Energy."
        },
        "resource": "",
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "passive",
        "name": "Pain Management",
        "description": {
          "en": "Adds teamwide mitigation while Second Heart’s buff is active.",
          "vi": "Thêm giảm sát thương cho toàn đội khi buff của Second Heart đang hoạt động."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "While the Second Heart buff is active, team damage taken is reduced by 20%.",
            "vi": "Khi buff Second Heart hoạt động, sát thương cả đội phải chịu giảm 20%."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      }
    ]
  },
  "gucia": {
    "skills": [
      {
        "type": "basicAttack",
        "name": "Specimen Extraction Light",
        "description": {
          "en": "A four-hit Alba lantern combo and charged sequence that rapidly builds Erudition.",
          "vi": "Chuỗi đèn lồng Alba 4 đòn và các đòn tích lực giúp tích Erudition rất nhanh."
        },
        "resource": {
          "en": "Basic hits grant 10 / 20 / 10 / 20 Erudition. Charged Lv.1 grants 5; Lv.2 grants 60.",
          "vi": "Các đòn thường nhận 10 / 20 / 10 / 20 Erudition. Charged Lv.1 nhận 5; Lv.2 nhận 60."
        },
        "mechanics": [
          {
            "en": "Before Basic hit 4 ends, pressing Skill, Parry, or Dodge grants 40 Erudition.",
            "vi": "Trước khi đòn thường 4 kết thúc, bấm Skill, Parry hoặc Dodge nhận 40 Erudition."
          },
          {
            "en": "Perfect Dodge immediately triggers Charged Attack Lv.2 and can interrupt enemies.",
            "vi": "Perfect Dodge lập tức kích hoạt Charged Attack Lv.2 và có thể ngắt kẻ địch."
          },
          {
            "en": "Before Charged Attack Lv.2 ends, pressing Skill, Parry, or Dodge grants another 40 Erudition.",
            "vi": "Trước khi Charged Attack Lv.2 kết thúc, bấm Skill, Parry hoặc Dodge nhận thêm 40 Erudition."
          },
          {
            "en": "After Dodge or during Dash, Basic performs a Pursuit Attack.",
            "vi": "Sau Dodge hoặc khi Dash, Đánh thường tung Pursuit Attack."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "skill",
        "name": "Seek the Supernatural",
        "description": {
          "en": "Charges the lantern for up to 2 seconds, then spends all Erudition; higher thresholds produce stronger firefly attacks and Alba RES reduction.",
          "vi": "Tích lực đèn lồng tối đa 2 giây rồi tiêu toàn bộ Erudition; mốc cao hơn tạo firefly mạnh hơn và giảm Alba RES."
        },
        "resource": {
          "en": "Maximum Erudition: 300. Holding Skill can generate up to 120 Erudition before release.",
          "vi": "Tối đa 300 Erudition. Giữ Skill có thể tạo tối đa 120 Erudition trước khi thả."
        },
        "mechanics": [
          {
            "en": "Below 100 Erudition, releases the basic lantern attack.",
            "vi": "Dưới 100 Erudition, tung đòn đèn lồng cơ bản."
          },
          {
            "en": "At the middle threshold, summons a small firefly and reduces enemy Alba RES by 5% for 40s.",
            "vi": "Ở mốc giữa, triệu hồi firefly nhỏ và giảm 5% Alba RES của kẻ địch trong 40 giây."
          },
          {
            "en": "At 300 Erudition, summons a large firefly and reduces enemy Alba RES by 10% for 40s.",
            "vi": "Ở 300 Erudition, triệu hồi firefly lớn và giảm 10% Alba RES của kẻ địch trong 40 giây."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "ultimate",
        "name": "Unknown Species Detected",
        "description": {
          "en": "Unleashes a large Alba attack and grants a long team Amplitude Coefficient buff.",
          "vi": "Tung đòn Alba lớn và cho đội buff Amplitude Coefficient dài."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "Team Amplitude Coefficient increases by 10% for 40s.",
            "vi": "Amplitude Coefficient của đội tăng 10% trong 40 giây."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "tacticalAssault",
        "name": "Inter-Disciplinary",
        "description": {
          "en": "Switches in with an Alba lantern flurry and gives Gucia a large Erudition injection.",
          "vi": "Đổi vào sân bằng chuỗi đèn lồng Alba và nạp lượng lớn Erudition."
        },
        "resource": {
          "en": "Grants 140 Erudition; pressing Skill, Parry, or Dodge during the sequence grants another 40.",
          "vi": "Nhận 140 Erudition; bấm Skill, Parry hoặc Dodge trong chuỗi nhận thêm 40."
        },
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "passive",
        "name": "Academite",
        "description": {
          "en": "Stores Illumination and spends it to improve the next teammate’s Tactical Assault window.",
          "vi": "Tích Illumination rồi tiêu để cường hóa cửa sổ Tactical Assault của đồng đội tiếp theo."
        },
        "resource": {
          "en": "Skill or Tactical Assault grants 1 Illumination. Maximum: 2.",
          "vi": "Skill hoặc Tactical Assault nhận 1 Illumination. Tối đa 2."
        },
        "mechanics": [
          {
            "en": "While Gucia is off-field, another character’s Tactical Assault consumes 1 Illumination and grants that character +10% Amplitude Coefficient for 16s; the buff ends if they leave the field.",
            "vi": "Khi Gucia ở ngoài sân, Tactical Assault của nhân vật khác tiêu 1 Illumination và cho nhân vật đó +10% Amplitude Coefficient trong 16 giây; buff mất khi họ rời sân."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      }
    ]
  },
  "lorin": {
    "skills": [
      {
        "type": "basicAttack",
        "name": "Reflex Fist",
        "description": {
          "en": "A five-hit Fulmen boxing combo built around Street Smarts and Lorin’s Sway movement technique.",
          "vi": "Chuỗi quyền Fulmen 5 đòn xoay quanh Street Smarts và kỹ thuật di chuyển Sway."
        },
        "resource": {
          "en": "Hits grant 5 / 5 / 20 / 10 / 20 Street Smarts.",
          "vi": "Các đòn nhận 5 / 5 / 20 / 10 / 20 Street Smarts."
        },
        "mechanics": [
          {
            "en": "Using Sway before an attack ends can route Lorin back into different parts of his combo based on the originating move.",
            "vi": "Dùng Sway trước khi đòn kết thúc có thể đưa Lorin trở lại các đoạn khác nhau của chuỗi tùy đòn xuất phát."
          },
          {
            "en": "Perfect Dodge through Sway grants Street Smarts; current transcription contains inconsistent values, so the archive does not publish a single exact amount here.",
            "vi": "Perfect Dodge bằng Sway nhận Street Smarts; bản chép hiện có con số mâu thuẫn nên kho dữ liệu chưa công bố một giá trị chính xác duy nhất."
          },
          {
            "en": "A normal Perfect Dodge can immediately trigger Charged Attack Lv.2 and interrupt enemies.",
            "vi": "Perfect Dodge thông thường có thể lập tức kích hoạt Charged Attack Lv.2 và ngắt kẻ địch."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "skill",
        "name": "Strategic Retreat",
        "description": {
          "en": "At full Street Smarts, consumes the resource for a powerful Fulmen uppercut.",
          "vi": "Khi Street Smarts đầy, tiêu toàn bộ để tung uppercut Fulmen mạnh."
        },
        "resource": {
          "en": "Maximum Street Smarts: 80; regenerates over time.",
          "vi": "Tối đa 80 Street Smarts; hồi dần theo thời gian."
        },
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "ultimate",
        "name": "Non-Lethal Current",
        "description": {
          "en": "Slams electrified gloves into the ground for a large Fulmen area attack.",
          "vi": "Nện găng điện xuống đất tạo đòn Fulmen diện rộng mạnh."
        },
        "resource": "",
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "tacticalAssault",
        "name": "Conflict Interception",
        "description": {
          "en": "Switches in with a charged punch and immediately restores Lorin’s core resource.",
          "vi": "Đổi vào sân bằng cú đấm tích lực và lập tức hồi tài nguyên cốt lõi của Lorin."
        },
        "resource": {
          "en": "Fully restores Street Smarts.",
          "vi": "Hồi đầy Street Smarts."
        },
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "passive",
        "name": "Judgemental Intuition",
        "description": {
          "en": "Strategic Retreat opens a short Basic Attack damage window.",
          "vi": "Strategic Retreat mở cửa sổ tăng sát thương Đánh thường ngắn."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "After Strategic Retreat, Basic Attack DMG increases by 40% for 5s; triggering it again refreshes duration.",
            "vi": "Sau Strategic Retreat, sát thương Đánh thường tăng 40% trong 5 giây; kích hoạt lại sẽ làm mới thời gian."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      }
    ]
  },
  "gratia": {
    "skills": [
      {
        "type": "basicAttack",
        "name": "Blunted Blade",
        "description": {
          "en": "A five-hit Glacies sword-and-shield combo that builds Muscle Memory and supports a unique hold-parry shield stance.",
          "vi": "Chuỗi kiếm-khiên Glacies 5 đòn tích Muscle Memory và hỗ trợ tư thế giữ parry đặc biệt."
        },
        "resource": {
          "en": "Basic hits 4 and 5 rapidly build Muscle Memory. Special Block builds Stalwart Fury while consuming Stamina.",
          "vi": "Đòn thường 4 và 5 nhanh chóng tích Muscle Memory. Special Block tích Stalwart Fury trong khi tiêu Stamina."
        },
        "mechanics": [
          {
            "en": "Perfect Dodge routes directly into Basic hit 4; parry routes into hit 3.",
            "vi": "Perfect Dodge nối thẳng vào đòn thường 4; parry nối vào đòn 3."
          },
          {
            "en": "Charged Attack has Lv.1 slash and Lv.2 shield-slam versions; before Lv.2 ends, Basic can route into hit 4.",
            "vi": "Charged Attack có Lv.1 chém và Lv.2 nện khiên; trước khi Lv.2 kết thúc, Đánh thường có thể nối vào đòn 4."
          },
          {
            "en": "Hold Parry to raise the shield, reducing incoming damage by 50% while building Stalwart Fury. Taking hits accelerates Fury gain.",
            "vi": "Giữ Parry để giơ khiên, giảm 50% sát thương nhận vào và tích Stalwart Fury. Bị đánh sẽ tăng tốc tích Fury."
          },
          {
            "en": "At full Stalwart Fury, releasing Special Block performs Shield Rush and can interrupt enemies.",
            "vi": "Khi Stalwart Fury đầy, thả Special Block tung Shield Rush và có thể ngắt kẻ địch."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "skill",
        "name": "Flowing Shield",
        "description": {
          "en": "Consumes all Muscle Memory to slam the ground and grant the whole team a large temporary shield.",
          "vi": "Tiêu toàn bộ Muscle Memory để nện đất và cho cả đội khiên lớn tạm thời."
        },
        "resource": {
          "en": "Maximum Muscle Memory: 100; regenerates over time.",
          "vi": "Tối đa 100 Muscle Memory; hồi dần theo thời gian."
        },
        "mechanics": [
          {
            "en": "The team shield equals 40% of Gratia’s Max HP and lasts 20s.",
            "vi": "Khiên toàn đội bằng 40% HP tối đa của Gratia và kéo dài 20 giây."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "ultimate",
        "name": "Spear of Glory",
        "description": {
          "en": "Creates a spiraling Glacies spear that deals continuous damage before a delayed explosion.",
          "vi": "Tạo giáo Glacies xoáy gây sát thương liên tục trước khi phát nổ trễ."
        },
        "resource": "",
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "tacticalAssault",
        "name": "Severe Deterrent",
        "description": {
          "en": "Switches in with a Glacies attack; enemies that attack during the action are countered and interrupted.",
          "vi": "Đổi vào sân bằng đòn Glacies; kẻ địch tấn công trong lúc đó sẽ bị phản đòn và ngắt."
        },
        "resource": "",
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "passive",
        "name": "Silverium Blessing",
        "description": {
          "en": "Converts Glacies Resonance into a long ATK buff for the rest of the team.",
          "vi": "Chuyển Glacies Resonance thành buff ATK dài cho các đồng đội còn lại."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "Triggering a Glacies Resonance Effect grants all other teammates +12% ATK for 40s.",
            "vi": "Kích hoạt Glacies Resonance cho tất cả đồng đội khác +12% ATK trong 40 giây."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      }
    ]
  },
  "argos": {
    "skills": [
      {
        "type": "basicAttack",
        "name": "Cane and Spirits",
        "description": {
          "en": "A four-hit Glacies cane-gun combo whose unsheathe attacks become stronger during Piercing Gaze.",
          "vi": "Chuỗi gậy-súng Glacies 4 đòn với các đòn rút vũ khí mạnh hơn trong Piercing Gaze."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "During Piercing Gaze, Basic hit 4 automatically becomes an unsheathe attack.",
            "vi": "Trong Piercing Gaze, đòn thường 4 tự biến thành unsheathe attack."
          },
          {
            "en": "During Piercing Gaze, Basic immediately after parry performs an unsheathe attack.",
            "vi": "Trong Piercing Gaze, bấm Đánh thường ngay sau parry sẽ tung unsheathe attack."
          },
          {
            "en": "Charged Attack Lv.1 is an upward unsheathe strike with an invulnerability window; evading an attack during it allows Basic to route into Lv.2.",
            "vi": "Charged Attack Lv.1 là cú rút vũ khí hướng lên có cửa sổ bất tử; né được đòn trong lúc đó cho phép Đánh thường nối vào Lv.2."
          },
          {
            "en": "Charged Attack Lv.2 performs three unsheathe strikes; hitting during Piercing Gaze grants the team +10% DMG for 40s.",
            "vi": "Charged Attack Lv.2 tung 3 cú unsheathe; trúng trong Piercing Gaze cho đội +10% DMG trong 40 giây."
          },
          {
            "en": "Perfect Dodge can immediately trigger Charged Attack Lv.2.",
            "vi": "Perfect Dodge có thể lập tức kích hoạt Charged Attack Lv.2."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "skill",
        "name": "Celebratory Champagne",
        "description": {
          "en": "Consumes Confession to fire the Cane Gun and enter Piercing Gaze, enabling Argos’s stronger support attacks.",
          "vi": "Tiêu Confession để bắn Cane Gun và vào Piercing Gaze, mở các đòn hỗ trợ mạnh hơn của Argos."
        },
        "resource": {
          "en": "Maximum Confession: 12; regenerates over time. Piercing Gaze lasts 10s.",
          "vi": "Tối đa 12 Confession; hồi dần theo thời gian. Piercing Gaze kéo dài 10 giây."
        },
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "ultimate",
        "name": "The Eye of Argos",
        "description": {
          "en": "Creates an All-Seeing Domain that continuously deals Glacies damage to enemies inside.",
          "vi": "Tạo All-Seeing Domain gây sát thương Glacies liên tục lên kẻ địch bên trong."
        },
        "resource": {
          "en": "Domain duration: 6s.",
          "vi": "Thời gian Domain: 6 giây."
        },
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "tacticalAssault",
        "name": "Screwdriver",
        "description": {
          "en": "Switches in from range with a charging approach followed by a cane-gun unsheathe strike.",
          "vi": "Đổi vào sân từ xa bằng cú lao tới rồi rút gậy-súng tấn công."
        },
        "resource": "",
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "passive",
        "name": "Bartending Insight",
        "description": {
          "en": "After Ultimate, Argos grants the team an ATK buff with additional scaling from his Max HP.",
          "vi": "Sau Ultimate, Argos cho đội buff ATK có thêm scaling theo HP tối đa của anh."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "The team ATK buff lasts 40s.",
            "vi": "Buff ATK toàn đội kéo dài 40 giây."
          },
          {
            "en": "The current CBT2 transcription of the exact HP-scaling numbers is ambiguous, so this archive records the HP-scaling relationship without publishing the disputed exact formula.",
            "vi": "Bản chép CBT2 hiện có con số scaling HP chưa rõ ràng, nên kho dữ liệu chỉ ghi nhận quan hệ scaling theo HP mà chưa công bố công thức chính xác gây tranh cãi."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      }
    ]
  },
  "alf": {
    "skills": [
      {
        "type": "basicAttack",
        "name": "Novice Shotgun",
        "description": {
          "en": "A three-hit Ignis shotgun combo that consumes Reserve Ammo and can convert an empty magazine into a forward reload charge.",
          "vi": "Chuỗi shotgun Ignis 3 đòn tiêu Reserve Ammo và có thể biến băng đạn trống thành cú lao nạp đạn."
        },
        "resource": {
          "en": "Basic hit 3 consumes 1 Reserve Ammo. If none is available, it becomes a forward charge and grants 3 Reserve Ammo.",
          "vi": "Đòn thường 3 tiêu 1 Reserve Ammo. Nếu hết đạn, nó thành cú lao tới và nhận 3 Reserve Ammo."
        },
        "mechanics": [
          {
            "en": "Charged Attack consumes all Reserve Ammo, steps onto the enemy and fires from the air; each ammo consumed increases bullet damage by 40%.",
            "vi": "Charged Attack tiêu toàn bộ Reserve Ammo, giẫm lên kẻ địch rồi bắn trên không; mỗi viên tiêu hao tăng 40% sát thương đạn."
          },
          {
            "en": "If no Reserve Ammo is available, Charged Attack instead reloads 3 Reserve Ammo through the forward charge.",
            "vi": "Nếu không còn Reserve Ammo, Charged Attack thay bằng cú lao nạp 3 Reserve Ammo."
          },
          {
            "en": "After Dodge or Dash, Basic performs a Pursuit Attack.",
            "vi": "Sau Dodge hoặc Dash, Đánh thường tung Pursuit Attack."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "skill",
        "name": "Zeroth Shell",
        "description": {
          "en": "Fires a heavy shotgun blast that spends Reserve Ammo for direct Ignis damage and break pressure.",
          "vi": "Bắn phát shotgun nặng tiêu Reserve Ammo để gây Ignis trực tiếp và tạo áp lực phá choáng."
        },
        "resource": {
          "en": "Maximum Reserve Ammo: 6; regenerates slowly over time.",
          "vi": "Tối đa 6 Reserve Ammo; hồi chậm theo thời gian."
        },
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "ultimate",
        "name": "Flare of Enlightenment",
        "description": {
          "en": "Unleashes a flamethrower AoE and fully reloads Alf for the next shotgun sequence.",
          "vi": "Phun lửa AoE và nạp đầy đạn cho chuỗi shotgun tiếp theo của Alf."
        },
        "resource": {
          "en": "Grants 6 Reserve Ammo.",
          "vi": "Nhận 6 Reserve Ammo."
        },
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "tacticalAssault",
        "name": "Dustproof Magazine",
        "description": {
          "en": "Switches in with an Ignis firearm attack and immediately reloads part of Alf’s magazine.",
          "vi": "Đổi vào sân bằng đòn súng Ignis và lập tức nạp một phần băng đạn."
        },
        "resource": {
          "en": "Grants 3 Reserve Ammo.",
          "vi": "Nhận 3 Reserve Ammo."
        },
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "passive",
        "name": "Maid in Training",
        "description": {
          "en": "Adds a shotgun follow-up after defensive actions and rewards all parts of Alf’s kit with stronger Stun buildup.",
          "vi": "Thêm phát shotgun nối sau hành động phòng thủ và thưởng mọi phần của bộ kỹ năng bằng Stun buildup mạnh hơn."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "Press Dodge or Parry immediately after a shotgun attack to consume 1 Reserve Ammo and fire a follow-up shot.",
            "vi": "Bấm Dodge hoặc Parry ngay sau đòn shotgun để tiêu 1 Reserve Ammo và bắn phát nối."
          },
          {
            "en": "Hitting with melee, shotgun, or flamethrower grants 14 Stun Buildup Bonus for 16s.",
            "vi": "Đánh trúng bằng cận chiến, shotgun hoặc súng phun lửa nhận 14 Stun Buildup Bonus trong 16 giây."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      }
    ]
  }
};

(function applyCharacterSkillDetailPatchV26() {
    Object.entries(characterSkillDetailPatchV26).forEach(function ([characterId, patch]) {
        const character = charactersData.find(function (entry) {
            return entry.id === characterId;
        });
        if (!character) return;

        if (Array.isArray(patch.skills)) {
            character.skills = patch.skills;
        }

        if (patch.variants && Array.isArray(character.variants)) {
            Object.entries(patch.variants).forEach(function ([variantId, skills]) {
                const variant = character.variants.find(function (entry) {
                    return entry.id === variantId;
                });
                if (variant) variant.skills = skills;
            });
        }
    });
})();


// =========================================================
// FULL CHARACTER PSYCHE DATA — DICHOTOMY CBT2 v30
// Source family: SilverPalaceMeta character pages / glossary.
// Psyches are duplicate-copy upgrades. Each character has six.
// =========================================================

const characterPsycheDetailPatchV30 = {
    "the-detective": [
        {
            name: "Detectives' Golden Age",
            description: {
                en: "After Tactical Assault, gain 3 Ammunition and boost the next 2 Charged Skills by 10% DMG.",
                vi: "Sau Tactical Assault, nhận 3 Ammunition và tăng 10% sát thương cho 2 Charged Skill tiếp theo."
            }
        },
        {
            name: "Crow Flies the Nest",
            description: {
                en: "When a Skill hits, ATK rises by 13% for 16s. This can stack twice.",
                vi: "Khi Skill đánh trúng, ATK tăng 13% trong 16 giây và có thể cộng dồn 2 lần."
            }
        },
        {
            name: "Falling From the Heights",
            description: {
                en: "Tactical Assault or Skill marks the enemy. A Charged Skill consumes the mark to deal an extra 16.4% Skill DMG.",
                vi: "Tactical Assault hoặc Skill đánh dấu kẻ địch. Charged Skill tiêu dấu ấn để gây thêm 16,4% Skill DMG."
            }
        },
        {
            name: "Defying Gravity",
            description: {
                en: "Ultimate DMG increases by 30%, and Gravity Field lasts 5s.",
                vi: "Ultimate DMG tăng 30% và Gravity Field kéo dài 5 giây."
            }
        },
        {
            name: "True Reflections",
            description: {
                en: "After Tactical Assault, all characters on the team gain 20% ATK for 40s.",
                vi: "Sau Tactical Assault, toàn đội nhận 20% ATK trong 40 giây."
            }
        },
        {
            name: "Thought and Memory",
            description: {
                en: "The first enemy struck by a Charged Skill takes 45% increased DMG.",
                vi: "Kẻ địch đầu tiên trúng Charged Skill chịu thêm 45% sát thương."
            }
        }
    ],

    "cinderella": [
        {
            name: "Riddle-Sealed Heart",
            description: {
                en: "While spending Vengeful Flame on Re-Smelt, each bullet grants 1.5% ATK for 25s. During Quenched, every Basic Attack hit also deals an extra 15% Ignis DMG.",
                vi: "Khi tiêu Vengeful Flame cho Re-Smelt, mỗi viên đạn tăng 1,5% ATK trong 25 giây. Trong Quenched, mỗi hit Đánh thường gây thêm 15% Ignis DMG."
            }
        },
        {
            name: "The Stolen Silver Allegory",
            description: {
                en: "During Re-Smelt rapid fire, Vengeful Flame cost is reduced by 50%, Enhanced Charged Attack DMG rises by 145%, and the Quenched timer pauses during each Enhanced Charged Attack.",
                vi: "Trong loạt bắn Re-Smelt, tiêu hao Vengeful Flame giảm 50%, Enhanced Charged Attack DMG tăng 145% và thời gian Quenched tạm dừng trong mỗi Enhanced Charged Attack."
            }
        },
        {
            name: "Forgotten Ant",
            description: {
                en: "Starts battle with full Overheat. Enhanced Charged Attacks boost the next Ultimate: Quenched by 60% DMG, stacking up to 3 times.",
                vi: "Bắt đầu trận với Overheat đầy. Enhanced Charged Attack tăng 60% sát thương cho Ultimate: Quenched tiếp theo, cộng dồn tối đa 3 lần."
            }
        },
        {
            name: "Fleeting Arcane",
            description: {
                en: "During Quenched, ATK increases by 50%. When Quenched ends, Skill DMG increases by 40% for 5s.",
                vi: "Trong Quenched, ATK tăng 50%. Khi Quenched kết thúc, Skill DMG tăng 40% trong 5 giây."
            }
        },
        {
            name: "Desperate Will",
            description: {
                en: "While Quenched is active, all characters on the team gain 20% ATK for 60s.",
                vi: "Khi Quenched hoạt động, toàn đội nhận 20% ATK trong 60 giây."
            }
        },
        {
            name: "Forged in Tears and Flame",
            description: {
                en: "Vengeful Flame builds 100% faster. During Quenched, Ashley ignores 30% enemy DEF and gains stronger pull effects; Enhanced Charged Attacks also pull nearby enemies inward.",
                vi: "Vengeful Flame tích nhanh hơn 100%. Trong Quenched, Ashley bỏ qua 30% DEF địch và tăng hiệu ứng kéo; Enhanced Charged Attack cũng kéo các địch gần đó vào."
            }
        }
    ],

    "argos": [
        {
            name: "City Wanderer",
            description: {
                en: "During Piercing Gaze, Argos's higher-level Charged Attack causes all characters on the team to deal 20% more DMG when it hits.",
                vi: "Trong Piercing Gaze, Charged Attack cấp cao của Argos khi trúng sẽ khiến toàn đội gây thêm 20% sát thương."
            }
        },
        {
            name: "Non-Violent Communication",
            description: {
                en: "Tactical Assault DMG increases by 20%.",
                vi: "Tactical Assault DMG tăng 20%."
            }
        },
        {
            name: "Self-Fulfilling Prophecy",
            description: {
                en: "Argos's Skills reduce enemy DEF by 15% for 40s.",
                vi: "Skill của Argos giảm 15% DEF của kẻ địch trong 40 giây."
            }
        },
        {
            name: "Perceptual Blindness",
            description: {
                en: "Ultimate DMG increases by 10%.",
                vi: "Ultimate DMG tăng 10%."
            }
        },
        {
            name: "Old Reserves",
            description: {
                en: "After using Ultimate, all characters on the team gain 15% Glacies DMG for 40s. This effect does not stack.",
                vi: "Sau khi dùng Ultimate, toàn đội tăng 15% Glacies DMG trong 40 giây. Hiệu ứng không cộng dồn."
            }
        },
        {
            name: "All-Seeing Eye",
            description: {
                en: "During Piercing Gaze, Argos gains 10% Final DMG.",
                vi: "Trong Piercing Gaze, Argos tăng 10% Final DMG."
            }
        }
    ],

    "alf": [
        {
            name: "Maid No. 49",
            description: {
                en: "Using a Headbutt grants Alf 6 Reserve Ammo.",
                vi: "Dùng Headbutt cho Alf 6 Reserve Ammo."
            }
        },
        {
            name: "Boundless Curiosity",
            description: {
                en: "Ultimate DMG increases by 20%.",
                vi: "Ultimate DMG tăng 20%."
            }
        },
        {
            name: "Abandoned Cat Effect",
            description: {
                en: "Melee, shotgun, and flamethrower hits each grant their own 2% ATK increase for 16s.",
                vi: "Đòn cận chiến, shotgun và súng phun lửa khi trúng đều tạo buff ATK riêng +2% trong 16 giây."
            }
        },
        {
            name: "Blank Page",
            description: {
                en: "After Tactical Assault, Stun Buildup Bonus increases by 7% for 16s.",
                vi: "Sau Tactical Assault, Stun Buildup Bonus tăng 7% trong 16 giây."
            }
        },
        {
            name: "A Story Truly Yours",
            description: {
                en: "After Ultimate, all characters on the team gain 15% Ignis DMG for 40s.",
                vi: "Sau Ultimate, toàn đội tăng 15% Ignis DMG trong 40 giây."
            }
        },
        {
            name: "Sacrificial Sincerity",
            description: {
                en: "Final DMG increases by 10%.",
                vi: "Final DMG tăng 10%."
            }
        }
    ],

    "lorin": [
        {
            name: "Model Chief Inspector",
            description: {
                en: "Evading with Sway refunds 50% of its Stamina cost. After Sway, ATK increases by 10% for 5s.",
                vi: "Né bằng Sway hoàn lại 50% Stamina đã tiêu. Sau Sway, ATK tăng 10% trong 5 giây."
            }
        },
        {
            name: "Bar Regular",
            description: {
                en: "The 5th Basic Attack hit deals an extra 40% Fulmen DMG. Sway can trigger Perfect Sway even against attacks without a red-circle indicator.",
                vi: "Hit thứ 5 của Đánh thường gây thêm 40% Fulmen DMG. Sway có thể kích hoạt Perfect Sway cả với đòn không có vòng tròn đỏ."
            }
        },
        {
            name: "Unresolved Sin",
            description: {
                en: "The 5th Basic Attack hit increases Stun Buildup Bonus by 5% for 5s.",
                vi: "Hit thứ 5 của Đánh thường tăng 5% Stun Buildup Bonus trong 5 giây."
            }
        },
        {
            name: "Unerring Justice",
            description: {
                en: "Using Sway increases Skill DMG by 15%, stacking up to 2 times.",
                vi: "Dùng Sway tăng 15% Skill DMG, cộng dồn tối đa 2 lần."
            }
        },
        {
            name: "Fist of the Rising Dawn",
            description: {
                en: "After executing an enemy, all characters on the team gain 20% ATK for 40s.",
                vi: "Sau khi Execute kẻ địch, toàn đội nhận 20% ATK trong 40 giây."
            }
        },
        {
            name: "Sound Sleeper",
            description: {
                en: "Ultimate DMG increases by 65%. After Ultimate, Lorin regains 60 Street Smarts and 6 Stamina per second.",
                vi: "Ultimate DMG tăng 65%. Sau Ultimate, Lorin hồi 60 Street Smarts và 6 Stamina mỗi giây."
            }
        }
    ],

    "firtho": [
        {
            name: "Pathologist",
            description: {
                en: "Charged Skill healing increases by 10%. After a Charged Skill, all characters on the team take 10% less DMG for the buff's duration.",
                vi: "Hồi máu từ Charged Skill tăng 10%. Sau Charged Skill, toàn đội chịu ít hơn 10% sát thương trong thời gian buff."
            }
        },
        {
            name: "Fate-Defying Lancet",
            description: {
                en: "The Charged Skill buff additionally grants all characters on the team 16% Amplitude Coefficient.",
                vi: "Buff từ Charged Skill còn tăng 16% Amplitude Coefficient cho toàn đội."
            }
        },
        {
            name: "Shadow of the Heart",
            description: {
                en: "After a Charged Skill, Basic Attack DMG increases by 24% for 6s.",
                vi: "Sau Charged Skill, Basic Attack DMG tăng 24% trong 6 giây."
            }
        },
        {
            name: "Early Cooperation",
            description: {
                en: "After Tactical Assault, Firtho recovers 20% Silverdrips. Each buff stack granted by her Charged Skill recovers another 2% Silverdrips.",
                vi: "Sau Tactical Assault, Firtho hồi 20% Silverdrips. Mỗi stack buff từ Charged Skill hồi thêm 2% Silverdrips."
            }
        },
        {
            name: "Detective and Doctor",
            description: {
                en: "After Ultimate, all characters on the team gain 15% Radiatio DMG for 40s.",
                vi: "Sau Ultimate, toàn đội tăng 15% Radiatio DMG trong 40 giây."
            }
        },
        {
            name: "Shared Days",
            description: {
                en: "Charged Skill DMG increases by 15%. Each enemy hit boosts the next Ultimate by 9% DMG, up to 27%.",
                vi: "Charged Skill DMG tăng 15%. Mỗi kẻ địch trúng đòn tăng 9% sát thương cho Ultimate tiếp theo, tối đa 27%."
            }
        }
    ],

    "cynthia-ii": [
        {
            name: "Rising Crescent",
            description: {
                en: "Sweetness Overload makes enemies take an additional 7.5% DMG.",
                vi: "Sweetness Overload khiến kẻ địch chịu thêm 7,5% sát thương."
            }
        },
        {
            name: "To the Moonlit Court",
            description: {
                en: "Ultimate Charge Efficiency increases by 30%. After a higher-level Charged Skill, Ultimate duration becomes 8s and continually applies Sweetness Overload to enemies it hits.",
                vi: "Ultimate Charge Efficiency tăng 30%. Sau Charged Skill cấp cao, Ultimate kéo dài 8 giây và liên tục áp Sweetness Overload lên kẻ địch trúng đòn."
            }
        },
        {
            name: "The Captured Moon",
            description: {
                en: "After Ultimate, all characters on the team gain 20% ATK for 40s.",
                vi: "Sau Ultimate, toàn đội nhận 20% ATK trong 40 giây."
            }
        },
        {
            name: "Lone Lunar Shadow",
            description: {
                en: "Ultimate DMG increases by 50%.",
                vi: "Ultimate DMG tăng 50%."
            }
        },
        {
            name: "Moon Freed From Mortal Dust",
            description: {
                en: "After Tactical Assault, all characters on the team deal 15% increased All-Attribute DMG for 40s.",
                vi: "Sau Tactical Assault, toàn đội tăng 15% All-Attribute DMG trong 40 giây."
            }
        },
        {
            name: "Moonbound Howl",
            description: {
                en: "During Charged Attacks, Cynthia takes 50% less DMG and cannot be interrupted. Charged Attacks deal an extra 100% Alba DMG to enemies with Sweetness Overload and pull nearby enemies together.",
                vi: "Trong Charged Attack, Cynthia chịu ít hơn 50% sát thương và không bị ngắt. Charged Attack gây thêm 100% Alba DMG lên địch có Sweetness Overload và kéo các địch gần lại."
            }
        }
    ],

    "rex": [
        {
            name: "Iron Superintendent",
            description: {
                en: "Tactical Assault grants 1 Volt Charge. Dealing DMG grants 2% Fulmen DMG for 8s, stacking up to 4 times.",
                vi: "Tactical Assault cho 1 Volt Charge. Gây sát thương tăng 2% Fulmen DMG trong 8 giây, cộng dồn tối đa 4 lần."
            }
        },
        {
            name: "Naval Governance",
            description: {
                en: "Final DMG increases by 4%. After Dual Truncheons and Extended Truncheon, Rex refunds the Rage spent; this refund can trigger once every 10s.",
                vi: "Final DMG tăng 4%. Sau Dual Truncheons và Extended Truncheon, Rex hoàn lại Rage đã tiêu; hiệu ứng hoàn Rage có hồi chiêu 10 giây."
            }
        },
        {
            name: "Darkened White",
            description: {
                en: "Gaining Rage increases ATK by 2.5% for 8s, stacking up to 4 times.",
                vi: "Khi nhận Rage, ATK tăng 2,5% trong 8 giây, cộng dồn tối đa 4 lần."
            }
        },
        {
            name: "Righteous Clause",
            description: {
                en: "Dual Truncheons, Extended Truncheon, or Tactical Assault grants 1 Ruthless Law. Each stack adds 10% Amplitude Multiplier for 20s, up to 2 stacks.",
                vi: "Dual Truncheons, Extended Truncheon hoặc Tactical Assault cho 1 Ruthless Law. Mỗi stack tăng 10% Amplitude Multiplier trong 20 giây, tối đa 2 stack."
            }
        },
        {
            name: "Model Enforcer",
            description: {
                en: "After Nunchucks Law, all characters on the team gain 25% Amplitude Coefficient for 60s.",
                vi: "Sau Nunchucks Law, toàn đội tăng 25% Amplitude Coefficient trong 60 giây."
            }
        },
        {
            name: "Evil Eradicator",
            description: {
                en: "Final DMG increases by 6%. Nunchucks Law additionally deals 100% Fulmen DMG and increases Rex's Fulmen Resonance by 100.",
                vi: "Final DMG tăng 6%. Nunchucks Law gây thêm 100% Fulmen DMG và tăng 100 Fulmen Resonance cho Rex."
            }
        }
    ],

    "red-rose": [
        {
            name: "A Prelude in Scarlet",
            description: {
                en: "Raises the maximum number of stacks that Red Rose's passive can grant by 8.",
                vi: "Tăng giới hạn stack tối đa mà passive của Red Rose có thể cấp thêm 8 stack."
            }
        },
        {
            name: "Sanguine Mark",
            description: {
                en: "Rose Bloom Ignis DMG increases by 100%. A Perfect Dodge leaves 1 Rose Bloom on the ground.",
                vi: "Ignis DMG của Rose Bloom tăng 100%. Perfect Dodge để lại 1 Rose Bloom trên mặt đất."
            }
        },
        {
            name: "Floral Shadow",
            description: {
                en: "After Ultimate, all characters on the team ignore 20% enemy DEF for 40s. Does not stack.",
                vi: "Sau Ultimate, toàn đội bỏ qua 20% DEF của địch trong 40 giây. Không cộng dồn."
            }
        },
        {
            name: "Love's Affliction",
            description: {
                en: "Doubles Rose Petals gained from the 3rd and 5th Basic Attack hits and from Skills. During Bright Rhythm, enhanced consecutive-shot DMG increases by 100%.",
                vi: "Nhân đôi Rose Petals nhận từ hit thứ 3, thứ 5 của Đánh thường và từ Skill. Trong Bright Rhythm, sát thương chuỗi bắn cường hóa tăng 100%."
            }
        },
        {
            name: "Death's Malediction",
            description: {
                en: "After Skill, all characters on the team gain 63% CRIT DMG for 40s. Does not stack.",
                vi: "Sau Skill, toàn đội tăng 63% CRIT DMG trong 40 giây. Không cộng dồn."
            }
        },
        {
            name: "A Blooming Finale",
            description: {
                en: "During Bright Rhythm, enhanced consecutive shots leave 3 extra Rose Blooms. All of Red Rose's attacks ignore 50% of the target's DEF.",
                vi: "Trong Bright Rhythm, chuỗi bắn cường hóa để lại thêm 3 Rose Bloom. Mọi đòn đánh của Red Rose bỏ qua 50% DEF mục tiêu."
            }
        }
    ],

    "gucia": [
        {
            name: "Supernatural Enthusiast",
            description: {
                en: "After Ultimate, all characters on the team gain 42% Amplitude Multiplier for 40s.",
                vi: "Sau Ultimate, toàn đội tăng 42% Amplitude Multiplier trong 40 giây."
            }
        },
        {
            name: "Protégé",
            description: {
                en: "Every 10 Erudition consumed by Skills increases Gucia's Skill DMG by 0.5%.",
                vi: "Mỗi 10 Erudition được Skill tiêu hao tăng 0,5% Skill DMG của Gucia."
            }
        },
        {
            name: "Nothing Hidden Under the Sun",
            description: {
                en: "After Tactical Assault, all characters on the team deal 10% increased DMG for 40s.",
                vi: "Sau Tactical Assault, toàn đội gây thêm 10% sát thương trong 40 giây."
            }
        },
        {
            name: "Apprentice From Afar",
            description: {
                en: "Skills can consume Erudition to empower the next Ultimate: every 100 Erudition consumed adds 4% Ultimate DMG.",
                vi: "Skill có thể tiêu Erudition để cường hóa Ultimate tiếp theo: mỗi 100 Erudition đã tiêu tăng 4% Ultimate DMG."
            }
        },
        {
            name: "Leaving the Ivory Tower",
            description: {
                en: "After Ultimate, all characters on the team gain 20% ATK for 40s.",
                vi: "Sau Ultimate, toàn đội nhận 20% ATK trong 40 giây."
            }
        },
        {
            name: "To Life Unknown",
            description: {
                en: "Gucia's Skills and Ultimate ignore 10% of enemy Alba RES.",
                vi: "Skill và Ultimate của Gucia bỏ qua 10% Alba RES của kẻ địch."
            }
        }
    ],

    "captain-kaboom": [
        {
            name: "Spinotrode Mender",
            description: {
                en: "Charged Attacks automatically parry incoming attacks. Each Charged Attack hit increases its Coup de Grâce DMG by 0.6%.",
                vi: "Charged Attack tự động parry đòn đánh tới. Mỗi hit Charged Attack tăng 0,6% Coup de Grâce DMG."
            }
        },
        {
            name: "City Worker Bee",
            description: {
                en: "Tactical Assault fully charges Pressure. Charged Attacks deal an additional 1% Radiatio DMG on hit.",
                vi: "Tactical Assault nạp đầy Pressure. Charged Attack gây thêm 1% Radiatio DMG khi trúng."
            }
        },
        {
            name: "Beyond City Lights",
            description: {
                en: "Ultimate DMG increases by 20%.",
                vi: "Ultimate DMG tăng 20%."
            }
        },
        {
            name: "Small Stature, Big Spirit",
            description: {
                en: "After Skill, Radiatio DMG increases by 15% for 10s.",
                vi: "Sau Skill, Radiatio DMG tăng 15% trong 10 giây."
            }
        },
        {
            name: "Root Cause of the Fault",
            description: {
                en: "After executing an enemy, all characters on the team gain 20% ATK for 40s.",
                vi: "Sau khi Execute kẻ địch, toàn đội nhận 20% ATK trong 40 giây."
            }
        },
        {
            name: "Home Is Where the Kaboom Is",
            description: {
                en: "Charged Attacks gain larger range, ignore 10% enemy DEF, and pull targets together. Coup de Grâce also deals an extra 10% Radiatio DMG.",
                vi: "Charged Attack tăng phạm vi, bỏ qua 10% DEF địch và kéo các mục tiêu lại. Coup de Grâce còn gây thêm 10% Radiatio DMG."
            }
        }
    ],

    "grimm": [
        {
            name: "Mouthpiece or Propagandist?",
            description: {
                en: "Full Exposé reduces enemy Fulmen RES by an additional 5%.",
                vi: "Full Exposé giảm thêm 5% Fulmen RES của kẻ địch."
            }
        },
        {
            name: "The Spotlight Effect",
            description: {
                en: "When Grimm's Skills hit an enemy with Full Exposé, they deal an extra 10% Fulmen DMG.",
                vi: "Khi Skill của Grimm đánh trúng địch có Full Exposé, gây thêm 10% Fulmen DMG."
            }
        },
        {
            name: "Spiral of Silence",
            description: {
                en: "At battle start, every teammate except Grimm gains 45% Amplitude Multiplier.",
                vi: "Khi bắt đầu trận, mọi đồng đội trừ Grimm tăng 45% Amplitude Multiplier."
            }
        },
        {
            name: "The Three Languages",
            description: {
                en: "After Tactical Assault, Grimm's ATK increases by 10% for 10s.",
                vi: "Sau Tactical Assault, ATK của Grimm tăng 10% trong 10 giây."
            }
        },
        {
            name: "The Singing Bone",
            description: {
                en: "After Ultimate, all characters on the team gain 15% Fulmen DMG for 40s.",
                vi: "Sau Ultimate, toàn đội tăng 15% Fulmen DMG trong 40 giây."
            }
        },
        {
            name: "True Accounts",
            description: {
                en: "Parrying leaves a grenade that deals 30% Fulmen DMG. Basic Attacks deal 75% increased DMG to enemies with Full Exposé.",
                vi: "Parry để lại lựu đạn gây 30% Fulmen DMG. Đánh thường gây thêm 75% sát thương lên địch có Full Exposé."
            }
        }
    ],

    "bentham": [
        {
            name: "Orchestrator",
            description: {
                en: "The 4th Basic Attack hit grants 1 Liquid Asset. If Bentham has enough Funds, it can spend 1 Fund for an extra Glacies strike and 2 Liquid Assets. Tactical Assault grants 4 Liquid Assets.",
                vi: "Hit thứ 4 của Đánh thường cho 1 Liquid Asset. Nếu đủ Funds, Bentham có thể tiêu 1 Fund để tung thêm đòn Glacies và nhận 2 Liquid Assets. Tactical Assault cho 4 Liquid Assets."
            }
        },
        {
            name: "Meshing Gears",
            description: {
                en: "Enhanced Charged Signature Move DMG increases by 10%.",
                vi: "Enhanced Charged Signature Move DMG tăng 10%."
            }
        },
        {
            name: "Curse of Knowledge",
            description: {
                en: "Ultimate grants 6 Liquid Assets. A follow-up after Skill grants 1 additional Liquid Asset.",
                vi: "Ultimate cho 6 Liquid Assets. Follow-up sau Skill cho thêm 1 Liquid Asset."
            }
        },
        {
            name: "Price of Ascension",
            description: {
                en: "Basic Attack hits increase Charged DMG by 20% for 6s, stacking up to 2 times.",
                vi: "Đánh thường trúng địch tăng 20% Charged DMG trong 6 giây, cộng dồn tối đa 2 lần."
            }
        },
        {
            name: "The Invisible Hand",
            description: {
                en: "After triggering Zero Degrees, all characters on the team gain 15% Glacies DMG for 40s.",
                vi: "Sau khi kích hoạt Zero Degrees, toàn đội tăng 15% Glacies DMG trong 40 giây."
            }
        },
        {
            name: "Aloof Balance",
            description: {
                en: "Ultimate and Enhanced Charged Signature Move DMG increase by 22%.",
                vi: "Ultimate và Enhanced Charged Signature Move DMG tăng 22%."
            }
        }
    ],

    "gratia": [
        {
            name: "Bewildered Bunny Knight",
            description: {
                en: "When Gratia's Skill gives the whole team a Shield, that Shield becomes 10% stronger and lasts 30s.",
                vi: "Khi Skill của Gratia cấp Shield cho toàn đội, Shield mạnh hơn 10% và kéo dài 30 giây."
            }
        },
        {
            name: "The Foolish and the Brave",
            description: {
                en: "Tactical Assault reduces target DEF by 8% for 40s. If it parries an enemy attack, DEF is reduced by another 4%.",
                vi: "Tactical Assault giảm 8% DEF mục tiêu trong 40 giây. Nếu đòn này parry được tấn công của địch, giảm thêm 4% DEF."
            }
        },
        {
            name: "Failed Hopes",
            description: {
                en: "Tactical Assault counter DMG increases by 50% and fully charges Stalwart Fury.",
                vi: "Counter DMG của Tactical Assault tăng 50% và nạp đầy Stalwart Fury."
            }
        },
        {
            name: "The Eight Virtues",
            description: {
                en: "After parrying an enemy, Gratia deals 24% increased DMG to that attacker for 10s.",
                vi: "Sau khi parry, Gratia gây thêm 24% sát thương lên kẻ tấn công đó trong 10 giây."
            }
        },
        {
            name: "Under Your Guidance",
            description: {
                en: "Ultimate Charge Efficiency increases by 25%. After Ultimate, all characters on the team gain 20% ATK for 40s.",
                vi: "Ultimate Charge Efficiency tăng 25%. Sau Ultimate, toàn đội nhận 20% ATK trong 40 giây."
            }
        },
        {
            name: "Throneside Honour",
            description: {
                en: "Shield Rush DMG increases by 20%. When Ultimate hits, its DMG increases by 24% for 6s.",
                vi: "Shield Rush DMG tăng 20%. Khi Ultimate trúng mục tiêu, Ultimate DMG tăng 24% trong 6 giây."
            }
        }
    ]
};

(function applyCharacterPsychePatchV30() {
    Object.entries(characterPsycheDetailPatchV30).forEach(function ([characterId, psyches]) {
        const character = charactersData.find(function (entry) {
            return entry.id === characterId;
        });

        if (!character) {
            return;
        }

        character.psyches = psyches;
        character.psycheSource = {
            en: "SilverPalaceMeta CBT2 character page",
            vi: "Trang nhân vật CBT2 trên SilverPalaceMeta"
        };

        // The Detective's male/female variants share the same Psyche track
        // in the current CBT2 archive.
        if (characterId === "the-detective" && Array.isArray(character.variants)) {
            character.variants.forEach(function (variant) {
                variant.psyches = psyches;
            });
        }
    });
})();
