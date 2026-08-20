/* =========================================================
   THE DETECTIVE ARCHIVE v48 — ASSET RUNTIME
   Lightweight image loading + graceful missing-asset handling.
========================================================= */

(function () {
    "use strict";

    const configured = new WeakSet();

    function isCriticalImage(image) {
        return Boolean(
            image.closest(".header") ||
            image.closest(".information-board") ||
            image.closest(".database-detail-panel") ||
            image.closest(".news-page-article-media")
        );
    }

    function markMissing(image) {
        const parent = image.parentElement;

        image.classList.add("archive-image-failed");

        if (!parent) {
            return;
        }

        if (parent.classList.contains("news-panel-media")) {
            image.style.display = "none";
            parent.classList.add("is-empty", "asset-missing");
            return;
        }

        if (parent.classList.contains("database-filter-icon")) {
            image.style.display = "none";
            parent.classList.add("icon-missing");
            return;
        }

        if (
            parent.classList.contains("card-image") ||
            parent.classList.contains("weapon-image")
        ) {
            image.style.display = "none";
            parent.classList.add("image-missing", "asset-missing");
            return;
        }

        if (
            parent.classList.contains("simulation-card-media") ||
            parent.classList.contains("epiphany-card-media") ||
            parent.classList.contains("news-image") ||
            parent.classList.contains("small-news-image") ||
            parent.classList.contains("news-page-card-media")
        ) {
            image.style.display = "none";
            parent.classList.add("asset-missing");
            return;
        }

        if (
            parent.classList.contains("full-detail-art") ||
            parent.classList.contains("news-page-article-media")
        ) {
            image.style.display = "none";
            parent.classList.add("image-missing", "asset-missing");
            return;
        }

        parent.classList.add("asset-missing");
    }

    function clearMissing(image) {
        const parent = image.parentElement;

        image.classList.remove("archive-image-failed");

        if (!parent) {
            return;
        }

        parent.classList.remove("asset-missing");

        if (parent.classList.contains("news-panel-media")) {
            parent.classList.remove("is-empty");
        }
    }

    function configureImage(image) {
        if (!(image instanceof HTMLImageElement) || configured.has(image)) {
            return;
        }

        configured.add(image);

        image.decoding = image.decoding || "async";

        if (!image.hasAttribute("loading")) {
            image.loading = isCriticalImage(image) ? "eager" : "lazy";
        }

        if (!isCriticalImage(image) && "fetchPriority" in image) {
            image.fetchPriority = "low";
        }

        image.addEventListener("error", function () {
            markMissing(image);
        });

        image.addEventListener("load", function () {
            clearMissing(image);
        });
    }

    function scan(root) {
        if (root instanceof HTMLImageElement) {
            configureImage(root);
        }

        if (root && root.querySelectorAll) {
            root.querySelectorAll("img").forEach(configureImage);
        }
    }

    scan(document);

    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type === "childList") {
                mutation.addedNodes.forEach(function (node) {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        scan(node);
                    }
                });
            }

            if (
                mutation.type === "attributes" &&
                mutation.target instanceof HTMLImageElement &&
                mutation.attributeName === "src"
            ) {
                configureImage(mutation.target);
            }
        });
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["src"]
    });
})();
