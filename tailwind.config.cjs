/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        ocean: 'var(--accent-ocean)',
        nature: 'var(--accent-nature)',
        warm: 'var(--accent-warm)',
        border: 'var(--border)',
      },
      fontFamily: {
        heading: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        soft: '0 18px 45px rgb(var(--shadow-rgb) / 0.08)',
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
