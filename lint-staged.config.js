/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*.{css,scss}': ['stylelint --cache --fix'],
  '*.{ts,tsx,js,jsx}': ['eslint --cache --fix'],
  '*.{ts,tsx,js,jsx,css,scss,md,env,json}': ['prettier --write'],
};
