const phases = [
  {
    key: "dawn",
    label: "dawn",
    hours: [5, 6, 7],
    tint: "linear-gradient(180deg, rgba(166, 58, 80, 0.10), rgba(161, 103, 74, 0.06) 55%, rgba(var(--paper-rgb), 0.10))",
    lamps: 0.55,
    darkImage: false
  },
  {
    key: "day",
    label: "midday",
    hours: [8, 9, 10, 11, 12, 13, 14, 15],
    tint: "linear-gradient(180deg, rgba(var(--paper-rgb), 0.10), rgba(108, 142, 173, 0.04))",
    lamps: 0,
    darkImage: false
  },
  {
    key: "golden",
    label: "golden hour",
    hours: [16, 17],
    tint: "linear-gradient(180deg, rgba(161, 103, 74, 0.12), rgba(var(--paper-rgb), 0.06))",
    lamps: 0.35,
    darkImage: false
  },
  {
    key: "sunset",
    label: "sunset",
    hours: [18, 19],
    tint: "linear-gradient(180deg, rgba(var(--ink-rgb), 0.20), rgba(166, 58, 80, 0.12))",
    lamps: 0.8,
    darkImage: true
  },
  {
    key: "nightfall",
    label: "nightfall",
    hours: [20, 21],
    tint: "linear-gradient(180deg, rgba(var(--ink-rgb), 0.34), rgba(108, 142, 173, 0.14))",
    lamps: 1,
    darkImage: true
  },
  {
    key: "night",
    label: "night",
    hours: [22, 23, 0, 1, 2, 3, 4],
    tint: "linear-gradient(180deg, rgba(var(--ink-rgb), 0.46), rgba(108, 142, 173, 0.16))",
    lamps: 1,
    darkImage: true
  }
];

const lampSpots = [
  [88, 20], [92, 17], [95, 22], [85, 26], [90, 30], [97, 33], [82, 34],
  [93, 40], [87, 44], [96, 48], [78, 40], [75, 32], [72, 26], [69, 20],
  [66, 14], [69, 53], [73, 56], [66, 58], [77, 52], [81, 57], [84, 62],
  [91, 58], [41, 55], [47, 58], [53, 52]
];

const stage = document.querySelector("[data-city-stage]");
const frames = [...document.querySelectorAll("[data-phase-frame]")];
const tint = document.querySelector("[data-city-tint]");
const scrim = document.querySelector("[data-city-scrim]");
const lamps = document.querySelector("[data-city-lamps]");
const caption = document.querySelector("[data-city-caption]");
const reset = document.querySelector("[data-travel-reset]");
const heroContent = document.querySelector("[data-hero-content]");
const themeToggle = document.querySelector("[data-theme-toggle]");

let manualIndex = null;
let clock = new Date();

function phaseIndexForHour(hour) {
  const index = phases.findIndex((phase) => phase.hours.includes(hour));
  return index === -1 ? 1 : index;
}

function activeIndex() {
  return manualIndex === null ? phaseIndexForHour(clock.getHours()) : manualIndex;
}

function renderLamps(amount) {
  lamps.innerHTML = "";
  lampSpots.forEach(([x, y], index) => {
    const lamp = document.createElement("span");
    const size = index % 6 === 0 ? 4 : 2.5;
    lamp.style.left = `${x}%`;
    lamp.style.top = `${y}%`;
    lamp.style.width = `${size}px`;
    lamp.style.height = `${size}px`;
    lamp.style.opacity = amount;
    lamp.style.transform = `scale(${amount ? 1 : 0.4})`;
    lamp.style.transitionDelay = `${200 + index * 45}ms`;
    lamp.style.boxShadow = `0 0 10px 3px rgba(255, 196, 110, ${0.3 + amount * 0.45})`;
    lamps.append(lamp);
  });
}

function renderCity() {
  const index = activeIndex();
  const phase = phases[index];
  const autoIndex = phaseIndexForHour(clock.getHours());
  const hours = String(clock.getHours()).padStart(2, "0");
  const minutes = String(clock.getMinutes()).padStart(2, "0");

  frames.forEach((frame) => {
    frame.classList.toggle("is-active", frame.dataset.phaseFrame === phase.key);
  });

  tint.style.background = phase.tint;
  scrim.style.background = phase.darkImage
    ? "linear-gradient(180deg, rgba(28, 30, 36, 0.62), rgba(28, 30, 36, 0.30) 44%, rgba(28, 30, 36, 0) 66%)"
    : "linear-gradient(180deg, rgba(var(--paper-rgb), 0.86), rgba(var(--paper-rgb), 0.42) 42%, rgba(var(--paper-rgb), 0) 68%)";
  heroContent.style.color = phase.darkImage ? "var(--paper)" : "var(--ink)";
  caption.textContent = manualIndex === null
    ? `${hours}:${minutes} your time - ${phase.label} over the valley`
    : `${phase.label} over the valley - off the clock`;
  reset.textContent = manualIndex === null ? "tap the valley to travel" : "back to my clock";
  stage.dataset.phase = phase.key;
  reset.dataset.mode = manualIndex === null ? "travel" : "reset";

  if (index !== autoIndex) {
    stage.setAttribute("aria-label", `Travel from ${phase.label} to the next time of day`);
  } else {
    stage.setAttribute("aria-label", "Travel to the next time of day");
  }

  renderLamps(phase.lamps);
}

function travel() {
  const autoIndex = phaseIndexForHour(clock.getHours());
  const current = activeIndex();
  const next = (current + 1) % phases.length;
  manualIndex = next === autoIndex ? null : next;
  renderCity();
}

stage.addEventListener("click", travel);

reset.addEventListener("click", (event) => {
  event.stopPropagation();
  if (manualIndex === null) {
    travel();
    return;
  }
  manualIndex = null;
  renderCity();
});

themeToggle.addEventListener("click", () => {
  const dark = !document.documentElement.classList.contains("dark");
  document.documentElement.classList.toggle("dark", dark);
  localStorage.setItem("altair-theme", dark ? "dark" : "light");
});

setInterval(() => {
  clock = new Date();
  if (manualIndex === null) renderCity();
}, 60000);

renderCity();
