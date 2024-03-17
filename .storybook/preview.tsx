import * as React from 'react';
import type { Preview } from '@storybook/react';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import '@/styles/globals.css';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['OVERVIEW', 'THEME', 'TYPOGRAPHY'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true, // 👈 Set this
    },
  },
};

export const decorators = [
  (Story) => (
    <div>
      <Story />
    </div>
  ),
];

export default preview;
