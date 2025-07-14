/**
 * @see https://stylelint.io/user-guide/configure
 * @type {import('stylelint').Config}
 */
const lintRules = {
  extends: [
    'stylelint-config-css-modules',
    'stylelint-prettier/recommended',
    'stylelint-config-property-sort-order-smacss',
  ],
  plugins: [],
  rules: {},
};

export default lintRules;
