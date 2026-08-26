function initAccessibilityTranslations() {

    const translations = {

        /* =====================================================
           ENGLISH
        ===================================================== */

        en: {

            accessibility_open:
                "Open accessibility settings",

            accessibility_settings:
                "Accessibility settings",

            accessibility_close:
                "Close accessibility settings",

            accessibility_title:
                "Accessibility",

            text_size:
                "Text size",

            text_decrease:
                "Decrease text size",

            text_increase:
                "Increase text size",

            high_contrast:
                "High contrast",

            underline_links:
                "Underline links",

            readable_font:
                "Readable font",

            reset_settings:
                "RESET SETTINGS"
        },


        /* =====================================================
           ROMANIAN
        ===================================================== */

        ro: {

            accessibility_open:
                "Deschide setările de accesibilitate",

            accessibility_settings:
                "Setări de accesibilitate",

            accessibility_close:
                "Închide setările de accesibilitate",

            accessibility_title:
                "Accesibilitate",

            text_size:
                "Dimensiunea textului",

            text_decrease:
                "Micșorează dimensiunea textului",

            text_increase:
                "Mărește dimensiunea textului",

            high_contrast:
                "Contrast ridicat",

            underline_links:
                "Subliniază linkurile",

            readable_font:
                "Font lizibil",

            reset_settings:
                "RESETEAZĂ SETĂRILE"
        },


        /* =====================================================
           ITALIAN
        ===================================================== */

        it: {

            accessibility_open:
                "Apri le impostazioni di accessibilità",

            accessibility_settings:
                "Impostazioni di accessibilità",

            accessibility_close:
                "Chiudi le impostazioni di accessibilità",

            accessibility_title:
                "Accessibilità",

            text_size:
                "Dimensione del testo",

            text_decrease:
                "Riduci la dimensione del testo",

            text_increase:
                "Aumenta la dimensione del testo",

            high_contrast:
                "Contrasto elevato",

            underline_links:
                "Sottolinea i link",

            readable_font:
                "Carattere leggibile",

            reset_settings:
                "RIPRISTINA IMPOSTAZIONI"
        }
    };


    /* =====================================================
       UPDATE ACCESSIBILITY CONTENT
    ===================================================== */

    function updateAccessibilityContent(lang) {

        if (!translations[lang]) {
            lang = "en";
        }


        /* VISIBLE TEXT */

        document
            .querySelectorAll(
                "#accessibility-panel [data-i18n]"
            )
            .forEach(element => {

                const key =
                    element.dataset.i18n;

                if (
                    translations[lang][key] !== undefined
                ) {
                    element.textContent =
                        translations[lang][key];
                }
            });


        /* ARIA LABELS */

        document
            .querySelectorAll(
                "[data-i18n-aria-label]"
            )
            .forEach(element => {

                const key =
                    element.dataset.i18nAriaLabel;

                if (
                    translations[lang][key] !== undefined
                ) {
                    element.setAttribute(
                        "aria-label",
                        translations[lang][key]
                    );
                }
            });
    }


    /* =====================================================
       LANGUAGE SWITCHER
    ===================================================== */

    const languageInputs =
        document.querySelectorAll(
            'input[name="language"]'
        );


    languageInputs.forEach(input => {

        input.addEventListener(
            "change",
            event => {

                const lang =
                    event.target.value.toLowerCase();

                updateAccessibilityContent(lang);
            }
        );
    });


    /* =====================================================
       INITIAL LANGUAGE
    ===================================================== */

    const savedLanguage =
        localStorage.getItem("engfLanguage");


    const checkedLanguage =
        document.querySelector(
            'input[name="language"]:checked'
        );


    const initialLanguage =
        savedLanguage ||
        checkedLanguage?.value.toLowerCase() ||
        "en";


    updateAccessibilityContent(
        initialLanguage
    );
}


/* =====================================================
   INITIALIZE AFTER COMPONENTS
===================================================== */

if (
    document.documentElement.dataset.componentsLoaded === "true"
) {

    initAccessibilityTranslations();

} else {

    document.addEventListener(
        "componentsLoaded",
        initAccessibilityTranslations,
        { once: true }
    );
}