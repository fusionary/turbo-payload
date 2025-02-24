import base from '@local/eslint-config/next'

/** @typedef {import('eslint').Linter.Config} Config */

/** @type {Config[]} */
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const baseConfig = base

const config = [
  {
    ignores: ['src/app/(payload)/*', 'src/payload.types.ts', 'next-env.d.ts'],
    name: 'Ignore Payload files',
  },
  ...baseConfig,
]

export default config
