/** @type {import('prettier').Options} */
module.exports = {
  plugins: ['prettier-plugin-sort-json', 'prettier-plugin-packagejson'],
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  // prettier-plugin-sort-json
  ...{
    jsonRecursiveSort: true,
  },
}
