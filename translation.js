const translations = {
    EN: {
        about_title: "ABOUT",
        about_sub1: "An institution built for <br> the next generation.",
        about_sub2: "ENGF — European NextGen Forum is an independent, non-governmental association established to advance formal and non-formal education...",
        // Add header translations here
        nav_about: "ABOUT",
        nav_work: "OUR WORK"
    },
    RO: {
        about_title: "DESRE NOI",
        about_sub1: "O instituție construită pentru <br> generația viitoare.",
        about_sub2: "ENGF — European NextGen Forum este o asociație independentă, non-guvernamentală...",
        nav_about: "DESRE NOI",
        nav_work: "ACTIVITATEA NOASTRĂ"
    },
    IT: {
        about_title: "CHI SIAMO",
        about_sub1: "Un'istituzione costruita per <br> la prossima generazione.",
        about_sub2: "ENGF — European NextGen Forum è un'associazione indipendente, non governativa...",
        nav_about: "CHI SIAMO",
        nav_work: "IL NOSTRO LAVORO"
    }
};

function updateLanguage(lang) {
    console.log("Attempting to switch language to:", lang);
    
    const elements = document.querySelectorAll('[data-i18n]');
    console.log(`Found ${elements.length} elements to translate.`);

    if (elements.length === 0) {
        console.warn("No elements with [data-i18n] attribute found on this page!");
    }

    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        } else {
            console.error(`Translation missing for key: ${key} in language: ${lang}`);
        }
    });
}

// Use Event Delegation to ensure it works even if the header is loaded dynamically
document.addEventListener('change', (event) => {
    if (event.target && event.target.name === 'language') {
        const selectedLang = event.target.value;
        console.log("Language radio button clicked. Selected:", selectedLang);
        updateLanguage(selectedLang);
        
        // Optional: Save preference to localStorage
        localStorage.setItem('preferredLang', selectedLang);
    }
});

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    console.log("Page DOM loaded. Checking for saved language...");
    const savedLang = localStorage.getItem('preferredLang') || 'EN';
    
    // Set the radio button to match the saved language
    const radio = document.querySelector(`input[name="language"][value="${savedLang}"]`);
    if (radio) {
        radio.checked = true;
    }
    
    updateLanguage(savedLang);
});
