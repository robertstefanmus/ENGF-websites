document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = [...document.querySelectorAll(".programme-filter")];
  const programmeCards = [...document.querySelectorAll(".programme-card")];
  const emptyState = document.querySelector("#programmes-empty");

  if (!filterButtons.length || !emptyState) return;

  function setActiveButton(activeButton) {
    filterButtons.forEach((button) => {
      const active = button === activeButton;

      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function applyFilter(category) {
    let visible = 0;

    programmeCards.forEach((card) => {
      const matches =
        category === "all" ||
        card.dataset.category === category;

      card.hidden = !matches;
      card.classList.remove("is-filtering-out");

      if (matches) {
        visible++;
      }
    });

    emptyState.hidden = visible > 0;
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.filter;

      setActiveButton(button);
      applyFilter(category);

      // Updates the URL without refreshing the page.
      // Example:
      // programmes?filter=research
      const url = new URL(window.location.href);

      if (category === "all") {
        url.searchParams.delete("filter");
      } else {
        url.searchParams.set("filter", category);
      }

      window.history.replaceState({}, "", url);
    });
  });

  // Allows direct links such as:
  // programmes?filter=fellowships
  // programmes?filter=academy
  // programmes?filter=research
  const requestedFilter =
    new URLSearchParams(window.location.search).get("filter");

  if (requestedFilter) {
    const requestedButton = filterButtons.find(
      (button) => button.dataset.filter === requestedFilter
    );

    if (requestedButton) {
      setActiveButton(requestedButton);
      applyFilter(requestedFilter);
    }
  }
});