document.addEventListener('DOMContentLoaded', () => {
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

    const languageInputs = document.querySelectorAll('input[name="language"]');

    function updateContent(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        document.documentElement.lang = lang;
    }

    languageInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            const selectedLang = e.target.value.toLowerCase();
            updateContent(selectedLang);
        });
    });

    // Initialize with the currently checked radio button
    const initialLang = document.querySelector('input[name="language"]:checked')?.value.toLowerCase() || 'en';
    updateContent(initialLang);
});
