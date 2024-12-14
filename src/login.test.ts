import { test, expect } from '@playwright/test';

test('Verify Login Feature with Valid Credentials', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://your-website.com/login');
  
  // Fill in valid credentials
  await page.fill('input[name="username"]', 'validUser');
  await page.fill('input[name="password"]', 'validPassword');
  
  // Submit the login form
  await page.click('button[type="submit"]');
  
  // Verify login success
  await expect(page).toHaveURL('https://your-website.com/dashboard');
  await expect(page.locator('h1')).toHaveText('Welcome, validUser');
});
