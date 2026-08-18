// =========================
// SILVER PALACE NEWS
// =========================


const newsData = [

    {
        id: "news-001",

        category: "news",

        title: {
            en: "Silver Palace",
            vi: "Silver Palace"
        },

        date: "TBA",

        image:
            "images/news/news1.jpg",

        description: {
            en:
                "Latest Silver Palace information will appear here.",

            vi:
                "Thông tin mới nhất về Silver Palace sẽ xuất hiện tại đây."
        }
    },


    {
        id: "news-002",

        category: "update",

        title: {
            en:
                "Latest Game Update",

            vi:
                "Cập nhật game mới nhất"
        },

        date: "TBA",

        image:
            "images/news/news2.jpg",

        description: {
            en:
                "New game updates will appear here.",

            vi:
                "Các thông tin cập nhật mới của game sẽ xuất hiện tại đây."
        }
    },


    {
        id: "news-003",

        category: "announcement",

        title: {
            en:
                "Latest Announcement",

            vi:
                "Thông báo mới nhất"
        },

        date: "TBA",

        image:
            "images/news/news3.jpg",

        description: {
            en:
                "Official announcements will appear here.",

            vi:
                "Các thông báo chính thức sẽ xuất hiện tại đây."
        }
    }

];



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
        rarity: 5, limited: false, availability: "preview", previewData: true,
        reactorAttribute: "Ignis", combatStyle: "Striker DPS", identity: "Outlaw",
        affiliation: "Fableborne", occupation: "Cinderella",
        combatWeapon: { en: "Flame Sword + Machine Gun", vi: "Kiếm lửa + Súng máy" },
        baseStats: { level: 1, hp: 739, atk: 95, def: 22 },
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
// MOTIVES
// =========================

/*
    Motive is the gachable equipment section tracked by this site.

    The entries below are layout placeholders only.
    Names, stats, passives, and availability should be replaced with verified
    Silver Palace data when reliable information is available.
*/

const weaponsData = [
    {
        id: "motive-four-star",
        name: "4-Star Motive",
        image: "images/motives/motive4.png",

        rarity: 4,
        limited: false,

        stat1: {
            label: "Primary Stat",
            value: "TBA"
        },

        stat2: {
            label: "Secondary Stat",
            value: "TBA"
        },

        effect: "Verified Motive stats and passive effects will appear here when reliable data is available."
    },

    {
        id: "motive-five-star-standard",
        name: "5-Star Motive",
        image: "images/motives/motive5.png",

        rarity: 5,
        limited: false,

        stat1: {
            label: "Primary Stat",
            value: "TBA"
        },

        stat2: {
            label: "Secondary Stat",
            value: "TBA"
        },

        effect: "Verified Motive stats and passive effects will appear here when reliable data is available."
    },

    {
        id: "motive-five-star-limited",
        name: "5-Star Limited Motive",
        image: "images/motives/motive5-limited.png",

        rarity: 5,
        limited: true,

        stat1: {
            label: "Primary Stat",
            value: "TBA"
        },

        stat2: {
            label: "Secondary Stat",
            value: "TBA"
        },

        effect: "Verified Motive stats and passive effects will appear here when reliable data is available."
    }
];
