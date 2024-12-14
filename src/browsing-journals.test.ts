import { test, expect } from '@playwright/test';

test('Verify Browsing Journals by Subject', async ({ page }) => {
  // Navigate to journals page
  await page.goto('https://your-website.com/journals');
  
  // Select a subject category
  await page.click('select[name="subject"]');
  await page.selectOption('select[name="subject"]', 'Science');
  
  // Verify journals list is filtered by subject
  await expect(page.locator('.journal-item')).toHaveText('Science');
});
