import { test, expect } from '@playwright/test';

test('Verify Browsing Journals by Subject', async ({ page }) => {
  // Navigate to the journals page
  await page.goto('https://onlinelibrary.wiley.com/');

  // Adjust the selector based on the actual element
  const subjectDropdown = page.locator('SELECTOR_FROM_CODEGEN'); // Update with actual locator
  
  // Ensure the subject dropdown is visible
  await expect(subjectDropdown).toBeVisible({ timeout: 10000 });
  
  // Select a category from the dropdown
  await subjectDropdown.selectOption('Science'); // Replace with a valid category
  
  // Verify at least one journal is displayed
  const journalItems = page.locator('.journal-item');
  expect(await journalItems.count()).toBeGreaterThan(0);
});
