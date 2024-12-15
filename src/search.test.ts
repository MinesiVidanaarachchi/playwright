import { test, expect } from '@playwright/test';

test('Perform a search on Wiley website', async ({ page }) => {
  // Navigate to the Wiley website
  await page.goto('https://onlinelibrary.wiley.com/',{timeout:20000});

  // Locate the search input field by its ID
  const searchInput = page.locator('#searchField1');

  // Ensure the search input field is visible
  await expect(searchInput).toBeVisible({ timeout: 50000 });

  // Type the search query into the input field
  await searchInput.fill('machine learning'); // Replace 'machine learning' with the desired search term

  // Locate the search button by its class and attributes
  const searchButton = page.locator('button[aria-label="Submit Search"]');

  // Ensure the search button is visible
  await expect(searchButton).toBeVisible({ timeout: 5000 });

  // Click the search button
  await searchButton.click();
});