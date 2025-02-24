import base from '@local/eslint-config'

/** @typedef {import('eslint').Linter.Config} Config */

/** @type {Config[]} */
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const baseConfig = base

/** @type {Config[]} */
const _default = [
  {
    ignores: ['.astro/**/*', 'src/env.d.ts'],
  },
  ...baseConfig,
]

export default _default
