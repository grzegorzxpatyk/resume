/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
      },
      backgroundSize: {
        '100%': '100% 100%'
      },
      animation: {
        'flip': 'flip 1s ease-in-out 1'
      },
      keyframes: {
        flip: {
          '0%': { transform: 'rotate3d(0)'},
          '100%': { transform: 'rotate3d(0, 1, 0, 1turn)'}
        } 
      }
    },
  },
  plugins: []
}