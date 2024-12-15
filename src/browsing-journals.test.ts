import { test, expect } from '@playwright/test';

test('Verify Browsing Journals by Subject', async ({ page }) => {
  // Navigate to the journals page
  await page.goto('https://onlinelibrary.wiley.com/action/showPublications?PubType=journal');

  
  const subjectDropdown = page.locator('#searchField1'); 
  
  // Ensure the subject dropdown is visible
  await expect(subjectDropdown).toBeVisible({ timeout: 20000 });
  
  // Select a category from the dropdown
  await subjectDropdown.selectOption('Science'); 

  // Verify at least one journal is displayed
  const journalItems = page.locator('.journal-item');
  expect(await journalItems.count()).toBeGreaterThan(0);
});
