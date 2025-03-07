import type { StorybookConfig } from '@fusionary/storybook-config/main'
import { config as base } from '@fusionary/storybook-config/main'

export const config: StorybookConfig = {
  ...base,
  stories: [
    '../../../packages/*/src/**/*.mdx',
    '../../../packages/*/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
}

export default config
