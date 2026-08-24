document.addEventListener("DOMContentLoaded", async () => {

    console.log("[components] DOMContentLoaded fired");

    const header = document.getElementById("header");
    const footer = document.getElementById("footer");


    /* =========================================================
       LOAD HEADER
    ========================================================= */

    if (header) {

        try {

            console.log("[components] Loading header.html...");

            const response = await fetch("header.html");

            if (!response.ok) {
                throw new Error(
                    `Failed to load header: ${response.status}`
                );
            }

            header.innerHTML = await response.text();

            console.log("[components] Header loaded successfully");

        } catch (error) {

            console.error(
                "[components] Error loading header:",
                error
            );
        }
    }


    /* =========================================================
       LOAD FOOTER
    ========================================================= */

    if (footer) {

        try {

            console.log("[components] Loading footer.html...");

            const response = await fetch("footer.html");

            if (!response.ok) {
                throw new Error(
                    `Failed to load footer: ${response.status}`
                );
            }

            footer.innerHTML = await response.text();

            console.log("[components] Footer loaded successfully");

        } catch (error) {

            console.error(
                "[components] Error loading footer:",
                error
            );
        }
    }


    /* =========================================================
       TELL OTHER SCRIPTS THAT COMPONENTS ARE READY
    ========================================================= */

    console.log("[components] Header and footer loading complete");

    document.dispatchEvent(
        new Event("componentsLoaded")
    );

});