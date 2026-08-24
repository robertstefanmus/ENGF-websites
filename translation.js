// 1. Define your translations
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
        about_subtitle2: "ENGF — European NextGen Forum è un'associazione indipendente, non governativa, istituita per promuovere l'educazione formale e non formale...",
    }
};

// 2. Function to change the language
function changeLanguage(lang) {
    // Find all elements with the 'data-key' attribute
    const elements = document.querySelectorAll('[data-key]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Optional: Save preference to local storage so it persists on page refresh
    localStorage.setItem('preferredLang', lang);
}

// 3. Listen for radio button changes
document.querySelectorAll('input[name="language"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        changeLanguage(e.target.value);
    });
});

// 4. Load saved language on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'EN';
    
    // Check the correct radio button in the UI
    const radioToCheck = document.querySelector(`input[value="${savedLang}"]`);
    if (radioToCheck) radioToCheck.checked = true;
    
    changeLanguage(savedLang);
});
