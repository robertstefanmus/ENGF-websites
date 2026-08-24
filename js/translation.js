document.addEventListener('DOMContentLoaded', () => {
    console.log('[i18n] DOMContentLoaded fired');

    const translations = {
        en: {
            "about-title": "ABOUT",
            "about-subtitle1": "An institution built for <br> the next generation.",
            "about-subtitle2": "ENGF — European NextGen Forum is an independent, non-governmental <br> association established to advance formal and non-formal education, research, <br> leadership, civic and institutional dialogue, culture and European cooperation <br> among young people."
        },
        ro: {
            "about-title": "DESPRE",
            "about-subtitle1": "O instituție construită pentru noua generație.",
            "about-subtitle2": "ENGF — European NextGen Forum este o asociație independentă, neguvernamentală, înființată pentru a promova educația formală și non-formală, cercetarea, leadershipul, dialogul civic și instituțional, cultura și cooperarea europeană între tineri."
        },
        it: {
            "about-title": "CHI SIAMO",
            "about-subtitle1": "Un'istituzione costruita per la prossima generazione.",
            "about-subtitle2": "ENGF — European NextGen Forum è un'associazione indipendente e non governativa, costituita per promuovere l'educazione formale e non formale, la ricerca, la leadership, il dialogo civico e istituzionale, la cultura e la cooperazione europea tra i giovani."
        }
    };

    console.log('[i18n] Available languages:', Object.keys(translations));

    const languageInputs = document.querySelectorAll('input[name="language"]');

    console.log('[i18n] Language inputs found:', languageInputs.length);
    console.log('[i18n] Language inputs:', languageInputs);

    function updateContent(lang) {
        console.log(`[i18n] updateContent() called with language: "${lang}"`);

        // Check if language exists
        if (!translations[lang]) {
            console.error(`[i18n] No translations found for language: "${lang}"`);
            console.log('[i18n] Available languages:', Object.keys(translations));
            return;
        }

        const elements = document.querySelectorAll('[data-i18n]');

        console.log(`[i18n] Elements with [data-i18n] found: ${elements.length}`);

        if (elements.length === 0) {
            console.warn(
                '[i18n] No elements found with [data-i18n]. ' +
                'Make sure your HTML elements have attributes like data-i18n="about-title".'
            );
        }

        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');

            console.log(`[i18n] Processing element:`, el);
            console.log(`[i18n] Translation key: "${key}"`);

            if (translations[lang][key]) {
                console.log(
                    `[i18n] Updating "${key}" -> "${translations[lang][key]}"`
                );

                el.innerHTML = translations[lang][key];
            } else {
                console.warn(
                    `[i18n] Missing translation for key "${key}" in language "${lang}"`
                );
            }
        });

        document.documentElement.lang = lang;

        console.log(`[i18n] document.lang set to: "${lang}"`);
        console.log(`[i18n] Finished updating content for "${lang}"`);
    }

    // Add listeners to language inputs
    languageInputs.forEach(input => {
        console.log(
            `[i18n] Adding change listener to input:`,
            input,
            `value="${input.value}"`
        );

        input.addEventListener('change', (e) => {
            console.log('[i18n] Language input changed:', e.target);
            console.log('[i18n] New value:', e.target.value);

            const selectedLang = e.target.value.toLowerCase();

            console.log('[i18n] Normalized language:', selectedLang);

            updateContent(selectedLang);
        });
    });

    // Find currently selected language
    const checkedInput = document.querySelector(
        'input[name="language"]:checked'
    );

    console.log('[i18n] Currently checked input:', checkedInput);

    const initialLang =
        checkedInput?.value.toLowerCase() || 'en';

    console.log('[i18n] Initial language:', initialLang);

    updateContent(initialLang);
});