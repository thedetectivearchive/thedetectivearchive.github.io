const NEWS_LANGUAGE_KEY = "silverPalaceLanguage";

const newsPageTranslations = {
    en: {
        home: "Home", database: "Database", rankings: "Rankings", help: "Help",
        pageTag: "INTELLIGENCE DESK",
        pageTitle: "News & Archive Updates",
        pageLead: "Silver Palace beta records and a transparent changelog for The Detective Archive.",
        all: "All", game: "Game / Beta", archive: "Archive Updates",
        search: "SEARCH", searchPlaceholder: "Search news...", entries: "ENTRIES",
        betaNote: "Beta information can change before release. Archive updates describe changes made to this fan-made database.",
        emptyTitle: "No entries found.", emptyText: "Try another search or filter.",
        readMore: "READ ARTICLE", news: "NEWS", update: "UPDATE",
        announcement: "ANNOUNCEMENT", archiveCategory: "ARCHIVE UPDATE"
    },
    vi: {
        home: "Trang chủ", database: "Dữ liệu", rankings: "Xếp hạng", help: "Trợ giúp",
        pageTag: "BÀN TIN TÌNH BÁO",
        pageTitle: "Tin tức & Nhật ký cập nhật",
        pageLead: "Thông tin beta Silver Palace và nhật ký thay đổi minh bạch của The Detective Archive.",
        all: "Tất cả", game: "Game / Beta", archive: "Cập nhật Archive",
        search: "TÌM KIẾM", searchPlaceholder: "Tìm tin tức...", entries: "MỤC",
        betaNote: "Thông tin beta có thể thay đổi trước khi phát hành. Các bản cập nhật Archive mô tả thay đổi trên cơ sở dữ liệu fan-made này.",
        emptyTitle: "Không tìm thấy mục nào.", emptyText: "Hãy thử từ khóa hoặc bộ lọc khác.",
        readMore: "ĐỌC CHI TIẾT", news: "TIN TỨC", update: "CẬP NHẬT",
        announcement: "THÔNG BÁO", archiveCategory: "CẬP NHẬT ARCHIVE"
    }
};

let newsPageLanguage = "en";
let activeNewsFilter = "all";
let activeNewsArticle = null;

function newsT(key) {
    const active = newsPageTranslations[newsPageLanguage] || newsPageTranslations.en;
    return active[key] ?? newsPageTranslations.en[key] ?? key;
}

function localizeNewsValue(value) {
    if (value === null || value === undefined) return "";
    if (typeof value === "string") return value;
    return value[newsPageLanguage] ?? value.en ?? Object.values(value)[0] ?? "";
}

function getAllNewsEntries() {
    const gameEntries = Array.isArray(newsData)
        ? newsData.map(entry => ({ ...entry, stream: "game" }))
        : [];

    const archiveEntries =
        typeof archiveUpdatesData !== "undefined" && Array.isArray(archiveUpdatesData)
            ? archiveUpdatesData.map(entry => ({ ...entry, stream: "archive" }))
            : [];

    return [...gameEntries, ...archiveEntries].sort(
        (a, b) => String(b.date).localeCompare(String(a.date))
    );
}

function getNewsCategoryLabel(entry) {
    if (entry.stream === "archive") return newsT("archiveCategory");
    if (entry.category === "announcement") return newsT("announcement");
    if (entry.category === "update") return newsT("update");
    return newsT("news");
}

function getNewsSearchText(entry) {
    const title = localizeNewsValue(entry.title);
    const description = localizeNewsValue(entry.description);
    const tags = Array.isArray(entry.tags) ? entry.tags.join(" ") : "";
    return `${title} ${description} ${tags}`.toLowerCase();
}

function getFilteredNewsEntries() {
    const searchInput = document.getElementById("newsSearchInput");
    const keyword = searchInput ? searchInput.value.trim().toLowerCase() : "";

    return getAllNewsEntries().filter(entry => {
        const filterMatch =
            activeNewsFilter === "all" || entry.stream === activeNewsFilter;
        const searchMatch =
            !keyword || getNewsSearchText(entry).includes(keyword);
        return filterMatch && searchMatch;
    });
}

function renderNewsPage() {
    const grid = document.getElementById("newsPageGrid");
    const count = document.getElementById("newsResultCount");
    const empty = document.getElementById("newsPageEmpty");
    if (!grid) return;

    const entries = getFilteredNewsEntries();
    if (count) count.textContent = String(entries.length);
    if (empty) empty.hidden = entries.length !== 0;

    grid.innerHTML = entries.map((entry, index) => {
        const title = localizeNewsValue(entry.title);
        const description = localizeNewsValue(entry.description);
        const tags = Array.isArray(entry.tags) ? entry.tags.slice(0, 3) : [];

        return `
            <article class="news-page-card ${entry.stream} ${entry.image ? "has-image" : ""}" data-news-id="${entry.id}">
                <div class="news-page-card-index">${String(index + 1).padStart(2, "0")}</div>

                ${entry.image ? `
                    <div class="news-page-card-media">
                        <img src="${entry.image}" alt="${title}" loading="lazy" onerror="this.parentElement.hidden=true">
                    </div>
                ` : ""}

                <div class="news-page-card-meta">
                    <span>${getNewsCategoryLabel(entry)}</span>
                    <time datetime="${entry.date}">${entry.date}</time>
                </div>

                <h2>${title}</h2>
                <p>${description}</p>

                <div class="news-page-card-tags">
                    ${tags.map(tag => `<span>${tag}</span>`).join("")}
                </div>

                <button type="button" class="news-page-card-button" data-open-news="${entry.id}">
                    ${newsT("readMore")}
                </button>
            </article>
        `;
    }).join("");

    grid.querySelectorAll("[data-open-news]").forEach(button => {
        button.addEventListener("click", () => {
            openNewsPageArticle(button.dataset.openNews);
        });
    });
}

function openNewsPageArticle(id) {
    const entry = getAllNewsEntries().find(item => item.id === id);
    if (!entry) return;

    activeNewsArticle = entry;

    const modal = document.getElementById("newsPageModal");
    const category = document.getElementById("newsArticleCategory");
    const title = document.getElementById("newsArticleTitle");
    const date = document.getElementById("newsArticleDate");
    const tags = document.getElementById("newsArticleTags");
    const content = document.getElementById("newsArticleContent");
    const media = document.getElementById("newsArticleMedia");
    const image = document.getElementById("newsArticleImage");

    category.textContent = getNewsCategoryLabel(entry);
    title.textContent = localizeNewsValue(entry.title);
    date.textContent = entry.date;

    if (media && image) {
        if (entry.image) {
            media.hidden = false;
            image.src = entry.image;
            image.alt = localizeNewsValue(entry.title);
            image.onerror = function () {
                media.hidden = true;
            };
        } else {
            media.hidden = true;
            image.removeAttribute("src");
            image.alt = "";
        }
    }

    const tagList = Array.isArray(entry.tags) ? entry.tags : [];
    tags.innerHTML = tagList.map(tag => `<span>${tag}</span>`).join("");

    const contentValue = entry.content;
    let paragraphs = "";

    if (contentValue && typeof contentValue === "object") {
        paragraphs =
            contentValue[newsPageLanguage] ??
            contentValue.en ??
            Object.values(contentValue)[0] ??
            "";
    } else {
        paragraphs = contentValue || localizeNewsValue(entry.description);
    }

    if (Array.isArray(paragraphs)) {
        content.innerHTML = paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("");
    } else {
        content.innerHTML = `<p>${paragraphs}</p>`;
    }

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    history.replaceState(null, "", `#${entry.id}`);
}

function closeNewsPageArticle() {
    const modal = document.getElementById("newsPageModal");
    if (!modal) return;

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    activeNewsArticle = null;

    if (
        window.location.hash.startsWith("#news-") ||
        window.location.hash.startsWith("#archive-")
    ) {
        history.replaceState(null, "", window.location.pathname);
    }
}

function applyNewsPageLanguage() {
    const language =
        newsPageTranslations[newsPageLanguage] ? newsPageLanguage : "en";

    document.documentElement.lang = language;

    document.querySelectorAll("[data-news-text]").forEach(node => {
        node.textContent = newsT(node.dataset.newsText);
    });

    document.getElementById("newsPageTag").textContent = newsT("pageTag");
    document.getElementById("newsPageTitle").textContent = newsT("pageTitle");
    document.getElementById("newsPageLead").textContent = newsT("pageLead");
    document.getElementById("newsFilterAll").textContent = newsT("all");
    document.getElementById("newsFilterGame").textContent = newsT("game");
    document.getElementById("newsFilterArchive").textContent = newsT("archive");
    document.getElementById("newsSearchLabel").textContent = newsT("search");
    document.getElementById("newsSearchInput").placeholder = newsT("searchPlaceholder");
    document.getElementById("newsResultLabel").textContent = newsT("entries");
    document.getElementById("newsPageBetaNote").textContent = newsT("betaNote");
    document.getElementById("newsEmptyTitle").textContent = newsT("emptyTitle");
    document.getElementById("newsEmptyText").textContent = newsT("emptyText");

    renderNewsPage();

    if (activeNewsArticle) {
        openNewsPageArticle(activeNewsArticle.id);
    }
}

document.querySelectorAll("[data-news-filter]").forEach(button => {
    button.addEventListener("click", () => {
        activeNewsFilter = button.dataset.newsFilter;

        document.querySelectorAll("[data-news-filter]").forEach(item => {
            item.classList.toggle("active", item === button);
        });

        renderNewsPage();
    });
});

const newsSearchInput = document.getElementById("newsSearchInput");
if (newsSearchInput) {
    newsSearchInput.addEventListener("input", renderNewsPage);
}

const newsLanguageSelect = document.getElementById("newsLanguageSelect");

try {
    newsPageLanguage = localStorage.getItem(NEWS_LANGUAGE_KEY) || "en";
} catch (error) {
    newsPageLanguage = "en";
}

if (
    !Array.from(newsLanguageSelect.options).some(
        option => option.value === newsPageLanguage
    )
) {
    newsPageLanguage = "en";
}

newsLanguageSelect.value = newsPageLanguage;

newsLanguageSelect.addEventListener("change", () => {
    newsPageLanguage = newsLanguageSelect.value;

    try {
        localStorage.setItem(NEWS_LANGUAGE_KEY, newsPageLanguage);
    } catch (error) {}

    applyNewsPageLanguage();
});

document.getElementById("newsPageArticleClose").addEventListener(
    "click",
    closeNewsPageArticle
);

document.getElementById("newsPageModalOverlay").addEventListener(
    "click",
    closeNewsPageArticle
);

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeNewsPageArticle();
    }
});

applyNewsPageLanguage();

const requestedArticle = window.location.hash
    ? window.location.hash.slice(1)
    : "";

if (requestedArticle) {
    setTimeout(() => openNewsPageArticle(requestedArticle), 80);
}
