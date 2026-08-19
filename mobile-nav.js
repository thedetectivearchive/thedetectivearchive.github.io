(function () {
    "use strict";

    const MOBILE_QUERY = "(max-width: 760px)";

    function setMenuState(header, open) {
        const toggle = header.querySelector(".mobile-menu-toggle");

        header.classList.toggle("mobile-menu-open", open);

        if (toggle) {
            toggle.setAttribute("aria-expanded", open ? "true" : "false");
            toggle.setAttribute(
                "aria-label",
                open ? "Close navigation menu" : "Open navigation menu"
            );
        }
    }

    function initializeHeader(header) {
        const toggle = header.querySelector(".mobile-menu-toggle");
        const nav = header.querySelector(".navigation, .news-page-nav, .help-page-nav");

        if (!toggle || !nav) {
            return;
        }

        header.classList.add("mobile-nav-ready");
        setMenuState(header, false);

        toggle.addEventListener("click", function () {
            setMenuState(header, !header.classList.contains("mobile-menu-open"));
        });

        nav.addEventListener("click", function (event) {
            if (event.target.closest("a, button")) {
                setMenuState(header, false);
            }
        });

        document.addEventListener("click", function (event) {
            if (
                window.matchMedia(MOBILE_QUERY).matches &&
                header.classList.contains("mobile-menu-open") &&
                !header.contains(event.target)
            ) {
                setMenuState(header, false);
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && header.classList.contains("mobile-menu-open")) {
                setMenuState(header, false);
                toggle.focus();
            }
        });
    }

    function initializeMobileNavigation() {
        document
            .querySelectorAll(".header, .news-page-header, .help-page-header")
            .forEach(initializeHeader);

        const mediaQuery = window.matchMedia(MOBILE_QUERY);

        const closeMenusOnDesktop = function (event) {
            if (!event.matches) {
                document
                    .querySelectorAll(".mobile-nav-ready.mobile-menu-open")
                    .forEach(function (header) {
                        setMenuState(header, false);
                    });
            }
        };

        if (typeof mediaQuery.addEventListener === "function") {
            mediaQuery.addEventListener("change", closeMenusOnDesktop);
        } else if (typeof mediaQuery.addListener === "function") {
            mediaQuery.addListener(closeMenusOnDesktop);
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeMobileNavigation);
    } else {
        initializeMobileNavigation();
    }
})();
