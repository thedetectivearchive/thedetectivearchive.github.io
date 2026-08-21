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

function getSortedNewsData() {
    return Array.isArray(newsData)
        ? [...newsData].sort(function (a, b) {

            const aFeatured = Boolean(a.featured);
            const bFeatured = Boolean(b.featured);

            if (aFeatured !== bFeatured) {
                return Number(bFeatured) - Number(aFeatured);
            }

            return String(b.date || "")
                .localeCompare(String(a.date || ""));
        })
        : [];
}

function setInformationPanelMedia(panel, imagePath) {

    if (!panel) {
        return;
    }

    panel.style.backgroundImage = "";
    panel.style.backgroundSize = "";
    panel.style.backgroundPosition = "";
    panel.style.backgroundRepeat = "";

    let media =
        panel.querySelector(
            ".news-panel-media"
        );

    let art =
        media
            ? media.querySelector(
                ".news-panel-art"
            )
            : null;

    if (!media) {

        media =
            document.createElement(
                "div"
            );

        media.className =
            "news-panel-media is-empty";

        art =
            document.createElement(
                "img"
            );

        art.className =
            "news-panel-art";

        art.alt = "";
        art.loading = "eager";
        art.decoding = "async";
        art.setAttribute("aria-hidden", "true");

        art.addEventListener(
            "error",
            function () {
                art.style.display = "none";
                media.classList.add("is-empty");
                media.classList.add("asset-missing");
            }
        );

        media.appendChild(art);
        panel.prepend(media);

    }

    if (imagePath) {

        art.src = imagePath;
        art.style.display = "block";

        media.classList.remove("is-empty");

    } else {

        art.removeAttribute("src");
        art.style.display = "none";

        media.classList.add("is-empty");

    }

}


function renderFeaturedNews() {

    const sortedNews = getSortedNewsData();

    if (sortedNews.length === 0) {
        return;
    }

    const news = sortedNews[0];

    featuredCategory.textContent =
        getNewsCategory(news.category);

    featuredTitle.textContent =
        getLocalizedText(news.title);

    featuredDate.textContent =
        news.date;

    featuredDescription.textContent =
        getLocalizedText(news.description);

    setInformationPanelMedia(
        featuredNews,
        news.image || ""
    );

}
function renderSideNews() {

    const sortedNews = getSortedNewsData();

    if (sortedNews[1]) {

        const news = sortedNews[1];

        sideOneCategory.textContent =
            getNewsCategory(news.category);

        sideOneTitle.textContent =
            getLocalizedText(news.title);

        sideOneDate.textContent =
            news.date;

        sideOneDescription.textContent =
            getLocalizedText(news.description);

        setInformationPanelMedia(
            sideNewsOne,
            news.image || ""
        );

    } else {

        setInformationPanelMedia(
            sideNewsOne,
            ""
        );

    }


    if (sortedNews[2]) {

        const news = sortedNews[2];

        sideTwoCategory.textContent =
            getNewsCategory(news.category);

        sideTwoTitle.textContent =
            getLocalizedText(news.title);

        sideTwoDate.textContent =
            news.date;

        sideTwoDescription.textContent =
            getLocalizedText(news.description);

        setInformationPanelMedia(
            sideNewsTwo,
            news.image || ""
        );

    } else {

        setInformationPanelMedia(
            sideNewsTwo,
            ""
        );

    }

}
function renderNewsList() {

    if (!newsList || !newsCount) {
        return;
    }

    newsList.innerHTML = "";

    const sortedNews = getSortedNewsData();


    sortedNews.forEach(
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
                            loading="lazy"
                            decoding="async"

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
                            loading="lazy"
                            decoding="async"

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
        `${sortedNews.length} ARTICLES`;

}
function renderNewsSystem() {

    const sortedNews = getSortedNewsData();

    renderFeaturedNews();

    renderSideNews();

    renderNewsList();

    if (sortedNews[0]) {
        bindNewsEntry(featuredNews, sortedNews[0]);
    }

    if (sortedNews[1]) {
        bindNewsEntry(sideNewsOne, sortedNews[1]);
    }

    if (sortedNews[2]) {
        bindNewsEntry(sideNewsTwo, sortedNews[2]);
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
        Math.max(1, getSortedNewsData().findIndex(function (entry) {
            return entry.id === news.id;
        }) + 1);

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

const characterSearchClear =
    document.getElementById("characterSearchClear");

const characterActiveFilters =
    document.getElementById("characterActiveFilters");

const characterSort =
    document.getElementById("characterSort");

const characterSortLabel =
    document.getElementById("characterSortLabel");

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
let activeCharacterSort = "default";
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


function normalizeCharacterSearchValue(value) {

    return String(value || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

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
                            loading="lazy"
                            onerror="
                                this.style.display='none';
                                this.parentElement.classList.add('icon-missing');
                            "
                        >

                        <span
                            class="database-filter-icon-fallback"
                            aria-hidden="true"
                        ></span>
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

    allButton.dataset.tooltip = t("all") + " · " + charactersData.length;
    allButton.setAttribute(
        "aria-label",
        t("all") + " (" + charactersData.length + ")"
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

        const filterLabel =
            getLocalizedText(filter.name || filter.label || value);

        const filterCount =
            charactersData.filter(function (character) {
                return characterMatchesAttribute(character, value);
            }).length;

        button.dataset.tooltip = filterLabel + " · " + filterCount;
        button.setAttribute(
            "aria-label",
            filterLabel + " (" + filterCount + ")"
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

    const rarity = String(character.rarity || "").trim();

    const values = [
        getLocalizedText(character.name),
        getLocalizedText(character.alias),
        getLocalizedText(character.title),
        getLocalizedText(character.reactorAttribute),
        getLocalizedText(character.combatStyle),
        getLocalizedText(character.identity),
        getLocalizedText(character.affiliation),
        getLocalizedText(character.occupation),
        getLocalizedText(character.availability),
        rarity,
        rarity ? rarity + " star" : "",
        rarity ? rarity + " stars" : "",
        rarity ? rarity + "★" : ""
    ];

    if (Array.isArray(character.variants)) {
        character.variants.forEach(function (variant) {
            values.push(
                getLocalizedText(variant.displayName),
                getLocalizedText(variant.reactorAttribute),
                getLocalizedText(variant.combatStyle),
                getLocalizedText(variant.identity),
                getLocalizedText(variant.affiliation),
                getLocalizedText(variant.occupation)
            );
        });
    }

    return normalizeCharacterSearchValue(values.join(" "));

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


function updateCharacterSearchControls() {

    const hasSearch =
        Boolean(characterSearch && characterSearch.value.trim());

    if (characterSearchClear) {
        characterSearchClear.hidden = !hasSearch;
        characterSearchClear.setAttribute("aria-label", t("clearSearch"));
        characterSearchClear.title = t("clearSearch");
    }

    if (characterSortLabel) {
        characterSortLabel.textContent = t("characterSortLabel");
    }

    if (characterSort) {
        characterSort.setAttribute("aria-label", t("characterSortLabel"));

        const defaultOption =
            characterSort.querySelector('option[value="default"]');

        if (defaultOption) {
            defaultOption.textContent = t("characterSortDefault");
        }

        const rarityDescOption =
            characterSort.querySelector('option[value="rarity-desc"]');

        const rarityAscOption =
            characterSort.querySelector('option[value="rarity-asc"]');

        if (rarityDescOption) {
            rarityDescOption.textContent = t("characterSortRarityDesc");
        }

        if (rarityAscOption) {
            rarityAscOption.textContent = t("characterSortRarityAsc");
        }
    }

}


function renderCharacterActiveFilters() {

    if (!characterActiveFilters) {
        return;
    }

    const filters = [];

    if (activeCharacterAttribute !== "all") {
        filters.push({
            type: "attribute",
            value: activeCharacterAttribute,
            label: activeCharacterAttribute
        });
    }

    if (activeCharacterStyle !== "all") {
        filters.push({
            type: "style",
            value: activeCharacterStyle,
            label: activeCharacterStyle
        });
    }

    if (activeCharacterRarity !== "all") {
        filters.push({
            type: "rarity",
            value: activeCharacterRarity,
            label: activeCharacterRarity + "★"
        });
    }

    characterActiveFilters.innerHTML = "";
    characterActiveFilters.hidden = filters.length === 0;
    characterActiveFilters.setAttribute("aria-label", t("activeFilters"));

    filters.forEach(function (filter) {

        const button = document.createElement("button");
        button.type = "button";
        button.className = "character-filter-chip";
        button.dataset.filterType = filter.type;
        button.dataset.filterValue = filter.value;
        button.setAttribute(
            "aria-label",
            t("removeFilter") + ": " + filter.label
        );

        const label = document.createElement("span");
        label.textContent = filter.label;

        const close = document.createElement("span");
        close.className = "character-filter-chip-close";
        close.setAttribute("aria-hidden", "true");
        close.textContent = "×";

        button.appendChild(label);
        button.appendChild(close);

        button.addEventListener("click", function () {

            if (filter.type === "attribute") {
                activeCharacterAttribute = "all";
                renderCharacterAttributeFilters();
            }

            if (filter.type === "style") {
                activeCharacterStyle = "all";
                if (characterStyleFilter) {
                    characterStyleFilter.value = "all";
                }
            }

            if (filter.type === "rarity") {
                activeCharacterRarity = "all";
                if (characterRarityFilter) {
                    characterRarityFilter.value = "all";
                }
            }

            applyCharacterFilters();

        });

        characterActiveFilters.appendChild(button);

    });

}


function sortCharacterResults(characters) {

    const sorted = characters.slice();

    if (activeCharacterSort === "default") {
        return sorted;
    }

    if (activeCharacterSort === "name-asc" || activeCharacterSort === "name-desc") {
        const direction = activeCharacterSort === "name-desc" ? -1 : 1;

        return sorted.sort(function (a, b) {
            return getLocalizedText(a.name).localeCompare(
                getLocalizedText(b.name),
                currentLanguage,
                { sensitivity: "base" }
            ) * direction;
        });
    }

    if (activeCharacterSort === "rarity-desc" || activeCharacterSort === "rarity-asc") {
        const direction = activeCharacterSort === "rarity-asc" ? 1 : -1;

        return sorted.sort(function (a, b) {
            const rarityDifference =
                (Number(a.rarity) || 0) - (Number(b.rarity) || 0);

            if (rarityDifference !== 0) {
                return rarityDifference * direction;
            }

            return getLocalizedText(a.name).localeCompare(
                getLocalizedText(b.name),
                currentLanguage,
                { sensitivity: "base" }
            );
        });
    }

    return sorted;

}


function resetCharacterFilters() {

    activeCharacterAttribute = "all";
    activeCharacterStyle = "all";
    activeCharacterRarity = "all";
    activeCharacterSort = "default";

    if (characterSearch) {
        characterSearch.value = "";
    }

    if (characterStyleFilter) {
        characterStyleFilter.value = "all";
    }

    if (characterRarityFilter) {
        characterRarityFilter.value = "all";
    }

    if (characterSort) {
        characterSort.value = "default";
    }

    renderCharacterAttributeFilters();
    applyCharacterFilters();

}


function applyCharacterFilters() {

    const keyword = characterSearch
        ? normalizeCharacterSearchValue(characterSearch.value)
        : "";

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

    const sortedCharacters =
        sortCharacterResults(filteredCharacters);

    updateCharacterFilterResultCount(filteredCharacters.length);
    updateCharacterSearchControls();
    renderCharacterActiveFilters();
    renderCharacters(sortedCharacters);
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

    if (!characters.length) {
        const emptyState = document.createElement("div");
        emptyState.className = "character-empty-state";
        emptyState.innerHTML = `
            <strong>${t("noCharacterMatches")}</strong>
            <span>${t("adjustCharacterFilters")}</span>
            <button type="button" class="character-empty-reset">${t("resetFilters")}</button>
        `;

        const resetButton =
            emptyState.querySelector(".character-empty-reset");

        if (resetButton) {
            resetButton.addEventListener("click", resetCharacterFilters);
        }

        characterGrid.appendChild(emptyState);
        return;
    }

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
                    loading="lazy"
                    decoding="async"
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
                                loading="lazy"
                                decoding="async"
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


function getSimulationCardImagePath(simulationSet) {

    if (!simulationSet) {
        return "";
    }

    return simulationSet.cardImage || simulationSet.image || "";
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
            ${getSimulationCardImagePath(simulationSet) ? `
                <div class="database-card-media simulation-card-media">
                    <img src="${getSimulationCardImagePath(simulationSet)}" alt="${getLocalizedText(simulationSet.name)}" loading="lazy" decoding="async" onerror="this.style.display='none'; this.parentElement.classList.add('asset-missing')">
                </div>
            ` : ""}

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
            ${epiphany.image ? `
                <div class="database-card-media epiphany-card-media">
                    <img src="${epiphany.image}" alt="${getLocalizedText(epiphany.name)}" loading="lazy" decoding="async" onerror="this.style.display='none'; this.parentElement.classList.add('asset-missing')">
                </div>
            ` : ""}

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
updateCharacterSearchControls();
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



if (uidInput) {
    uidInput.disabled = true;
    uidInput.setAttribute("aria-disabled", "true");
}

if (uidSearchButton) {
    uidSearchButton.disabled = true;
    uidSearchButton.setAttribute("aria-disabled", "true");
}

function searchPlayer() {

    /*
        PLAYER LOOKUP PLACEHOLDER ONLY

        No demo, guessed, or fabricated player data is shown.
        Real lookup will be connected only after a reliable
        official/public Silver Palace player-data source exists.
    */

    if (uidMessage) {
        uidMessage.textContent = t("lookupWaiting");
        delete uidMessage.dataset.changed;
    }

}
/* =========================
   DATABASE SEARCH
========================= */

characterSearch.addEventListener(
    "input",
    applyCharacterFilters
);

if (characterSearchClear) {
    characterSearchClear.addEventListener(
        "click",
        function () {
            if (characterSearch) {
                characterSearch.value = "";
                characterSearch.focus();
            }

            applyCharacterFilters();
        }
    );
}

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

if (characterSort) {
    characterSort.addEventListener(
        "change",
        function () {
            activeCharacterSort = characterSort.value;
            applyCharacterFilters();
        }
    );
}

if (characterFilterReset) {
    characterFilterReset.addEventListener(
        "click",
        resetCharacterFilters
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
    updateCharacterSearchControls();

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
                        decoding="async"
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


function getMotiveBuildReferences(weapon) {

    const motiveName =
        getLocalizedText(weapon.name).trim();

    const references = [];

    function inspectBuild(character, variant, build) {

        if (!build || !build.motive) {
            return;
        }

        const motive = build.motive;

        const directName =
            getLocalizedText(motive.name || "").trim();

        const candidates =
            Array.isArray(motive.candidates)
                ? motive.candidates.map(function (item) {
                    return getLocalizedText(item).trim();
                })
                : [];

        const isDirect =
            directName &&
            directName === motiveName;

        const isCandidate =
            candidates.includes(motiveName);

        if (!isDirect && !isCandidate) {
            return;
        }

        const baseName =
            getLocalizedText(character.name);

        const variantName =
            variant
                ? getLocalizedText(
                    variant.displayName ||
                    variant.name ||
                    ""
                )
                : "";

        references.push({
            name:
                variantName
                    ? `${baseName} — ${variantName}`
                    : baseName,
            characterId: character.id,
            type:
                isDirect
                    ? "recommended"
                    : "candidate"
        });

    }

    charactersData.forEach(function (character) {

        inspectBuild(
            character,
            null,
            character.build
        );

        if (Array.isArray(character.variants)) {
            character.variants.forEach(function (variant) {
                inspectBuild(
                    character,
                    variant,
                    variant.build
                );
            });
        }

    });

    const seen = new Set();

    return references.filter(function (item) {

        const key =
            `${item.characterId}:${item.name}:${item.type}`;

        if (seen.has(key)) {
            return false;
        }

        seen.add(key);
        return true;

    });

}


function renderMotiveBuildReferences(
    weapon
) {

    const references =
        getMotiveBuildReferences(weapon);

    if (references.length === 0) {
        return `
            <div class="character-unverified-message">
                ${t("noMotiveUsers")}
            </div>
        `;
    }

    return `
        <div class="motive-users-grid">

            ${references.map(function (item) {

                const character =
                    charactersData.find(function (entry) {
                        return entry.id === item.characterId;
                    });

                return `
                    <button
                        type="button"
                        class="motive-user-card"
                        data-motive-user-character="${item.characterId}"
                    >
                        <span class="motive-user-status">
                            ${
                                item.type === "recommended"
                                    ? t("recommended")
                                    : t("betaCandidate")
                            }
                        </span>

                        <strong>
                            ${item.name}
                        </strong>

                        <small>
                            ${character
                                ? [
                                    character.combatStyle,
                                    character.identity
                                ].filter(Boolean).join(" · ")
                                : ""
                            }
                        </small>
                    </button>
                `;

            }).join("")}

        </div>
    `;

}


function renderMotiveStatCards(
    weapon
) {

    const stats = [
        weapon.stat1,
        weapon.stat2
    ].filter(Boolean);

    if (stats.length === 0) {
        return `
            <div class="motive-data-status-card pending">
                <span>${t("secondaryStat")}</span>
                <strong>${t("notTranscribed")}</strong>
                <p>${t("motiveNoSecondaryStatLine")}</p>
            </div>
        `;
    }

    return `
        <div class="motive-scaling-grid">

            ${stats.map(function (stat) {
                return `
                    <article class="motive-scaling-card">

                        <span>
                            ${getLocalizedText(stat.label)}
                        </span>

                        <strong>
                            ${getLocalizedText(stat.value)}
                        </strong>

                        ${
                            stat.refine
                                ? `
                                    <small class="motive-stat-refine">
                                        ${t("refineRange")}: ${stat.refine}
                                    </small>
                                `
                                : ""
                        }

                        ${
                            stat.rawBetaLabel
                                ? `
                                    <small class="motive-raw-label-note">
                                        ${t("rawBetaStatLabel")}
                                    </small>
                                `
                                : ""
                        }

                    </article>
                `;
            }).join("")}

        </div>
    `;

}


function renderMotiveUpgradeData(
    weapon
) {

    if (!weapon.upgrade) {
        return `
            <div class="motive-data-status-card pending">
                <span>${t("upgradeListing")}</span>
                <strong>${t("notTranscribed")}</strong>
                <p>${t("motiveNoUpgradeListing")}</p>
            </div>
        `;
    }

    const quantities =
        Array.isArray(
            weapon.upgrade.materialQuantities
        )
            ? weapon.upgrade.materialQuantities
            : [];

    return `
        <div class="motive-upgrade-block">

            <div class="motive-upgrade-heading">
                <div>
                    <span>${t("upgradeListing")}</span>
                    <strong>${t("dichotomyBeta")}</strong>
                </div>

                <div class="motive-upgrade-currency">
                    <span>${t("listedSilverium")}</span>
                    <strong>
                        ${Number(
                            weapon.upgrade.silverium || 0
                        ).toLocaleString("en-US")}
                    </strong>
                </div>
            </div>

            ${
                quantities.length > 0
                    ? `
                        <div class="motive-material-quantity-grid">

                            ${quantities.map(function (
                                quantity,
                                index
                            ) {
                                return `
                                    <div class="motive-material-quantity">
                                        <span>
                                            ${t("material")} ${index + 1}
                                        </span>
                                        <strong>
                                            ×${quantity}
                                        </strong>
                                    </div>
                                `;
                            }).join("")}

                        </div>
                    `
                    : ""
            }

            <p class="motive-upgrade-note">
                ${t("motiveMaterialNamesNote")}
            </p>

        </div>
    `;

}


function renderMotiveArchiveNote(
    weapon
) {

    const note =
        getLocalizedText(
            weapon.archiveNote || ""
        );

    if (!note) {
        return "";
    }

    return `
        <article class="motive-note-wide">
            <span>${t("archiveNote")}</span>
            <p>${note}</p>
        </article>
    `;

}

function renderWeaponFullDetail(
    weapon
) {

    // Motive cards and Motive Detail intentionally use separate images.
    // `image` is card-only; `detailImage` is full splash artwork.
    const motiveDetailArtwork =
        weapon.detailImage ||
        "";

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

    if (!window.motiveDetailTab) {
        window.motiveDetailTab = {};
    }

    const activeDetailTab =
        window.motiveDetailTab[weapon.id] ||
        "overview";

    const verifiedEffect =
        getLocalizedText(
            weapon.effect
        );

    const stats = [
        weapon.stat1,
        weapon.stat2
    ].filter(Boolean);

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
                    ${
                        weapon.featured
                            ? t("featured")
                            : availabilityLabel
                    }
                </strong>

            </div>

        </div>


        <div class="full-detail-hero motive-full-detail-hero ${rarityClass}">

            <div class="full-detail-art-shell">

                <div class="full-detail-art motive-full-detail-art ${motiveDetailArtwork ? "has-motive-detail-image" : ""}">

                    <div class="full-detail-image-placeholder motive-detail-placeholder">
                        <span>M</span>
                        <small>MOTIVE</small>
                    </div>

                    ${
                        motiveDetailArtwork
                            ? `
                                <img
                                    src="${motiveDetailArtwork}"
                                    alt="${getLocalizedText(weapon.name)} full artwork"
                                    decoding="async"
                                    loading="eager"
                                    data-motive-detail-image="true"
                                    onerror="
                                        this.style.display='none';
                                        this.parentElement.classList.remove('has-motive-detail-image');
                                        this.parentElement.classList.add('image-missing');
                                    "
                                >
                            `
                            : ""
                    }


                </div>

            </div>


            <div class="full-detail-info character-detail-info motive-detail-info">

                <p class="full-detail-kicker">
                    ${t("weapons")}
                </p>

                <h1 id="databaseDetailTitle">
                    ${getLocalizedText(weapon.name)}
                </h1>

                <div class="character-preview-note motive-preview-note">
                    <span>${t("previewData")}</span>
                    <p>${t("previewDataNote")}</p>
                </div>

                <div class="full-detail-rarity">

                    <span class="full-detail-stars">
                        ${"★".repeat(weapon.rarity)}
                    </span>

                    <span class="full-detail-type">
                        ${weapon.identity || "CBT2"}
                    </span>

                </div>


                <div class="full-detail-grid full-detail-grid-compact">

                    ${createFullDetailCell(
                        t("rarity"),
                        `${weapon.rarity} ★`
                    )}

                    ${createFullDetailCell(
                        t("identity"),
                        weapon.identity ||
                        t("unverified")
                    )}

                    ${createFullDetailCell(
                        t("availability"),
                        availabilityLabel
                    )}

                    ${createFullDetailCell(
                        t("featuredStatus"),
                        weapon.featured
                            ? t("featured")
                            : t("notFeatured")
                    )}

                </div>

            </div>

        </div>


        <nav class="character-detail-tabs motive-detail-tabs" aria-label="Motive detail sections">

            ${[
                ["overview", t("overview")],
                ["effects", t("effects")],
                ["scaling", t("scaling")],
                ["users", t("users")],
                ["notes", t("notes")]
            ].map(function (tab) {

                return `
                    <button
                        type="button"
                        class="character-detail-tab-button ${activeDetailTab === tab[0] ? "active" : ""}"
                        data-motive-detail-tab="${tab[0]}"
                    >
                        ${tab[1]}
                    </button>
                `;

            }).join("")}

        </nav>


        <div class="character-detail-tab-panels motive-detail-tab-panels">

            <section
                class="character-detail-tab-panel ${activeDetailTab === "overview" ? "active" : ""}"
                data-motive-detail-panel="overview"
            >

                <div class="full-detail-section-heading">
                    <p class="tag">${t("information")}</p>
                    <h2>${t("overview")}</h2>
                </div>

                <div class="full-detail-grid character-overview-grid">

                    ${createFullDetailCell(
                        t("rarity"),
                        `${weapon.rarity} ★`
                    )}

                    ${createFullDetailCell(
                        t("identity"),
                        weapon.identity ||
                        t("unverified")
                    )}

                    ${createFullDetailCell(
                        t("availability"),
                        availabilityLabel
                    )}

                    ${createFullDetailCell(
                        t("source"),
                        t("dichotomyBeta")
                    )}

                    ${createFullDetailCell(
                        t("refineData"),
                        weapon.stat1 && weapon.stat1.refine
                            ? weapon.stat1.refine
                            : t("notTranscribed")
                    )}

                    ${createFullDetailCell(
                        t("upgradeData"),
                        weapon.upgrade
                            ? t("recorded")
                            : t("notTranscribed")
                    )}

                </div>

                <div class="full-detail-description motive-overview-note">

                    <p class="section-label">
                        ${t("motiveArchiveStatus")}
                    </p>

                    <p>
                        ${t("motiveArchiveStatusNote")}
                    </p>

                </div>

            </section>


            <section
                class="character-detail-tab-panel ${activeDetailTab === "effects" ? "active" : ""}"
                data-motive-detail-panel="effects"
            >

                <div class="full-detail-section-heading">
                    <p class="tag">${t("betaVerifiedData")}</p>
                    <h2>${t("effects")}</h2>
                </div>

                ${
                    verifiedEffect
                        ? `
                            <article class="motive-effect-card">

                                <span>
                                    ${t("effect")}
                                </span>

                                <p>
                                    ${verifiedEffect}
                                </p>

                            </article>
                        `
                        : `
                            <div class="character-unverified-message">
                                ${t("noVerifiedMotiveEffect")}
                            </div>
                        `
                }

            </section>


            <section
                class="character-detail-tab-panel ${activeDetailTab === "scaling" ? "active" : ""}"
                data-motive-detail-panel="scaling"
            >

                <div class="full-detail-section-heading">
                    <p class="tag">${t("betaVerifiedData")}</p>
                    <h2>${t("scaling")}</h2>
                </div>

                <div class="motive-scaling-section">
                    <p class="section-label">
                        ${t("secondaryRefineStat")}
                    </p>

                    ${renderMotiveStatCards(weapon)}
                </div>

                <div class="motive-scaling-section">
                    ${renderMotiveUpgradeData(weapon)}
                </div>

                <div class="character-beta-data-note">
                    ${t("motiveScalingNote")}
                </div>

            </section>


            <section
                class="character-detail-tab-panel ${activeDetailTab === "users" ? "active" : ""}"
                data-motive-detail-panel="users"
            >

                <div class="full-detail-section-heading">
                    <p class="tag">${t("build")}</p>
                    <h2>${t("users")}</h2>
                </div>

                <div class="character-beta-data-note motive-users-note">
                    ${t("motiveUsersNote")}
                </div>

                ${renderMotiveBuildReferences(weapon)}

            </section>


            <section
                class="character-detail-tab-panel ${activeDetailTab === "notes" ? "active" : ""}"
                data-motive-detail-panel="notes"
            >

                <div class="full-detail-section-heading">
                    <p class="tag">${t("previewData")}</p>
                    <h2>${t("notes")}</h2>
                </div>

                ${renderMotiveArchiveNote(weapon)}

                <div class="motive-notes-grid">

                    <article>
                        <span>${t("dataPolicy")}</span>
                        <p>${t("motiveDataPolicy")}</p>
                    </article>

                    <article>
                        <span>${t("source")}</span>
                        <p>
                            ${weapon.sourceLabel || t("dichotomyBeta")}
                        </p>
                    </article>

                    <article>
                        <span>${t("availability")}</span>
                        <p>${availabilityLabel}</p>
                    </article>

                    <article>
                        <span>${t("verifiedFields")}</span>
                        <p>
                            ${
                                [
                                    `${weapon.rarity}★`,
                                    weapon.identity || "",
                                    stats.length > 0
                                        ? t("verifiedStats")
                                        : "",
                                    weapon.upgrade
                                        ? t("upgradeData")
                                        : "",
                                    verifiedEffect
                                        ? t("effect")
                                        : ""
                                ]
                                .filter(Boolean)
                                .join(" · ")
                            }
                        </p>
                    </article>

                </div>

            </section>

        </div>

    `;


    databaseDetailContent
        .querySelectorAll(
            "[data-motive-detail-tab]"
        )
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    const tab =
                        button.dataset.motiveDetailTab;

                    window.motiveDetailTab[
                        weapon.id
                    ] = tab;

                    databaseDetailContent
                        .querySelectorAll(
                            "[data-motive-detail-tab]"
                        )
                        .forEach(function (item) {

                            item.classList.toggle(
                                "active",
                                item.dataset.motiveDetailTab === tab
                            );

                        });

                    databaseDetailContent
                        .querySelectorAll(
                            "[data-motive-detail-panel]"
                        )
                        .forEach(function (panel) {

                            panel.classList.toggle(
                                "active",
                                panel.dataset.motiveDetailPanel === tab
                            );

                        });

                }
            );

        });


    databaseDetailContent
        .querySelectorAll(
            "[data-motive-user-character]"
        )
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    const character =
                        charactersData.find(
                            function (entry) {
                                return (
                                    entry.id ===
                                    button.dataset.motiveUserCharacter
                                );
                            }
                        );

                    if (!character) {
                        return;
                    }

                    selectCharacter(character);
                    openDatabaseDetail(
                        "character",
                        character
                    );

                }
            );

        });

}


function renderSimulationStatGlossary() {

    const entries =
        simulationSystemInfo &&
        Array.isArray(simulationSystemInfo.statGlossary)
            ? simulationSystemInfo.statGlossary
            : [];

    if (entries.length === 0) {
        return "";
    }

    return `
        <div class="simulation-glossary-grid">

            ${entries.map(function (entry) {

                return `
                    <article class="simulation-glossary-card">
                        <strong>
                            ${getLocalizedText(entry.name)}
                        </strong>

                        <p>
                            ${getLocalizedText(entry.description)}
                        </p>
                    </article>
                `;

            }).join("")}

        </div>
    `;

}


function renderSimulationFullDetail(
    simulationSet
) {

    const slots =
        Array.isArray(simulationSet.slots)
            ? simulationSet.slots
            : [];

    const knownPieceCount =
        slots.filter(function (piece) {
            return piece && piece.name;
        }).length;

    const verifiedPiece =
        slots.find(function (piece) {
            return piece && piece.name;
        }) || {};

    const knownStats =
        verifiedPiece.knownStats || {};

    if (!window.simulationDetailTab) {
        window.simulationDetailTab = {};
    }

    const activeTab =
        window.simulationDetailTab[
            simulationSet.id
        ] || "overview";

    function renderKnownStatsBlock(
        label,
        stats
    ) {

        if (!Array.isArray(stats) || stats.length === 0) {
            return "";
        }

        return `
            <article class="simulation-known-stat-block">
                <span>${label}</span>

                <div>
                    ${stats.map(function (stat) {

                        return `
                            <p>
                                <strong>
                                    ${getLocalizedText(stat.label)}
                                </strong>

                                <em>
                                    ${getLocalizedText(stat.value)}
                                </em>
                            </p>
                        `;

                    }).join("")}
                </div>
            </article>
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
                        <small>SIMULATION</small>
                    </div>


                    <div class="full-detail-art-vignette"></div>

                    <div class="full-detail-art-caption">
                        <span>${t("implementSet")}</span>
                        <strong>
                            ${getLocalizedText(simulationSet.name)}
                        </strong>
                    </div>

                </div>

            </div>


            <div class="full-detail-info character-detail-info simulation-detail-info">

                <p class="full-detail-kicker">
                    ${t("simulation")}
                </p>

                <h1 id="databaseDetailTitle">
                    ${getLocalizedText(simulationSet.name)}
                </h1>

                <div class="character-preview-note motive-preview-note">
                    <span>${t("previewData")}</span>
                    <p>${t("previewDataNote")}</p>
                </div>

                <div class="full-detail-grid full-detail-grid-compact">

                    ${createFullDetailCell(
                        t("simulationSetType"),
                        simulationSet.type ||
                        t("implementSet")
                    )}

                    ${createFullDetailCell(
                        t("implementSlots"),
                        "4"
                    )}

                    ${createFullDetailCell(
                        t("knownPieces"),
                        `${knownPieceCount} / 4`
                    )}

                    ${createFullDetailCell(
                        t("observedOn"),
                        simulationSet.observedOn ||
                        t("notTranscribed")
                    )}

                    ${createFullDetailCell(
                        t("fullSetObserved"),
                        simulationSet.fullSetObserved
                            ? "4 / 4"
                            : t("notTranscribed")
                    )}

                    ${createFullDetailCell(
                        t("setEffect"),
                        simulationSet.setEffect
                            ? getLocalizedText(simulationSet.setEffect)
                            : t("effectTextPending")
                    )}

                </div>

            </div>

        </div>


        <nav class="character-detail-tabs simulation-detail-tabs" aria-label="Simulation detail sections">

            ${[
                ["overview", t("overview")],
                ["implements", t("implements")],
                ["set-bonus", t("setBonus")],
                ["stats", t("statsAndRules")],
                ["source", t("notes")]
            ].map(function (tab) {

                return `
                    <button
                        type="button"
                        class="character-detail-tab-button ${activeTab === tab[0] ? "active" : ""}"
                        data-simulation-detail-tab="${tab[0]}"
                    >
                        ${tab[1]}
                    </button>
                `;

            }).join("")}

        </nav>


        <div class="character-detail-tab-panels simulation-detail-tab-panels">

            <section
                class="character-detail-tab-panel ${activeTab === "overview" ? "active" : ""}"
                data-simulation-detail-panel="overview"
            >

                <div class="full-detail-section-heading">
                    <p class="tag">${t("information")}</p>
                    <h2>${t("overview")}</h2>
                </div>

                <div class="full-detail-description">
                    <p>
                        ${getLocalizedText(simulationSet.description) || t("simulationDatabaseDescription")}
                    </p>
                </div>

                <div class="simulation-summary-grid">

                    <article>
                        <span>${t("fixedStats")}</span>
                        <strong>${t("yes")}</strong>
                    </article>

                    <article>
                        <span>${t("randomSubstats")}</span>
                        <strong>${t("no")}</strong>
                    </article>

                    <article>
                        <span>${t("gearLeveling")}</span>
                        <strong>${t("none")}</strong>
                    </article>

                    <article>
                        <span>${t("epiphany")}</span>
                        <strong>${t("separateSlot")}</strong>
                    </article>

                </div>

            </section>


            <section
                class="character-detail-tab-panel ${activeTab === "implements" ? "active" : ""}"
                data-simulation-detail-panel="implements"
            >

                <div class="full-detail-section-heading">
                    <p class="tag">${t("implements")}</p>
                    <h2>${t("fourImplementSlots")}</h2>
                </div>

                <div class="simulation-detail-slot-grid">

                    ${simulationSystemInfo.slotNames.map(function (slotName) {

                        const piece =
                            slots.find(function (item) {
                                return item && item.slot === slotName;
                            }) || {};

                        return `
                            <article class="simulation-detail-slot-card ${piece.name ? "verified" : "pending"}">
                                <span>${slotName}</span>

                                <strong>
                                    ${getLocalizedText(piece.name) || "--"}
                                </strong>

                                <small>
                                    ${
                                        piece.name
                                            ? t("verifiedBetaPiece")
                                            : t("pieceNamePending")
                                    }
                                </small>
                            </article>
                        `;

                    }).join("")}

                </div>


                ${
                    verifiedPiece.name
                        ? `
                            <div class="simulation-piece-evidence">

                                <div class="full-detail-section-heading">
                                    <p class="tag">${t("knownPieceData")}</p>
                                    <h2>
                                        ${getLocalizedText(verifiedPiece.name)}
                                    </h2>
                                </div>

                                <div class="simulation-known-piece">
                                    ${renderKnownStatsBlock(
                                        "Green · Lv.60",
                                        knownStats.greenLv60
                                    )}

                                    ${renderKnownStatsBlock(
                                        "Purple · Lv.60",
                                        knownStats.purpleLv60
                                    )}
                                </div>

                                ${
                                    Array.isArray(
                                        verifiedPiece.additionalObservedStatLabels
                                    ) &&
                                    verifiedPiece.additionalObservedStatLabels.length > 0
                                        ? `
                                            <div class="simulation-observed-stat-tags">
                                                <span>${t("alsoObserved")}</span>

                                                <div>
                                                    ${verifiedPiece.additionalObservedStatLabels.map(function (label) {
                                                        return `<em>${label}</em>`;
                                                    }).join("")}
                                                </div>
                                            </div>
                                        `
                                        : ""
                                }

                                ${
                                    verifiedPiece.note
                                        ? `
                                            <p class="simulation-data-note">
                                                ${getLocalizedText(verifiedPiece.note)}
                                            </p>
                                        `
                                        : ""
                                }

                            </div>
                        `
                        : `
                            <div class="character-unverified-message simulation-piece-pending">
                                ${t("simulationPieceNamesPending")}
                            </div>
                        `
                }

            </section>


            <section
                class="character-detail-tab-panel ${activeTab === "set-bonus" ? "active" : ""}"
                data-simulation-detail-panel="set-bonus"
            >

                <div class="full-detail-section-heading">
                    <p class="tag">${t("setBonus")}</p>
                    <h2>${getLocalizedText(simulationSet.name)}</h2>
                </div>

                ${
                    simulationSet.setEffect
                        ? `
                            <article class="motive-effect-card">
                                <span>${t("effect")}</span>
                                <p>
                                    ${getLocalizedText(simulationSet.setEffect)}
                                </p>
                            </article>
                        `
                        : `
                            <div class="motive-data-status-card pending">
                                <span>${t("setEffect")}</span>
                                <strong>${t("effectTextPending")}</strong>
                                <p>
                                    ${getLocalizedText(simulationSet.setEffectStatus)}
                                </p>
                            </div>
                        `
                }

                <div class="character-beta-data-note">
                    ${t("simulationSetBonusEvidenceNote")}
                </div>

            </section>


            <section
                class="character-detail-tab-panel ${activeTab === "stats" ? "active" : ""}"
                data-simulation-detail-panel="stats"
            >

                <div class="full-detail-section-heading">
                    <p class="tag">${t("systemRules")}</p>
                    <h2>${t("statsAndRules")}</h2>
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

                <div class="full-detail-section-heading simulation-glossary-heading">
                    <p class="tag">${t("statGlossary")}</p>
                    <h2>${t("simulationStats")}</h2>
                </div>

                ${renderSimulationStatGlossary()}

                <div class="simulation-rarity-line">
                    <span>${t("rarityLadder")}</span>
                    <strong>
                        Grey → Green → Blue → Purple
                    </strong>
                    <small>
                        ${getLocalizedText(simulationSystemInfo.yellowTierStatus)}
                    </small>
                </div>

            </section>


            <section
                class="character-detail-tab-panel ${activeTab === "source" ? "active" : ""}"
                data-simulation-detail-panel="source"
            >

                <div class="full-detail-section-heading">
                    <p class="tag">${t("previewData")}</p>
                    <h2>${t("notes")}</h2>
                </div>

                <div class="motive-notes-grid">

                    <article>
                        <span>${t("source")}</span>
                        <p>
                            ${simulationSet.sourceLabel || t("dichotomyBeta")}
                        </p>
                    </article>

                    <article>
                        <span>${t("observedStatus")}</span>
                        <p>
                            ${simulationSet.observedStatus || t("dichotomyBeta")}
                        </p>
                    </article>

                    <article>
                        <span>${t("archivePolicy")}</span>
                        <p>${t("simulationArchivePolicy")}</p>
                    </article>

                </div>

            </section>

        </div>

    `;


    databaseDetailContent
        .querySelectorAll(
            "[data-simulation-detail-tab]"
        )
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    const tab =
                        button.dataset.simulationDetailTab;

                    window.simulationDetailTab[
                        simulationSet.id
                    ] = tab;

                    databaseDetailContent
                        .querySelectorAll(
                            "[data-simulation-detail-tab]"
                        )
                        .forEach(function (item) {
                            item.classList.toggle(
                                "active",
                                item.dataset.simulationDetailTab === tab
                            );
                        });

                    databaseDetailContent
                        .querySelectorAll(
                            "[data-simulation-detail-panel]"
                        )
                        .forEach(function (panel) {
                            panel.classList.toggle(
                                "active",
                                panel.dataset.simulationDetailPanel === tab
                            );
                        });

                }
            );

        });

}

function renderEpiphanyFullDetail(
    epiphany
) {

    if (!databaseDetailContent) {
        return;
    }

    if (!window.epiphanyDetailTab) {
        window.epiphanyDetailTab = {};
    }

    const activeTab =
        window.epiphanyDetailTab[
            epiphany.id
        ] || "overview";

    const passiveText =
        getLocalizedText(
            epiphany.passive || ""
        );

    const observedOn =
        getLocalizedText(
            epiphany.observedOn || ""
        );

    databaseDetailContent.innerHTML = `

        <div class="full-detail-toolbar">

            <div>
                <p class="tag">
                    ${t("epiphanyDetails")}
                </p>

                <p class="full-detail-toolbar-name">
                    ${getLocalizedText(epiphany.name)}
                </p>
            </div>

            <div class="simulation-toolbar-badge">
                CBT2
            </div>

        </div>


        <div class="full-detail-hero epiphany-detail-hero">

            <div class="full-detail-art-shell">

                <div class="full-detail-art epiphany-detail-art">

                    ${epiphany.image ? `
                        <img src="${epiphany.image}" alt="${getLocalizedText(epiphany.name)}" decoding="async" onerror="this.style.display='none'; const p=this.parentElement.querySelector('.epiphany-large-book'); if(p)p.style.display=''">
                    ` : `
                        <div class="epiphany-large-book" aria-hidden="true">
                            <span>E</span>
                            <small>EPIPHANY</small>
                        </div>
                    `}

                    <div class="full-detail-art-vignette"></div>

                    <div class="full-detail-art-caption">
                        <span>${t("epiphany")}</span>
                        <strong>
                            ${getLocalizedText(epiphany.name)}
                        </strong>
                    </div>

                </div>

            </div>


            <div class="full-detail-info character-detail-info epiphany-detail-info">

                <p class="full-detail-kicker">
                    ${t("epiphany")}
                </p>

                <h1 id="databaseDetailTitle">
                    ${getLocalizedText(epiphany.name)}
                </h1>

                <div class="character-preview-note motive-preview-note">
                    <span>${t("previewData")}</span>
                    <p>${t("previewDataNote")}</p>
                </div>

                <div class="full-detail-grid full-detail-grid-compact">

                    ${createFullDetailCell(
                        t("literarySource"),
                        getLocalizedText(epiphany.sourceText)
                    )}

                    ${createFullDetailCell(
                        t("category"),
                        getLocalizedText(epiphany.category)
                    )}

                    ${createFullDetailCell(
                        t("dedicatedSlot"),
                        t("yes")
                    )}

                    ${createFullDetailCell(
                        t("characterLocked"),
                        t("no")
                    )}

                    ${createFullDetailCell(
                        t("rollableSubstats"),
                        t("yes")
                    )}

                    ${createFullDetailCell(
                        t("observedOn"),
                        observedOn ||
                        t("notTranscribed")
                    )}

                </div>

            </div>

        </div>


        <nav
            class="character-detail-tabs epiphany-detail-tabs"
            aria-label="Epiphany detail sections"
        >

            ${[
                ["overview", t("overview")],
                ["passive", t("passive")],
                ["substats", t("substats")],
                ["literature", t("literarySource")],
                ["notes", t("notes")]
            ].map(function (tab) {

                return `
                    <button
                        type="button"
                        class="character-detail-tab-button ${activeTab === tab[0] ? "active" : ""}"
                        data-epiphany-detail-tab="${tab[0]}"
                    >
                        ${tab[1]}
                    </button>
                `;

            }).join("")}

        </nav>


        <div class="character-detail-tab-panels epiphany-detail-tab-panels">

            <section
                class="character-detail-tab-panel ${activeTab === "overview" ? "active" : ""}"
                data-epiphany-detail-panel="overview"
            >

                <div class="full-detail-section-heading">
                    <p class="tag">${t("information")}</p>
                    <h2>${t("overview")}</h2>
                </div>

                <div class="epiphany-summary-grid">

                    <article>
                        <span>${t("dedicatedBookSlot")}</span>
                        <strong>${t("yes")}</strong>
                        <p>${t("dedicatedBookSlotDescription")}</p>
                    </article>

                    <article>
                        <span>${t("notCharacterLocked")}</span>
                        <strong>${t("yes")}</strong>
                        <p>${t("notCharacterLockedDescription")}</p>
                    </article>

                    <article>
                        <span>${t("rollableSubstats")}</span>
                        <strong>${t("yes")}</strong>
                        <p>${t("rollableSubstatsDescription")}</p>
                    </article>

                    <article>
                        <span>${t("storyButton")}</span>
                        <strong>
                            ${epiphany.storyAvailable ? t("yes") : t("no")}
                        </strong>
                        <p>${t("storyButtonDescription")}</p>
                    </article>

                </div>

                ${
                    observedOn
                        ? `
                            <div class="character-beta-data-note epiphany-observed-note">
                                <strong>${t("observedOn")}:</strong>
                                ${observedOn}
                            </div>
                        `
                        : ""
                }

            </section>


            <section
                class="character-detail-tab-panel ${activeTab === "passive" ? "active" : ""}"
                data-epiphany-detail-panel="passive"
            >

                <div class="full-detail-section-heading">
                    <p class="tag">${t("epiphanyPassive")}</p>
                    <h2>${t("passive")}</h2>
                </div>

                ${
                    passiveText
                        ? `
                            <article class="motive-effect-card">
                                <span>${t("passive")}</span>
                                <p>${passiveText}</p>
                            </article>
                        `
                        : `
                            <div class="motive-data-status-card pending">
                                <span>${t("passive")}</span>
                                <strong>${t("effectTextPending")}</strong>
                                <p>${t("epiphanyPassiveEvidenceNote")}</p>
                            </div>
                        `
                }

                ${
                    epiphany.id === "destined-death"
                        ? `
                            <div class="character-beta-data-note">
                                ${t("destinedDeathEvidence")}
                            </div>
                        `
                        : ""
                }

            </section>


            <section
                class="character-detail-tab-panel ${activeTab === "substats" ? "active" : ""}"
                data-epiphany-detail-panel="substats"
            >

                <div class="full-detail-section-heading">
                    <p class="tag">${t("equipmentSystem")}</p>
                    <h2>${t("substats")}</h2>
                </div>

                <div class="epiphany-substat-highlight">
                    <span>${t("epiphanySubstatRole")}</span>
                    <strong>${t("rollableSubstats")}</strong>
                    <p>${t("epiphanySubstatSystemDescription")}</p>
                </div>

                <div class="motive-data-status-card pending">
                    <span>${t("specificRolls")}</span>
                    <strong>${t("notTranscribed")}</strong>
                    <p>${t("epiphanySpecificRollsPending")}</p>
                </div>

            </section>


            <section
                class="character-detail-tab-panel ${activeTab === "literature" ? "active" : ""}"
                data-epiphany-detail-panel="literature"
            >

                <div class="full-detail-section-heading">
                    <p class="tag">${t("storySource")}</p>
                    <h2>${getLocalizedText(epiphany.sourceText)}</h2>
                </div>

                <div class="epiphany-literature-grid">

                    <article>
                        <span>${t("epiphany")}</span>
                        <strong>
                            ${getLocalizedText(epiphany.name)}
                        </strong>
                    </article>

                    <article>
                        <span>${t("literarySource")}</span>
                        <strong>
                            ${getLocalizedText(epiphany.sourceText)}
                        </strong>
                    </article>

                    <article>
                        <span>${t("authorOrigin")}</span>
                        <strong>
                            ${getLocalizedText(epiphany.authorOrigin)}
                        </strong>
                    </article>

                    <article>
                        <span>${t("category")}</span>
                        <strong>
                            ${getLocalizedText(epiphany.category)}
                        </strong>
                    </article>

                </div>

                <div class="character-beta-data-note">
                    ${t("epiphanyLiteraryMappingNote")}
                </div>

            </section>


            <section
                class="character-detail-tab-panel ${activeTab === "notes" ? "active" : ""}"
                data-epiphany-detail-panel="notes"
            >

                <div class="full-detail-section-heading">
                    <p class="tag">${t("previewData")}</p>
                    <h2>${t("notes")}</h2>
                </div>

                <div class="motive-notes-grid">

                    <article>
                        <span>${t("source")}</span>
                        <p>
                            ${epiphany.sourceLabel || epiphanySystemInfo.sourceLabel}
                        </p>
                    </article>

                    <article>
                        <span>${t("observedStatus")}</span>
                        <p>
                            ${getLocalizedText(epiphany.observedStatus)}
                        </p>
                    </article>

                    <article>
                        <span>${t("archivePolicy")}</span>
                        <p>
                            ${getLocalizedText(epiphanySystemInfo.archivePolicy)}
                        </p>
                    </article>

                </div>

            </section>

        </div>

    `;


    databaseDetailContent
        .querySelectorAll(
            "[data-epiphany-detail-tab]"
        )
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    const tab =
                        button.dataset.epiphanyDetailTab;

                    window.epiphanyDetailTab[
                        epiphany.id
                    ] = tab;

                    databaseDetailContent
                        .querySelectorAll(
                            "[data-epiphany-detail-tab]"
                        )
                        .forEach(function (item) {
                            item.classList.toggle(
                                "active",
                                item.dataset.epiphanyDetailTab === tab
                            );
                        });

                    databaseDetailContent
                        .querySelectorAll(
                            "[data-epiphany-detail-panel]"
                        )
                        .forEach(function (panel) {
                            panel.classList.toggle(
                                "active",
                                panel.dataset.epiphanyDetailPanel === tab
                            );
                        });

                }
            );

        });

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
   SIMPLE FEEDBACK POPUP v33
========================================================= */

const WEB3FORMS_ACCESS_KEY =
    "886c4b85-fec2-4857-adaf-245c06a3283d";

const WEB3FORMS_ENDPOINT =
    "https://api.web3forms.com/submit";

const FEEDBACK_DRAFT_KEY =
    "tdaFeedbackDraft";

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


const feedbackCategories =
    Array.from(
        document.querySelectorAll(
            "[data-feedback-type]"
        )
    );


function getFeedbackTypeLabel() {

    const activeButton =
        feedbackCategories.find(
            function (button) {
                return (
                    button.dataset.feedbackType ===
                    feedbackType.value
                );
            }
        );

    return activeButton
        ? activeButton.textContent.trim()
        : feedbackType.value;

}


function getFeedbackContext() {

    const pageUrl =
        window.location.href.split("?")[0];

    let databaseEntry = "";

    if (
        databaseDetailModal &&
        databaseDetailModal.classList.contains(
            "active"
        )
    ) {

        const title =
            databaseDetailContent
                ? databaseDetailContent.querySelector(
                    "#databaseDetailTitle"
                )
                : null;

        if (title) {
            databaseEntry =
                title.textContent.trim();
        }

    }

    return {
        page: pageUrl,
        entry:
            databaseEntry ||
            document.title,
        language:
            typeof currentLanguage !== "undefined"
                ? currentLanguage
                : "en"
    };

}


function buildFeedbackText() {

    const context =
        getFeedbackContext();

    const type =
        getFeedbackTypeLabel();

    const message =
        feedbackMessage
            ? feedbackMessage.value.trim()
            : "";

    return `The Detective Archive Feedback

Type: ${type}
Page: ${context.page}
Context: ${context.entry}
Language: ${context.language}

--------------------------------

${message}`;

}


function saveFeedbackDraft() {

    if (!feedbackMessage || !feedbackType) {
        return;
    }

    try {
        localStorage.setItem(
            FEEDBACK_DRAFT_KEY,
            JSON.stringify({
                type: feedbackType.value,
                message: feedbackMessage.value
            })
        );
    } catch (error) {
        // Draft saving is a convenience only.
    }

}


function restoreFeedbackDraft() {

    if (!feedbackMessage || !feedbackType) {
        return;
    }

    try {

        const stored =
            localStorage.getItem(
                FEEDBACK_DRAFT_KEY
            );

        if (!stored) {
            return;
        }

        const draft =
            JSON.parse(stored);

        if (draft.message) {
            feedbackMessage.value =
                String(draft.message).slice(
                    0,
                    1000
                );
        }

        if (draft.type) {
            feedbackType.value =
                draft.type;
        }

    } catch (error) {
        // Ignore malformed or unavailable local storage.
    }

}


function syncFeedbackCategoryUI() {

    feedbackCategories.forEach(
        function (button) {

            const active =
                button.dataset.feedbackType ===
                feedbackType.value;

            button.classList.toggle(
                "active",
                active
            );

            button.setAttribute(
                "aria-pressed",
                String(active)
            );

        }
    );

}


function updateFeedbackCount() {

    if (!feedbackMessage || !feedbackCount) {
        return;
    }

    feedbackCount.textContent =
        `${feedbackMessage.value.length} / 1000`;

}


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

    restoreFeedbackDraft();
    syncFeedbackCategoryUI();
    updateFeedbackCount();

    setTimeout(
        function () {

            if (feedbackMessage) {
                feedbackMessage.focus();
            }

        },
        160
    );

}


function closeFeedbackModal() {

    if (!feedbackModal) {
        return;
    }

    saveFeedbackDraft();

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


feedbackCategories.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                feedbackType.value =
                    button.dataset.feedbackType;

                syncFeedbackCategoryUI();
                saveFeedbackDraft();

                if (feedbackStatus) {
                    feedbackStatus.textContent =
                        "";
                }

            }
        );

    }
);


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

        if (event.key === "Escape") {

            if (
                newsDetailModal &&
                newsDetailModal.classList.contains(
                    "active"
                )
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

            return;
        }

        if (
            (event.ctrlKey || event.metaKey) &&
            event.key === "Enter" &&
            feedbackModal &&
            feedbackModal.classList.contains(
                "active"
            ) &&
            feedbackForm
        ) {
            event.preventDefault();
            feedbackForm.requestSubmit();
        }

    }
);


if (
    feedbackMessage &&
    feedbackCount &&
    feedbackStatus
) {

    feedbackMessage.addEventListener(
        "input",
        function () {

            updateFeedbackCount();

            feedbackStatus.textContent =
                "";

            saveFeedbackDraft();

        }
    );

}


if (
    feedbackForm &&
    feedbackMessage &&
    feedbackStatus
) {

    feedbackForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();

            const message =
                feedbackMessage.value.trim();

            if (message === "") {

                feedbackStatus.textContent =
                    t("pleaseEnterFeedback");

                feedbackMessage.focus();

                return;
            }

            const submitButton =
                document.getElementById(
                    "feedbackSubmit"
                );

            const botcheck =
                document.getElementById(
                    "feedbackBotcheck"
                );

            const context =
                getFeedbackContext();

            const type =
                getFeedbackTypeLabel();

            const payload = {
                access_key:
                    WEB3FORMS_ACCESS_KEY,

                subject:
                    `[The Detective Archive Feedback] ${type}`,

                from_name:
                    "The Detective Archive Feedback",

                feedback_type:
                    type,

                message:
                    message,

                page:
                    context.page,

                database_context:
                    context.entry,

                site_language:
                    context.language,

                botcheck:
                    botcheck
                        ? botcheck.checked
                        : false
            };

            if (submitButton) {
                submitButton.disabled = true;
                submitButton.classList.add(
                    "is-sending"
                );
                submitButton.textContent =
                    t("sendingFeedback");
            }

            feedbackStatus.classList.remove(
                "success",
                "error"
            );

            feedbackStatus.textContent =
                t("sendingFeedback");

            try {

                const response =
                    await fetch(
                        WEB3FORMS_ENDPOINT,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type":
                                    "application/json",
                                "Accept":
                                    "application/json"
                            },
                            body:
                                JSON.stringify(
                                    payload
                                )
                        }
                    );

                const result =
                    await response.json();

                if (
                    !response.ok ||
                    !result.success
                ) {
                    throw new Error(
                        result.message ||
                        "Feedback submission failed."
                    );
                }

                feedbackStatus.classList.add(
                    "success"
                );

                feedbackStatus.textContent =
                    t("feedbackSentSuccessfully");

                feedbackMessage.value = "";
                feedbackType.value = "general";

                syncFeedbackCategoryUI();
                updateFeedbackCount();

                try {
                    localStorage.removeItem(
                        FEEDBACK_DRAFT_KEY
                    );
                } catch (error) {
                    // Draft cleanup is optional.
                }

                setTimeout(
                    function () {

                        if (
                            feedbackModal &&
                            feedbackModal.classList.contains(
                                "active"
                            )
                        ) {
                            closeFeedbackModal();
                        }

                        feedbackStatus.textContent =
                            "";

                        feedbackStatus.classList.remove(
                            "success"
                        );

                    },
                    1600
                );

            } catch (error) {

                feedbackStatus.classList.add(
                    "error"
                );

                feedbackStatus.textContent =
                    t("feedbackSendFailed");

            } finally {

                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.classList.remove(
                        "is-sending"
                    );
                    submitButton.textContent =
                        t("sendFeedback");
                }

            }

        }
    );

}

// Opening Help → Send Feedback can jump back here and open the modal automatically.
try {

    const params =
        new URLSearchParams(
            window.location.search
        );

    if (params.get("feedback") === "1") {

        setTimeout(
            openFeedbackModal,
            180
        );

    }

} catch (error) {
    // URLSearchParams is widely supported; silently ignore if unavailable.
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
    const allowedSkillTypes = ["basicAttack", "skill", "ultimate", "tacticalAssault", "passive"];
    const skillType = allowedSkillTypes.includes(skill.type) ? skill.type : "skill";
    const skillName = getLocalizedText(skill.name || "").trim();
    const descriptionText = getLocalizedText(skill.description || "").trim();
    const resourceText = getLocalizedText(skill.resource || "").trim();
    const mechanics = renderDetailListItems(skill.mechanics);
    const combos = renderDetailListItems(skill.combo);
    const hasDetails = Boolean(mechanics || combos || resourceText);

    return `
        <details class="character-skill-detail-card" data-skill-type="${skillType}" ${index === 0 ? "open" : ""}>
            <summary>
                <div class="character-skill-summary-main">
                    <span class="character-skill-type">${t(skillType)}</span>
                    ${skillName ? `<h3>${skillName}</h3>` : ""}
                </div>
                <span class="character-skill-expand-mark">+</span>
            </summary>

            <div class="character-skill-detail-body">
                ${descriptionText ? `<p class="character-skill-description">${descriptionText}</p>` : ""}

                ${resourceText
                    ? `
                        <div class="character-skill-subsection character-skill-resource-block">
                            <span>${t("resource")}</span>
                            <p>${resourceText}</p>
                        </div>
                    `
                    : ""
                }

                ${mechanics
                    ? `
                        <div class="character-skill-subsection character-skill-mechanics-block">
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

function renderCharacterPsyches(psyches, sourceLabel) {
    if (!Array.isArray(psyches) || psyches.length === 0) {
        return `<div class="character-unverified-message">${t("noVerifiedPsyches")}</div>`;
    }

    return `
        <div class="psyche-system-summary">
            <div>
                <span>${t("psycheSystem")}</span>
                <strong>${psyches.length} / 6 ${t("recorded")}</strong>
            </div>

            <p>${t("psycheSystemDescription")}</p>

        </div>

        <div class="character-psyche-grid">
            ${psyches.map(function (psyche, index) {
                const psycheName = getLocalizedText(psyche.name || "").trim();
                const psycheDescription = getLocalizedText(psyche.description || "").trim();

                return `
                    <article class="character-psyche-card">
                        <span class="character-psyche-index">P${index + 1}</span>
                        <div class="character-psyche-content">
                            ${psycheName ? `<h3>${psycheName}</h3>` : ""}
                            ${psycheDescription ? `<p>${psycheDescription}</p>` : ""}
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

            <div class="full-detail-info character-detail-info">
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
                ${renderCharacterPsyches(psyches, getCharacterVariantField(character, activeVariant, "psycheSource") || character.psycheSource)}
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

/* =========================================================
   THE DETECTIVE ARCHIVE — CHARACTER REACTOR BADGE ONLY
   Keeps the v43 Character Detail layout unchanged.
========================================================= */

function getCharacterDetailReactorBadgeData(character) {

    const variant =
        typeof getSelectedCharacterVariant === "function"
            ? getSelectedCharacterVariant(character)
            : null;

    const reactor =
        getCharacterVariantField(
            character,
            variant,
            "reactorAttribute"
        );

    if (!reactor) {
        return {
            name: "",
            icon: ""
        };
    }

    const entry =
        Array.isArray(reactorAttributeFilters)
            ? reactorAttributeFilters.find(
                function (item) {
                    return item.id === reactor;
                }
            )
            : null;

    return {
        name: reactor,
        icon: entry?.icon || ""
    };

}


function addCharacterDetailReactorBadge(character) {

    if (!databaseDetailContent) {
        return;
    }

    const info =
        databaseDetailContent.querySelector(
            ".character-detail-info"
        );

    if (!info) {
        return;
    }

    const oldBadge =
        info.querySelector(
            ".character-detail-reactor-badge"
        );

    if (oldBadge) {
        oldBadge.remove();
    }

    const kicker =
        info.querySelector(
            ".full-detail-kicker"
        );

    if (!kicker) {
        return;
    }

    const reactor =
        getCharacterDetailReactorBadgeData(
            character
        );

    if (!reactor.name) {
        return;
    }

    const badge =
        document.createElement(
            "div"
        );

    badge.className =
        "character-detail-reactor-badge";

    badge.innerHTML = `
        ${reactor.icon
            ? `<img src="${reactor.icon}" alt="" aria-hidden="true" onerror="this.remove()">`
            : ""
        }
        <span>${reactor.name}</span>
    `;

    kicker.insertAdjacentElement(
        "afterend",
        badge
    );

}


/*
 * Wrap the existing v43 renderer only to add the Reactor badge.
 * No Previous/Next navigation, position counter, Skill/Psyche count,
 * or toolbar/layout changes are added.
 */
const renderCharacterFullDetailReactorBase =
    renderCharacterFullDetail;

renderCharacterFullDetail =
    function (character) {

        renderCharacterFullDetailReactorBase(
            character
        );

        addCharacterDetailReactorBadge(
            character
        );

    };


/* =========================================================
   THE DETECTIVE ARCHIVE v45 — SIMULATION POLISH
   UI-only enhancement. No Simulation data is changed.
========================================================= */

function enhanceSimulationCardsV45(simulationSets) {

    if (!simulationGrid || !Array.isArray(simulationSets)) {
        return;
    }

    simulationSets.forEach(function (simulationSet) {

        const card =
            simulationGrid.querySelector(
                `.simulation-card[data-id="${simulationSet.id}"]`
            );

        if (!card) {
            return;
        }

        const slots =
            Array.isArray(simulationSet.slots)
                ? simulationSet.slots
                : [];

        const knownPieceCount =
            slots.filter(function (piece) {
                return piece && piece.name;
            }).length;


        /* Always keep a stable media area. */
        let media =
            card.querySelector(
                ".simulation-card-media"
            );

        if (!media) {

            media =
                document.createElement(
                    "div"
                );

            media.className =
                "database-card-media simulation-card-media simulation-card-media-placeholder";

            media.innerHTML = `
                <div class="simulation-card-placeholder" aria-hidden="true">
                    <span>S</span>
                    <small>SIMULATION</small>
                </div>
            `;

            card.prepend(media);

        }


        /* Make slot state visible without inventing missing names. */
        const slotNodes =
            card.querySelectorAll(
                ".simulation-card-slots span"
            );

        slotNodes.forEach(function (node, index) {

            const piece =
                slots[index] || {};

            node.classList.toggle(
                "verified",
                Boolean(piece.name)
            );

            node.classList.toggle(
                "pending",
                !piece.name
            );

            node.title =
                `${piece.slot || simulationSystemInfo.slotNames[index] || ""}: ${
                    piece.name
                        ? getLocalizedText(piece.name)
                        : t("notTranscribed")
                }`;

        });


        /* Compact archive-status row. */
        let statusRow =
            card.querySelector(
                ".simulation-card-data-status"
            );

        if (!statusRow) {

            statusRow =
                document.createElement(
                    "div"
                );

            statusRow.className =
                "simulation-card-data-status";

            const slotGrid =
                card.querySelector(
                    ".simulation-card-slots"
                );

            if (slotGrid) {
                slotGrid.insertAdjacentElement(
                    "beforebegin",
                    statusRow
                );
            }

        }

        statusRow.innerHTML = `
            <span class="${simulationSet.fullSetObserved ? "verified" : "pending"}">
                ${simulationSet.fullSetObserved
                    ? `4 / 4 · ${t("fullSetObserved")}`
                    : t("notTranscribed")
                }
            </span>

            <span class="${knownPieceCount > 0 ? "partial" : "pending"}">
                ${t("knownPieces")} · ${knownPieceCount} / 4
            </span>

            <span class="${simulationSet.setEffect ? "verified" : "pending"}">
                ${simulationSet.setEffect
                    ? t("setEffect")
                    : t("setEffectPending")
                }
            </span>
        `;

    });

}


const renderSimulationsV44Base =
    renderSimulations;

renderSimulations =
    function (simulationSets) {

        renderSimulationsV44Base(
            simulationSets
        );

        enhanceSimulationCardsV45(
            simulationSets
        );

    };


function enhanceSimulationFullDetailV45(
    simulationSet
) {

    if (!databaseDetailContent) {
        return;
    }

    const slots =
        Array.isArray(simulationSet.slots)
            ? simulationSet.slots
            : [];

    const knownPieceCount =
        slots.filter(function (piece) {
            return piece && piece.name;
        }).length;


    const info =
        databaseDetailContent.querySelector(
            ".simulation-detail-info"
        );

    if (info) {

        const previewNote =
            info.querySelector(
                ".character-preview-note"
            );

        if (previewNote) {

            const strip =
                document.createElement(
                    "div"
                );

            strip.className =
                "simulation-detail-status-strip";

            strip.innerHTML = `
                <span class="${simulationSet.fullSetObserved ? "verified" : "pending"}">
                    ${simulationSet.fullSetObserved
                        ? `4 / 4 · ${t("fullSetObserved")}`
                        : t("notTranscribed")
                    }
                </span>

                <span class="${knownPieceCount > 0 ? "partial" : "pending"}">
                    ${t("knownPieces")} · ${knownPieceCount} / 4
                </span>

                <span class="${simulationSet.setEffect ? "verified" : "pending"}">
                    ${simulationSet.setEffect
                        ? t("setEffect")
                        : t("setEffectPending")
                    }
                </span>
            `;

            previewNote.insertAdjacentElement(
                "afterend",
                strip
            );

        }

    }


    /*
     * Empty piece names remain explicitly unknown instead of looking
     * like a broken card.
     */
    databaseDetailContent
        .querySelectorAll(
            ".simulation-detail-slot-card.pending strong"
        )
        .forEach(function (nameNode) {

            if (
                nameNode.textContent.trim() === "--"
            ) {
                nameNode.textContent =
                    t("notTranscribed");
            }

        });

}


const renderSimulationFullDetailV44Base =
    renderSimulationFullDetail;

renderSimulationFullDetail =
    function (simulationSet) {

        renderSimulationFullDetailV44Base(
            simulationSet
        );

        enhanceSimulationFullDetailV45(
            simulationSet
        );

    };


/*
 * The original page renders Simulation cards before this enhancement
 * block is reached, so refresh that grid once after installing v45.
 */
if (
    typeof applySimulationFilters === "function"
) {
    applySimulationFilters();
}


/* =========================================================
   THE DETECTIVE ARCHIVE v45.1 — SIMULATION IMAGE FIX
   Keep exactly one visual image area per Simulation card/detail.
========================================================= */

function fixSimulationDetailMediaV451(simulationSet) {

    if (!databaseDetailContent) {
        return;
    }

    const art =
        databaseDetailContent.querySelector(
            ".simulation-detail-art"
        );

    if (!art) {
        return;
    }

    const placeholder =
        art.querySelector(
            ".simulation-detail-placeholder"
        );

    /*
     * Simulation detail intentionally stays text/data focused.
     * Artwork is shown on the database card only; the detail view
     * keeps the archive placeholder so new sets do not require a
     * second image asset.
     */
    if (placeholder) {
        placeholder.style.display = "";
    }

    art.classList.remove(
        "has-simulation-image"
    );

}


const renderSimulationFullDetailV45Base =
    renderSimulationFullDetail;

renderSimulationFullDetail =
    function (simulationSet) {

        renderSimulationFullDetailV45Base(
            simulationSet
        );

        fixSimulationDetailMediaV451(
            simulationSet
        );

    };


/* =========================================================
   THE DETECTIVE ARCHIVE v46 — MOTIVE POLISH
   UI-only enhancement. No Motive data is changed.
========================================================= */

function enhanceMotiveCardsV46(weapons) {

    if (!weaponGrid || !Array.isArray(weapons)) {
        return;
    }

    weapons.forEach(function (weapon) {

        const card =
            weaponGrid.querySelector(
                `.weapon-card[data-id="${weapon.id}"]`
            );

        if (!card) {
            return;
        }

        const imageBox =
            card.querySelector(
                ".weapon-image"
            );

        if (!imageBox) {
            return;
        }

        const placeholder =
            imageBox.querySelector(
                ".motive-card-placeholder"
            );

        const image =
            imageBox.querySelector(
                "img"
            );

        if (weapon.image && image) {

            imageBox.classList.add(
                "has-motive-image"
            );

            if (placeholder) {
                placeholder.style.display = "none";
            }

        } else {

            imageBox.classList.remove(
                "has-motive-image"
            );

            if (placeholder) {
                placeholder.style.display = "";
            }

        }

    });

}


const renderWeaponsV45Base =
    renderWeapons;

renderWeapons =
    function (weapons) {

        renderWeaponsV45Base(
            weapons
        );

        enhanceMotiveCardsV46(
            weapons
        );

    };


function enhanceMotiveFullDetailV46(
    weapon
) {

    if (!databaseDetailContent) {
        return;
    }

    const art =
        databaseDetailContent.querySelector(
            ".motive-full-detail-art"
        );

    if (art) {

        const placeholder =
            art.querySelector(
                ".motive-detail-placeholder"
            );

        const image =
            art.querySelector(
                "img"
            );

        if (weapon.detailImage && image) {

            art.classList.add(
                "has-motive-image"
            );

            if (placeholder) {
                placeholder.style.display = "none";
            }

        } else {

            art.classList.remove(
                "has-motive-image"
            );

            if (placeholder) {
                placeholder.style.display = "";
            }

        }

    }


    /*
     * Add a small visual marker to tabs that already contain
     * transcribed data. This does not add any new game information.
     */
    const verifiedEffect =
        getLocalizedText(
            weapon.effect || ""
        );

    const tabMap = {
        effects: Boolean(verifiedEffect),
        scaling: Boolean(
            (weapon.stat1 && weapon.stat1.refine) ||
            weapon.upgrade
        )
    };

    Object.entries(tabMap)
        .forEach(function ([tabId, hasData]) {

            const button =
                databaseDetailContent.querySelector(
                    `[data-motive-detail-tab="${tabId}"]`
                );

            if (button) {
                button.classList.toggle(
                    "has-recorded-data",
                    hasData
                );
            }

        });

}


const renderWeaponFullDetailV46Base =
    renderWeaponFullDetail;

renderWeaponFullDetail =
    function (weapon) {

        renderWeaponFullDetailV46Base(
            weapon
        );

        enhanceMotiveFullDetailV46(
            weapon
        );

    };


/* Refresh cards once because the original render ran before this block. */
if (
    typeof applyWeaponFilters === "function"
) {
    applyWeaponFilters();
}


