import { test, expect } from '@playwright/test';

test('Verify Login Feature with Valid Credentials', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://wiley.scienceconnect.io/login');

  // Adjust the selectors
  const usernameInput = page.locator('#email-input'); // The email input field
  const submitButton = page.locator('#sign-in-btn');  // The sign-in button

  // Ensure the username input field is visible
  await expect(usernameInput).toBeVisible({ timeout: 30000 });

  // Fill in valid credentials (make sure the email is correct)
  await usernameInput.fill('minesividanaarachchi@gmail.com');  

  // Click the login button
  await submitButton.click();

  // Wait for the page to navigate and verify successful login
  await expect(page).toHaveURL('https://onlinelibrary.wiley.com/'); 

 
});
