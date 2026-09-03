function applyTheme() {
  const stored = localStorage.getItem("altair-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = stored ? stored === "dark" : prefersDark;
  document.documentElement.classList.toggle("dark", isDark);
}

function initThemeToggle() {
  applyTheme();

  document.querySelectorAll("[data-theme-toggle]").forEach((toggle) => {
    if (toggle.dataset.ready === "true") return;
    toggle.dataset.ready = "true";
    toggle.addEventListener("click", () => {
      const isCurrentlyDark = document.documentElement.classList.contains("dark");
      const nextDark = !isCurrentlyDark;
      document.documentElement.classList.toggle("dark", nextDark);
      localStorage.setItem("altair-theme", nextDark ? "dark" : "light");
    });
  });
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  if (!localStorage.getItem("altair-theme")) {
    document.documentElement.classList.toggle("dark", e.matches);
  }
});

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

function updateHeaderScroll() {
  const header = document.getElementById("site-header");
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 20);
}

window.addEventListener("scroll", updateHeaderScroll, { passive: true });
document.addEventListener("astro:after-swap", updateHeaderScroll);

function initPage() {
  initThemeToggle();
  initNoteFilters();
  updateHeaderScroll();
}

document.addEventListener("astro:page-load", initPage);
initPage();
