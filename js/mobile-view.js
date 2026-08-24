document.addEventListener("componentsLoaded", () => {

    const hamburgerButton =
        document.getElementById("hamburgerBtn");

    const mobileMenu =
        document.getElementById("mobileMenu");

    if (!hamburgerButton || !mobileMenu) {
        console.error(
            "[mobile] hamburgerBtn or mobileMenu not found"
        );
        return;
    }


    const closeMenu = () => {

        mobileMenu.classList.remove("active");

        document.body.classList.remove("menu-open");
        document.documentElement.classList.remove("menu-open");

        hamburgerButton.classList.remove("active");

        hamburgerButton.setAttribute(
            "aria-expanded",
            "false"
        );
    };


    const toggleMenu = () => {

        const isOpen =
            mobileMenu.classList.toggle("active");

        document.body.classList.toggle(
            "menu-open",
            isOpen
        );

        document.documentElement.classList.toggle(
            "menu-open",
            isOpen
        );

        hamburgerButton.classList.toggle(
            "active",
            isOpen
        );

        hamburgerButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    };


    hamburgerButton.addEventListener(
        "click",
        (event) => {
            event.stopPropagation();
            toggleMenu();
        }
    );


    mobileMenu.querySelectorAll("a").forEach(
        (link) => {
            link.addEventListener(
                "click",
                closeMenu
            );
        }
    );


    document.addEventListener(
        "click",
        (event) => {

            if (!event.target.closest(".topbar")) {
                closeMenu();
            }
        }
    );


    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {
                closeMenu();
            }
        }
    );

});