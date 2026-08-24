document.addEventListener("componentsLoaded", () => {

    const headerTranslations = {

        en: {
            "header_brand_name": "EUROPEAN NEXTGEN FORUM",

            "nav_about": "ABOUT",
            "nav_our_work": "OUR WORK",
            "nav_departments": "DEPARTMENTS",
            "nav_ecosystem": "ECOSYSTEM",
            "nav_programmes": "PROGRAMMES",
            "nav_events": "EVENTS",
            "nav_insights": "INSIGHTS",
            "nav_partners": "PARTNERS",
            "nav_get_involved": "GET INVOLVED",
            "nav_contact": "CONTACT",

            "ecosystem_institute": "ENGF Institute",
            "ecosystem_institute_desc": "Department for Academic Programmes & Research",

            "ecosystem_academy": "ENGF Academy",
            "ecosystem_academy_desc": "Department for Education & Professional Development",

            "ecosystem_ftb": "Forumul Tinerilor Buzău",
            "ecosystem_ftb_desc": "Department for Civic Participation & Institutional Dialogue",

            "ecosystem_agora": "Agora ENGF",
            "ecosystem_agora_desc": "Department for Public Dialogue & Participation",

            "ecosystem_forum": "ENGF Forum",
            "ecosystem_forum_desc": "Department for Conferences & Strategic Dialogue",

            "ecosystem_community": "ENGF Community",
            "ecosystem_community_desc": "Department for Volunteering & Community Engagement",

            "ecosystem_creative": "European NextGen Creative Youth Platform",
            "ecosystem_creative_desc": "Department for Culture & Creative Industries",

            "ecosystem_digital": "ENGF Digital Education Initiative",
            "ecosystem_digital_desc": "Department for Digital Transformation & Innovation in Education"
        },

        ro: {
            "header_brand_name": "EUROPEAN NEXTGEN FORUM",

            "nav_about": "DESPRE",
            "nav_our_work": "ACTIVITATEA NOASTRĂ",
            "nav_departments": "DEPARTAMENTE",
            "nav_ecosystem": "ECOSISTEM",
            "nav_programmes": "PROGRAME",
            "nav_events": "EVENIMENTE",
            "nav_insights": "ANALIZE",
            "nav_partners": "PARTENERI",
            "nav_get_involved": "IMPLICĂ-TE",
            "nav_contact": "CONTACT",

            "ecosystem_institute": "ENGF Institute",
            "ecosystem_institute_desc": "Departamentul pentru Programe Academice și Cercetare",

            "ecosystem_academy": "ENGF Academy",
            "ecosystem_academy_desc": "Departamentul pentru Educație și Dezvoltare Profesională",

            "ecosystem_ftb": "Forumul Tinerilor Buzău",
            "ecosystem_ftb_desc": "Departamentul pentru Participare Civică și Dialog Instituțional",

            "ecosystem_agora": "Agora ENGF",
            "ecosystem_agora_desc": "Departamentul pentru Dialog Public și Participare",

            "ecosystem_forum": "ENGF Forum",
            "ecosystem_forum_desc": "Departamentul pentru Conferințe și Dialog Strategic",

            "ecosystem_community": "ENGF Community",
            "ecosystem_community_desc": "Departamentul pentru Voluntariat și Implicare Comunitară",

            "ecosystem_creative": "European NextGen Creative Youth Platform",
            "ecosystem_creative_desc": "Departamentul pentru Cultură și Industrii Creative",

            "ecosystem_digital": "ENGF Digital Education Initiative",
            "ecosystem_digital_desc": "Departamentul pentru Transformare Digitală și Inovație în Educație"
        },

        it: {
            "header_brand_name": "EUROPEAN NEXTGEN FORUM",

            "nav_about": "CHI SIAMO",
            "nav_our_work": "IL NOSTRO LAVORO",
            "nav_departments": "DIPARTIMENTI",
            "nav_ecosystem": "ECOSISTEMA",
            "nav_programmes": "PROGRAMMI",
            "nav_events": "EVENTI",
            "nav_insights": "APPROFONDIMENTI",
            "nav_partners": "PARTNER",
            "nav_get_involved": "PARTECIPA",
            "nav_contact": "CONTATTI",

            "ecosystem_institute": "ENGF Institute",
            "ecosystem_institute_desc": "Dipartimento per i Programmi Accademici e la Ricerca",

            "ecosystem_academy": "ENGF Academy",
            "ecosystem_academy_desc": "Dipartimento per l'Istruzione e lo Sviluppo Professionale",

            "ecosystem_ftb": "Forumul Tinerilor Buzău",
            "ecosystem_ftb_desc": "Dipartimento per la Partecipazione Civica e il Dialogo Istituzionale",

            "ecosystem_agora": "Agora ENGF",
            "ecosystem_agora_desc": "Dipartimento per il Dialogo Pubblico e la Partecipazione",

            "ecosystem_forum": "ENGF Forum",
            "ecosystem_forum_desc": "Dipartimento per le Conferenze e il Dialogo Strategico",

            "ecosystem_community": "ENGF Community",
            "ecosystem_community_desc": "Dipartimento per il Volontariato e il Coinvolgimento della Comunità",

            "ecosystem_creative": "European NextGen Creative Youth Platform",
            "ecosystem_creative_desc": "Dipartimento per la Cultura e le Industrie Creative",

            "ecosystem_digital": "ENGF Digital Education Initiative",
            "ecosystem_digital_desc": "Dipartimento per la Trasformazione Digitale e l'Innovazione nell'Istruzione"
        }
    };


    function updateHeaderLanguage(lang) {

        if (!headerTranslations[lang]) {
            console.error("[Header i18n] Unknown language:", lang);
            return;
        }

        const header = document.querySelector(".topbar");

        if (!header) {
            return;
        }

        const elements = header.querySelectorAll("[data-i18n]");

        elements.forEach(element => {

            const key = element.getAttribute("data-i18n");

            if (headerTranslations[lang][key] !== undefined) {
                element.innerHTML = headerTranslations[lang][key];
            } else {
                console.warn(
                    `[Header i18n] Missing translation: ${key}`
                );
            }

        });
    }


    const languageInputs =
        document.querySelectorAll('input[name="language"]');


    languageInputs.forEach(input => {

        input.addEventListener("change", event => {

            const selectedLang =
                event.target.value.toLowerCase();

            updateHeaderLanguage(selectedLang);

            // Optional:
            // save selected language so it remains selected
            // when moving to another page
            localStorage.setItem("engfLanguage", selectedLang);

        });

    });


    // Check whether the user already selected a language
    const savedLanguage =
        localStorage.getItem("engfLanguage");


    // If no language was saved, use the checked radio button
    const checkedLanguage =
        document.querySelector(
            'input[name="language"]:checked'
        );


    const initialLang =
        savedLanguage ||
        checkedLanguage?.value.toLowerCase() ||
        "en";


    // Make the correct language radio button checked
    const initialInput =
        document.querySelector(
            `input[name="language"][value="${initialLang.toUpperCase()}"]`
        );


    if (initialInput) {
        initialInput.checked = true;
    }


    updateHeaderLanguage(initialLang);

});