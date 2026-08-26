document.addEventListener("DOMContentLoaded", function () {

  const root = document.documentElement;

  const toggle = document.getElementById("accessibility-toggle");
  const panel = document.getElementById("accessibility-panel");
  const closeButton = document.getElementById("accessibility-close");

  const increaseButton = document.getElementById("text-increase");
  const decreaseButton = document.getElementById("text-decrease");

  const contrastButton = document.getElementById("toggle-contrast");
  const linksButton = document.getElementById("toggle-links");
  const readableButton = document.getElementById("toggle-readable");
  const motionButton = document.getElementById("toggle-motion");

  const resetButton = document.getElementById("accessibility-reset");


  /* -----------------------------------------
     Make sure widget exists
  ----------------------------------------- */

  if (!toggle || !panel) {
    console.error("Accessibility widget HTML was not found.");
    return;
  }


  /* -----------------------------------------
     Default settings
  ----------------------------------------- */

  const defaults = {
    fontSize: 0,
    contrast: false,
    links: false,
    readable: false,
    motion: false
  };


  let settings = loadSettings();


  /* -----------------------------------------
     Open / close panel
  ----------------------------------------- */

  function openPanel() {
    panel.hidden = false;

    toggle.setAttribute("aria-expanded", "true");
  }


  function closePanel() {
    panel.hidden = true;

    toggle.setAttribute("aria-expanded", "false");
  }


  toggle.addEventListener("click", function (event) {

    event.preventDefault();
    event.stopPropagation();

    if (panel.hidden) {
      openPanel();
    } else {
      closePanel();
    }

  });


  if (closeButton) {

    closeButton.addEventListener("click", function () {
      closePanel();
      toggle.focus();
    });

  }


  /* ESC closes panel */

  document.addEventListener("keydown", function (event) {

    if (event.key === "Escape" && !panel.hidden) {
      closePanel();
      toggle.focus();
    }

  });


  /* -----------------------------------------
     Increase text
  ----------------------------------------- */

  if (increaseButton) {

    increaseButton.addEventListener("click", function () {

      if (settings.fontSize < 2) {
        settings.fontSize++;
      }

      applySettings();

    });

  }


  /* -----------------------------------------
     Decrease text
  ----------------------------------------- */

  if (decreaseButton) {

    decreaseButton.addEventListener("click", function () {

      if (settings.fontSize > 0) {
        settings.fontSize--;
      }

      applySettings();

    });

  }


  /* -----------------------------------------
     High contrast
  ----------------------------------------- */

  if (contrastButton) {

    contrastButton.addEventListener("click", function () {

      settings.contrast = !settings.contrast;

      applySettings();

    });

  }


  /* -----------------------------------------
     Underline links
  ----------------------------------------- */

  if (linksButton) {

    linksButton.addEventListener("click", function () {

      settings.links = !settings.links;

      applySettings();

    });

  }


  /* -----------------------------------------
     Readable font
  ----------------------------------------- */

  if (readableButton) {

    readableButton.addEventListener("click", function () {

      settings.readable = !settings.readable;

      applySettings();

    });

  }


  /* -----------------------------------------
     Reduce motion
  ----------------------------------------- */

  if (motionButton) {

    motionButton.addEventListener("click", function () {

      settings.motion = !settings.motion;

      applySettings();

    });

  }


  /* -----------------------------------------
     Reset
  ----------------------------------------- */

  if (resetButton) {

    resetButton.addEventListener("click", function () {

      settings = { ...defaults };

      applySettings();

    });

  }


  /* -----------------------------------------
     Apply all settings
  ----------------------------------------- */

  function applySettings() {

    root.classList.remove(
      "accessibility-font-1",
      "accessibility-font-2"
    );


    if (settings.fontSize === 1) {
      root.classList.add("accessibility-font-1");
    }


    if (settings.fontSize === 2) {
      root.classList.add("accessibility-font-2");
    }


    root.classList.toggle(
      "accessibility-contrast",
      settings.contrast
    );


    root.classList.toggle(
      "accessibility-links",
      settings.links
    );


    root.classList.toggle(
      "accessibility-readable",
      settings.readable
    );


    root.classList.toggle(
      "accessibility-reduce-motion",
      settings.motion
    );


    /* Update ARIA states */

    if (contrastButton) {
      contrastButton.setAttribute(
        "aria-pressed",
        String(settings.contrast)
      );
    }


    if (linksButton) {
      linksButton.setAttribute(
        "aria-pressed",
        String(settings.links)
      );
    }


    if (readableButton) {
      readableButton.setAttribute(
        "aria-pressed",
        String(settings.readable)
      );
    }


    if (motionButton) {
      motionButton.setAttribute(
        "aria-pressed",
        String(settings.motion)
      );
    }


    saveSettings();
  }


  /* -----------------------------------------
     Save settings
  ----------------------------------------- */

  function saveSettings() {

    try {

      localStorage.setItem(
        "engfAccessibility",
        JSON.stringify(settings)
      );

    } catch (error) {

      console.warn(
        "Accessibility preferences could not be saved.",
        error
      );

    }

  }


  /* -----------------------------------------
     Load settings
  ----------------------------------------- */

  function loadSettings() {

    try {

      const saved =
        localStorage.getItem("engfAccessibility");


      if (!saved) {
        return { ...defaults };
      }


      return {
        ...defaults,
        ...JSON.parse(saved)
      };


    } catch (error) {

      return { ...defaults };

    }

  }


  /* -----------------------------------------
     Initialise
  ----------------------------------------- */

  applySettings();

});