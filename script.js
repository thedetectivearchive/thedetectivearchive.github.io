    /* =========================
   CHARACTER / ITEM TABS
========================= */

const tabButtons =
    document.querySelectorAll(".tab-button");

const tabContents =
    document.querySelectorAll(".tab-content");


tabButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            tabButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            tabContents.forEach(function (content) {

                content.classList.remove("active");

            });


            button.classList.add("active");


            const selectedTab =
                button.dataset.tab;


            document
                .getElementById(selectedTab)
                .classList.add("active");

        }
    );

});

/* =========================================================
   NEWS SYSTEM
========================================================= */

const featuredNews =
    document.getElementById(
        "featuredNews"
    );

const featuredCategory =
    document.getElementById(
        "featuredCategory"
    );

const featuredTitle =
    document.getElementById(
        "featuredTitle"
    );

const featuredDate =
    document.getElementById(
        "featuredDate"
    );

const featuredDescription =
    document.getElementById(
        "featuredDescription"
    );


const sideNewsOne =
    document.getElementById(
        "sideNewsOne"
    );

const sideOneCategory =
    document.getElementById(
        "sideOneCategory"
    );

const sideOneTitle =
    document.getElementById(
        "sideOneTitle"
    );

const sideOneDate =
    document.getElementById(
        "sideOneDate"
    );

const sideOneDescription =
    document.getElementById(
        "sideOneDescription"
    );


const sideNewsTwo =
    document.getElementById(
        "sideNewsTwo"
    );

const sideTwoCategory =
    document.getElementById(
        "sideTwoCategory"
    );

const sideTwoTitle =
    document.getElementById(
        "sideTwoTitle"
    );

const sideTwoDate =
    document.getElementById(
        "sideTwoDate"
    );

const sideTwoDescription =
    document.getElementById(
        "sideTwoDescription"
    );


const newsList =
    document.getElementById(
        "newsList"
    );

const newsCount =
    document.getElementById(
        "newsCount"
    );
    function getNewsCategory(category) {

    if (category === "news") {
        return t("news");
    }


    if (category === "update") {
        return t("update");
    }


    if (category === "announcement") {
        return t("announcement");
    }


    return category.toUpperCase();
}
function renderFeaturedNews() {

    if (newsData.length === 0) {
        return;
    }


    const news =
        newsData[0];


    featuredCategory.textContent =
        getNewsCategory(
            news.category
        );


    featuredTitle.textContent =
        getLocalizedText(
            news.title
        );


    featuredDate.textContent =
        news.date;


    featuredDescription.textContent =
        getLocalizedText(
            news.description
        );


    if (news.image) {

        featuredNews.style.backgroundImage =
            `url("${news.image}")`;

    }

}
function renderSideNews() {

    /* =========================
       NEWS NUMBER 2
    ========================= */

    if (newsData[1]) {

        const news =
            newsData[1];


        sideOneCategory.textContent =
            getNewsCategory(
                news.category
            );


        sideOneTitle.textContent =
            getLocalizedText(
                news.title
            );


        sideOneDate.textContent =
            news.date;


        sideOneDescription.textContent =
            getLocalizedText(
                news.description
            );


        if (news.image) {

            sideNewsOne.style.backgroundImage =
                `url("${news.image}")`;

        }

    }



    /* =========================
       NEWS NUMBER 3
    ========================= */

    if (newsData[2]) {

        const news =
            newsData[2];


        sideTwoCategory.textContent =
            getNewsCategory(
                news.category
            );


        sideTwoTitle.textContent =
            getLocalizedText(
                news.title
            );


        sideTwoDate.textContent =
            news.date;


        sideTwoDescription.textContent =
            getLocalizedText(
                news.description
            );


        if (news.image) {

            sideNewsTwo.style.backgroundImage =
                `url("${news.image}")`;

        }

    }

}
function renderNewsList() {

    newsList.innerHTML = "";


    newsData.forEach(
        function (news, index) {


            const article =
                document.createElement(
                    "article"
                );


            article.className =
                "news-card";


            article.dataset.id =
                news.id;


            /* =========================
               FIRST NEWS
               LARGE CARD
            ========================= */

            if (index === 0) {

                article.innerHTML = `

                    <div class="news-image">

                        <img
                            src="${news.image}"
                            alt="${getLocalizedText(news.title)}"

                            onerror="
                                this.style.display='none'
                            "
                        >

                    </div>


                    <div class="news-text">

                        <div class="news-meta">

                            <span>
                                ${getNewsCategory(news.category)}
                            </span>

                            <span>
                                ${news.date}
                            </span>

                        </div>


                        <h2>
                            ${getLocalizedText(news.title)}
                        </h2>


                        <p>
                            ${getLocalizedText(news.description)}
                        </p>

                    </div>

                `;

            }


            /* =========================
               OTHER NEWS
               COMPACT CARD
            ========================= */

            else {

                article.classList.add(
                    "compact-news"
                );


                article.innerHTML = `

                    <div class="small-news-image">

                        <img
                            src="${news.image}"
                            alt="${getLocalizedText(news.title)}"

                            onerror="
                                this.style.display='none'
                            "
                        >

                    </div>


                    <div class="news-text">

                        <div class="news-meta">

                            <span>
                                ${getNewsCategory(news.category)}
                            </span>

                            <span>
                                ${news.date}
                            </span>

                        </div>


                        <h3>
                            ${getLocalizedText(news.title)}
                        </h3>


                        <p>
                            ${getLocalizedText(news.description)}
                        </p>

                    </div>

                `;

            }


            newsList.appendChild(
                article
            );

        }
    );


    newsCount.textContent =
        `${newsData.length} ARTICLES`;

}
function renderNewsSystem() {

    renderFeaturedNews();

    renderSideNews();

    renderNewsList();

}

/* =========================
   CHARACTER / WEAPON DATABASE
========================= */

const characterGrid =
    document.getElementById("characterGrid");

const weaponGrid =
    document.getElementById("weaponGrid");

const selectedName =
    document.getElementById("selectedName");

const selectedType =
    document.getElementById("selectedType");

const selectedDescription =
    document.getElementById("selectedDescription");

const characterSearch =
    document.getElementById("characterSearch");

const weaponSearch =
    document.getElementById("weaponSearch");

const characterAttributeFilters =
    document.getElementById("characterAttributeFilters");

const weaponTypeFiltersContainer =
    document.getElementById("weaponTypeFilters");

let activeCharacterAttribute = "all";
let activeWeaponType = "all";


function applyRarityClass(card, entry) {

    if (entry.rarity === 5 && entry.limited === true) {
        card.classList.add("rarity-5-limited");
    }

    else if (entry.rarity === 5) {
        card.classList.add("rarity-5-standard");
    }

    else if (entry.rarity === 4) {
        card.classList.add("rarity-4");
    }

    else if (entry.rarity === 3) {
        card.classList.add("rarity-3");
    }

}


function createSummaryRow(label, value) {

    if (
        value === undefined ||
        value === null ||
        value === ""
    ) {
        return "";
    }

    return `
        <div class="entry-detail-row">
            <span>${label}</span>
            <strong>${getLocalizedText(value)}</strong>
        </div>
    `;

}


function getCharacterAvailability(character) {

    if (character.availability === "protagonist") {
        return t("protagonist");
    }

    if (character.availability === "limited") {
        return t("limited");
    }

    if (character.availability === "standard") {
        return t("standard");
    }

    return character.limited
        ? t("limited")
        : t("standard");

}


function selectCharacter(character) {

    window.selectedDatabaseEntry = {
        type: "character",
        data: character
    };

    selectedType.textContent =
        t("characters").toUpperCase();

    selectedName.textContent =
        getLocalizedText(character.name);

    selectedDescription.innerHTML = `

        ${createSummaryRow(
            t("rarity"),
            `${character.rarity} ★`
        )}

        ${createSummaryRow(
            t("type"),
            getCharacterAvailability(character)
        )}

        ${createSummaryRow(
            t("alias"),
            character.alias
        )}

        ${createSummaryRow(
            t("characterTitle"),
            character.title
        )}

        ${createSummaryRow(
            t("reactorAttribute"),
            character.reactorAttribute
        )}

        ${createSummaryRow(
            t("combatStyle"),
            character.combatStyle
        )}

        ${createSummaryRow(
            t("identity"),
            character.identity
        )}

        ${createSummaryRow(
            t("affiliation"),
            character.affiliation
        )}

        ${createSummaryRow(
            t("occupation"),
            character.occupation
        )}

        ${
            getLocalizedText(character.description)
                ? `
                    <p class="entry-description">
                        ${getLocalizedText(character.description)}
                    </p>
                `
                : ""
        }

    `;

}


function selectWeapon(weapon) {

    window.selectedDatabaseEntry = {
        type: "weapon",
        data: weapon
    };

    selectedType.textContent =
        t("weapons").toUpperCase();

    selectedName.textContent =
        getLocalizedText(weapon.name);

    selectedDescription.innerHTML = `

        ${createSummaryRow(
            t("weaponType"),
            weapon.weaponType
        )}

        <div class="weapon-main-stats">

            ${
                weapon.stat1
                    ? `
                        <div class="weapon-stat-row">
                            <span>${getLocalizedText(weapon.stat1.label)}</span>
                            <strong>${getLocalizedText(weapon.stat1.value)}</strong>
                        </div>
                    `
                    : ""
            }

            ${
                weapon.stat2
                    ? `
                        <div class="weapon-stat-row">
                            <span>${getLocalizedText(weapon.stat2.label)}</span>
                            <strong>${getLocalizedText(weapon.stat2.value)}</strong>
                        </div>
                    `
                    : ""
            }

        </div>

        ${
            getLocalizedText(weapon.effect)
                ? `
                    <div class="weapon-effect">
                        <p class="weapon-effect-title">
                            ${t("effect")}
                        </p>

                        <p>
                            ${getLocalizedText(weapon.effect)}
                        </p>
                    </div>
                `
                : ""
        }

    `;

}


function normalizeDatabaseFilterValue(value) {

    return String(value || "")
        .trim()
        .toLowerCase();

}


function createFilterButtonMarkup(config) {

    const icon =
        config.icon || "";

    const label =
        getLocalizedText(
            config.name ||
            config.label ||
            config.id ||
            ""
        );

    return `
        <span class="database-filter-icon">
            ${
                icon
                    ? `
                        <img
                            src="${icon}"
                            alt=""
                            onerror="
                                this.style.display='none';
                                this.parentElement.classList.add('icon-missing');
                            "
                        >
                    `
                    : `<span class="database-filter-icon-empty"></span>`
            }
        </span>

        <span class="sr-only">
            ${label}
        </span>
    `;

}


function renderAllFilterButton(container, groupName, activeValue) {

    const button =
        document.createElement("button");

    button.type = "button";

    button.className =
        "database-icon-filter database-icon-filter-all";

    if (activeValue === "all") {
        button.classList.add("active");
    }

    button.dataset.filterValue = "all";
    button.dataset.tooltip = t("all");
    button.setAttribute("aria-label", t("all"));
    button.setAttribute("aria-pressed", activeValue === "all" ? "true" : "false");
    button.setAttribute("data-filter-group", groupName);

    button.innerHTML = `
        <span class="database-filter-all-glyph" aria-hidden="true">
            <i></i><i></i><i></i><i></i>
        </span>
        <span class="sr-only">${t("all")}</span>
    `;

    container.appendChild(button);

    return button;

}


function renderCharacterAttributeFilters() {

    if (!characterAttributeFilters) {
        return;
    }

    characterAttributeFilters.innerHTML = "";

    const allButton =
        renderAllFilterButton(
            characterAttributeFilters,
            "character-attribute",
            activeCharacterAttribute
        );

    allButton.addEventListener(
        "click",
        function () {
            activeCharacterAttribute = "all";
            renderCharacterAttributeFilters();
            applyCharacterFilters();
        }
    );

    const filters =
        Array.isArray(reactorAttributeFilters)
            ? reactorAttributeFilters
            : [];

    filters.forEach(function (filter) {

        const value =
            String(filter.id || "").trim();

        if (!value) {
            return;
        }

        const button =
            document.createElement("button");

        button.type = "button";
        button.className = "database-icon-filter";
        button.dataset.filterValue = value;
        button.dataset.tooltip = getLocalizedText(filter.name || filter.label || value);
        button.setAttribute(
            "aria-label",
            getLocalizedText(filter.name || filter.label || value)
        );

        const isActive =
            normalizeDatabaseFilterValue(activeCharacterAttribute) ===
            normalizeDatabaseFilterValue(value);

        if (isActive) {
            button.classList.add("active");
        }

        button.setAttribute(
            "aria-pressed",
            isActive ? "true" : "false"
        );

        button.innerHTML =
            createFilterButtonMarkup(filter);

        button.addEventListener(
            "click",
            function () {
                activeCharacterAttribute = value;
                renderCharacterAttributeFilters();
                applyCharacterFilters();
            }
        );

        characterAttributeFilters.appendChild(
            button
        );

    });

}


function getAvailableWeaponTypeFilters() {

    const configured =
        Array.isArray(weaponTypeFilters)
            ? weaponTypeFilters.filter(
                function (filter) {
                    return String(filter.id || "").trim() !== "";
                }
            )
            : [];

    const known = new Map();

    configured.forEach(function (filter) {
        known.set(
            normalizeDatabaseFilterValue(filter.id),
            filter
        );
    });

    weaponsData.forEach(function (weapon) {

        const type =
            String(weapon.weaponType || "").trim();

        if (!type) {
            return;
        }

        const key =
            normalizeDatabaseFilterValue(type);

        if (!known.has(key)) {
            known.set(
                key,
                {
                    id: type,
                    name: type,
                    icon: ""
                }
            );
        }

    });

    return Array.from(known.values());

}


function renderWeaponTypeFilters() {

    if (!weaponTypeFiltersContainer) {
        return;
    }

    weaponTypeFiltersContainer.innerHTML = "";

    const allButton =
        renderAllFilterButton(
            weaponTypeFiltersContainer,
            "weapon-type",
            activeWeaponType
        );

    allButton.addEventListener(
        "click",
        function () {
            activeWeaponType = "all";
            renderWeaponTypeFilters();
            applyWeaponFilters();
        }
    );

    const filters =
        getAvailableWeaponTypeFilters();

    if (filters.length === 0) {

        for (let i = 0; i < 4; i += 1) {

            const placeholder =
                document.createElement("button");

            placeholder.type = "button";
            placeholder.className =
                "database-icon-filter database-icon-filter-placeholder";
            placeholder.disabled = true;
            placeholder.dataset.tooltip = t("weaponTypeUnavailable");
            placeholder.setAttribute(
                "aria-label",
                t("weaponTypeUnavailable")
            );

            placeholder.innerHTML = `
                <span class="database-filter-icon">
                    <span class="database-filter-icon-empty"></span>
                </span>
            `;

            weaponTypeFiltersContainer.appendChild(
                placeholder
            );

        }

        return;
    }

    filters.forEach(function (filter) {

        const value =
            String(filter.id || "").trim();

        const button =
            document.createElement("button");

        button.type = "button";
        button.className = "database-icon-filter";
        button.dataset.filterValue = value;
        button.dataset.tooltip = getLocalizedText(filter.name || filter.label || value);
        button.setAttribute(
            "aria-label",
            getLocalizedText(filter.name || filter.label || value)
        );

        const isActive =
            normalizeDatabaseFilterValue(activeWeaponType) ===
            normalizeDatabaseFilterValue(value);

        if (isActive) {
            button.classList.add("active");
        }

        button.setAttribute(
            "aria-pressed",
            isActive ? "true" : "false"
        );

        button.innerHTML =
            createFilterButtonMarkup(filter);

        button.addEventListener(
            "click",
            function () {
                activeWeaponType = value;
                renderWeaponTypeFilters();
                applyWeaponFilters();
            }
        );

        weaponTypeFiltersContainer.appendChild(
            button
        );

    });

}


function characterMatchesAttribute(character, attribute) {

    if (attribute === "all") {
        return true;
    }

    const target =
        normalizeDatabaseFilterValue(attribute);

    const values = [
        character.reactorAttribute
    ];

    if (Array.isArray(character.variants)) {
        character.variants.forEach(function (variant) {
            values.push(variant.reactorAttribute);
        });
    }

    return values.some(function (value) {
        return normalizeDatabaseFilterValue(value) === target;
    });

}


function weaponMatchesType(weapon, type) {

    if (type === "all") {
        return true;
    }

    return (
        normalizeDatabaseFilterValue(weapon.weaponType) ===
        normalizeDatabaseFilterValue(type)
    );

}


function getCharacterSearchText(character) {

    const values = [
        getLocalizedText(character.name),
        getLocalizedText(character.alias),
        getLocalizedText(character.title),
        getLocalizedText(character.reactorAttribute)
    ];

    if (Array.isArray(character.variants)) {
        character.variants.forEach(function (variant) {
            values.push(
                getLocalizedText(variant.displayName),
                getLocalizedText(variant.reactorAttribute)
            );
        });
    }

    return values.join(" ").toLowerCase();

}


function applyCharacterFilters() {

    const keyword =
        characterSearch
            ? characterSearch.value.toLowerCase().trim()
            : "";

    const filteredCharacters =
        charactersData.filter(function (character) {

            const matchesSearch =
                !keyword ||
                getCharacterSearchText(character)
                    .includes(keyword);

            const matchesAttribute =
                characterMatchesAttribute(
                    character,
                    activeCharacterAttribute
                );

            return matchesSearch && matchesAttribute;

        });

    renderCharacters(filteredCharacters);

}


function applyWeaponFilters() {

    const keyword =
        weaponSearch
            ? weaponSearch.value.toLowerCase().trim()
            : "";

    const filteredWeapons =
        weaponsData.filter(function (weapon) {

            const matchesSearch =
                !keyword ||
                getLocalizedText(weapon.name)
                    .toLowerCase()
                    .includes(keyword);

            const matchesType =
                weaponMatchesType(
                    weapon,
                    activeWeaponType
                );

            return matchesSearch && matchesType;

        });

    renderWeapons(filteredWeapons);

}


function renderCharacters(characters) {

    characterGrid.innerHTML = "";

    characters.forEach(function (character) {

        const card =
            document.createElement("article");

        card.className =
            "database-card character-card";

        card.dataset.id =
            character.id;

        applyRarityClass(
            card,
            character
        );

        const characterImage =
            character.images?.card ||
            character.image ||
            "";

        card.innerHTML = `

            <div class="rarity-bar">

                <span class="rarity-stars">
                    ${"★".repeat(character.rarity)}
                </span>

                ${
                    character.rarity === 5 &&
                    character.limited

                        ? `
                            <span class="limited-badge">
                                ${t("limited").toUpperCase()}
                            </span>
                        `

                        : ""
                }

            </div>


            <div class="card-image">

                <img
                    src="${characterImage}"
                    alt="${getLocalizedText(character.name)}"
                    onerror="
                        this.style.display='none';
                        this.parentElement.classList.add('image-missing');
                    "
                >

            </div>


            <div class="character-name">
                ${getLocalizedText(character.name)}
            </div>


            <button
                type="button"
                class="database-detail-button"
            >
                ${t("viewDetails")}
            </button>

        `;

        card.addEventListener(
            "click",
            function (event) {

                if (
                    event.target.closest(
                        ".database-detail-button"
                    )
                ) {
                    return;
                }

                selectCharacter(
                    character
                );

            }
        );

        const detailButton =
            card.querySelector(
                ".database-detail-button"
            );

        detailButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                selectCharacter(
                    character
                );

                openDatabaseDetail(
                    "character",
                    character
                );

            }
        );

        characterGrid.appendChild(
            card
        );

    });

}


function renderWeapons(weapons) {

    weaponGrid.innerHTML = "";

    weapons.forEach(function (weapon) {

        const card =
            document.createElement("article");

        card.className =
            "database-card weapon-card";

        card.dataset.id =
            weapon.id;

        applyRarityClass(
            card,
            weapon
        );

        card.innerHTML = `

            <div class="rarity-bar">

                <span class="rarity-stars">
                    ${"★".repeat(weapon.rarity)}
                </span>

                ${
                    weapon.rarity === 5 &&
                    weapon.limited

                        ? `
                            <span class="limited-badge">
                                ${t("limited").toUpperCase()}
                            </span>
                        `

                        : ""
                }

            </div>


            <div class="card-image weapon-image">

                <img
                    src="${weapon.image || ""}"
                    alt="${getLocalizedText(weapon.name)}"
                    onerror="
                        this.style.display='none';
                        this.parentElement.classList.add('image-missing');
                    "
                >

            </div>


            <div class="weapon-name">
                ${getLocalizedText(weapon.name)}
            </div>


            <button
                type="button"
                class="database-detail-button"
            >
                ${t("viewDetails")}
            </button>

        `;

        card.addEventListener(
            "click",
            function (event) {

                if (
                    event.target.closest(
                        ".database-detail-button"
                    )
                ) {
                    return;
                }

                selectWeapon(
                    weapon
                );

            }
        );

        const detailButton =
            card.querySelector(
                ".database-detail-button"
            );

        detailButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                selectWeapon(
                    weapon
                );

                openDatabaseDetail(
                    "weapon",
                    weapon
                );

            }
        );

        weaponGrid.appendChild(
            card
        );

    });

}


/* Generate website content */

renderNewsSystem();

renderCharacterAttributeFilters();
renderWeaponTypeFilters();

applyCharacterFilters();
applyWeaponFilters();


/* =========================
   PLAYER UID LOOKUP
========================= */

const uidInput =
    document.getElementById("uidInput");


const uidSearchButton =
    document.getElementById(
        "uidSearchButton"
    );


const uidMessage =
    document.getElementById("uidMessage");


const playerName =
    document.getElementById("playerName");


const playerUID =
    document.getElementById("playerUID");


const playerLevel =
    document.getElementById("playerLevel");


const playerServer =
    document.getElementById("playerServer");


const playerSignature =
    document.getElementById(
        "playerSignature"
    );


const playerAvatar =
    document.getElementById("playerAvatar");



uidSearchButton.addEventListener(
    "click",
    searchPlayer
);



uidInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            searchPlayer();

        }

    }
);



function searchPlayer() {

    const uid =
        uidInput.value.trim();


    if (uid === "") {

        uidMessage.textContent =
           t("enterUidError")

        return;

    }


    if (!/^\d+$/.test(uid)) {

        uidMessage.textContent =
            uidMessage.textContent =
    t("digitsOnly");

        return;

    }


    uidMessage.textContent =
       uidMessage.textContent =
    t("searchingPlayer");


    /*
        DEMO ONLY

        Khi chúng ta có API Silver Palace thật,
        phần này sẽ được thay bằng dữ liệu
        lấy trực tiếp từ server.
    */

    setTimeout(function () {

        playerName.textContent =
           t("examplePlayer")


        playerUID.textContent =
            uid;


        playerLevel.textContent =
            "42";


        playerServer.textContent =
            t("asia")


        playerSignature.textContent =
            t("exampleSignature")


        playerAvatar.textContent =
            "SP";


        uidMessage.textContent =
            t("playerFound")

    }, 500);

}
/* =========================
   DATABASE SEARCH
========================= */

characterSearch.addEventListener(
    "input",
    applyCharacterFilters
);

weaponSearch.addEventListener(
    "input",
    applyWeaponFilters
);


/* =========================================================
   REFRESH AFTER LANGUAGE CHANGE
========================================================= */

window.refreshDynamicContent = function () {

    renderNewsSystem();

    renderCharacterAttributeFilters();
    renderWeaponTypeFilters();

    applyCharacterFilters();
    applyWeaponFilters();

    const selected =
        window.selectedDatabaseEntry;

    if (selected) {

        if (selected.type === "character") {
            selectCharacter(
                selected.data
            );
        }

        if (selected.type === "weapon") {
            selectWeapon(
                selected.data
            );
        }

    }

    if (
        window.currentFullDetailEntry &&
        databaseDetailModal &&
        databaseDetailModal.classList.contains(
            "active"
        )
    ) {

        renderDatabaseDetail(
            window.currentFullDetailEntry.type,
            window.currentFullDetailEntry.data
        );

    }

};


/* =========================================================
   FULL DATABASE DETAIL MODAL
========================================================= */

const databaseDetailModal =
    document.getElementById(
        "databaseDetailModal"
    );

const databaseDetailOverlay =
    document.getElementById(
        "databaseDetailOverlay"
    );

const closeDatabaseDetailButton =
    document.getElementById(
        "closeDatabaseDetailButton"
    );

const databaseDetailContent =
    document.getElementById(
        "databaseDetailContent"
    );


function createFullDetailCell(
    label,
    value
) {

    if (
        value === undefined ||
        value === null ||
        value === ""
    ) {
        return "";
    }

    return `
        <div class="full-detail-cell">

            <span>
                ${label}
            </span>

            <strong>
                ${getLocalizedText(value)}
            </strong>

        </div>
    `;

}


function getCharacterVariantField(
    character,
    variant,
    field
) {

    if (
        variant &&
        Object.prototype.hasOwnProperty.call(
            variant,
            field
        )
    ) {
        return variant[field];
    }

    return character[field];

}


function getSelectedCharacterVariant(
    character
) {

    if (
        !Array.isArray(character.variants) ||
        character.variants.length === 0
    ) {
        return null;
    }

    if (!window.characterVariantSelection) {
        window.characterVariantSelection = {};
    }

    const selectedId =
        window.characterVariantSelection[
            character.id
        ] ||
        character.defaultVariant ||
        character.variants[0].id;

    return (
        character.variants.find(
            function (variant) {
                return variant.id === selectedId;
            }
        ) ||
        character.variants[0]
    );

}


function renderCharacterFullDetail(
    character
) {

    const activeVariant =
        getSelectedCharacterVariant(
            character
        );

    const variants =
        Array.isArray(character.variants)
            ? character.variants
            : [];

    const baseImage =
        character.images?.splash ||
        character.images?.card ||
        character.image ||
        "";

    const variantImage =
        activeVariant?.images?.splash ||
        activeVariant?.images?.card ||
        "";

    const characterImage =
        variantImage ||
        baseImage;

    const fallbackImage =
        variantImage &&
        baseImage &&
        variantImage !== baseImage
            ? baseImage
            : "";

    const alias =
        getLocalizedText(
            getCharacterVariantField(
                character,
                activeVariant,
                "alias"
            )
        );

    const characterTitle =
        getLocalizedText(
            getCharacterVariantField(
                character,
                activeVariant,
                "title"
            )
        );

    const variantDisplayName =
        getLocalizedText(
            activeVariant?.displayName ||
            ""
        );

    const rarityClass =
        character.rarity === 5 && character.limited
            ? "full-detail-rarity-5-limited"
            : character.rarity === 5
                ? "full-detail-rarity-5-standard"
                : character.rarity === 4
                    ? "full-detail-rarity-4"
                    : "";

    const variantLabel =
        activeVariant
            ? t(
                activeVariant.labelKey ||
                activeVariant.id
            )
            : "";

    databaseDetailContent.innerHTML = `

        <div class="full-detail-toolbar">

            <div>
                <p class="tag">
                    ${t("characterDetails")}
                </p>

                <p class="full-detail-toolbar-name">
                    ${getLocalizedText(character.name)}
                </p>
            </div>

            <div class="full-detail-toolbar-rarity">
                <span>
                    ${"★".repeat(character.rarity)}
                </span>

                <strong>
                    ${getCharacterAvailability(character)}
                </strong>
            </div>

        </div>


        <div class="full-detail-hero ${rarityClass}">

            <div class="full-detail-art-shell">

                <div class="full-detail-art">

                    <div class="full-detail-image-placeholder">
                        <span>SP</span>
                    </div>

                    <img
                        src="${characterImage}"
                        data-fallback="${fallbackImage}"
                        alt="${getLocalizedText(character.name)}"
                        onerror="
                            if (this.dataset.fallback) {
                                const fallback = this.dataset.fallback;
                                this.dataset.fallback = '';
                                this.src = fallback;
                            }
                            else {
                                this.style.display='none';
                                this.parentElement.classList.add('image-missing');
                            }
                        "
                    >

                    <div class="full-detail-art-vignette"></div>

                    <div class="full-detail-art-caption">

                        <span>
                            ${"★".repeat(character.rarity)}
                        </span>

                        <strong>
                            ${getLocalizedText(character.name)}
                        </strong>

                    </div>

                </div>

            </div>


            <div class="full-detail-info">

                <p class="full-detail-kicker">
                    ${t("characters")}
                </p>

                <h1 id="databaseDetailTitle">
                    ${getLocalizedText(character.name)}
                </h1>


                ${
                    variants.length > 0
                        ? `
                            <div
                                class="character-variant-switcher"
                                role="tablist"
                                aria-label="${t("variant")}" 
                            >

                                ${
                                    variants.map(
                                        function (variant) {

                                            const isActive =
                                                activeVariant &&
                                                variant.id === activeVariant.id;

                                            const name =
                                                getLocalizedText(
                                                    variant.displayName ||
                                                    ""
                                                );

                                            return `
                                                <button
                                                    type="button"
                                                    class="character-variant-button ${isActive ? "active" : ""}"
                                                    data-character-variant="${variant.id}"
                                                    role="tab"
                                                    aria-selected="${isActive ? "true" : "false"}"
                                                >
                                                    <span>
                                                        ${t(variant.labelKey || variant.id)}
                                                    </span>

                                                    ${
                                                        name
                                                            ? `<strong>${name}</strong>`
                                                            : ""
                                                    }
                                                </button>
                                            `;

                                        }
                                    ).join("")
                                }

                            </div>
                        `
                        : ""
                }


                ${
                    activeVariant
                        ? `
                            <div class="character-variant-current">

                                <span>
                                    ${variantLabel}
                                </span>

                                ${
                                    variantDisplayName
                                        ? `<strong>${variantDisplayName}</strong>`
                                        : ""
                                }

                            </div>
                        `
                        : ""
                }


                ${
                    character.previewData
                        ? `
                            <div class="character-preview-note">
                                <span>
                                    ${t("previewData")}
                                </span>

                                <p>
                                    ${t("previewDataNote")}
                                </p>
                            </div>
                        `
                        : ""
                }


                ${
                    alias
                        ? `
                            <p class="full-detail-alias">
                                <span>${t("alias")}</span>
                                ${alias}
                            </p>
                        `
                        : ""
                }

                ${
                    characterTitle
                        ? `
                            <p class="full-detail-title">
                                ${characterTitle}
                            </p>
                        `
                        : ""
                }

                <div class="full-detail-rarity">

                    <span class="full-detail-stars">
                        ${"★".repeat(character.rarity)}
                    </span>

                    <span class="full-detail-type">
                        ${getCharacterAvailability(character)}
                    </span>

                </div>


                <div class="full-detail-grid">

                    ${createFullDetailCell(
                        t("rarity"),
                        `${character.rarity} ★`
                    )}

                    ${createFullDetailCell(
                        t("type"),
                        getCharacterAvailability(character)
                    )}

                    ${createFullDetailCell(
                        t("reactorAttribute"),
                        getCharacterVariantField(
                            character,
                            activeVariant,
                            "reactorAttribute"
                        )
                    )}

                    ${createFullDetailCell(
                        t("combatStyle"),
                        getCharacterVariantField(
                            character,
                            activeVariant,
                            "combatStyle"
                        )
                    )}

                    ${createFullDetailCell(
                        t("identity"),
                        getCharacterVariantField(
                            character,
                            activeVariant,
                            "identity"
                        )
                    )}

                    ${createFullDetailCell(
                        t("affiliation"),
                        getCharacterVariantField(
                            character,
                            activeVariant,
                            "affiliation"
                        )
                    )}

                    ${createFullDetailCell(
                        t("occupation"),
                        getCharacterVariantField(
                            character,
                            activeVariant,
                            "occupation"
                        )
                    )}

                </div>


                ${
                    getLocalizedText(
                        character.description
                    )

                        ? `
                            <div class="full-detail-description">

                                <p class="section-label">
                                    ${t("information")}
                                </p>

                                <p>
                                    ${getLocalizedText(character.description)}
                                </p>

                            </div>
                        `

                        : ""
                }

            </div>

        </div>


        <section class="full-detail-section full-detail-skills-section">

            <div class="full-detail-section-heading">

                <p class="tag">
                    ${t("combat")}
                </p>

                <h2>
                    ${t("skills")}
                </h2>

            </div>

            <div
                class="full-detail-empty-area"
                aria-hidden="true"
            ></div>

        </section>

    `;


    const variantButtons =
        databaseDetailContent.querySelectorAll(
            "[data-character-variant]"
        );

    variantButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    if (!window.characterVariantSelection) {
                        window.characterVariantSelection = {};
                    }

                    window.characterVariantSelection[
                        character.id
                    ] = button.dataset.characterVariant;

                    renderCharacterFullDetail(
                        character
                    );

                }
            );

        }
    );

}

function renderWeaponFullDetail(
    weapon
) {

    const rarityClass =
        weapon.rarity === 5 && weapon.limited
            ? "full-detail-rarity-5-limited"
            : weapon.rarity === 5
                ? "full-detail-rarity-5-standard"
                : weapon.rarity === 4
                    ? "full-detail-rarity-4"
                    : "";

    const weaponType =
        weapon.limited
            ? t("limited")
            : t("standard");

    databaseDetailContent.innerHTML = `

        <div class="full-detail-toolbar">

            <div>
                <p class="tag">
                    ${t("weaponDetails")}
                </p>

                <p class="full-detail-toolbar-name">
                    ${getLocalizedText(weapon.name)}
                </p>
            </div>

            <div class="full-detail-toolbar-rarity">
                <span>
                    ${"★".repeat(weapon.rarity)}
                </span>

                <strong>
                    ${weaponType}
                </strong>
            </div>

        </div>


        <div class="full-detail-hero ${rarityClass}">

            <div class="full-detail-art-shell">

                <div class="full-detail-art">

                    <div class="full-detail-image-placeholder">
                        <span>SP</span>
                    </div>

                    <img
                        src="${weapon.image || ""}"
                        alt="${getLocalizedText(weapon.name)}"
                        onerror="
                            this.style.display='none';
                            this.parentElement.classList.add('image-missing');
                        "
                    >

                    <div class="full-detail-art-vignette"></div>

                    <div class="full-detail-art-caption">

                        <span>
                            ${"★".repeat(weapon.rarity)}
                        </span>

                        <strong>
                            ${getLocalizedText(weapon.name)}
                        </strong>

                    </div>

                </div>

            </div>


            <div class="full-detail-info">

                <p class="full-detail-kicker">
                    ${t("weapons")}
                </p>

                <h1 id="databaseDetailTitle">
                    ${getLocalizedText(weapon.name)}
                </h1>

                <div class="full-detail-rarity">

                    <span class="full-detail-stars">
                        ${"★".repeat(weapon.rarity)}
                    </span>

                    <span class="full-detail-type">
                        ${weaponType}
                    </span>

                </div>


                <div class="full-detail-grid">

                    ${createFullDetailCell(
                        t("weaponType"),
                        weapon.weaponType
                    )}

                    ${createFullDetailCell(
                        t("rarity"),
                        `${weapon.rarity} ★`
                    )}

                    ${createFullDetailCell(
                        t("type"),
                        weaponType
                    )}

                    ${
                        weapon.stat1
                            ? createFullDetailCell(
                                getLocalizedText(
                                    weapon.stat1.label
                                ),
                                weapon.stat1.value
                            )
                            : ""
                    }

                    ${
                        weapon.stat2
                            ? createFullDetailCell(
                                getLocalizedText(
                                    weapon.stat2.label
                                ),
                                weapon.stat2.value
                            )
                            : ""
                    }

                </div>


                ${
                    getLocalizedText(
                        weapon.effect
                    )

                        ? `
                            <div class="full-detail-description">

                                <p class="section-label">
                                    ${t("effect")}
                                </p>

                                <p>
                                    ${getLocalizedText(weapon.effect)}
                                </p>

                            </div>
                        `

                        : ""
                }

            </div>

        </div>


        <section class="full-detail-section">

            <div class="full-detail-section-heading">

                <p class="tag">
                    ${t("information")}
                </p>

                <h2>
                    ${t("details")}
                </h2>

            </div>

            <div
                class="full-detail-empty-area"
                aria-hidden="true"
            ></div>

        </section>

    `;

}

function renderDatabaseDetail(
    type,
    data
) {

    if (type === "character") {

        renderCharacterFullDetail(
            data
        );

        return;
    }

    if (type === "weapon") {

        renderWeaponFullDetail(
            data
        );

    }

}


function openDatabaseDetail(
    type,
    data
) {

    if (
        !databaseDetailModal ||
        !databaseDetailContent
    ) {
        return;
    }

    window.currentFullDetailEntry = {
        type: type,
        data: data
    };

    renderDatabaseDetail(
        type,
        data
    );

    databaseDetailModal.classList.add(
        "active"
    );

    databaseDetailModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );

}


function closeDatabaseDetail() {

    if (!databaseDetailModal) {
        return;
    }

    databaseDetailModal.classList.remove(
        "active"
    );

    databaseDetailModal.setAttribute(
        "aria-hidden",
        "true"
    );

    window.currentFullDetailEntry =
        null;

    if (
        !feedbackModal ||
        !feedbackModal.classList.contains(
            "active"
        )
    ) {
        document.body.classList.remove(
            "modal-open"
        );
    }

}


if (databaseDetailOverlay) {

    databaseDetailOverlay.addEventListener(
        "click",
        closeDatabaseDetail
    );

}


if (closeDatabaseDetailButton) {

    closeDatabaseDetailButton.addEventListener(
        "click",
        closeDatabaseDetail
    );

}


/* =========================================================
   FEEDBACK POPUP
========================================================= */

const FEEDBACK_EMAIL =
    "phamtuancuong23092006@gmail.com";

const openFeedbackButton =
    document.getElementById(
        "openFeedbackButton"
    );

const closeFeedbackButton =
    document.getElementById(
        "closeFeedbackButton"
    );

const feedbackModal =
    document.getElementById(
        "feedbackModal"
    );

const feedbackOverlay =
    document.getElementById(
        "feedbackOverlay"
    );

const feedbackForm =
    document.getElementById(
        "feedbackForm"
    );

const feedbackType =
    document.getElementById(
        "feedbackType"
    );

const feedbackName =
    document.getElementById(
        "feedbackName"
    );

const feedbackEmail =
    document.getElementById(
        "feedbackEmail"
    );

const feedbackMessage =
    document.getElementById(
        "feedbackMessage"
    );

const feedbackCount =
    document.getElementById(
        "feedbackCount"
    );

const feedbackStatus =
    document.getElementById(
        "feedbackStatus"
    );


function openFeedbackModal() {

    if (!feedbackModal) {
        return;
    }

    feedbackModal.classList.add(
        "active"
    );

    feedbackModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );

    setTimeout(
        function () {

            if (feedbackMessage) {
                feedbackMessage.focus();
            }

        },
        180
    );

}


function closeFeedbackModal() {

    if (!feedbackModal) {
        return;
    }

    feedbackModal.classList.remove(
        "active"
    );

    feedbackModal.setAttribute(
        "aria-hidden",
        "true"
    );

    if (
        !databaseDetailModal ||
        !databaseDetailModal.classList.contains(
            "active"
        )
    ) {
        document.body.classList.remove(
            "modal-open"
        );
    }

}


if (openFeedbackButton) {

    openFeedbackButton.addEventListener(
        "click",
        openFeedbackModal
    );

}


if (closeFeedbackButton) {

    closeFeedbackButton.addEventListener(
        "click",
        closeFeedbackModal
    );

}


if (feedbackOverlay) {

    feedbackOverlay.addEventListener(
        "click",
        closeFeedbackModal
    );

}


document.addEventListener(
    "keydown",
    function (event) {

        if (event.key !== "Escape") {
            return;
        }

        if (
            databaseDetailModal &&
            databaseDetailModal.classList.contains(
                "active"
            )
        ) {
            closeDatabaseDetail();
            return;
        }

        if (
            feedbackModal &&
            feedbackModal.classList.contains(
                "active"
            )
        ) {
            closeFeedbackModal();
        }

    }
);


if (
    feedbackForm &&
    feedbackMessage &&
    feedbackCount &&
    feedbackStatus
) {

    feedbackMessage.addEventListener(
        "input",
        function () {

            feedbackCount.textContent =
                `${feedbackMessage.value.length} / 1000`;

            feedbackStatus.textContent =
                "";

        }
    );


    feedbackForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const message =
                feedbackMessage.value.trim();

            if (message === "") {

                feedbackStatus.textContent =
                    t("pleaseEnterFeedback");

                return;
            }

            const selectedOption =
                feedbackType.options[
                    feedbackType.selectedIndex
                ];

            const type =
                selectedOption.textContent.trim();

            const name =
                feedbackName.value.trim() ||
                "Not provided";

            const senderEmail =
                feedbackEmail.value.trim() ||
                "Not provided";

            const subject =
                `[The Detective Archive Feedback] ${type}`;

            const body =
`The Detective Archive Feedback

Type: ${type}

Name: ${name}

Email: ${senderEmail}

--------------------------------

${message}`;

            const mailLink =
                `mailto:${FEEDBACK_EMAIL}` +
                `?subject=${encodeURIComponent(subject)}` +
                `&body=${encodeURIComponent(body)}`;

            feedbackStatus.textContent =
                t("openingEmail");

            window.location.href =
                mailLink;

        }
    );

}
