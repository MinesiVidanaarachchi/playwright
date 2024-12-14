import { test, expect } from '@playwright/test';

test('Verify Search Feature for Articles', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://your-website.com');

  // Search for an article
  await page.fill('input[name="search"]', 'Automation Testing');
  await page.click('button[type="submit"]');
  
  // Verify search results
  await expect(page.locator('.search-result')).toContainText('Automation Testing');
});
