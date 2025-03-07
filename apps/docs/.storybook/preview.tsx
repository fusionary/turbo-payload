import type { Preview } from '@fusionary/storybook-config/preview'
import basePreview from '@fusionary/storybook-config/preview'

import '@fusionary/storybook-config/style.css'
import './style.css'
import '@local/ui/styles.css'

const parameters = {
  ...basePreview.parameters,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  options: {
    ...basePreview.parameters?.options,
    storySort: {
      method: 'alphabetical',
      order: [
        'Layouts',
        'Pages',
        'Sections',
        'Typography',
        'Elements',
        'Layout',
        'Forms',
        'Icons',
      ],
    },
  },
}

const preview: Preview = {
  ...basePreview,
  parameters,
}

export default preview
