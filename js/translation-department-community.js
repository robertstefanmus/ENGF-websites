function initCommunityTranslations() {

    const translations = {

        /* =====================================================
           ENGLISH
        ===================================================== */

        en: {

            "page_title":
                "ENGF Community - ENGF",

            "breadcrumb_departments":
                "DEPARTMENTS",

            "department_type":
                "DEPARTMENT FOR VOLUNTEERING & COMMUNITY ENGAGEMENT",

            "community_intro":
                "Community is where ENGF's work leaves the seminar room. Through Community Service Days, campaigns and continuing projects, volunteers support social centres, children's organisations, elderly care, animal shelters and veterinary partners.",


            /* TAGS */

            "tag_service_days":
                "SERVICE DAYS",

            "tag_campaigns":
                "CAMPAIGNS",

            "tag_volunteer_roles":
                "VOLUNTEER ROLES",


            /* PROGRAMME */

            "programme_image_alt":
                "Community programme materials",

            "programme_title":
                "PROGRAMME OF WORK",

            "programme_01_title":
                "Community Service Days",

            "programme_01_text":
                "Coordinated volunteering days with partner organisations.",

            "programme_02_title":
                "Social & Humanitarian Campaigns",

            "programme_02_text":
                "Collections, awareness work and direct assistance.",

            "programme_03_title":
                "Continuing Projects",

            "programme_03_text":
                "Longer engagements with social centres and care organisations.",

            "programme_04_title":
                "Animal Welfare",

            "programme_04_text":
                "Support for shelters in cooperation with veterinary partners.",


            /* CTA */

            "cta_title":
                "Interested in taking part in the work of ENGF Community?",

            "get_involved":
                "GET INVOLVED",


            /* ECOSYSTEM */

            "ecosystem_elsewhere":
                "ELSEWHERE IN THE ECOSYSTEM",

            "ecosystem_institute_text":
                "Department for Academic Programmes & Research",

            "ecosystem_academy_text":
                "Department for Education & Professional Development",

            "ecosystem_ftb_text":
                "Department for Civic Participation & Institutional Dialogue"
        },


        /* =====================================================
           ROMANIAN
        ===================================================== */

        ro: {

            "page_title":
                "ENGF Community - ENGF",

            "breadcrumb_departments":
                "DEPARTAMENTE",

            "department_type":
                "DEPARTAMENTUL PENTRU VOLUNTARIAT ȘI IMPLICARE COMUNITARĂ",

            "community_intro":
                "ENGF Community este locul în care activitatea ENGF depășește spațiul seminarului. Prin zile de voluntariat, campanii și proiecte continue, voluntarii sprijină centre sociale, organizații pentru copii, servicii dedicate persoanelor vârstnice, adăposturi pentru animale și parteneri veterinari.",


            /* TAGS */

            "tag_service_days":
                "ZILE DE VOLUNTARIAT",

            "tag_campaigns":
                "CAMPANII",

            "tag_volunteer_roles":
                "ROLURI DE VOLUNTARIAT",


            /* PROGRAMME */

            "programme_image_alt":
                "Materiale pentru programele comunitare",

            "programme_title":
                "PROGRAM DE ACTIVITATE",

            "programme_01_title":
                "Zile de Serviciu Comunitar",

            "programme_01_text":
                "Zile coordonate de voluntariat desfășurate împreună cu organizații partenere.",

            "programme_02_title":
                "Campanii Sociale și Umanitare",

            "programme_02_text":
                "Colecte, activități de conștientizare și sprijin direct.",

            "programme_03_title":
                "Proiecte Continue",

            "programme_03_text":
                "Implicare pe termen mai lung alături de centre sociale și organizații de îngrijire.",

            "programme_04_title":
                "Protecția Animalelor",

            "programme_04_text":
                "Sprijin pentru adăposturi, în cooperare cu parteneri veterinari.",


            /* CTA */

            "cta_title":
                "Ești interesat să participi la activitatea ENGF Community?",

            "get_involved":
                "IMPLICĂ-TE",


            /* ECOSYSTEM */

            "ecosystem_elsewhere":
                "ÎN ALTE ZONE ALE ECOSISTEMULUI",

            "ecosystem_institute_text":
                "Departamentul pentru Programe Academice și Cercetare",

            "ecosystem_academy_text":
                "Departamentul pentru Educație și Dezvoltare Profesională",

            "ecosystem_ftb_text":
                "Departamentul pentru Participare Civică și Dialog Instituțional"
        },


        /* =====================================================
           ITALIAN
        ===================================================== */

        it: {

            "page_title":
                "ENGF Community - ENGF",

            "breadcrumb_departments":
                "DIPARTIMENTI",

            "department_type":
                "DIPARTIMENTO PER IL VOLONTARIATO E IL COINVOLGIMENTO DELLA COMUNITÀ",

            "community_intro":
                "ENGF Community è il luogo in cui il lavoro di ENGF esce dall'aula del seminario. Attraverso giornate di servizio alla comunità, campagne e progetti continuativi, i volontari sostengono centri sociali, organizzazioni per bambini, servizi per anziani, rifugi per animali e partner veterinari.",


            /* TAGS */

            "tag_service_days":
                "GIORNATE DI SERVIZIO",

            "tag_campaigns":
                "CAMPAGNE",

            "tag_volunteer_roles":
                "RUOLI DI VOLONTARIATO",


            /* PROGRAMME */

            "programme_image_alt":
                "Materiali per i programmi della comunità",

            "programme_title":
                "PROGRAMMA DI LAVORO",

            "programme_01_title":
                "Giornate di Servizio alla Comunità",

            "programme_01_text":
                "Giornate coordinate di volontariato con organizzazioni partner.",

            "programme_02_title":
                "Campagne Sociali e Umanitarie",

            "programme_02_text":
                "Raccolte, attività di sensibilizzazione e assistenza diretta.",

            "programme_03_title":
                "Progetti Continuativi",

            "programme_03_text":
                "Collaborazioni di più lunga durata con centri sociali e organizzazioni di assistenza.",

            "programme_04_title":
                "Benessere Animale",

            "programme_04_text":
                "Supporto ai rifugi in collaborazione con partner veterinari.",


            /* CTA */

            "cta_title":
                "Ti interessa partecipare al lavoro di ENGF Community?",

            "get_involved":
                "PARTECIPA",


            /* ECOSYSTEM */

            "ecosystem_elsewhere":
                "ALTRO NELL'ECOSISTEMA",

            "ecosystem_institute_text":
                "Dipartimento per i Programmi Accademici e la Ricerca",

            "ecosystem_academy_text":
                "Dipartimento per l'Istruzione e lo Sviluppo Professionale",

            "ecosystem_ftb_text":
                "Dipartimento per la Partecipazione Civica e il Dialogo Istituzionale"
        }
    };


    /* =====================================================
       UPDATE PAGE
    ===================================================== */

    function updateContent(lang) {

        if (!translations[lang]) {

            console.error(
                "[Community i18n] Unknown language:",
                lang
            );

            return;
        }


        const page =
            document.querySelector(".community-page");

        if (!page) {

            console.error(
                "[Community i18n] .community-page not found."
            );

            return;
        }


        /* TEXT */

        const elements =
            page.querySelectorAll("[data-i18n]");


        elements.forEach(element => {

            const key =
                element.getAttribute("data-i18n");

            if (translations[lang][key] !== undefined) {

                element.innerHTML =
                    translations[lang][key];

            } else {

                console.warn(
                    `[Community i18n] Missing translation: ${key}`
                );
            }
        });


        /* ALT ATTRIBUTES */

        const altElements =
            page.querySelectorAll("[data-i18n-alt]");


        altElements.forEach(element => {

            const key =
                element.getAttribute("data-i18n-alt");

            if (translations[lang][key] !== undefined) {

                element.setAttribute(
                    "alt",
                    translations[lang][key]
                );
            }
        });


        document.documentElement.lang = lang;


        /* PAGE TITLE */

        const pageTitle =
            translations[lang]["page_title"];

        if (pageTitle) {
            document.title = pageTitle;
        }
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

                localStorage.setItem(
                    "engfLanguage",
                    lang
                );

                updateContent(lang);
            }
        );
    });


    /* =====================================================
       INITIAL LANGUAGE
    ===================================================== */

    const checkedLanguage =
        document.querySelector(
            'input[name="language"]:checked'
        );


    const savedLanguage =
        localStorage.getItem("engfLanguage");


    const initialLanguage =
        savedLanguage ||
        checkedLanguage?.value.toLowerCase() ||
        "en";


    const selectedInput =
        document.querySelector(
            `input[name="language"][value="${initialLanguage}"]`
        );


    if (selectedInput) {
        selectedInput.checked = true;
    }


    updateContent(initialLanguage);
}


/* =====================================================
   INITIALIZE AFTER COMPONENTS
===================================================== */

if (
    document.documentElement.dataset.componentsLoaded === "true"
) {

    initCommunityTranslations();

} else {

    document.addEventListener(
        "componentsLoaded",
        initCommunityTranslations,
        { once: true }
    );
}