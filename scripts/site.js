function initThemeToggle() {
  document.querySelectorAll("[data-theme-toggle]").forEach((toggle) => {
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
    control.setAttribute("aria-pressed", "false");
    control.addEventListener("click", () => {
      active = active === control.dataset.filterTag ? null : control.dataset.filterTag;
      renderFilter();
    });
  });
}

initThemeToggle();
initNoteFilters();
