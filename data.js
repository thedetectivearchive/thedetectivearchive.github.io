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
                occupation: "Detective"
            },

            {
                id: "male",
                labelKey: "male",

                displayName: "",

                images: {
                    card: "images/characters/the-detective-male-card.png",
                    splash: "images/characters/the-detective-male-splash.png"
                },

                /* Not confirmed separately yet */
                reactorAttribute: "",
                combatStyle: "Striker DPS",
                identity: "Hero",
                affiliation: "The Raven's Beak",
                occupation: "Detective"
            }

        ],

        description: {

            en:
                "The protagonist of Silver Palace. The player takes on the role of a Detective who investigates cases and uncovers the mysteries hidden throughout Silvernia.",

            vi:
                "Nhân vật chính của Silver Palace. Người chơi vào vai một Thám tử, điều tra các vụ án và khám phá những bí ẩn ẩn giấu khắp Silvernia."

        }
    }

];


// =========================
// WEAPON TYPE FILTERS
// =========================

/*
    Silver Palace weapon-type names/icons are intentionally not guessed here.

    When reliable weapon types are known, add entries like:

    {
        id: "official-type-id",
        name: "Official Type Name",
        icon: "images/icons/weapons/official-type.png"
    }

    If this list stays empty, the website shows decorative empty slots.
    As soon as weapon objects receive a non-empty weaponType value,
    the filter can also detect those values automatically.
*/

const weaponTypeFilters = [];


// =========================
// WEAPONS
// =========================

const weaponsData = [
    {
        id: "weapon-four-star",
        name: "4-Star Weapon",
        image: "images/weapons/weapon4.png",

        rarity: 4,
        limited: false,

        weaponType: "",

        stat1: {
            label: "Base ATK",
            value: "TBA"
        },

        stat2: {
            label: "Secondary Stat",
            value: "TBA"
        },

        effect: "Weapon effect description will appear here. This area is designed for longer effect descriptions."
    },

    {
        id: "weapon-five-star-standard",
        name: "5-Star Weapon",
        image: "images/weapons/weapon5.png",

        rarity: 5,
        limited: false,

        weaponType: "",

        stat1: {
            label: "Base ATK",
            value: "TBA"
        },

        stat2: {
            label: "Secondary Stat",
            value: "TBA"
        },

        effect: "Weapon effect description will appear here. This area is designed for longer effect descriptions."
    },

    {
        id: "weapon-five-star-limited",
        name: "5-Star Limited Weapon",
        image: "images/weapons/weapon5-limited.png",

        rarity: 5,
        limited: true,

        weaponType: "",

        stat1: {
            label: "Base ATK",
            value: "TBA"
        },

        stat2: {
            label: "Secondary Stat",
            value: "TBA"
        },

        effect: "Weapon effect description will appear here. This area is intentionally wide and can contain a much longer passive or special effect description."
    }
];
