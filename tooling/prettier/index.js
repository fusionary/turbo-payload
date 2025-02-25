const path = require('node:path')
// @ts-expect-error - no types
const base = require('@fusionary/prettier-config')

const { join } = path

/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */

/** @type { PrettierConfig | TailwindConfig } */
module.exports = {
  ...base,
  plugins: [...base.plugins, require.resolve('prettier-plugin-tailwindcss')],
  tailwindConfig: join(__dirname, '../../tooling/tailwind/src/tailwind.ts'),
  tailwindFunctions: ['classNames', 'clsx', 'cn', 'cva', 'tv', 'tw', 'twMerge'],
}
