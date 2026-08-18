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
