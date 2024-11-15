import { test, expect } from '@playwright/test';

test('Homepage', async ({ page }) => {
  // Navigate to the URL
  await page.goto('https://dev-config.thewellnesscorner.com/');

  // Log in to the application
  await page.getByPlaceholder('Email ID').fill('komal.sukhwani@truworthwellness.com');
  await page.getByPlaceholder('Password').fill('Test@123');
  await page.getByRole('button', { name: 'Log in' }).click();

  // Navigate to "Create Client Request" page
  await page.getByRole('link', { name: 'Create Client Request' }).click();

  // Fill out client details
  await page.getByPlaceholder('Enter Client Name').fill('Abc');
  await page.getByPlaceholder('Enter Client Key').fill('Abc');

  // Upload file
  const fileUploadButton = await page.getByRole('button', { name: 'plus Click to Upload' });
  await fileUploadButton.locator('input[type="file"]').setInputFiles('D:/1.PNG');


  // Confirm upload in dialog, if needed
  await page.getByRole('dialog').locator('img').click();
  await page.getByRole('button', { name: 'OK' }).click();

  // Select Client Partner
  await page.getByLabel('Client Partner').click();
  await page.getByText('PartnerA', { exact: true }).click();

  // Enter number of employees
  await page.getByPlaceholder('Enter number of employees').click();
  await page.getByPlaceholder('Enter number of employees').fill('155');

  // // Select start date

  const today = new Date()
  const date = today.getDate();
  const month = today.getMonth().toString();
  const year = today.getFullYear();
  const afterOneYear = year + 1;

  await page.getByPlaceholder('Enter Launch Date').click()
  await page.getByText(date).click()

  // Set expiration date

  await page.getByPlaceholder('Enter Expire Date').click()
  await page.getByRole('button', { name: year }).click();
  await page.getByText(afterOneYear).click()
  await page.getByRole('cell', { name: month }).click()
  // await page.getByText(month).click()
  // await page.getByText(date).click()


  await page.getByRole('button', { name: 'Save & Next' }).click();
});