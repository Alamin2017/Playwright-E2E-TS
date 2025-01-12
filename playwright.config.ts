// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['allure-playwright'],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  timeout: 60000,
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    baseURL: '',
    headless:true,
    video:'retain-on-failure',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    ignoreHTTPSErrors: true,
    actionTimeout: 60000, 
    navigationTimeout: 60000,
    screenshot: 'only-on-failure', // Automatically capture screenshots on test failure
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      
      use: {  
        browserName: 'chromium', 
        viewport: null,
    
        launchOptions: {
          args: ["--start-maximized"]
      } 
      }, 
    },
    // {
    //   name: 'firefox',
    
    //   use: {  
    //     browserName: 'firefox',  // Specify Firefox browser
    //     viewport: null,          // Disable viewport
    //     deviceScaleFactor: undefined, // Not applicable for Firefox but ensures no conflicts
        
    //     launchOptions: {
    //       args: ["--start-maximized"] // For Firefox, you may need additional prefs
    //     } 
    //   }, 
    // },
    // {
    //   name: 'Microsoft Edge',
    //   use: { 
    //     ...devices['Desktop Edge'], 
    //     channel: 'msedge',
    //     launchOptions: {
    //       args: ['--start-maximized'],
    //     },
    //     viewport: null, // Ensure Playwright doesn't override the maximized state with a default viewport size
    //     deviceScaleFactor: undefined,
    //   },
    // },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { 
    //     ...devices['Desktop Edge'], 
    //     channel: 'msedge',
    //     launchOptions: {
    //       args: ['--start-maximized'],
    //     },
    //     viewport: null, // Ensure Playwright doesn't override the maximized state with a default viewport size
    //     deviceScaleFactor: undefined,
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});