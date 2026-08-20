/* =========================================================
   THE DETECTIVE ARCHIVE v50 — ACCESSIBILITY RUNTIME
   Keyboard support only. No visual layout is changed.
========================================================= */

(function () {
    "use strict";

    const MODAL_SELECTORS = [
        "#databaseDetailModal",
        "#newsDetailModal",
        "#feedbackModal",
        "#newsPageModal"
    ];

    const CLOSE_SELECTORS = [
        ".database-detail-close",
        ".news-detail-close",
        ".feedback-close",
        ".news-page-article-close",
        '[aria-label="Close"]'
    ].join(",");

    const FOCUSABLE_SELECTOR = [
        "a[href]",
        "button:not([disabled])",
        "input:not([disabled]):not([type='hidden'])",
        "select:not([disabled])",
        "textarea:not([disabled])",
        "[tabindex]:not([tabindex='-1'])"
    ].join(",");

    let lastFocusedElement = null;
    let activeModal = null;


    function isVisible(element) {
        if (!element) {
            return false;
        }

        if (element.hidden) {
            return false;
        }

        const style = window.getComputedStyle(element);

        return (
            style.display !== "none" &&
            style.visibility !== "hidden"
        );
    }


    function isModalOpen(modal) {
        if (!modal || !isVisible(modal)) {
            return false;
        }

        if (modal.getAttribute("aria-hidden") === "false") {
            return true;
        }

        return modal.classList.contains("active") ||
               modal.classList.contains("open");
    }


    function getOpenModal() {
        for (const selector of MODAL_SELECTORS) {
            const modal = document.querySelector(selector);

            if (isModalOpen(modal)) {
                return modal;
            }
        }

        return null;
    }


    function getDialog(modal) {
        return modal
            ? modal.querySelector('[role="dialog"]') || modal
            : null;
    }


    function getFocusable(dialog) {
        if (!dialog) {
            return [];
        }

        return Array
            .from(
                dialog.querySelectorAll(
                    FOCUSABLE_SELECTOR
                )
            )
            .filter(isVisible);
    }


    function focusDialog(modal) {
        const dialog = getDialog(modal);

        if (!dialog) {
            return;
        }

        const focusable =
            getFocusable(dialog);

        const preferred =
            dialog.querySelector(CLOSE_SELECTORS) ||
            focusable[0];

        if (preferred) {
            preferred.focus({
                preventScroll: true
            });

            return;
        }

        if (!dialog.hasAttribute("tabindex")) {
            dialog.setAttribute(
                "tabindex",
                "-1"
            );

            dialog.dataset.a11yTemporaryTabindex =
                "true";
        }

        dialog.focus({
            preventScroll: true
        });
    }


    function restoreFocus() {
        if (
            lastFocusedElement &&
            document.contains(lastFocusedElement) &&
            typeof lastFocusedElement.focus === "function"
        ) {
            lastFocusedElement.focus({
                preventScroll: true
            });
        }

        lastFocusedElement = null;
    }


    function syncModalState() {
        const openModal =
            getOpenModal();

        if (
            openModal &&
            openModal !== activeModal
        ) {
            lastFocusedElement =
                document.activeElement;

            activeModal =
                openModal;

            window.setTimeout(
                function () {
                    focusDialog(
                        openModal
                    );
                },
                0
            );

            return;
        }

        if (
            !openModal &&
            activeModal
        ) {
            const dialog =
                getDialog(activeModal);

            if (
                dialog &&
                dialog.dataset.a11yTemporaryTabindex ===
                    "true"
            ) {
                dialog.removeAttribute(
                    "tabindex"
                );

                delete dialog.dataset
                    .a11yTemporaryTabindex;
            }

            activeModal = null;
            restoreFocus();
        }
    }


    function closeActiveModal() {
        const modal =
            getOpenModal();

        if (!modal) {
            return false;
        }

        const closeButton =
            modal.querySelector(
                CLOSE_SELECTORS
            );

        if (closeButton) {
            closeButton.click();

            return true;
        }

        return false;
    }


    function trapTab(event) {
        const modal =
            getOpenModal();

        if (
            !modal ||
            event.key !== "Tab"
        ) {
            return;
        }

        const dialog =
            getDialog(modal);

        const focusable =
            getFocusable(dialog);

        if (focusable.length === 0) {
            event.preventDefault();

            focusDialog(
                modal
            );

            return;
        }

        const first =
            focusable[0];

        const last =
            focusable[
                focusable.length - 1
            ];

        if (
            event.shiftKey &&
            document.activeElement === first
        ) {
            event.preventDefault();
            last.focus();

            return;
        }

        if (
            !event.shiftKey &&
            document.activeElement === last
        ) {
            event.preventDefault();
            first.focus();
        }
    }


    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                if (closeActiveModal()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                return;
            }

            trapTab(event);
        },
        true
    );


    const observer =
        new MutationObserver(
            syncModalState
        );

    observer.observe(
        document.documentElement,
        {
            subtree: true,
            attributes: true,
            attributeFilter: [
                "class",
                "aria-hidden",
                "hidden"
            ]
        }
    );


    /*
     * Improve labels for icon-only controls without changing
     * their text or appearance.
     */
    function repairControlLabels() {

        document
            .querySelectorAll(
                "button:not([aria-label])"
            )
            .forEach(function (button) {

                const tooltip =
                    button.dataset.tooltip ||
                    button.title;

                const visibleText =
                    button.textContent.trim();

                if (
                    !visibleText &&
                    tooltip
                ) {
                    button.setAttribute(
                        "aria-label",
                        tooltip
                    );
                }

            });
    }


    repairControlLabels();
    syncModalState();


    const labelObserver =
        new MutationObserver(
            repairControlLabels
        );

    labelObserver.observe(
        document.body,
        {
            childList: true,
            subtree: true
        }
    );

})();
