import { defineConfig } from '@playwright/test';
import { env } from './config/env';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  timeout: 30 * 1000,
  expect: {
    timeout: 15 * 1000,
  },
  globalSetup: './setup/global-setup.ts',
  globalTeardown: './teardown/global-teardown.ts',

  use: {

    baseURL: env.url,
    trace: 'on-first-retry'


  },

  /* Configure projects for major browsers */
  projects: [

    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        viewport: null,
        launchOptions: {
          args: ['--start-maximized']
        },
        storageState: 'playwright/auth/chromium.json',

      },


    },


    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
        storageState: 'playwright/auth/firefox.json',
      },
    },

    {
      name: 'webkit',
      use: {
        browserName: 'webkit',
        storageState: 'playwright/auth/webkit.json',
      },
    },

  ],


});
