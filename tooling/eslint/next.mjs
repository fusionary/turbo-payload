// @ts-expect-error - no types
import { default as base } from '@fusionary/eslint-config/next'

/** @typedef {import('eslint').Linter.Config} Config */

/** @type {Config[]} */
const config = [
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  ...base,
  {
    name: 'File Naming Convention',
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            kebabCase: true,
            pascalCase: true,
          },
        },
      ],
    },
  },
]

export default config
