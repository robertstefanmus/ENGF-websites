document.addEventListener("componentsLoaded", () => {

    const translations = {

        en: {
            "page_title": "About ENGF - Mission, Principles & Governance",

            "about_title": "ABOUT",
            "about_sub1": "An institution built for <br> the next generation.",
            "about_sub2": "ENGF — European NextGen Forum is an independent, non-governmental <br> association established to advance formal and non-formal education, research, <br> leadership, civic and institutional dialogue, culture and European cooperation <br> among young people.",

            "who_we_are_label": "WHO WE ARE",
            "who_we_are_text": "ENGF is a permanent platform for education, training, research, debate and participation. It brings young people into contact with academics, experts, policymakers, public institutions, civil society, international organisations and the private sector — and gives that contact structure, method and continuity.",

            "mission_label": "MISSION",
            "mission_text": "To advance education, research, leadership, civic and institutional dialogue, culture and European cooperation among young people, by creating durable structures through which they can learn, publish, deliberate and contribute.",

            "what_we_do_label": "WHAT WE DO",

            "education_title": "EDUCATION",
            "education_text": "Courses, workshops, masterclasses, summer schools and simulations.",

            "research_title": "RESEARCH",
            "research_text": "Fellowships, working groups, policy briefs and published analysis.",

            "dialogue_title": "DIALOGUE",
            "dialogue_text": "Conferences, roundtables and structured institutional exchange.",

            "participation_title": "PARTICIPATION",
            "participation_text": "Consultation, civic education and recommendations to institutions.",

            "culture_title": "CULTURE",
            "culture_text": "Exhibitions, screenings and open calls for emerging artists.",

            "innovation_title": "INNOVATION",
            "innovation_text": "Digital transformation of education and the responsible use of AI.",

            "community_title": "COMMUNITY",
            "community_text": "Volunteering, service days and social campaigns with local partners.",

            "cooperation_title": "COOPERATION",
            "cooperation_text": "Partnerships in Romania, across Europe and internationally.",

            "about_image_alt": "Parliament interior",

            "principles_title": "Our principles",

            "principle_independence_title": "Independence",
            "principle_independence_text": "ENGF is non-governmental and independent, unaffiliated with any political party, religious denomination or commercial interest.",

            "principle_neutrality_title": "Political neutrality",
            "principle_neutrality_text": "ENGF does not conduct political propaganda and does not support candidates or electoral competitors.",

            "principle_pluralism_title": "Pluralism",
            "principle_pluralism_text": "Debate is conducted with respect for a range of legitimate views and for the evidence behind them.",

            "principle_integrity_title": "Integrity",
            "principle_integrity_text": "Conflicts of interest are declared and managed; conduct is governed by internal rules.",

            "principle_transparency_title": "Transparency",
            "principle_transparency_text": "Activity, governance and finances are documented and reported in accordance with law and statute.",

            "principle_equality_title": "Equality of opportunity",
            "principle_equality_text": "Participation is open, and selection is made on stated criteria without discrimination.",

            "principle_european_title": "European cooperation",
            "principle_european_text": "Work is conducted with partners in Romania, across Europe and internationally.",

            "principle_evidence_title": "Evidence-based dialogue",
            "principle_evidence_text": "Recommendations follow research; assertions are sourced and open to scrutiny.",

            "governance_title": "Governance",

            "general_assembly_title": "General Assembly",
            "general_assembly_text": "The supreme body of the association, composed of its members.",

            "board_title": "Board of Directors",
            "board_text": "Responsible for the execution of the Assembly's decisions and for current management.",

            "president_title": "President",
            "president_text": "Represents the association and chairs its bodies in accordance with the Statute.",

            "vice_presidents_title": "Vice-Presidents",
            "vice_presidents_text": "Support the President and hold delegated responsibilities.",

            "departmental_coordinators_title": "Departmental Coordinators",
            "departmental_coordinators_text": "Lead the eight specialised departments within the framework set by the Board.",

            "members_to_be_published": "MEMBERS TO BE PUBLISHED",

            "governance_note": "Names, mandates and reports are published once formally adopted. ENGF does not publish personal data drawn from its constitutive documents.",

            "our_work_button": "OUR WORK",
            "ecosystem_button": "THE ENGF ECOSYSTEM"
        },


        ro: {
            "page_title": "Despre ENGF - Misiune, Principii și Guvernanță",

            "about_title": "DESPRE",
            "about_sub1": "O instituție construită pentru <br> noua generație.",
            "about_sub2": "ENGF — European NextGen Forum este o asociație independentă, neguvernamentală, înființată pentru a promova educația formală și non-formală, cercetarea, leadershipul, dialogul civic și instituțional, cultura și cooperarea europeană între tineri.",

            "who_we_are_label": "CINE SUNTEM",
            "who_we_are_text": "ENGF este o platformă permanentă pentru educație, formare, cercetare, dezbatere și participare. Aceasta aduce tinerii în contact cu cadre universitare, experți, factori de decizie, instituții publice, societatea civilă, organizații internaționale și sectorul privat — oferind acestui contact structură, metodă și continuitate.",

            "mission_label": "MISIUNE",
            "mission_text": "Promovarea educației, cercetării, leadershipului, dialogului civic și instituțional, culturii și cooperării europene între tineri, prin crearea unor structuri durabile prin care aceștia să poată învăța, publica, delibera și contribui.",

            "what_we_do_label": "CE FACEM",

            "education_title": "EDUCAȚIE",
            "education_text": "Cursuri, ateliere, masterclass-uri, școli de vară și simulări.",

            "research_title": "CERCETARE",
            "research_text": "Burse, grupuri de lucru, analize de politici publice și cercetări publicate.",

            "dialogue_title": "DIALOG",
            "dialogue_text": "Conferințe, mese rotunde și schimburi instituționale structurate.",

            "participation_title": "PARTICIPARE",
            "participation_text": "Consultare, educație civică și recomandări adresate instituțiilor.",

            "culture_title": "CULTURĂ",
            "culture_text": "Expoziții, proiecții și apeluri deschise pentru artiști emergenți.",

            "innovation_title": "INOVAȚIE",
            "innovation_text": "Transformarea digitală a educației și utilizarea responsabilă a inteligenței artificiale.",

            "community_title": "COMUNITATE",
            "community_text": "Voluntariat, zile de serviciu comunitar și campanii sociale cu parteneri locali.",

            "cooperation_title": "COOPERARE",
            "cooperation_text": "Parteneriate în România, în Europa și la nivel internațional.",

            "about_image_alt": "Interiorul Parlamentului",

            "principles_title": "Principiile noastre",

            "principle_independence_title": "Independență",
            "principle_independence_text": "ENGF este o organizație neguvernamentală și independentă, neafiliată niciunui partid politic, cult religios sau interes comercial.",

            "principle_neutrality_title": "Neutralitate politică",
            "principle_neutrality_text": "ENGF nu desfășoară propagandă politică și nu susține candidați sau competitori electorali.",

            "principle_pluralism_title": "Pluralism",
            "principle_pluralism_text": "Dezbaterile se desfășoară cu respect pentru o gamă largă de opinii legitime și pentru dovezile care le susțin.",

            "principle_integrity_title": "Integritate",
            "principle_integrity_text": "Conflictele de interese sunt declarate și gestionate, iar conduita este reglementată prin norme interne.",

            "principle_transparency_title": "Transparență",
            "principle_transparency_text": "Activitatea, guvernanța și finanțele sunt documentate și raportate în conformitate cu legea și statutul.",

            "principle_equality_title": "Egalitatea de șanse",
            "principle_equality_text": "Participarea este deschisă, iar selecția se realizează pe baza unor criterii declarate, fără discriminare.",

            "principle_european_title": "Cooperare europeană",
            "principle_european_text": "Activitatea este desfășurată împreună cu parteneri din România, din Europa și din întreaga lume.",

            "principle_evidence_title": "Dialog bazat pe dovezi",
            "principle_evidence_text": "Recomandările se bazează pe cercetare, iar afirmațiile sunt documentate și supuse verificării.",

            "governance_title": "Guvernanță",

            "general_assembly_title": "Adunarea Generală",
            "general_assembly_text": "Organul suprem al asociației, alcătuit din membrii acesteia.",

            "board_title": "Consiliul Director",
            "board_text": "Responsabil pentru executarea deciziilor Adunării Generale și pentru gestionarea activității curente.",

            "president_title": "Președinte",
            "president_text": "Reprezintă asociația și prezidează organele acesteia în conformitate cu Statutul.",

            "vice_presidents_title": "Vicepreședinți",
            "vice_presidents_text": "Îl sprijină pe Președinte și exercită responsabilități delegate.",

            "departmental_coordinators_title": "Coordonatori de departamente",
            "departmental_coordinators_text": "Coordonează cele opt departamente specializate în cadrul stabilit de Consiliul Director.",

            "members_to_be_published": "MEMBRII VOR FI PUBLICAȚI",

            "governance_note": "Numele, mandatele și rapoartele sunt publicate după adoptarea lor oficială. ENGF nu publică date cu caracter personal preluate din documentele sale constitutive.",

            "our_work_button": "ACTIVITATEA NOASTRĂ",
            "ecosystem_button": "ECOSISTEMUL ENGF"
        },


        it: {
            "page_title": "Chi siamo - ENGF - Missione, Principi e Governance",

            "about_title": "CHI SIAMO",
            "about_sub1": "Un'istituzione costruita per <br> la prossima generazione.",
            "about_sub2": "ENGF — European NextGen Forum è un'associazione indipendente e non governativa, costituita per promuovere l'educazione formale e non formale, la ricerca, la leadership, il dialogo civico e istituzionale, la cultura e la cooperazione europea tra i giovani.",

            "who_we_are_label": "CHI SIAMO",
            "who_we_are_text": "ENGF è una piattaforma permanente per l'istruzione, la formazione, la ricerca, il dibattito e la partecipazione. Mette in contatto i giovani con accademici, esperti, responsabili politici, istituzioni pubbliche, società civile, organizzazioni internazionali e settore privato — dando a questo contatto struttura, metodo e continuità.",

            "mission_label": "MISSIONE",
            "mission_text": "Promuovere l'istruzione, la ricerca, la leadership, il dialogo civico e istituzionale, la cultura e la cooperazione europea tra i giovani, creando strutture durature attraverso le quali possano imparare, pubblicare, deliberare e contribuire.",

            "what_we_do_label": "COSA FACCIAMO",

            "education_title": "ISTRUZIONE",
            "education_text": "Corsi, workshop, masterclass, scuole estive e simulazioni.",

            "research_title": "RICERCA",
            "research_text": "Borse di studio, gruppi di lavoro, policy brief e analisi pubblicate.",

            "dialogue_title": "DIALOGO",
            "dialogue_text": "Conferenze, tavole rotonde e scambi istituzionali strutturati.",

            "participation_title": "PARTECIPAZIONE",
            "participation_text": "Consultazione, educazione civica e raccomandazioni alle istituzioni.",

            "culture_title": "CULTURA",
            "culture_text": "Mostre, proiezioni e bandi aperti per artisti emergenti.",

            "innovation_title": "INNOVAZIONE",
            "innovation_text": "Trasformazione digitale dell'istruzione e uso responsabile dell'intelligenza artificiale.",

            "community_title": "COMUNITÀ",
            "community_text": "Volontariato, giornate di servizio e campagne sociali con partner locali.",

            "cooperation_title": "COOPERAZIONE",
            "cooperation_text": "Partnership in Romania, in Europa e a livello internazionale.",

            "about_image_alt": "Interno del Parlamento",

            "principles_title": "I nostri principi",

            "principle_independence_title": "Indipendenza",
            "principle_independence_text": "ENGF è un'organizzazione non governativa e indipendente, non affiliata ad alcun partito politico, confessione religiosa o interesse commerciale.",

            "principle_neutrality_title": "Neutralità politica",
            "principle_neutrality_text": "ENGF non svolge propaganda politica e non sostiene candidati o concorrenti elettorali.",

            "principle_pluralism_title": "Pluralismo",
            "principle_pluralism_text": "Il dibattito si svolge nel rispetto di una pluralità di opinioni legittime e delle evidenze che le sostengono.",

            "principle_integrity_title": "Integrità",
            "principle_integrity_text": "I conflitti di interesse vengono dichiarati e gestiti; la condotta è regolata da norme interne.",

            "principle_transparency_title": "Trasparenza",
            "principle_transparency_text": "Le attività, la governance e le finanze sono documentate e riportate in conformità alla legge e allo statuto.",

            "principle_equality_title": "Parità di opportunità",
            "principle_equality_text": "La partecipazione è aperta e la selezione avviene sulla base di criteri dichiarati, senza discriminazioni.",

            "principle_european_title": "Cooperazione europea",
            "principle_european_text": "Le attività vengono svolte con partner in Romania, in Europa e a livello internazionale.",

            "principle_evidence_title": "Dialogo basato sulle evidenze",
            "principle_evidence_text": "Le raccomandazioni seguono la ricerca; le affermazioni sono documentate e aperte al controllo.",

            "governance_title": "Governance",

            "general_assembly_title": "Assemblea Generale",
            "general_assembly_text": "L'organo supremo dell'associazione, composto dai suoi membri.",

            "board_title": "Consiglio di Amministrazione",
            "board_text": "Responsabile dell'esecuzione delle decisioni dell'Assemblea e della gestione ordinaria.",

            "president_title": "Presidente",
            "president_text": "Rappresenta l'associazione e presiede i suoi organi in conformità allo Statuto.",

            "vice_presidents_title": "Vicepresidenti",
            "vice_presidents_text": "Supportano il Presidente e svolgono le responsabilità loro delegate.",

            "departmental_coordinators_title": "Coordinatori dei Dipartimenti",
            "departmental_coordinators_text": "Guidano gli otto dipartimenti specializzati nell'ambito stabilito dal Consiglio.",

            "members_to_be_published": "MEMBRI DA PUBBLICARE",

            "governance_note": "Nomi, mandati e relazioni vengono pubblicati una volta adottati formalmente. ENGF non pubblica dati personali tratti dai propri documenti costitutivi.",

            "our_work_button": "IL NOSTRO LAVORO",
            "ecosystem_button": "L'ECOSISTEMA ENGF"
        }
    };

    function updateContent(lang) {

    if (!translations[lang]) {

        console.error(
            "[About i18n] Unknown language:",
            lang
        );

        return;
    }


    /*
     * IMPORTANT:
     * Do NOT use:
     *
     * document.querySelectorAll("[data-i18n]")
     *
     * because that also selects header and footer.
     */

    const page = document.querySelector("main");

    if (!page) {
        console.error(
            "[About i18n] <main> element not found."
        );
        return;
    }


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
                `[About i18n] Missing translation: ${key}`
            );

        }

    });


    /* Page title */

    const pageTitle =
        translations[lang]["page_title"];


    if (pageTitle) {
        document.title = pageTitle;
    }

}


/* =====================================================
   LISTEN TO GLOBAL LANGUAGE CHANGE
===================================================== */

document.addEventListener(
    "engfLanguageChanged",
    event => {

        const lang =
            event.detail.language;

        updateContent(lang);

    }
);


/* =====================================================
   INITIAL PAGE TRANSLATION
===================================================== */

/*
 * This is important.
 *
 * Even if the event happened before this script loaded,
 * the page will still get the correct language.
 */

const savedLanguage =
    localStorage.getItem("engfLanguage") || "en";


updateContent(savedLanguage);
});