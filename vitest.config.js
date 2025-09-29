import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          globals: true,
          name: 'utils',
          include: ['packages/utils/__test__/**/*.{test,spec}.{ts,js}'],
          environment: 'node',
        },
      },
      {
        plugins: [react()],
        test: {
          globals: true,
          name: 'components',
          include: [
            'packages/client/__test__/**/*.{test,spec}.{tsx,jsx,js,ts}',
          ],
          browser: {
            enabled: true,
            instances: [{ browser: 'chromium' }],
          },
        },
      },
    ],
  },
});
