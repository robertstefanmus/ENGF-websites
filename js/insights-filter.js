document.addEventListener("DOMContentLoaded", () => {
  const buttons = [...document.querySelectorAll(".insights-filter")];
  const views = [...document.querySelectorAll(".insights-view")];

  if (!buttons.length || !views.length) return;

  function activateFilter(filter) {
    buttons.forEach((button) => {
      const active = button.dataset.filter === filter;

      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    views.forEach((view) => {
      view.hidden = view.dataset.view !== filter;
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      activateFilter(filter);

      const url = new URL(window.location.href);

      if (filter === "all") {
        url.searchParams.delete("filter");
      } else {
        url.searchParams.set("filter", filter);
      }

      window.history.replaceState({}, "", url);
    });
  });

  const requestedFilter =
    new URLSearchParams(window.location.search).get("filter");

  const validFilter =
    requestedFilter &&
    buttons.some((button) => button.dataset.filter === requestedFilter)
      ? requestedFilter
      : "all";

  activateFilter(validFilter);
});