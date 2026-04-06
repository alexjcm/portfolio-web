/** @type {import("prettier").Config} */
export default {
  // --- CORE PRETTIER CONFIG (2025 STANDARDS) ---
  useTabs: false,
  semi: true,
  tabWidth: 2,
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 120,
  arrowParens: 'always',
  endOfLine: 'lf',

  // --- ASTRO & HTML SPECIFIC CONFIG ---
  htmlWhitespaceSensitivity: 'ignore', // Reduces aggressive wrapping in Astro components
  plugins: ['prettier-plugin-astro', '@trivago/prettier-plugin-sort-imports'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],

  // --- IMPORT SORTING CONFIGURATION ---
  importOrder: [
    '^(astro|react|preact|vue|svelte)(/.*)?$',
    '<THIRD_PARTY_MODULES>',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
};
