import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Set your test directory
  timeout: 30000, // Set global timeout for all tests
  expect: {
    timeout: 5000, // Timeout for expect API
  },
  retries: 0, // number of retries for failing tests
  workers: 1, //  number of parallel workers
  use: {
    browserName: 'chromium', // Set the default browser for tests
    headless: true, // Run tests in headless mode 
    baseURL: 'https://onlinelibrary.wiley.com/', 
  },
});