import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

import { baseConfig } from '@local/env/helpers/baseConfig'

export const env = createEnv({
  ...baseConfig,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  experimental__runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
  },
  shared: {
    NODE_ENV: z
      .enum(['development', 'production', 'test'])
      .default('development'),
  },
})
