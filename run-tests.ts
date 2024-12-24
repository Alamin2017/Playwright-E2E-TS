import { execSync } from 'child_process';

// List of browsers
const browsers: string[] = ['chromium', 'firefox'];

(async () => {
  for (const browser of browsers) {
    console.log(`Running tests on: ${browser}`);
    try {
      // Run Playwright Test Runner with the specified browser
      execSync(`npx playwright test --project=${browser}`, { stdio: 'inherit' });
    } catch (error) {
      console.error(`Tests failed on ${browser}`);
      process.exit(1); // Exit if any test fails
    }
  }
})();
