const translations = {
    EN: {
        about_title: "ABOUT",
        about_subtitle1: "An institution built for <br> the next generation.",
        about_subtitle2: "ENGF — European NextGen Forum is an independent, non-governmental association established to advance formal and non-formal education...",
    },
    RO: {
        about_title: "DESRE NOI",
        about_subtitle1: "O instituție construită pentru <br> generația următoare.",
        about_subtitle2: "ENGF — European NextGen Forum este o asociație independentă, non-guvernamentală, înființată pentru a promova educația formală și non-formală...",
    },
    IT: {
        about_title: "CHI SIAMO",
        about_subtitle1: "Un'istituzione costruita per <br> la prossima generazione.",
        about_subtitle2: "ENGF — European NextGen Forum è un'associazione indipendente, non governativa, istituita per promuovere l'istruzione formale e non formale...",
    }
};

function updateLanguage(lang) {
    // Find all elements with the data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Save preference to local storage so it persists across pages
    localStorage.setItem('preferredLang', lang);
    
    // Update the HTML lang attribute for accessibility/SEO
    document.documentElement.lang = lang.toLowerCase();
}

// Initialize language switcher listeners
document.addEventListener('DOMContentLoaded', () => {
    // 1. Restore saved language from localStorage or default to EN
    const savedLang = localStorage.getItem('preferredLang') || 'EN';
    
    // 2. Set the radio button in the header to match savedLang
    const radio = document.querySelector(`input[name="language"][value="${savedLang}"]`);
    if (radio) radio.checked = true;

    // 3. Apply the translation immediately
    updateLanguage(savedLang);

    // 4. Listen for changes on the radio buttons
    document.querySelectorAll('input[name="language"]').forEach(input => {
        input.addEventListener('change', (e) => {
            updateLanguage(e.target.value);
        });
    });
});
