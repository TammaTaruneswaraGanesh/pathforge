/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F7FAF8',
        surface: '#FFFFFF',
        ink: '#14241F',
        muted: '#5B6B65',
        line: '#DCE4E0',
        accent: {
          DEFAULT: '#0E7C66',
          hover: '#0B6553',
          soft: '#DDF1EB',
          subtle: '#EEF8F5',
        },
        amber: {
          DEFAULT: '#B7791F',
          soft: '#FBF0D9',
        },
        red: {
          DEFAULT: '#C73E3E',
          soft: '#FBE4E4',
        },
      },
      fontFamily: {
        heading: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        body: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '14px',
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(20, 36, 31, 0.04), 0 1px 3px rgba(20, 36, 31, 0.02)',
        'lift': '0 8px 24px rgba(20, 36, 31, 0.08), 0 2px 6px rgba(20, 36, 31, 0.04)',
      },
    },
  },
  plugins: [],
}
