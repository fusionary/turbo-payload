import base from '@local/eslint-config'

/** @typedef {import('eslint').Linter.Config} Config */

/** @type {Config[]} */
const _default = [
  {
    ignores: ['.astro/**/*', 'src/env.d.ts'],
  },
  ...base,
]

export default _default
