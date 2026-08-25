document.addEventListener("DOMContentLoaded", async () => {

    const header = document.getElementById("header");
    const footer = document.getElementById("footer");


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


    document.documentElement.dataset.componentsLoaded =
        "true";

    document.dispatchEvent(
        new Event("componentsLoaded")
    );

});