document.addEventListener('DOMContentLoaded', () => {
    // 1. Define the translations
    const translations = {
        EN: {
            "about-title": "ABOUT",
            "about-subtitle1": "An institution built for <br> the next generation.",
            "about-subtitle2": "ENGF — European NextGen Forum is an independent, non-governmental <br> association established to advance formal and non-formal education, research, <br> leadership, civic and institutional dialogue, culture and European cooperation <br> among young people.",
            "nav-about": "ABOUT",
            "nav-work": "OUR WORK",
            "nav-dept": "DEPARTMENTS"
        },
        RO: {
            "about-title": "DESRE NOI",
            "about-subtitle1": "O instituție construită pentru <br> generația viitoare.",
            "about-subtitle2": "ENGF — European NextGen Forum este o asociație independentă, non-guvernamentală <br> înființată pentru a promova educația formală și non-formală, cercetarea, <br> leadership-ul, dialogul civic și instituțional, cultura și cooperarea europeană <br> între tineri.",
            "nav-about": "DESRE NOI",
            "nav-work": "ACTIVITATEA NOASTRĂ",
            "nav-dept": "DEPARTAMENTE"
        },
        IT: {
            "about-title": "CHI SIAMO",
            "about-subtitle1": "Un'istituzione costruita per <br> la prossima generazione.",
            "about-subtitle2": "L'ENGF — European NextGen Forum è un'associazione indipendente e non governativa <br> istituita per promuovere l'educazione formale e non formale, la ricerca, <br> la leadership, il dialogo civico e istituzionale, la cultura e la cooperazione europea <br> tra i giovani.",
            "nav-about": "CHI SIAMO",
            "nav-work": "IL NOSTRO LAVORO",
            "nav-dept": "DIPARTIMENTI"
        }
    };

    // 2. Select all radio buttons with name="language"
    const langRadios = document.querySelectorAll('input[name="language"]');

    // 3. Function to update the text on the page
    function updateLanguage(lang) {
        console.log(`Switching language to: ${lang}`); // DEBUG LOG

        const selectedTranslations = translations[lang];

        // We look for elements that have a specific class or ID matching our translation keys
        // For the About page:
        const elementsToTranslate = [
            { selector: '.about-title', key: 'about-title' },
            { selector: '.about-subtitle1', key: 'about-subtitle1' },
            { selector: '.about-subtitle2', key: 'about-subtitle2' },
            // For the Header:
            { selector: 'a[href="about.html"]', key: 'nav-about' },
            { selector: 'a[href="our-work.html"]', key: 'nav-work' },
            { selector: 'a[href="departments.html"]', key: 'nav-dept' },
        ];

        elementsToTranslate.forEach(item => {
            const element = document.querySelector(item.selector);
            if (element && selectedTranslations[item.key]) {
                console.log(`Updating ${item.selector} to ${selectedTranslations[item.key]}`); // DEBUG LOG
                element.innerHTML = selectedTranslations[item.key];
            }
        });
    }

    // 4. Add the event listener to each radio button
    langRadios.forEach(radio => {
        radio.addEventListener('change', (event) => {
            const selectedLang = event.target.value;
            console.log(`Radio button clicked! Value: ${selectedLang}`); // DEBUG LOG
            updateLanguage(selectedLang);
        });
    });

    // 5. Set initial language based on the checked radio button on load
    const initialLang = document.querySelector('input[name="language"]:checked')?.value || 'EN';
    console.log(`Initial load language: ${initialLang}`); // DEBUG LOG
    updateLanguage(initialLang);
});
