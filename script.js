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

    if (!newsList || !newsCount) {
        return;
    }

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

    if (newsData[0]) {
        bindNewsEntry(featuredNews, newsData[0]);
    }

    if (newsData[1]) {
        bindNewsEntry(sideNewsOne, newsData[1]);
    }

    if (newsData[2]) {
        bindNewsEntry(sideNewsTwo, newsData[2]);
    }

}


/* =========================================================
   NEWS DETAIL MODAL
========================================================= */

const newsDetailModal =
    document.getElementById("newsDetailModal");

const newsDetailOverlay =
    document.getElementById("newsDetailOverlay");

const closeNewsDetailButton =
    document.getElementById("closeNewsDetailButton");

const newsDetailCategory =
    document.getElementById("newsDetailCategory");

const newsDetailDate =
    document.getElementById("newsDetailDate");

const newsDetailIndex =
    document.getElementById("newsDetailIndex");

const newsDetailTitle =
    document.getElementById("newsDetailTitle");

const newsDetailSummary =
    document.getElementById("newsDetailSummary");

const newsDetailTags =
    document.getElementById("newsDetailTags");

const newsDetailBody =
    document.getElementById("newsDetailBody");

const newsDetailNoteLabel =
    document.getElementById("newsDetailNoteLabel");

const newsDetailNoteText =
    document.getElementById("newsDetailNoteText");


function getNewsById(newsId) {
    return newsData.find(function (news) {
        return news.id === newsId;
    });
}


function bindNewsEntry(element, news) {

    if (!element || !news) {
        return;
    }

    element.dataset.newsId = news.id;
    element.setAttribute("role", "button");
    element.setAttribute("tabindex", "0");
    element.setAttribute(
        "aria-label",
        `${getLocalizedText(news.title)} — ${t("readMore")}`
    );

    element.onclick = function (event) {
        event.preventDefault();
        openNewsDetail(news.id);
    };

    element.onkeydown = function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openNewsDetail(news.id);
        }
    };
}


function renderNewsDetail(news) {

    if (!news || !newsDetailModal) {
        return;
    }

    const entryNumber =
        Math.max(1, newsData.indexOf(news) + 1);

    const content =
        getLocalizedText(news.content);

    const paragraphs =
        Array.isArray(content)
            ? content
            : content
                ? [content]
                : [getLocalizedText(news.description)];

    newsDetailCategory.textContent =
        getNewsCategory(news.category);

    newsDetailDate.textContent =
        news.date || "";

    newsDetailIndex.textContent =
        `${t("archiveEntry")} ${String(entryNumber).padStart(2, "0")}`;

    newsDetailTitle.textContent =
        getLocalizedText(news.title);

    newsDetailSummary.textContent =
        getLocalizedText(news.description);

    newsDetailTags.innerHTML =
        Array.isArray(news.tags)
            ? news.tags
                .map(function (tag) {
                    return `<span>${tag}</span>`;
                })
                .join("")
            : "";

    newsDetailBody.innerHTML =
        paragraphs
            .filter(Boolean)
            .map(function (paragraph) {
                return `<p>${paragraph}</p>`;
            })
            .join("");

    newsDetailNoteLabel.textContent =
        t("archiveNote");

    newsDetailNoteText.textContent =
        t("newsBetaNote");
}


function openNewsDetail(newsId) {

    if (!newsDetailModal) {
        return;
    }

    const news =
        typeof newsId === "string"
            ? getNewsById(newsId)
            : newsId;

    if (!news) {
        return;
    }

    window.currentNewsDetailId = news.id;

    renderNewsDetail(news);

    newsDetailModal.classList.add("active");
    newsDetailModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    setTimeout(function () {
        if (closeNewsDetailButton) {
            closeNewsDetailButton.focus();
        }
    }, 80);
}


function closeNewsDetail() {

    if (!newsDetailModal) {
        return;
    }

    newsDetailModal.classList.remove("active");
    newsDetailModal.setAttribute("aria-hidden", "true");
    window.currentNewsDetailId = null;

    const otherModalOpen =
        (databaseDetailModal && databaseDetailModal.classList.contains("active")) ||
        (feedbackModal && feedbackModal.classList.contains("active"));

    if (!otherModalOpen) {
        document.body.classList.remove("modal-open");
    }
}


if (newsDetailOverlay) {
    newsDetailOverlay.onclick = closeNewsDetail;
}

if (closeNewsDetailButton) {
    closeNewsDetailButton.onclick = closeNewsDetail;
}


/* =========================================================
   CHARACTER RANKINGS - FRAMEWORK V1
   Filters and score-ready sorting are live.
   Numeric scores remain unpublished until verified.
========================================================= */

const rankingRows =
    document.getElementById("rankingRows");

const rankingTable =
    document.querySelector(".ranking-table");

const rankingCategoryButtons =
    document.querySelectorAll(".ranking-tab-button");

const rankingSearch =
    document.getElementById("rankingSearch");

const rankingRoleFilter =
    document.getElementById("rankingRoleFilter");

const rankingAttributeFilter =
    document.getElementById("rankingAttributeFilter");

const rankingRarityFilter =
    document.getElementById("rankingRarityFilter");

const rankingResultsCount =
    document.getElementById("rankingResultsCount");

const rankingCategoryName =
    document.getElementById("rankingCategoryName");

const rankingCategoryDescription =
    document.getElementById("rankingCategoryDescription");

let activeRankingCategory = "overall";

let rankingFilters = {
    search: "",
    role: "all",
    attribute: "all",
    rarity: "all"
};


function getRankingInitials(name) {

    const parts =
        String(name || "")
            .replace(/[\"']/g, "")
            .trim()
            .split(/\s+/)
            .filter(Boolean);

    if (parts.length === 0) {
        return "?";
    }

    return parts
        .slice(0, 2)
        .map(function (part) {
            return part[0].toUpperCase();
        })
        .join("");

}


function getRankingCharacterField(character, field) {

    if (character[field]) {
        return character[field];
    }

    if (
        Array.isArray(character.variants) &&
        character.variants.length > 0
    ) {
        const preferred =
            character.variants.find(function (variant) {
                return variant.id === character.defaultVariant;
            }) || character.variants[0];

        return preferred[field] || "";
    }

    return "";

}


function getRankingRecord(characterId, category) {

    if (
        typeof rankingSystemData === "undefined" ||
        !rankingSystemData.scores ||
        !rankingSystemData.scores[characterId]
    ) {
        return null;
    }

    const record =
        rankingSystemData.scores[characterId][category];

    if (record === null || record === undefined) {
        return null;
    }

    if (typeof record === "number") {
        return {
            score: record,
            tier: ""
        };
    }

    return record;

}


function getRankingCategoryCopy(category) {

    const copy = {
        overall: {
            name: t("overall"),
            description: t("rankingOverallDescription")
        },
        damage: {
            name: t("damage"),
            description: t("rankingDamageDescription")
        },
        break: {
            name: t("break"),
            description: t("rankingBreakDescription")
        },
        support: {
            name: t("support"),
            description: t("rankingSupportDescription")
        },
        survival: {
            name: t("survival"),
            description: t("rankingSurvivalDescription")
        }
    };

    return copy[category] || copy.overall;

}


function getUniqueRankingValues(field) {

    return Array.from(
        new Set(
            charactersData
                .map(function (character) {
                    return getRankingCharacterField(character, field);
                })
                .filter(Boolean)
        )
    ).sort(function (a, b) {
        return String(a).localeCompare(String(b));
    });

}


function setRankingSelectOptions(select, values, allLabel, selectedValue) {

    if (!select) {
        return;
    }

    select.innerHTML = "";

    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = allLabel;
    select.appendChild(allOption);

    values.forEach(function (value) {
        const option = document.createElement("option");
        option.value = String(value);
        option.textContent = String(value);
        select.appendChild(option);
    });

    select.value =
        Array.from(select.options).some(function (option) {
            return option.value === String(selectedValue);
        })
            ? String(selectedValue)
            : "all";

}


function renderRankingFilters() {

    setRankingSelectOptions(
        rankingRoleFilter,
        getUniqueRankingValues("combatStyle"),
        t("allCombatStyles"),
        rankingFilters.role
    );

    setRankingSelectOptions(
        rankingAttributeFilter,
        getUniqueRankingValues("reactorAttribute"),
        t("allAttributes"),
        rankingFilters.attribute
    );

    setRankingSelectOptions(
        rankingRarityFilter,
        Array.from(new Set(charactersData.map(function (character) {
            return character.rarity;
        }))).sort(function (a, b) { return b - a; }),
        t("allRarities"),
        rankingFilters.rarity
    );

}


function characterMatchesRankingFilters(character) {

    const name =
        getLocalizedText(character.name).toLowerCase();

    const role =
        String(getRankingCharacterField(character, "combatStyle") || "");

    const attribute =
        String(getRankingCharacterField(character, "reactorAttribute") || "");

    const search =
        rankingFilters.search.trim().toLowerCase();

    if (search && !name.includes(search)) {
        return false;
    }

    if (
        rankingFilters.role !== "all" &&
        role !== rankingFilters.role
    ) {
        return false;
    }

    if (
        rankingFilters.attribute !== "all" &&
        attribute !== rankingFilters.attribute
    ) {
        return false;
    }

    if (
        rankingFilters.rarity !== "all" &&
        String(character.rarity) !== String(rankingFilters.rarity)
    ) {
        return false;
    }

    return true;

}


function getFilteredRankingCharacters() {

    return charactersData
        .filter(characterMatchesRankingFilters)
        .map(function (character, originalIndex) {
            return {
                character: character,
                originalIndex: originalIndex,
                record: getRankingRecord(
                    character.id,
                    activeRankingCategory
                )
            };
        })
        .sort(function (a, b) {

            const aScore =
                a.record && Number.isFinite(Number(a.record.score))
                    ? Number(a.record.score)
                    : null;

            const bScore =
                b.record && Number.isFinite(Number(b.record.score))
                    ? Number(b.record.score)
                    : null;

            if (aScore !== null && bScore !== null) {
                return bScore - aScore;
            }

            if (aScore !== null) {
                return -1;
            }

            if (bScore !== null) {
                return 1;
            }

            return a.originalIndex - b.originalIndex;
        });

}


function renderRankings() {

    if (!rankingRows) {
        return;
    }

    renderRankingFilters();

    const categoryCopy =
        getRankingCategoryCopy(activeRankingCategory);

    if (rankingCategoryName) {
        rankingCategoryName.textContent = categoryCopy.name;
    }

    if (rankingCategoryDescription) {
        rankingCategoryDescription.textContent =
            categoryCopy.description;
    }

    rankingRows.innerHTML = "";

    const entries =
        getFilteredRankingCharacters();

    if (rankingResultsCount) {
        rankingResultsCount.textContent =
            `${entries.length} ${entries.length === 1 ? t("character").toUpperCase() : t("characters").toUpperCase()}`;
    }

    if (entries.length === 0) {
        rankingRows.innerHTML = `
            <div class="ranking-empty-state">
                <strong>${t("noRankingMatches")}</strong>
                <span>${t("adjustRankingFilters")}</span>
            </div>
        `;
        return;
    }

    let publishedRank = 0;

    const publishedScoreCount =
        entries.filter(function (entry) {
            return entry.record &&
                Number.isFinite(Number(entry.record.score));
        }).length;

    entries.forEach(function (entry) {

        const character = entry.character;
        const record = entry.record;

        const row =
            document.createElement("div");

        row.className = "ranking-row";
        row.dataset.characterId = character.id;

        const characterName =
            getLocalizedText(character.name);

        const role =
            getRankingCharacterField(character, "combatStyle") || "--";

        const attribute =
            getRankingCharacterField(character, "reactorAttribute") || "--";

        const hasScore =
            record && Number.isFinite(Number(record.score));

        if (hasScore) {
            publishedRank += 1;
        }

        const scoreText =
            hasScore
                ? Number(record.score).toFixed(1).replace(/\.0$/, "")
                : "--";

        const tierText =
            record && record.tier
                ? String(record.tier)
                : "--";

        const explicitTopPercent =
            record && Number.isFinite(Number(record.topPercent))
                ? Number(record.topPercent)
                : null;

        const calculatedTopPercent =
            hasScore && publishedScoreCount > 0
                ? (publishedRank / publishedScoreCount) * 100
                : null;

        const topPercentValue =
            explicitTopPercent !== null
                ? explicitTopPercent
                : calculatedTopPercent;

        const topPercentText =
            topPercentValue !== null
                ? `Top ${topPercentValue < 10
                    ? topPercentValue.toFixed(1).replace(/\.0$/, "")
                    : Math.round(topPercentValue)}%`
                : "--";

        const image =
            character.images && character.images.card
                ? character.images.card
                : "";

        row.innerHTML = `
            <span class="ranking-position">${hasScore ? publishedRank : "--"}</span>

            <div class="ranking-character">
                <span class="ranking-character-badge">
                    ${image
                        ? `<img src="${image}" alt="" onerror="this.remove(); this.parentElement.textContent='${getRankingInitials(characterName)}';">`
                        : getRankingInitials(characterName)
                    }
                </span>

                <div>
                    <strong>${characterName}</strong>
                    <small>${character.rarity} ★ · ${getLocalizedText(character.identity) || t("previewData")}</small>
                </div>
            </div>

            <span class="ranking-role">${getLocalizedText(role)}</span>
            <span class="ranking-attribute">${getLocalizedText(attribute)}</span>
            <span class="ranking-score ${hasScore ? "has-value" : "is-pending"}">${scoreText}</span>
            <span class="ranking-percentile ${hasScore ? "has-value" : "is-pending"}">${topPercentText}</span>
            <span class="ranking-tier ${tierText !== "--" ? "has-value" : "is-pending"}">${tierText}</span>
        `;

        row.setAttribute("role", "button");
        row.tabIndex = 0;

        function openRankingCharacter() {
            if (typeof openDatabaseDetail === "function") {
                selectCharacter(character);
                openDatabaseDetail("character", character);
            }
        }

        row.addEventListener("click", openRankingCharacter);

        row.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openRankingCharacter();
            }
        });

        rankingRows.appendChild(row);

    });

    if (rankingTable) {
        rankingTable.scrollTop = 0;
    }

}


rankingCategoryButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            activeRankingCategory =
                button.dataset.rankingCategory ||
                "overall";

            rankingCategoryButtons.forEach(
                function (item) {
                    item.classList.toggle(
                        "active",
                        item === button
                    );
                }
            );

            renderRankings();

        }
    );

});


if (rankingSearch) {
    rankingSearch.addEventListener("input", function () {
        rankingFilters.search = rankingSearch.value;
        renderRankings();
    });
}

if (rankingRoleFilter) {
    rankingRoleFilter.addEventListener("change", function () {
        rankingFilters.role = rankingRoleFilter.value;
        renderRankings();
    });
}

if (rankingAttributeFilter) {
    rankingAttributeFilter.addEventListener("change", function () {
        rankingFilters.attribute = rankingAttributeFilter.value;
        renderRankings();
    });
}

if (rankingRarityFilter) {
    rankingRarityFilter.addEventListener("change", function () {
        rankingFilters.rarity = rankingRarityFilter.value;
        renderRankings();
    });
}


/* =========================
   CHARACTER / MOTIVE / SIMULATION DATABASE
========================= */

const characterGrid =
    document.getElementById("characterGrid");

const weaponGrid =
    document.getElementById("weaponGrid");

const simulationGrid =
    document.getElementById("simulationGrid");

const epiphanyGrid =
    document.getElementById("epiphanyGrid");

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

const simulationSearch =
    document.getElementById("simulationSearch");

const epiphanySearch =
    document.getElementById("epiphanySearch");

const characterAttributeFilters =
    document.getElementById("characterAttributeFilters");

const characterStyleFilter =
    document.getElementById("characterStyleFilter");

const characterRarityFilter =
    document.getElementById("characterRarityFilter");

const characterFilterReset =
    document.getElementById("characterFilterReset");

const characterResultCount =
    document.getElementById("characterResultCount");

const weaponTypeFiltersContainer =
    document.getElementById("weaponTypeFilters");

let activeCharacterAttribute = "all";
let activeCharacterStyle = "all";
let activeCharacterRarity = "all";
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

    if (character.availability === "preview") {
        return t("previewData");
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
            t("rarity"),
            `${weapon.rarity} ★`
        )}

        ${createSummaryRow(
            t("identity"),
            weapon.identity
        )}

        ${createSummaryRow(
            t("availability"),
            weapon.availability
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

        <p class="entry-description motive-beta-note">
            ${t("previewDataNote")}
        </p>

    `;

}



function selectSimulation(simulationSet) {

    window.selectedDatabaseEntry = {
        type: "simulation",
        data: simulationSet
    };

    selectedType.textContent =
        t("simulation").toUpperCase();

    selectedName.textContent =
        getLocalizedText(simulationSet.name);

    const knownPieces =
        Array.isArray(simulationSet.slots)
            ? simulationSet.slots
                .filter(function (piece) {
                    return piece && piece.name;
                })
                .map(function (piece) {
                    return `${piece.slot}: ${getLocalizedText(piece.name)}`;
                })
                .join(" · ")
            : "";

    selectedDescription.innerHTML = `
        ${createSummaryRow(
            t("simulationSetType"),
            simulationSet.type || t("implementSet")
        )}

        ${createSummaryRow(
            t("simulationSlots"),
            "Head · Neck · Secondary Weapon · Accessory"
        )}

        ${createSummaryRow(
            t("observedStatus"),
            simulationSet.observedStatus
        )}

        ${createSummaryRow(
            t("observedOn"),
            simulationSet.observedOn
        )}

        ${createSummaryRow(
            t("knownPieces"),
            knownPieces
        )}

        ${
            getLocalizedText(simulationSet.description)
                ? `
                    <p class="entry-description">
                        ${getLocalizedText(simulationSet.description)}
                    </p>
                `
                : ""
        }
    `;

}

function selectEpiphany(epiphany) {

    window.selectedDatabaseEntry = {
        type: "epiphany",
        data: epiphany
    };

    selectedType.textContent =
        t("epiphanies").toUpperCase();

    selectedName.textContent =
        getLocalizedText(epiphany.name);

    selectedDescription.innerHTML = `
        ${createSummaryRow(t("literarySource"), epiphany.sourceText)}
        ${createSummaryRow(t("authorOrigin"), epiphany.authorOrigin)}
        ${createSummaryRow(t("category"), epiphany.category)}
        ${createSummaryRow(t("observedStatus"), epiphany.observedStatus)}
        ${createSummaryRow(t("observedOn"), epiphany.observedOn)}

        <p class="entry-description">
            ${epiphany.passive ? getLocalizedText(epiphany.passive) : t("epiphanyPassivePending")}
        </p>
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


function getCharacterCombatStyle(character) {

    if (!character) {
        return "";
    }

    if (character.combatStyle) {
        return getLocalizedText(character.combatStyle);
    }

    if (Array.isArray(character.variants)) {
        const variantWithStyle = character.variants.find(function (variant) {
            return variant && variant.combatStyle;
        });

        if (variantWithStyle) {
            return getLocalizedText(variantWithStyle.combatStyle);
        }
    }

    return "";
}


function populateCharacterStyleFilter() {

    if (!characterStyleFilter) {
        return;
    }

    const previousValue = activeCharacterStyle;

    const styles = Array.from(
        new Set(
            charactersData
                .map(getCharacterCombatStyle)
                .map(function (value) {
                    return String(value || "").trim();
                })
                .filter(Boolean)
        )
    ).sort(function (a, b) {
        return a.localeCompare(b);
    });

    characterStyleFilter.innerHTML = "";

    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = t("allCombatStyles");
    characterStyleFilter.appendChild(allOption);

    styles.forEach(function (style) {
        const option = document.createElement("option");
        option.value = style;
        option.textContent = style;
        characterStyleFilter.appendChild(option);
    });

    characterStyleFilter.value = styles.includes(previousValue) ? previousValue : "all";
    activeCharacterStyle = characterStyleFilter.value;
}


function updateCharacterRarityFilterLabels() {

    if (!characterRarityFilter) {
        return;
    }

    const allOption = characterRarityFilter.querySelector('option[value="all"]');

    if (allOption) {
        allOption.textContent = t("allRarities");
    }
}


function updateCharacterFilterResultCount(filteredCount) {

    if (!characterResultCount) {
        return;
    }

    characterResultCount.textContent = filteredCount + " / " + charactersData.length;
}


function applyCharacterFilters() {

    const keyword = characterSearch ? characterSearch.value.toLowerCase().trim() : "";

    const filteredCharacters = charactersData.filter(function (character) {

        const matchesSearch = !keyword || getCharacterSearchText(character).includes(keyword);

        const matchesAttribute = characterMatchesAttribute(
            character,
            activeCharacterAttribute
        );

        const combatStyle = normalizeDatabaseFilterValue(
            getCharacterCombatStyle(character)
        );

        const matchesStyle =
            activeCharacterStyle === "all" ||
            combatStyle === normalizeDatabaseFilterValue(activeCharacterStyle);

        const matchesRarity =
            activeCharacterRarity === "all" ||
            String(character.rarity || "") === String(activeCharacterRarity);

        return matchesSearch && matchesAttribute && matchesStyle && matchesRarity;
    });

    updateCharacterFilterResultCount(filteredCharacters.length);
    renderCharacters(filteredCharacters);
}


function applyWeaponFilters() {

    const keyword =
        weaponSearch
            ? weaponSearch.value.toLowerCase().trim()
            : "";

    const filteredWeapons =
        weaponsData.filter(function (weapon) {

            const motiveSearchText = [
                getLocalizedText(weapon.name),
                weapon.identity || "",
                weapon.availability || "",
                weapon.stat1 ? getLocalizedText(weapon.stat1.label) : "",
                weapon.stat2 ? getLocalizedText(weapon.stat2.label) : ""
            ]
                .join(" ")
                .toLowerCase();

            const matchesSearch =
                !keyword || motiveSearchText.includes(keyword);

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

            ${(() => {
                const defaultVariant =
                    Array.isArray(character.variants)
                        ? (character.variants.find(function (variant) {
                            return variant.id === character.defaultVariant;
                        }) || character.variants[0])
                        : null;

                const reactorAttribute =
                    character.reactorAttribute ||
                    defaultVariant?.reactorAttribute ||
                    "";

                const combatStyle =
                    character.combatStyle ||
                    defaultVariant?.combatStyle ||
                    "";

                if (!reactorAttribute && !combatStyle) {
                    return "";
                }

                return `
                    <div class="character-card-meta">
                        ${reactorAttribute
                            ? `<span class="character-meta-chip character-meta-attribute">${getLocalizedText(reactorAttribute)}</span>`
                            : ""}
                        ${combatStyle
                            ? `<span class="character-meta-chip character-meta-style">${getLocalizedText(combatStyle)}</span>`
                            : ""}
                    </div>
                `;
            })()}


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
                    weapon.rarity === 5 && weapon.limited
                        ? `
                            <span class="limited-badge">
                                ${t("limited").toUpperCase()}
                            </span>
                        `
                        : weapon.featured
                            ? `
                                <span class="featured-badge">
                                    ${t("featured").toUpperCase()}
                                </span>
                            `
                            : ""
                }

            </div>


            <div class="card-image weapon-image">

                <div class="motive-card-placeholder" aria-hidden="true">
                    M
                </div>

                ${
                    weapon.image
                        ? `
                            <img
                                src="${weapon.image}"
                                alt="${getLocalizedText(weapon.name)}"
                                onerror="
                                    this.style.display='none';
                                    this.parentElement.classList.add('image-missing');
                                "
                            >
                        `
                        : ""
                }

            </div>


            <div class="weapon-name">
                ${getLocalizedText(weapon.name)}
            </div>

            ${
                weapon.identity
                    ? `<div class="motive-card-identity">${weapon.identity}</div>`
                    : `<div class="motive-card-identity motive-card-identity-unverified">CBT2</div>`
            }


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


function applySimulationFilters() {

    if (!simulationGrid || !Array.isArray(simulationData)) {
        return;
    }

    const searchValue =
        normalizeDatabaseFilterValue(
            simulationSearch ? simulationSearch.value : ""
        );

    const filtered =
        simulationData.filter(function (simulationSet) {

            if (!searchValue) {
                return true;
            }

            const slotText =
                Array.isArray(simulationSet.slots)
                    ? simulationSet.slots.map(function (piece) {
                        return `${piece.slot || ""} ${getLocalizedText(piece.name || "")}`;
                    }).join(" ")
                    : "";

            const searchable =
                [
                    getLocalizedText(simulationSet.name),
                    simulationSet.type,
                    simulationSet.observedStatus,
                    simulationSet.observedOn,
                    getLocalizedText(simulationSet.description),
                    slotText
                ]
                    .join(" ")
                    .toLowerCase();

            return searchable.includes(searchValue);

        });

    renderSimulations(filtered);

}


function renderSimulations(simulationSets) {

    if (!simulationGrid) {
        return;
    }

    simulationGrid.innerHTML = "";

    simulationSets.forEach(function (simulationSet) {

        const card =
            document.createElement("article");

        card.className =
            "database-card simulation-card";

        card.dataset.id =
            simulationSet.id;

        const knownPieceCount =
            Array.isArray(simulationSet.slots)
                ? simulationSet.slots.filter(function (piece) {
                    return piece && piece.name;
                }).length
                : 0;

        card.innerHTML = `
            <div class="simulation-card-top">
                <span class="simulation-card-symbol">S</span>
                <span class="simulation-card-status">CBT2</span>
            </div>

            <div class="simulation-card-name">
                ${getLocalizedText(simulationSet.name)}
            </div>

            <div class="simulation-card-meta">
                <span>${t("fourImplementSlots")}</span>
                <span>${knownPieceCount > 0 ? `${knownPieceCount} ${t("knownPieces").toLowerCase()}` : t("setEffectPending")}</span>
            </div>

            <div class="simulation-card-slots" aria-hidden="true">
                ${["H", "N", "SW", "A"].map(function (label) {
                    return `<span>${label}</span>`;
                }).join("")}
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

                selectSimulation(
                    simulationSet
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

                selectSimulation(
                    simulationSet
                );

                openDatabaseDetail(
                    "simulation",
                    simulationSet
                );

            }
        );

        simulationGrid.appendChild(
            card
        );

    });

}


function applyEpiphanyFilters() {

    if (!epiphanyGrid || !Array.isArray(epiphanyData)) {
        return;
    }

    const searchValue =
        normalizeDatabaseFilterValue(
            epiphanySearch ? epiphanySearch.value : ""
        );

    const filtered = epiphanyData.filter(function (epiphany) {

        if (!searchValue) {
            return true;
        }

        const searchable = [
            epiphany.name,
            epiphany.sourceText,
            epiphany.authorOrigin,
            epiphany.category,
            epiphany.observedOn
        ].join(" ").toLowerCase();

        return searchable.includes(searchValue);
    });

    renderEpiphanies(filtered);
}


function renderEpiphanies(epiphanies) {

    if (!epiphanyGrid) {
        return;
    }

    epiphanyGrid.innerHTML = "";

    epiphanies.forEach(function (epiphany) {

        const card = document.createElement("article");
        card.className = "database-card epiphany-card";
        card.dataset.id = epiphany.id;

        card.innerHTML = `
            <div class="epiphany-card-top">
                <span class="epiphany-book-icon">E</span>
                <span class="epiphany-card-status">CBT2</span>
            </div>

            <div class="epiphany-card-name">${getLocalizedText(epiphany.name)}</div>

            <div class="epiphany-card-source">
                <span>${t("literarySource")}</span>
                <strong>${getLocalizedText(epiphany.sourceText)}</strong>
            </div>

            <div class="epiphany-card-category">${getLocalizedText(epiphany.category)}</div>

            <button type="button" class="database-detail-button">
                ${t("viewDetails")}
            </button>
        `;

        card.addEventListener("click", function (event) {
            if (event.target.closest(".database-detail-button")) {
                return;
            }
            selectEpiphany(epiphany);
        });

        const detailButton = card.querySelector(".database-detail-button");
        detailButton.addEventListener("click", function (event) {
            event.stopPropagation();
            selectEpiphany(epiphany);
            openDatabaseDetail("epiphany", epiphany);
        });

        epiphanyGrid.appendChild(card);
    });
}


/* Generate website content */

renderNewsSystem();
renderRankings();

populateCharacterStyleFilter();
updateCharacterRarityFilterLabels();
renderCharacterAttributeFilters();
renderWeaponTypeFilters();

applyCharacterFilters();
applyWeaponFilters();
applySimulationFilters();
applyEpiphanyFilters();


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

if (characterStyleFilter) {
    characterStyleFilter.addEventListener(
        "change",
        function () {
            activeCharacterStyle = characterStyleFilter.value;
            applyCharacterFilters();
        }
    );
}

if (characterRarityFilter) {
    characterRarityFilter.addEventListener(
        "change",
        function () {
            activeCharacterRarity = characterRarityFilter.value;
            applyCharacterFilters();
        }
    );
}

if (characterFilterReset) {
    characterFilterReset.addEventListener(
        "click",
        function () {
            activeCharacterAttribute = "all";
            activeCharacterStyle = "all";
            activeCharacterRarity = "all";

            if (characterSearch) {
                characterSearch.value = "";
            }

            if (characterStyleFilter) {
                characterStyleFilter.value = "all";
            }

            if (characterRarityFilter) {
                characterRarityFilter.value = "all";
            }

            renderCharacterAttributeFilters();
            applyCharacterFilters();
        }
    );
}

weaponSearch.addEventListener(
    "input",
    applyWeaponFilters
);

if (simulationSearch) {
    simulationSearch.addEventListener(
        "input",
        applySimulationFilters
    );
}

if (epiphanySearch) {
    epiphanySearch.addEventListener(
        "input",
        applyEpiphanyFilters
    );
}


/* =========================================================
   REFRESH AFTER LANGUAGE CHANGE
========================================================= */

window.refreshDynamicContent = function () {

    populateCharacterStyleFilter();
    updateCharacterRarityFilterLabels();

    renderNewsSystem();
    renderRankings();

    if (
        window.currentNewsDetailId &&
        newsDetailModal &&
        newsDetailModal.classList.contains("active")
    ) {
        const activeNews = getNewsById(window.currentNewsDetailId);
        if (activeNews) {
            renderNewsDetail(activeNews);
        }
    }

    renderCharacterAttributeFilters();
    renderWeaponTypeFilters();

    applyCharacterFilters();
    applyWeaponFilters();
    applySimulationFilters();
    applyEpiphanyFilters();

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

        if (selected.type === "simulation") {
            selectSimulation(
                selected.data
            );
        }

        if (selected.type === "epiphany") {
            selectEpiphany(
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

    const baseStats =
        getCharacterVariantField(
            character,
            activeVariant,
            "baseStats"
        ) || null;

    const skills =
        getCharacterVariantField(
            character,
            activeVariant,
            "skills"
        );

    const combatWeapon =
        getCharacterVariantField(
            character,
            activeVariant,
            "combatWeapon"
        );

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

                    ${createFullDetailCell(
                        t("combatWeapon"),
                        combatWeapon
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


        ${
            baseStats
                ? `
                    <section class="full-detail-section character-stats-section">

                        <div class="full-detail-section-heading">
                            <p class="tag">${t("betaVerifiedData")}</p>
                            <h2>${t("baseStats")}</h2>
                        </div>

                        <div class="character-base-stats-grid">
                            <div class="character-stat-card">
                                <span>${t("statLevel")}</span>
                                <strong>${baseStats.level ?? "--"}</strong>
                            </div>
                            <div class="character-stat-card">
                                <span>${t("hp")}</span>
                                <strong>${baseStats.hp ?? "--"}</strong>
                            </div>
                            <div class="character-stat-card">
                                <span>${t("atk")}</span>
                                <strong>${baseStats.atk ?? "--"}</strong>
                            </div>
                            <div class="character-stat-card">
                                <span>${t("def")}</span>
                                <strong>${baseStats.def ?? "--"}</strong>
                            </div>
                            <div class="character-stat-card">
                                <span>${t("critRate")}</span>
                                <strong>${baseStats.critRate ?? "--"}</strong>
                            </div>
                            <div class="character-stat-card">
                                <span>${t("critDamage")}</span>
                                <strong>${baseStats.critDamage ?? "--"}</strong>
                            </div>
                        </div>

                    </section>
                `
                : ""
        }

        <section class="full-detail-section full-detail-skills-section">

            <div class="full-detail-section-heading">

                <p class="tag">
                    ${t("combat")}
                </p>

                <h2>
                    ${t("skills")}
                </h2>

            </div>

            ${
                Array.isArray(skills) && skills.length > 0
                    ? `
                        <div class="character-skill-list">
                            ${
                                skills.map(
                                    function (skill) {
                                        return `
                                            <article class="character-skill-card">
                                                <div class="character-skill-type">
                                                    ${t(skill.type || "skill")}
                                                </div>
                                                <h3>${getLocalizedText(skill.name)}</h3>
                                                <p>${getLocalizedText(skill.description)}</p>
                                            </article>
                                        `;
                                    }
                                ).join("")
                            }
                        </div>
                    `
                    : `
                        <div class="character-unverified-message">
                            ${t("noVerifiedSkills")}
                        </div>
                    `
            }

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
                    : "full-detail-rarity-3";

    const availabilityLabel =
        weapon.availability ||
        (weapon.limited ? t("limited") : t("standard"));

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
                    ${weapon.featured ? t("featured") : availabilityLabel}
                </strong>
            </div>

        </div>


        <div class="full-detail-hero ${rarityClass}">

            <div class="full-detail-art-shell">

                <div class="full-detail-art">

                    <div class="full-detail-image-placeholder motive-detail-placeholder">
                        <span>M</span>
                    </div>

                    ${
                        weapon.image
                            ? `
                                <img
                                    src="${weapon.image}"
                                    alt="${getLocalizedText(weapon.name)}"
                                    onerror="
                                        this.style.display='none';
                                        this.parentElement.classList.add('image-missing');
                                    "
                                >
                            `
                            : ""
                    }

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
                        ${weapon.identity || "CBT2"}
                    </span>

                </div>


                <div class="full-detail-grid">

                    ${createFullDetailCell(
                        t("rarity"),
                        `${weapon.rarity} ★`
                    )}

                    ${
                        weapon.identity
                            ? createFullDetailCell(
                                t("identity"),
                                weapon.identity
                            )
                            : ""
                    }

                    ${createFullDetailCell(
                        t("availability"),
                        availabilityLabel
                    )}

                    ${
                        weapon.stat1
                            ? createFullDetailCell(
                                getLocalizedText(
                                    weapon.stat1.label
                                ),
                                getLocalizedText(weapon.stat1.value)
                            )
                            : ""
                    }

                    ${
                        weapon.stat2
                            ? createFullDetailCell(
                                getLocalizedText(
                                    weapon.stat2.label
                                ),
                                getLocalizedText(weapon.stat2.value)
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

                <div class="full-detail-description motive-beta-warning">
                    <p class="section-label">
                        ${t("previewData")}
                    </p>
                    <p>
                        ${t("previewDataNote")}
                    </p>
                </div>

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

            <div class="motive-detail-summary">
                <p>
                    Motive data shown here comes from closed-beta banner/gallery observations and beta database coverage. Missing values are intentionally not inferred.
                </p>
            </div>

        </section>

    `;

}


function renderSimulationFullDetail(
    simulationSet
) {

    const slots =
        Array.isArray(simulationSet.slots)
            ? simulationSet.slots
            : [];

    const headPiece =
        slots.find(function (piece) {
            return piece && piece.slot === "Head";
        }) || {};

    const knownStats =
        headPiece.knownStats || {};

    function renderKnownStatsBlock(label, stats) {

        if (!Array.isArray(stats) || stats.length === 0) {
            return "";
        }

        return `
            <div class="simulation-known-stat-block">
                <span>${label}</span>
                <div>
                    ${stats.map(function (stat) {
                        return `
                            <p>
                                <strong>${getLocalizedText(stat.label)}</strong>
                                <em>${getLocalizedText(stat.value)}</em>
                            </p>
                        `;
                    }).join("")}
                </div>
            </div>
        `;
    }

    databaseDetailContent.innerHTML = `

        <div class="full-detail-toolbar">

            <div>
                <p class="tag">
                    ${t("simulationDetails")}
                </p>

                <p class="full-detail-toolbar-name">
                    ${getLocalizedText(simulationSet.name)}
                </p>
            </div>

            <div class="simulation-toolbar-badge">
                ${t("dichotomyBeta")}
            </div>

        </div>


        <div class="full-detail-hero simulation-detail-hero">

            <div class="full-detail-art-shell">

                <div class="full-detail-art simulation-detail-art">

                    <div class="full-detail-image-placeholder simulation-detail-placeholder">
                        <span>S</span>
                    </div>

                    <div class="full-detail-art-vignette"></div>

                    <div class="full-detail-art-caption">
                        <span>${t("implementSet")}</span>
                        <strong>${getLocalizedText(simulationSet.name)}</strong>
                    </div>

                </div>

            </div>


            <div class="full-detail-info">

                <p class="full-detail-kicker">
                    ${t("simulation")}
                </p>

                <h1 id="databaseDetailTitle">
                    ${getLocalizedText(simulationSet.name)}
                </h1>

                <div class="full-detail-grid">

                    ${createFullDetailCell(
                        t("simulationSetType"),
                        simulationSet.type || t("implementSet")
                    )}

                    ${createFullDetailCell(
                        t("implementSlots"),
                        "4"
                    )}

                    ${createFullDetailCell(
                        t("observedStatus"),
                        simulationSet.observedStatus || t("dichotomyBeta")
                    )}

                    ${
                        simulationSet.observedOn
                            ? createFullDetailCell(
                                t("observedOn"),
                                simulationSet.observedOn
                            )
                            : ""
                    }

                </div>


                <div class="full-detail-description">

                    <p class="section-label">
                        ${t("details")}
                    </p>

                    <p>
                        ${getLocalizedText(simulationSet.description) || t("simulationDatabaseDescription")}
                    </p>

                </div>

                <div class="full-detail-description motive-beta-warning">
                    <p class="section-label">
                        ${t("previewData")}
                    </p>
                    <p>
                        ${t("previewDataNote")}
                    </p>
                </div>

            </div>

        </div>


        <section class="full-detail-section">

            <div class="full-detail-section-heading">
                <p class="tag">${t("implements")}</p>
                <h2>${t("fourImplementSlots")}</h2>
            </div>

            <div class="simulation-detail-slot-grid">

                ${["Head", "Neck", "Secondary Weapon", "Accessory"].map(function (slotName) {

                    const piece =
                        slots.find(function (item) {
                            return item && item.slot === slotName;
                        }) || {};

                    return `
                        <article class="simulation-detail-slot-card">
                            <span>${slotName}</span>
                            <strong>${getLocalizedText(piece.name) || "--"}</strong>
                            <small>${piece.name ? t("verifiedBetaPiece") : t("pieceNamePending")}</small>
                        </article>
                    `;

                }).join("")}

            </div>

        </section>


        ${
            headPiece.name
                ? `
                    <section class="full-detail-section">

                        <div class="full-detail-section-heading">
                            <p class="tag">${t("knownPieceData")}</p>
                            <h2>${getLocalizedText(headPiece.name)}</h2>
                        </div>

                        <div class="simulation-known-piece">
                            ${renderKnownStatsBlock("Green · Lv.60", knownStats.greenLv60)}
                            ${renderKnownStatsBlock("Purple · Lv.60", knownStats.purpleLv60)}
                        </div>

                        <p class="simulation-data-note">
                            ${t("implementStatsFixedNote")}
                        </p>

                    </section>
                `
                : ""
        }


        <section class="full-detail-section">

            <div class="full-detail-section-heading">
                <p class="tag">${t("systemRules")}</p>
                <h2>${t("simulationSystem")}</h2>
            </div>

            <div class="simulation-rule-grid">
                <article>
                    <strong>${t("fixedStats")}</strong>
                    <p>${t("fixedStatsDescription")}</p>
                </article>

                <article>
                    <strong>${t("noGearLeveling")}</strong>
                    <p>${t("noGearLevelingDescription")}</p>
                </article>

                <article>
                    <strong>${t("conditionalSetBonus")}</strong>
                    <p>${t("conditionalSetBonusDescription")}</p>
                </article>

                <article>
                    <strong>${t("epiphanySeparate")}</strong>
                    <p>${t("epiphanySeparateDescription")}</p>
                </article>
            </div>

        </section>

    `;

}


function renderEpiphanyFullDetail(epiphany) {

    if (!databaseDetailContent) {
        return;
    }

    const passiveMarkup = epiphany.passive
        ? `<p>${getLocalizedText(epiphany.passive)}</p>`
        : `<p class="simulation-data-note">${t("epiphanyPassivePending")}</p>`;

    databaseDetailContent.innerHTML = `
        <div class="database-detail-toolbar">
            <div>
                <p class="tag">${t("epiphanyDetails")}</p>
                <h2>${getLocalizedText(epiphany.name)}</h2>
            </div>
            <div class="simulation-toolbar-badge">CBT2</div>
        </div>

        <div class="full-detail-hero epiphany-detail-hero">
            <div class="full-detail-art epiphany-detail-art">
                <div class="epiphany-large-book" aria-hidden="true">
                    <span>E</span>
                </div>
            </div>

            <div class="full-detail-summary">
                <p class="tag">${t("epiphany")}</p>
                <h1>${getLocalizedText(epiphany.name)}</h1>

                <div class="full-detail-summary-grid">
                    ${createSummaryRow(t("literarySource"), epiphany.sourceText)}
                    ${createSummaryRow(t("authorOrigin"), epiphany.authorOrigin)}
                    ${createSummaryRow(t("category"), epiphany.category)}
                    ${createSummaryRow(t("observedStatus"), epiphany.observedStatus)}
                    ${createSummaryRow(t("observedOn"), epiphany.observedOn)}
                </div>
            </div>
        </div>

        <section class="full-detail-section">
            <div class="full-detail-section-heading">
                <p class="tag">${t("passive")}</p>
                <h2>${t("epiphanyPassive")}</h2>
            </div>
            <div class="epiphany-passive-panel">${passiveMarkup}</div>
        </section>

        <section class="full-detail-section">
            <div class="full-detail-section-heading">
                <p class="tag">${t("systemRules")}</p>
                <h2>${t("epiphanySystem")}</h2>
            </div>

            <div class="simulation-rule-grid">
                <article>
                    <strong>${t("dedicatedBookSlot")}</strong>
                    <p>${t("dedicatedBookSlotDescription")}</p>
                </article>
                <article>
                    <strong>${t("notCharacterLocked")}</strong>
                    <p>${t("notCharacterLockedDescription")}</p>
                </article>
                <article>
                    <strong>${t("separateFromImplements")}</strong>
                    <p>${t("separateFromImplementsDescription")}</p>
                </article>
                <article>
                    <strong>${t("storyButton")}</strong>
                    <p>${t("storyButtonDescription")}</p>
                </article>
            </div>
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

        return;
    }

    if (type === "simulation") {

        renderSimulationFullDetail(
            data
        );

        return;
    }

    if (type === "epiphany") {

        renderEpiphanyFullDetail(
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
            newsDetailModal &&
            newsDetailModal.classList.contains("active")
        ) {
            closeNewsDetail();
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

/* =========================================================
   EXPANDED CHARACTER DETAIL DATABASE
   Overrides the earlier character-detail renderer while
   keeping the existing modal, character cards and filters.
========================================================= */

function renderDetailListItems(items) {
    if (!Array.isArray(items) || items.length === 0) {
        return "";
    }

    return `
        <ul class="character-detail-bullet-list">
            ${items.map(function (item) {
                return `<li>${getLocalizedText(item)}</li>`;
            }).join("")}
        </ul>
    `;
}

function renderCharacterStatCards(snapshot) {
    if (!snapshot) {
        return `
            <div class="character-stat-unavailable">
                <strong>${t("statDataUnavailable")}</strong>
                <p>${t("betaStatNote")}</p>
            </div>
        `;
    }

    const statEntries = [
        [t("statLevel"), snapshot.level ?? "--"],
        [t("hp"), snapshot.hp ?? "--"],
        [t("atk"), snapshot.atk ?? "--"],
        [t("def"), snapshot.def ?? "--"],
        [t("critRate"), snapshot.critRate ?? "--"],
        [t("critDamage"), snapshot.critDamage ?? "--"]
    ];

    return `
        <div class="character-base-stats-grid character-base-stats-grid-large">
            ${statEntries.map(function (entry) {
                return `
                    <div class="character-stat-card">
                        <span>${entry[0]}</span>
                        <strong>${entry[1]}</strong>
                    </div>
                `;
            }).join("")}
        </div>
    `;
}

function getCharacterStatSnapshot(baseStats, mode) {
    if (!baseStats) {
        return null;
    }

    if (mode === "level1") {
        if (baseStats.level1) {
            return baseStats.level1;
        }

        if (Number(baseStats.level) === 1) {
            return baseStats;
        }
    }

    if (mode === "max") {
        if (baseStats.max) {
            return baseStats.max;
        }

        if (baseStats.isMaxLevel === true || baseStats.snapshotType === "max") {
            return baseStats;
        }
    }

    return null;
}

function renderCharacterObservedStatSnapshot(baseStats) {
    if (!baseStats) {
        return "";
    }

    const isLevelOne = Number(baseStats.level) === 1;
    const isMax = baseStats.isMaxLevel === true || baseStats.snapshotType === "max";

    if (isLevelOne || isMax) {
        return "";
    }

    return `
        <div class="character-observed-stats">
            <div class="character-observed-heading">
                <span>${t("observedBetaStats")}</span>
                <strong>${t("previewLevel")} ${baseStats.level ?? "--"}</strong>
            </div>
            ${renderCharacterStatCards(baseStats)}
        </div>
    `;
}

function renderDetailedCharacterSkill(skill, index) {
    const mechanics = renderDetailListItems(skill.mechanics);
    const combos = renderDetailListItems(skill.combo);
    const resourceText = getLocalizedText(skill.resource);
    const hasDetails = Boolean(mechanics || combos || resourceText);

    return `
        <details class="character-skill-detail-card" ${index === 0 ? "open" : ""}>
            <summary>
                <div class="character-skill-summary-main">
                    <span class="character-skill-type">${t(skill.type || "skill")}</span>
                    <h3>${getLocalizedText(skill.name)}</h3>
                </div>
                <span class="character-skill-expand-mark">+</span>
            </summary>

            <div class="character-skill-detail-body">
                <p class="character-skill-description">${getLocalizedText(skill.description)}</p>

                ${resourceText
                    ? `
                        <div class="character-skill-subsection">
                            <span>${t("resource")}</span>
                            <p>${resourceText}</p>
                        </div>
                    `
                    : ""
                }

                ${mechanics
                    ? `
                        <div class="character-skill-subsection">
                            <span>${t("mechanics")}</span>
                            ${mechanics}
                        </div>
                    `
                    : ""
                }

                ${combos
                    ? `
                        <div class="character-skill-subsection character-skill-combo-block">
                            <span>${t("comboRoutes")}</span>
                            ${combos}
                        </div>
                    `
                    : ""
                }

                ${!hasDetails
                    ? `<p class="character-detail-pending">${t("detailedMechanicsPending")}</p>`
                    : ""
                }
            </div>
        </details>
    `;
}

function renderCharacterSpecialMechanics(mechanics) {
    if (!Array.isArray(mechanics) || mechanics.length === 0) {
        return "";
    }

    return `
        <div class="character-special-mechanics">
            <div class="character-subsection-heading">
                <span>${t("specialMechanics")}</span>
            </div>
            <div class="character-mechanic-grid">
                ${mechanics.map(function (mechanic) {
                    return `
                        <article class="character-mechanic-card">
                            <div class="character-mechanic-title-row">
                                <h3>${getLocalizedText(mechanic.name)}</h3>
                                ${mechanic.max !== undefined
                                    ? `<span>${t("maxValue")} ${mechanic.max}</span>`
                                    : ""
                                }
                            </div>
                            <p>${getLocalizedText(mechanic.description)}</p>
                            ${mechanic.max !== undefined
                                ? `
                                    <div class="character-mechanic-meter" aria-hidden="true">
                                        <span></span><span></span><span></span><span></span><span></span>
                                    </div>
                                `
                                : ""
                            }
                        </article>
                    `;
                }).join("")}
            </div>
        </div>
    `;
}

function renderCharacterBuildPanel(character, activeVariant) {
    const buildData = getCharacterVariantField(character, activeVariant, "build") || {};

    const motive = buildData.motive || {};
    const simulation = buildData.simulation || {};
    const epiphany = buildData.epiphany || {};
    const methods = buildData.methods || {};
    const statPriority = Array.isArray(buildData.statPriority) ? buildData.statPriority : [];
    const buildNotes = Array.isArray(buildData.notes) ? buildData.notes : [];
    const motiveCandidates = Array.isArray(motive.candidates) ? motive.candidates : [];
    const confidenceNote = getLocalizedText(buildData.confidence || "");

    const motiveName = getLocalizedText(motive.name || "");
    const motiveNote = getLocalizedText(motive.note || "");
    const simulationSet = getLocalizedText(simulation.setName || "");
    const simulationNote = getLocalizedText(simulation.note || "");
    const epiphanyName = getLocalizedText(epiphany.name || "");
    const epiphanyNote = getLocalizedText(epiphany.note || "");
    const methodsNote = getLocalizedText(methods.note || "");

    return `
        <div class="character-build-beta-note">
            <span>${t("betaBuildStructure")}</span>
            <p>${t("betaBuildStructureNote")}</p>
            ${confidenceNote
                ? `<div class="character-build-confidence"><strong>${t("buildConfidence")}</strong><span>${confidenceNote}</span></div>`
                : ""
            }
        </div>

        <div class="character-build-layer-grid">
            <article class="character-build-layer-card character-build-layer-motive">
                <div class="character-build-layer-heading">
                    <span class="character-build-layer-icon">M</span>
                    <div>
                        <p>${t("gachaEquipment")}</p>
                        <h3>${t("motive")}</h3>
                    </div>
                </div>
                <div class="character-build-value">
                    <span>${t("recommended")}</span>
                    <strong>${motiveName || "--"}</strong>
                </div>
                <p class="character-build-layer-description">${motiveNote || t("motiveBuildDescription")}</p>
                ${motiveCandidates.length > 0
                    ? `
                        <div class="character-build-candidates">
                            <span>${t("betaCandidates")}</span>
                            <div>
                                ${motiveCandidates.map(function (candidate) {
                                    return `<strong>${getLocalizedText(candidate)}</strong>`;
                                }).join("")}
                            </div>
                        </div>
                    `
                    : ""
                }
                ${motiveName ? "" : `<span class="character-build-pending">${t("recommendationPending")}</span>`}
            </article>

            <article class="character-build-layer-card character-build-layer-simulation">
                <div class="character-build-layer-heading">
                    <span class="character-build-layer-icon">S</span>
                    <div>
                        <p>${t("equipmentSet")}</p>
                        <h3>${t("simulation")}</h3>
                    </div>
                </div>

                <div class="character-simulation-slots" aria-label="${t("simulationSlots")}">
                    ${[
                        { key: "implementHead", short: "H" },
                        { key: "implementNeck", short: "N" },
                        { key: "implementSecondaryWeapon", short: "SW" },
                        { key: "implementAccessory", short: "A" }
                    ].map(function (slotConfig, index) {
                        const piece = Array.isArray(simulation.pieces) ? simulation.pieces[index] : null;
                        return `
                            <div class="character-simulation-slot ${piece ? "filled" : ""}">
                                <span>${slotConfig.short}</span>
                                <small>${t(slotConfig.key)}</small>
                                <strong>${piece ? getLocalizedText(piece.name || piece) : "--"}</strong>
                            </div>
                        `;
                    }).join("")}
                </div>

                <div class="character-build-value">
                    <span>${t("setBonus")}</span>
                    <strong>${simulationSet || "--"}</strong>
                </div>
                <p class="character-build-layer-description">${simulationNote || t("simulationBuildDescription")}</p>
            </article>

            <article class="character-build-layer-card character-build-layer-epiphany">
                <div class="character-build-layer-heading">
                    <span class="character-build-layer-icon">E</span>
                    <div>
                        <p>${t("separatePassiveSlot")}</p>
                        <h3>${t("epiphany")}</h3>
                    </div>
                </div>
                <div class="character-epiphany-book" aria-hidden="true">
                    <span>✦</span>
                </div>
                <div class="character-build-value">
                    <span>${t("recommended")}</span>
                    <strong>${epiphanyName || "--"}</strong>
                </div>
                <p class="character-build-layer-description">${epiphanyNote || t("epiphanyBuildDescription")}</p>
                ${epiphanyName ? "" : `<span class="character-build-pending">${t("recommendationPending")}</span>`}
            </article>

            <article class="character-build-layer-card character-build-layer-methods">
                <div class="character-build-layer-heading">
                    <span class="character-build-layer-icon">+</span>
                    <div>
                        <p>${t("skillUpgrades")}</p>
                        <h3>${t("methods")}</h3>
                    </div>
                </div>
                <p class="character-build-layer-description">${methodsNote || t("methodsBuildDescription")}</p>
                <span class="character-build-system-note">${t("notEquipment")}</span>
            </article>
        </div>

        <section class="character-build-priority-section">
            <div class="character-subsection-heading">
                <span>${t("recommendedStats")}</span>
            </div>
            ${statPriority.length > 0
                ? `
                    <div class="character-build-stat-priority">
                        ${statPriority.map(function (stat, index) {
                            return `<div><span>#${index + 1}</span><strong>${getLocalizedText(stat)}</strong></div>`;
                        }).join("")}
                    </div>
                `
                : `<div class="character-unverified-message">${t("buildRecommendationPending")}</div>`
            }
        </section>

        ${buildNotes.length > 0
            ? `
                <section class="character-build-notes-section">
                    <div class="character-subsection-heading">
                        <span>${t("buildNotes")}</span>
                    </div>
                    <div class="character-build-notes-list">
                        ${buildNotes.map(function (note) {
                            return `<p>${getLocalizedText(note)}</p>`;
                        }).join("")}
                    </div>
                </section>
            `
            : ""
        }
    `;
}

function renderCharacterPsyches(psyches) {
    if (!Array.isArray(psyches) || psyches.length === 0) {
        return `<div class="character-unverified-message">${t("noVerifiedPsyches")}</div>`;
    }

    return `
        <div class="character-psyche-grid">
            ${psyches.map(function (psyche, index) {
                return `
                    <article class="character-psyche-card">
                        <span class="character-psyche-index">P${index + 1}</span>
                        <div>
                            <h3>${getLocalizedText(psyche.name)}</h3>
                            <p>${getLocalizedText(psyche.description)}</p>
                        </div>
                    </article>
                `;
            }).join("")}
        </div>
    `;
}

function renderCharacterFullDetail(character) {

    const activeVariant = getSelectedCharacterVariant(character);
    const variants = Array.isArray(character.variants) ? character.variants : [];

    const baseImage = character.images?.splash || character.images?.card || character.image || "";
    const variantImage = activeVariant?.images?.splash || activeVariant?.images?.card || "";
    const characterImage = variantImage || baseImage;
    const fallbackImage = variantImage && baseImage && variantImage !== baseImage ? baseImage : "";

    const alias = getLocalizedText(getCharacterVariantField(character, activeVariant, "alias"));
    const characterTitle = getLocalizedText(getCharacterVariantField(character, activeVariant, "title"));
    const variantDisplayName = getLocalizedText(activeVariant?.displayName || "");
    const variantLabel = activeVariant ? t(activeVariant.labelKey || activeVariant.id) : "";

    const baseStats = getCharacterVariantField(character, activeVariant, "baseStats") || null;
    const skills = getCharacterVariantField(character, activeVariant, "skills") || [];
    const combatWeapon = getCharacterVariantField(character, activeVariant, "combatWeapon");
    const specialMechanics = getCharacterVariantField(character, activeVariant, "specialMechanics") || [];
    const psyches = getCharacterVariantField(character, activeVariant, "psyches") || [];

    if (!window.characterDetailTab) {
        window.characterDetailTab = {};
    }

    if (!window.characterStatMode) {
        window.characterStatMode = {};
    }

    const detailKey = `${character.id}:${activeVariant?.id || "base"}`;
    const activeDetailTab = window.characterDetailTab[detailKey] || "overview";

    if (!window.characterStatMode[detailKey]) {
        if (baseStats && (baseStats.isMaxLevel === true || baseStats.snapshotType === "max")) {
            window.characterStatMode[detailKey] = "max";
        }
        else {
            window.characterStatMode[detailKey] = "level1";
        }
    }

    const activeStatMode = window.characterStatMode[detailKey];
    const activeStatSnapshot = getCharacterStatSnapshot(baseStats, activeStatMode);

    const rarityClass =
        character.rarity === 5 && character.limited
            ? "full-detail-rarity-5-limited"
            : character.rarity === 5
                ? "full-detail-rarity-5-standard"
                : character.rarity === 4
                    ? "full-detail-rarity-4"
                    : "";

    databaseDetailContent.innerHTML = `
        <div class="full-detail-toolbar">
            <div>
                <p class="tag">${t("characterDetails")}</p>
                <p class="full-detail-toolbar-name">${getLocalizedText(character.name)}</p>
            </div>
            <div class="full-detail-toolbar-rarity">
                <span>${"★".repeat(character.rarity)}</span>
                <strong>${getCharacterAvailability(character)}</strong>
            </div>
        </div>

        <div class="full-detail-hero ${rarityClass}">
            <div class="full-detail-art-shell">
                <div class="full-detail-art">
                    <div class="full-detail-image-placeholder"><span>SP</span></div>
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
                        <span>${"★".repeat(character.rarity)}</span>
                        <strong>${getLocalizedText(character.name)}</strong>
                    </div>
                </div>
            </div>

            <div class="full-detail-info">
                <p class="full-detail-kicker">${t("characters")}</p>
                <h1 id="databaseDetailTitle">${getLocalizedText(character.name)}</h1>

                ${variants.length > 0
                    ? `
                        <div class="character-variant-switcher" role="tablist" aria-label="${t("variant")}">
                            ${variants.map(function (variant) {
                                const isActive = activeVariant && variant.id === activeVariant.id;
                                const name = getLocalizedText(variant.displayName || "");
                                return `
                                    <button
                                        type="button"
                                        class="character-variant-button ${isActive ? "active" : ""}"
                                        data-character-variant="${variant.id}"
                                        role="tab"
                                        aria-selected="${isActive ? "true" : "false"}"
                                    >
                                        <span>${t(variant.labelKey || variant.id)}</span>
                                        ${name ? `<strong>${name}</strong>` : ""}
                                    </button>
                                `;
                            }).join("")}
                        </div>
                    `
                    : ""
                }

                ${activeVariant
                    ? `
                        <div class="character-variant-current">
                            <span>${variantLabel}</span>
                            ${variantDisplayName ? `<strong>${variantDisplayName}</strong>` : ""}
                        </div>
                    `
                    : ""
                }

                ${character.previewData
                    ? `
                        <div class="character-preview-note">
                            <span>${t("previewData")}</span>
                            <p>${t("previewDataNote")}</p>
                        </div>
                    `
                    : ""
                }

                ${alias ? `<p class="full-detail-alias"><span>${t("alias")}</span>${alias}</p>` : ""}
                ${characterTitle ? `<p class="full-detail-title">${characterTitle}</p>` : ""}

                <div class="full-detail-rarity">
                    <span class="full-detail-stars">${"★".repeat(character.rarity)}</span>
                    <span class="full-detail-type">${getCharacterAvailability(character)}</span>
                </div>

                <div class="full-detail-grid full-detail-grid-compact">
                    ${createFullDetailCell(t("reactorAttribute"), getCharacterVariantField(character, activeVariant, "reactorAttribute"))}
                    ${createFullDetailCell(t("combatStyle"), getCharacterVariantField(character, activeVariant, "combatStyle"))}
                    ${createFullDetailCell(t("identity"), getCharacterVariantField(character, activeVariant, "identity"))}
                    ${createFullDetailCell(t("combatWeapon"), combatWeapon)}
                </div>
            </div>
        </div>

        <nav class="character-detail-tabs" aria-label="Character detail sections">
            ${[
                ["overview", t("overview")],
                ["stats", t("stats")],
                ["skills", t("skills")],
                ["psyches", t("psyches")],
                ["build", t("build")],
                ["ranking", t("ranking")]
            ].map(function (tab) {
                return `
                    <button
                        type="button"
                        class="character-detail-tab-button ${activeDetailTab === tab[0] ? "active" : ""}"
                        data-character-detail-tab="${tab[0]}"
                    >${tab[1]}</button>
                `;
            }).join("")}
        </nav>

        <div class="character-detail-tab-panels">
            <section class="character-detail-tab-panel ${activeDetailTab === "overview" ? "active" : ""}" data-character-detail-panel="overview">
                <div class="full-detail-section-heading">
                    <p class="tag">${t("information")}</p>
                    <h2>${t("overview")}</h2>
                </div>

                <div class="full-detail-grid character-overview-grid">
                    ${createFullDetailCell(t("rarity"), `${character.rarity} ★`)}
                    ${createFullDetailCell(t("type"), getCharacterAvailability(character))}
                    ${createFullDetailCell(t("reactorAttribute"), getCharacterVariantField(character, activeVariant, "reactorAttribute"))}
                    ${createFullDetailCell(t("combatStyle"), getCharacterVariantField(character, activeVariant, "combatStyle"))}
                    ${createFullDetailCell(t("identity"), getCharacterVariantField(character, activeVariant, "identity"))}
                    ${createFullDetailCell(t("affiliation"), getCharacterVariantField(character, activeVariant, "affiliation"))}
                    ${createFullDetailCell(t("occupation"), getCharacterVariantField(character, activeVariant, "occupation"))}
                    ${createFullDetailCell(t("combatWeapon"), combatWeapon)}
                </div>

                ${getLocalizedText(character.description)
                    ? `<div class="full-detail-description character-overview-description"><p>${getLocalizedText(character.description)}</p></div>`
                    : ""
                }
            </section>

            <section class="character-detail-tab-panel ${activeDetailTab === "stats" ? "active" : ""}" data-character-detail-panel="stats">
                <div class="full-detail-section-heading character-stats-heading">
                    <div>
                        <p class="tag">${t("betaVerifiedData")}</p>
                        <h2>${t("baseStats")}</h2>
                    </div>
                    <div class="character-stat-level-switcher" role="tablist" aria-label="Character stat level">
                        <button type="button" class="character-stat-level-button ${activeStatMode === "level1" ? "active" : ""}" data-character-stat-mode="level1">${t("levelOne")}</button>
                        <button type="button" class="character-stat-level-button ${activeStatMode === "max" ? "active" : ""}" data-character-stat-mode="max">${t("levelMax")}</button>
                    </div>
                </div>

                ${renderCharacterStatCards(activeStatSnapshot)}
                ${renderCharacterObservedStatSnapshot(baseStats)}

                <div class="character-beta-data-note">
                    ${activeStatMode === "max" && activeStatSnapshot ? t("levelMaxBetaNote") : t("betaStatNote")}
                </div>
            </section>

            <section class="character-detail-tab-panel ${activeDetailTab === "skills" ? "active" : ""}" data-character-detail-panel="skills">
                <div class="full-detail-section-heading">
                    <p class="tag">${t("combat")}</p>
                    <h2>${t("skills")}</h2>
                </div>

                ${renderCharacterSpecialMechanics(specialMechanics)}

                ${Array.isArray(skills) && skills.length > 0
                    ? `<div class="character-detailed-skill-list">${skills.map(renderDetailedCharacterSkill).join("")}</div>`
                    : `<div class="character-unverified-message">${t("noVerifiedSkills")}</div>`
                }
            </section>

            <section class="character-detail-tab-panel ${activeDetailTab === "psyches" ? "active" : ""}" data-character-detail-panel="psyches">
                <div class="full-detail-section-heading">
                    <p class="tag">${t("previewData")}</p>
                    <h2>${t("psyches")}</h2>
                </div>
                ${renderCharacterPsyches(psyches)}
            </section>

            <section class="character-detail-tab-panel ${activeDetailTab === "build" ? "active" : ""}" data-character-detail-panel="build">
                <div class="full-detail-section-heading">
                    <p class="tag">${t("details")}</p>
                    <h2>${t("build")}</h2>
                </div>
                ${renderCharacterBuildPanel(character, activeVariant)}
            </section>

            <section class="character-detail-tab-panel ${activeDetailTab === "ranking" ? "active" : ""}" data-character-detail-panel="ranking">
                <div class="full-detail-section-heading">
                    <p class="tag">${t("rankingPreview")}</p>
                    <h2>${t("ranking")}</h2>
                </div>
                <div class="character-ranking-preview-grid">
                    ${[t("overall"), t("damage"), t("break"), t("support"), t("survival")].map(function (label) {
                        return `<div><span>${label}</span><strong>--</strong></div>`;
                    }).join("")}
                </div>
                <div class="character-beta-data-note">${t("rankingDataPending")}</div>
            </section>
        </div>
    `;

    databaseDetailContent.querySelectorAll("[data-character-variant]").forEach(function (button) {
        button.addEventListener("click", function () {
            if (!window.characterVariantSelection) {
                window.characterVariantSelection = {};
            }

            window.characterVariantSelection[character.id] = button.dataset.characterVariant;
            renderCharacterFullDetail(character);
        });
    });

    databaseDetailContent.querySelectorAll("[data-character-detail-tab]").forEach(function (button) {
        button.addEventListener("click", function () {
            const tab = button.dataset.characterDetailTab;
            window.characterDetailTab[detailKey] = tab;

            databaseDetailContent.querySelectorAll("[data-character-detail-tab]").forEach(function (item) {
                item.classList.toggle("active", item.dataset.characterDetailTab === tab);
            });

            databaseDetailContent.querySelectorAll("[data-character-detail-panel]").forEach(function (panel) {
                panel.classList.toggle("active", panel.dataset.characterDetailPanel === tab);
            });
        });
    });

    databaseDetailContent.querySelectorAll("[data-character-stat-mode]").forEach(function (button) {
        button.addEventListener("click", function () {
            window.characterStatMode[detailKey] = button.dataset.characterStatMode;
            window.characterDetailTab[detailKey] = "stats";
            renderCharacterFullDetail(character);
        });
    });
}
