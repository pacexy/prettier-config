/** @type {import('prettier').Options} */
module.exports = {
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-sort-json',
    'prettier-plugin-packagejson',
    'prettier-plugin-sql',
    'prettier-plugin-tailwindcss', // MUST come last - https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins
  ],
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  // options for prettier-plugin-sort-json
  ...{
    jsonRecursiveSort: true,
  },
  // options for prettier-plugin-tailwindcss
  ...{
    tailwindFunctions: ['cva', 'cn'],
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
