function initThemeToggle() {
  document.querySelectorAll("[data-theme-toggle]").forEach((toggle) => {
    if (toggle.dataset.ready === "true") return;
    toggle.dataset.ready = "true";
    toggle.addEventListener("click", () => {
      const dark = !document.documentElement.classList.contains("dark");
      document.documentElement.classList.toggle("dark", dark);
      localStorage.setItem("altair-theme", dark ? "dark" : "light");
    });
  });
}

function initNoteFilters() {
  const controls = [...document.querySelectorAll("[data-filter-tag]")];
  const notes = [...document.querySelectorAll("[data-note-tag]")];
  let active = null;

  if (!controls.length || !notes.length) return;

  function renderFilter() {
    controls.forEach((control) => {
      const selected = control.dataset.filterTag === active;
      control.classList.toggle("is-active", selected);
      control.setAttribute("aria-pressed", String(selected));
    });
    notes.forEach((note) => {
      note.hidden = Boolean(active) && note.dataset.noteTag !== active;
    });
  }

  controls.forEach((control) => {
    if (control.dataset.ready === "true") return;
    control.dataset.ready = "true";
    control.setAttribute("aria-pressed", "false");
    control.addEventListener("click", () => {
      active = active === control.dataset.filterTag ? null : control.dataset.filterTag;
      renderFilter();
    });
  });
}

function initPage() {
  initThemeToggle();
  initNoteFilters();
}

document.addEventListener("astro:page-load", initPage);
initPage();
