import base from '@local/eslint-config'

/** @typedef {import('eslint').Linter.Config} Config */

/** @type {Config[]} */
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const baseConfig = base

const config = [
  ...baseConfig,
  {
    name: 'Ignore Process.env',
    rules: {
      'no-process-env': 'off',
    },
  },
]

export default config
