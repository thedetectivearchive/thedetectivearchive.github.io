/* =========================================================
   THE DETECTIVE ARCHIVE v52 — DEEP LINKS + COPY LINK
   Shareable URLs for database records and home-page News.
   Adds a small copy-link control without changing record renderers.
========================================================= */

(function () {
    "use strict";

    const RECORD_PARAMS = [
        "character",
        "motive",
        "simulation",
        "epiphany",
        "news"
    ];

    let applyingLocation = false;

    const COPY_STATE_MS = 1600;


    function getShareCopy(key) {

        const sharedKeys = {
            copy: "copyLink",
            copied: "copied",
            failed: "copyFailed",
            aria: "copyRecordAria"
        };

        const translationKey =
            sharedKeys[key] || key;

        if (typeof t === "function") {
            return t(translationKey);
        }

        const fallback = {
            copy: "COPY LINK",
            copied: "✓ COPIED",
            failed: "COPY FAILED",
            aria: "Copy link to this record"
        };

        return fallback[key] || key;
    }



    async function copyTextToClipboard(text) {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return;
        }

        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();

        const copied = document.execCommand("copy");
        textarea.remove();

        if (!copied) {
            throw new Error("Copy command failed");
        }
    }


    function resetCopyButton(button) {
        if (!button) {
            return;
        }

        window.clearTimeout(button._copyResetTimer);
        button.classList.remove("is-copied", "is-failed");
        button.textContent = getShareCopy("copy");
        button.setAttribute("aria-label", getShareCopy("aria"));
        button.title = getShareCopy("aria");
    }


    function createCopyLinkButton() {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "record-copy-link";
        resetCopyButton(button);

        button.addEventListener("click", async function (event) {
            event.preventDefault();
            event.stopPropagation();

            try {
                await copyTextToClipboard(window.location.href);
                button.classList.remove("is-failed");
                button.classList.add("is-copied");
                button.textContent = getShareCopy("copied");
            }
            catch (error) {
                button.classList.remove("is-copied");
                button.classList.add("is-failed");
                button.textContent = getShareCopy("failed");
            }

            window.clearTimeout(button._copyResetTimer);
            button._copyResetTimer = window.setTimeout(
                function () {
                    resetCopyButton(button);
                },
                COPY_STATE_MS
            );
        });

        return button;
    }


    function ensureDatabaseCopyButton() {
        const content =
            document.getElementById("databaseDetailContent");

        if (!content || content.querySelector(".record-copy-link")) {
            return;
        }

        const toolbar =
            content.querySelector(".full-detail-toolbar");

        if (!toolbar || toolbar.children.length < 2) {
            return;
        }

        const existingRight = toolbar.lastElementChild;
        const actions = document.createElement("div");
        actions.className = "record-share-actions";

        toolbar.insertBefore(actions, existingRight);
        actions.appendChild(existingRight);
        actions.appendChild(createCopyLinkButton());
    }


    function ensureNewsCopyButton() {
        const header =
            document.querySelector("#newsDetailModal .news-detail-header");

        const index =
            document.getElementById("newsDetailIndex");

        if (
            !header ||
            !index ||
            header.querySelector(".record-copy-link")
        ) {
            return;
        }

        const actions = document.createElement("div");
        actions.className = "record-share-actions news-record-share-actions";

        header.insertBefore(actions, index);
        actions.appendChild(index);
        actions.appendChild(createCopyLinkButton());
    }


    function refreshCopyButtons() {
        document.querySelectorAll(".record-copy-link").forEach(
            function (button) {
                resetCopyButton(button);
            }
        );
    }


    function getUrl() {
        return new URL(window.location.href);
    }


    function replaceUrl(url) {
        window.history.replaceState(
            null,
            "",
            `${url.pathname}${url.search}${url.hash}`
        );
    }


    function clearRecordParams(url) {
        RECORD_PARAMS.forEach(function (param) {
            url.searchParams.delete(param);
        });
    }


    function setRecordUrl(param, id) {
        if (applyingLocation || !param || !id) {
            return;
        }

        const url = getUrl();

        clearRecordParams(url);
        url.searchParams.set(param, id);

        replaceUrl(url);
    }


    function clearRecordUrl() {
        if (applyingLocation) {
            return;
        }

        const url = getUrl();

        clearRecordParams(url);
        replaceUrl(url);
    }


    function activateDatabaseTab(tabId) {
        const button =
            document.querySelector(
                `.tab-button[data-tab="${tabId}"]`
            );

        if (button && !button.classList.contains("active")) {
            button.click();
        }
    }


    function findById(list, id) {
        return Array.isArray(list)
            ? list.find(function (entry) {
                return entry && entry.id === id;
            })
            : null;
    }


    function getDatabaseRequest() {
        const params =
            new URLSearchParams(
                window.location.search
            );

        const characterId =
            params.get("character");

        if (characterId) {
            return {
                param: "character",
                id: characterId,
                tab: "characters",
                detailType: "character",
                data:
                    typeof charactersData !== "undefined"
                        ? findById(charactersData, characterId)
                        : null,
                select:
                    typeof selectCharacter === "function"
                        ? selectCharacter
                        : null
            };
        }


        const motiveId =
            params.get("motive");

        if (motiveId) {
            return {
                param: "motive",
                id: motiveId,
                tab: "weapons",
                detailType: "weapon",
                data:
                    typeof weaponsData !== "undefined"
                        ? findById(weaponsData, motiveId)
                        : null,
                select:
                    typeof selectWeapon === "function"
                        ? selectWeapon
                        : null
            };
        }


        const simulationId =
            params.get("simulation");

        if (simulationId) {
            return {
                param: "simulation",
                id: simulationId,
                tab: "simulation",
                detailType: "simulation",
                data:
                    typeof simulationData !== "undefined"
                        ? findById(simulationData, simulationId)
                        : null,
                select:
                    typeof selectSimulation === "function"
                        ? selectSimulation
                        : null
            };
        }


        const epiphanyId =
            params.get("epiphany");

        if (epiphanyId) {
            return {
                param: "epiphany",
                id: epiphanyId,
                tab: "epiphanies",
                detailType: "epiphany",
                data:
                    typeof epiphanyData !== "undefined"
                        ? findById(epiphanyData, epiphanyId)
                        : null,
                select:
                    typeof selectEpiphany === "function"
                        ? selectEpiphany
                        : null
            };
        }

        return null;
    }


    function getRequestedNewsId() {
        const params =
            new URLSearchParams(
                window.location.search
            );

        return params.get("news") || "";
    }


    function getParamForDetailType(type) {
        if (type === "character") {
            return "character";
        }

        if (type === "weapon") {
            return "motive";
        }

        if (type === "simulation") {
            return "simulation";
        }

        if (type === "epiphany") {
            return "epiphany";
        }

        return "";
    }


    /*
     * Wrap existing modal functions only to synchronize the address bar.
     * The renderers themselves remain untouched.
     */
    if (typeof openDatabaseDetail === "function") {

        const baseOpenDatabaseDetail =
            openDatabaseDetail;

        openDatabaseDetail =
            function (type, data) {

                baseOpenDatabaseDetail(
                    type,
                    data
                );

                const param =
                    getParamForDetailType(type);

                if (param && data && data.id) {
                    setRecordUrl(
                        param,
                        data.id
                    );
                }

            };
    }


    if (typeof closeDatabaseDetail === "function") {

        const baseCloseDatabaseDetail =
            closeDatabaseDetail;

        closeDatabaseDetail =
            function () {

                baseCloseDatabaseDetail();
                clearRecordUrl();

            };
    }


    if (typeof openNewsDetail === "function") {

        const baseOpenNewsDetail =
            openNewsDetail;

        openNewsDetail =
            function (newsId) {

                baseOpenNewsDetail(
                    newsId
                );

                const entry =
                    typeof newsId === "string"
                        ? (
                            typeof getNewsById === "function"
                                ? getNewsById(newsId)
                                : null
                        )
                        : newsId;

                if (entry && entry.id) {
                    setRecordUrl(
                        "news",
                        entry.id
                    );
                }

            };
    }


    if (typeof closeNewsDetail === "function") {

        const baseCloseNewsDetail =
            closeNewsDetail;

        closeNewsDetail =
            function () {

                baseCloseNewsDetail();
                clearRecordUrl();

            };
    }


    function closeOpenRecordWithoutChangingUrl() {

        const databaseModal =
            document.getElementById(
                "databaseDetailModal"
            );

        const newsModal =
            document.getElementById(
                "newsDetailModal"
            );


        if (
            databaseModal &&
            databaseModal.classList.contains("active") &&
            typeof closeDatabaseDetail === "function"
        ) {
            closeDatabaseDetail();
        }


        if (
            newsModal &&
            newsModal.classList.contains("active") &&
            typeof closeNewsDetail === "function"
        ) {
            closeNewsDetail();
        }

    }


    function applyLocationDeepLink() {

        applyingLocation = true;

        try {

            const newsId =
                getRequestedNewsId();

            if (newsId) {

                const news =
                    typeof getNewsById === "function"
                        ? getNewsById(newsId)
                        : null;

                if (
                    news &&
                    typeof openNewsDetail === "function"
                ) {
                    openNewsDetail(news);
                }

                return;
            }


            const request =
                getDatabaseRequest();

            if (
                request &&
                request.data &&
                typeof openDatabaseDetail === "function"
            ) {

                activateDatabaseTab(
                    request.tab
                );

                if (typeof request.select === "function") {
                    request.select(
                        request.data
                    );
                }

                openDatabaseDetail(
                    request.detailType,
                    request.data
                );

                return;
            }


            closeOpenRecordWithoutChangingUrl();

        } finally {

            applyingLocation = false;

        }

    }



    /*
     * v49.1 — MODAL CLOSE URL SYNC
     *
     * Some close buttons/overlays were bound by script.js directly to the
     * original close function before deep-link.js wrapped that function.
     * Therefore the modal could close while the query parameter remained.
     *
     * Observe the actual modal state instead. Whenever an open record modal
     * becomes closed, remove its record parameter from the address bar.
     * This covers X button, overlay click, Escape and future close controls.
     */
    function watchRecordModalClose(modal) {

        if (!modal) {
            return;
        }

        let wasActive =
            modal.classList.contains(
                "active"
            );

        const observer =
            new MutationObserver(
                function () {

                    const isActive =
                        modal.classList.contains(
                            "active"
                        );

                    if (
                        wasActive &&
                        !isActive &&
                        !applyingLocation
                    ) {
                        clearRecordUrl();
                    }

                    wasActive =
                        isActive;

                }
            );

        observer.observe(
            modal,
            {
                attributes: true,
                attributeFilter: [
                    "class",
                    "aria-hidden"
                ]
            }
        );

    }


    watchRecordModalClose(
        document.getElementById(
            "databaseDetailModal"
        )
    );

    watchRecordModalClose(
        document.getElementById(
            "newsDetailModal"
        )
    );


    const databaseDetailContent =
        document.getElementById("databaseDetailContent");

    if (databaseDetailContent) {
        const detailObserver = new MutationObserver(
            function () {
                ensureDatabaseCopyButton();
            }
        );

        detailObserver.observe(
            databaseDetailContent,
            { childList: true }
        );
    }

    ensureDatabaseCopyButton();
    ensureNewsCopyButton();

    const languageObserver = new MutationObserver(
        function () {
            refreshCopyButtons();
        }
    );

    languageObserver.observe(
        document.documentElement,
        { attributes: true, attributeFilter: ["lang"] }
    );


    /*
     * Deferred scripts have already loaded the modular content and main
     * renderer at this point. A short task delay lets initial card renders
     * finish before opening a requested record.
     */
    window.setTimeout(
        applyLocationDeepLink,
        60
    );


    window.addEventListener(
        "popstate",
        applyLocationDeepLink
    );

})();
