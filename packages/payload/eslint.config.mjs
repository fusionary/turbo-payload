import base from '@local/eslint-config/react'

/** @typedef {import('eslint').Linter.Config} Config */

/** @type {Config[]} */
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const baseConfig = base

const config = [
  {
    ignores: ['src/payload.types.ts'],
    name: 'Ignore Payload types',
  },
  ...baseConfig,
]

export default config
