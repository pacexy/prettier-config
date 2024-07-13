/** @type {import('prettier').Options} */
module.exports = {
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-sort-json',
    'prettier-plugin-packagejson',
    'prettier-plugin-sql',
  ],
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  // prettier-plugin-sort-json
  ...{
    jsonRecursiveSort: true,
  },
  overrides: [
    {
      files: ['**/pnpm-lock.yaml'],
      options: {
        requirePragma: true,
      },
    },
  ],
}
