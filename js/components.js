document.addEventListener("DOMContentLoaded", async () => {

    const header =
        document.getElementById("header");

    const footer =
        document.getElementById("footer");

    const accessibility =
        document.getElementById("accessibility");


    /* =========================================
       HEADER
    ========================================= */

    if (header) {

        try {

            const response =
                await fetch("header");

            if (!response.ok) {

                throw new Error(
                    `Failed to load header: ${response.status}`
                );

            }

            header.innerHTML =
                await response.text();

        } catch (error) {

            console.error(
                "[components] Error loading header:",
                error
            );

        }

    }


    /* =========================================
       FOOTER
    ========================================= */

    if (footer) {

        try {

            const response =
                await fetch("footer");

            if (!response.ok) {

                throw new Error(
                    `Failed to load footer: ${response.status}`
                );

            }

            footer.innerHTML =
                await response.text();

        } catch (error) {

            console.error(
                "[components] Error loading footer:",
                error
            );

        }

    }


    /* =========================================
       ACCESSIBILITY
    ========================================= */

    if (accessibility) {

        try {

            const response =
                await fetch("accessibility");

            if (!response.ok) {

                throw new Error(
                    `Failed to load accessibility: ${response.status}`
                );

            }

            accessibility.innerHTML =
                await response.text();

        } catch (error) {

            console.error(
                "[components] Error loading accessibility:",
                error
            );

        }

    }


    /* =========================================
       COMPONENTS READY
    ========================================= */

    document.documentElement.dataset.componentsLoaded =
        "true";


    document.dispatchEvent(
        new Event("componentsLoaded")
    );

});