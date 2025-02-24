// @ts-expect-error - no types
import eslintConfigPrettier from 'eslint-config-prettier'
import svelte from 'eslint-plugin-svelte'
import globals from 'globals'
import { parser } from 'typescript-eslint'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import base from '@local/eslint-config'

/** @typedef {import('eslint').Linter.Config} Config */

/** @type {Config[]} */
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const baseConfig = base

/** @type {Config[]} */
const _default = [
  {
    ignores: ['build/', '.svelte-kit/', 'dist/'],
  },
  ...baseConfig,
  ...svelte.configs['flat/recommended'],
  eslintConfigPrettier,
  ...svelte.configs['flat/prettier'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        extraFileExtensions: ['.svelte'],
        parser,
      },
    },
  },
]

export default _default
