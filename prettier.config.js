/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  semi: true,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'always',
  jsxSingleQuote: false,
  bracketSameLine: false,
  xmlSelfClosingSpace: true,
  xmlQuoteAttributes: 'single',
  plugins: ['prettier-plugin-packagejson', 'prettier-plugin-organize-imports'],
  overrides: [
    {
      files: '*.{ts,tsx,js,jsx}',
      options: { printWidth: 100 },
    },
    {
      files: '*.md',
      options: { proseWrap: 'never' },
    },
  ],
};

export default config;
