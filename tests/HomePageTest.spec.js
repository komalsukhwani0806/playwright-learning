import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev-config.thewellnesscorner.com/');
  await page.getByPlaceholder('Email ID').click();
  await page.getByPlaceholder('Email ID').fill('komal.sukhwani@truworthwellness.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
});