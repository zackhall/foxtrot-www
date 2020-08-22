module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      sans: [
        'Lato',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
    extend: {
      // tailwind.config.js
      colors: {
        orange: {
          100: '#FEF4E9',
          200: '#FEF0E1',
          300: '#FCD2A5',
          400: '#F9B162',
          500: '#F78F1E',
          600: '#DE811B',
          700: '#945612',
          800: '#6F400E',
          900: '#4A2B09',
        },
        navy: {
          100: '#D6DADE',
          200: '#ACB5BD',
          300: '#83909B',
          400: '#596B7A',
          500: '#304659',
          600: '#2B3F50',
          700: '#263847',
          800: '#1D2A35',
          900: '#131C24',
        },
      },
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
    cursor: ['responsive', 'hover', 'focus', 'disabled'],
  },
  plugins: [],
}
