document.addEventListener("componentsLoaded", function () {

    /* =========================================================
       ELEMENTS
    ========================================================= */

    const root = document.documentElement;

    const toggle = document.getElementById("accessibility-toggle");
    const panel = document.getElementById("accessibility-panel");
    const closeButton = document.getElementById("accessibility-close");

    const decreaseButton = document.getElementById("text-decrease");
    const increaseButton = document.getElementById("text-increase");

    const contrastButton = document.getElementById("toggle-contrast");
    const linksButton = document.getElementById("toggle-links");
    const readableButton = document.getElementById("toggle-readable");
    const motionButton = document.getElementById("toggle-motion");

    const resetButton = document.getElementById("accessibility-reset");


    if (!toggle || !panel) {
        console.error("Accessibility widget not found.");
        return;
    }


    /* =========================================================
       INJECT FUNCTIONAL CSS
       This guarantees JS and CSS always match.
    ========================================================= */

    const style = document.createElement("style");

    style.id = "engf-accessibility-runtime";

    style.textContent = `

        /* =====================================
           TEXT SIZE
        ===================================== */

        html.engf-a11y-size-1 body {
            zoom: 1.10;
        }

        html.engf-a11y-size-2 body {
            zoom: 1.20;
        }


        /*
           Keep floating accessibility UI normal size
           when page zoom changes.
        */

        html.engf-a11y-size-1 .accessibility-toggle,
        html.engf-a11y-size-1 .accessibility-panel {
            zoom: 0.909;
        }

        html.engf-a11y-size-2 .accessibility-toggle,
        html.engf-a11y-size-2 .accessibility-panel {
            zoom: 0.8333;
        }


        /* =====================================
           HIGH CONTRAST
        ===================================== */

        html.engf-a11y-contrast body {
            background: #ffffff !important;
            color: #000000 !important;
        }


        html.engf-a11y-contrast
        :is(
            main,
            section,
            article,
            aside,
            header,
            footer,
            nav
        ) {
            background-color: #ffffff !important;
            color: #000000 !important;
            border-color: #000000 !important;
        }


        html.engf-a11y-contrast
        :is(
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            p,
            span,
            li,
            label,
            strong,
            small
        ) {
            color: #000000 !important;
        }


        html.engf-a11y-contrast a {
            color: #0000cc !important;
        }


        html.engf-a11y-contrast button:not(.accessibility-toggle) {
            border-color: #000000 !important;
        }


        /* Keep widget readable */

        html.engf-a11y-contrast .accessibility-panel,
        html.engf-a11y-contrast .accessibility-toggle {
            background: #ffffff !important;
            border-color: #000000 !important;
        }


        html.engf-a11y-contrast .accessibility-panel * {
            color: #000000 !important;
            border-color: #000000 !important;
        }


        html.engf-a11y-contrast
        .accessibility-action[aria-pressed="true"]::after {
            background: #000000 !important;
        }


        /* =====================================
           UNDERLINE LINKS
        ===================================== */

        html.engf-a11y-links a {
            text-decoration: underline !important;
            text-decoration-thickness: 2px !important;
            text-underline-offset: 4px !important;
        }


        /* =====================================
           READABLE FONT
        ===================================== */

        html.engf-a11y-readable
        :is(
            body,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            p,
            span,
            a,
            button,
            input,
            textarea,
            select,
            label,
            li
        ) {
            font-family:
                Arial,
                Helvetica,
                sans-serif !important;
        }


        /* =====================================
           REDUCE MOTION
        ===================================== */

        html.engf-a11y-motion *,
        html.engf-a11y-motion *::before,
        html.engf-a11y-motion *::after {
            scroll-behavior: auto !important;

            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;

            transition-duration: 0.001ms !important;
            transition-delay: 0ms !important;
        }

    `;

    document.head.appendChild(style);


    /* =========================================================
       DEFAULT SETTINGS
    ========================================================= */

    const defaults = {
        textSize: 0,
        contrast: false,
        underlineLinks: false,
        readableFont: false,
        reduceMotion: false
    };


    let settings = loadSettings();


    /* =========================================================
       PANEL
    ========================================================= */

    function openPanel() {

        panel.hidden = false;

        toggle.setAttribute(
            "aria-expanded",
            "true"
        );

    }


    function closePanel() {

        panel.hidden = true;

        toggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    toggle.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        if (panel.hidden) {
            openPanel();
        } else {
            closePanel();
        }

    });


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                closePanel();

            }
        );

    }


    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
            !panel.hidden
        ) {

            closePanel();

            toggle.focus();

        }

    });


    /* =========================================================
       INCREASE TEXT
    ========================================================= */

    if (increaseButton) {

        increaseButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                if (settings.textSize < 2) {
                    settings.textSize++;
                }

                applySettings();

            }
        );

    }


    /* =========================================================
       DECREASE TEXT
    ========================================================= */

    if (decreaseButton) {

        decreaseButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                if (settings.textSize > 0) {
                    settings.textSize--;
                }

                applySettings();

            }
        );

    }


    /* =========================================================
       HIGH CONTRAST
    ========================================================= */

    if (contrastButton) {

        contrastButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                settings.contrast =
                    !settings.contrast;

                applySettings();

            }
        );

    }


    /* =========================================================
       UNDERLINE LINKS
    ========================================================= */

    if (linksButton) {

        linksButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                settings.underlineLinks =
                    !settings.underlineLinks;

                applySettings();

            }
        );

    }


    /* =========================================================
       READABLE FONT
    ========================================================= */

    if (readableButton) {

        readableButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                settings.readableFont =
                    !settings.readableFont;

                applySettings();

            }
        );

    }


    /* =========================================================
       REDUCE MOTION
    ========================================================= */

    if (motionButton) {

        motionButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                settings.reduceMotion =
                    !settings.reduceMotion;

                applySettings();

            }
        );

    }


    /* =========================================================
       RESET
    ========================================================= */

    if (resetButton) {

        resetButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                settings = {
                    ...defaults
                };

                applySettings();

            }
        );

    }


    /* =========================================================
       APPLY SETTINGS
    ========================================================= */

    function applySettings() {

        /* -------------------------
           TEXT SIZE
        ------------------------- */

        root.classList.remove(
            "engf-a11y-size-1",
            "engf-a11y-size-2"
        );


        if (settings.textSize === 1) {

            root.classList.add(
                "engf-a11y-size-1"
            );

        }


        if (settings.textSize === 2) {

            root.classList.add(
                "engf-a11y-size-2"
            );

        }


        /* -------------------------
           CONTRAST
        ------------------------- */

        root.classList.toggle(
            "engf-a11y-contrast",
            settings.contrast
        );


        /* -------------------------
           LINKS
        ------------------------- */

        root.classList.toggle(
            "engf-a11y-links",
            settings.underlineLinks
        );


        /* -------------------------
           READABLE FONT
        ------------------------- */

        root.classList.toggle(
            "engf-a11y-readable",
            settings.readableFont
        );


        /* -------------------------
           MOTION
        ------------------------- */

        root.classList.toggle(
            "engf-a11y-motion",
            settings.reduceMotion
        );


        /* -------------------------
           ARIA STATES
        ------------------------- */

        if (contrastButton) {

            contrastButton.setAttribute(
                "aria-pressed",
                String(settings.contrast)
            );

        }


        if (linksButton) {

            linksButton.setAttribute(
                "aria-pressed",
                String(settings.underlineLinks)
            );

        }


        if (readableButton) {

            readableButton.setAttribute(
                "aria-pressed",
                String(settings.readableFont)
            );

        }


        if (motionButton) {

            motionButton.setAttribute(
                "aria-pressed",
                String(settings.reduceMotion)
            );

        }


        saveSettings();

    }


    /* =========================================================
       SAVE
    ========================================================= */

    function saveSettings() {

        try {

            localStorage.setItem(
                "engfAccessibilitySettings",
                JSON.stringify(settings)
            );

        } catch (error) {

            console.warn(
                "Accessibility settings could not be saved."
            );

        }

    }


    /* =========================================================
       LOAD
    ========================================================= */

    function loadSettings() {

        try {

            const saved =
                localStorage.getItem(
                    "engfAccessibilitySettings"
                );


            if (!saved) {

                return {
                    ...defaults
                };

            }


            return {
                ...defaults,
                ...JSON.parse(saved)
            };


        } catch (error) {

            return {
                ...defaults
            };

        }

    }


    /* =========================================================
       START
    ========================================================= */

    applySettings();

});