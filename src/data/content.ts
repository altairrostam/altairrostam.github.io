export const latestWriting = [
  {
    title: "AI engineering is software engineering with one extra API call",
    href: "/notes/ai-engineering-is-software-engineering-with-one-extra-api-call.html",
    date: "2026-08-24",
    displayDate: "2026.08.24",
    tag: "ai",
    type: "note",
    summary: "The hard parts were never the model."
  },
  {
    title: "Nobody owns the boring half",
    href: "/writing.html",
    date: "2026-08-11",
    displayDate: "2026.08.11",
    tag: "practice",
    type: "note",
    summary: "Migrations, cleanup, the ticket nobody wants."
  },
  {
    title: "Standards that are really suggestions",
    href: "/writing.html",
    date: "2026-07-29",
    displayDate: "2026.07.29",
    tag: "systems",
    type: "note",
    summary: "Style guides nobody's blocked a PR on."
  },
  {
    title: "How to answer without being useless",
    href: "/writing.html",
    date: "2026-07-15",
    displayDate: "2026.07.15",
    tag: "misc",
    type: "note",
    summary: "On giving people something they can act on."
  }
] as const;

export const writingEntries = [
  ...latestWriting,
  {
    title: "The on-call rotation is a management tool",
    href: "/writing/the-on-call-rotation-is-a-management-tool.html",
    date: "2026-07-02",
    displayDate: "2026.07.02",
    tag: "practice",
    type: "essay",
    summary: "It gets sold as engineering hygiene. It is really organizational telemetry."
  },
  {
    title: "Ran out of milk, made the coffee anyway",
    href: "/writing.html",
    date: "2026-06-30",
    displayDate: "2026.06.30",
    tag: "personal",
    type: "note",
    summary: "Small domestic failures and what fixes them."
  },
  {
    title: "The bug was a calendar, not a bug",
    href: "/writing.html",
    date: "2026-06-09",
    displayDate: "2026.06.09",
    tag: "systems",
    type: "note",
    summary: "DST again. It's always DST."
  },
  {
    title: "A week off the pager",
    href: "/writing.html",
    date: "2026-05-22",
    displayDate: "2026.05.22",
    tag: "personal",
    type: "note",
    summary: "What I noticed about my own attention."
  },
  {
    title: "What \"production-ready\" actually verifies",
    href: "/writing.html",
    date: "2026-05-18",
    displayDate: "2026.05.18",
    tag: "systems",
    type: "essay",
    summary: "Not that it works. That someone is willing to be paged for it."
  },
  {
    title: "Grep before you architect",
    href: "/writing.html",
    date: "2026-05-03",
    displayDate: "2026.05.03",
    tag: "practice",
    type: "note",
    summary: "Most \"redesigns\" are a search you didn't run."
  },
  {
    title: "What LLMs are actually bad at reviewing",
    href: "/writing.html",
    date: "2026-04-19",
    displayDate: "2026.04.19",
    tag: "ai",
    type: "note",
    summary: "Confidence and correctness aren't the same signal."
  },
  {
    title: "Moved a plant, it lived",
    href: "/writing.html",
    date: "2026-04-02",
    displayDate: "2026.04.02",
    tag: "personal",
    type: "note",
    summary: "Lower the stakes on purpose sometimes."
  },
  {
    title: "Roaming: a case for generalists on senior teams",
    href: "/writing.html",
    date: "2026-03-30",
    displayDate: "2026.03.30",
    tag: "career",
    type: "essay",
    summary: "Specialization is a bet that the problem holds still long enough to be worth it."
  },
  {
    title: "Postmortems nobody reads",
    href: "/writing.html",
    date: "2026-01-14",
    displayDate: "2026.01.14",
    tag: "practice",
    type: "essay",
    summary: "The document isn't the deliverable. The changed reflex is."
  },
  {
    title: "The interview problem is a proxy for a worse one",
    href: "/writing.html",
    date: "2025-11-02",
    displayDate: "2025.11.02",
    tag: "hiring",
    type: "essay",
    summary: "You're testing for whether they'll tell you it's wrong."
  }
] as const;

export const projects = [
  {
    name: "runbook",
    description: "A static-site generator for on-call docs that fails the build if a link is stale.",
    meta: "go"
  },
  {
    name: "quietpager",
    description: "Pager-duty analytics that surfaces which services are actually loud, not which alerts fired most.",
    meta: "typescript"
  },
  {
    name: "backfill",
    description: "A CLI for replaying production traffic against a staging index without melting it.",
    meta: "rust"
  }
] as const;

export const openSource = [
  {
    name: "postgres-lag-exporter",
    description: "Small metrics exporter for replication lag; still gets the occasional PR.",
    meta: "maintainer"
  },
  {
    name: "sidekiq",
    description: "A few merged fixes around dead job retries.",
    meta: "contributor"
  },
  {
    name: "httpx",
    description: "Fixed a timeout edge case that took longer to reproduce than to fix.",
    meta: "contributor"
  }
] as const;
