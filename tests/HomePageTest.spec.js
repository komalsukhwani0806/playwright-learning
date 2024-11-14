import { test, expect } from '@playwright/test';
import { Console } from 'console';

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
  await page.getByPlaceholder('Enter Client Name').fill('Test client');
  await page.getByPlaceholder('Enter Client Key').fill('TC-1');

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
  await page.getByPlaceholder('Enter number of employees').fill('100');

  // // Select start date

  const date = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  await page.selectOption('#monthSelect', `${month}`); 
  await page.selectOption('#yearSelect', `${year}`); 
  await page.click(`text=${day}`); 
  
 // const currentDay = today.getDate().toString();
  //console.log(currentDay);

  await page.fill('#clientform_launchDate', currentDay);
  //await page.locator('.clientform_launchDate').first().click();
  //await page.getByRole('cell', { name: '13' }).click(); // Select the 13th of the month

  // // Set expiration date
  // await page.getByPlaceholder('Enter Expire Date').click();
  // await page.locator('div:nth-child(6) > div > .ant-picker-dropdown > .ant-picker-panel-container > .ant-picker-panel > .ant-picker-date-panel > .ant-picker-header > .ant-picker-header-super-next-btn').click(); // Navigate to the next year
  // await page.getByTitle('2025-11-30').click(); // Select expiration date

  // // Additional client form fields
  // await page.locator('div:nth-child(9) > .ant-form-item > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content').click();

  // // Multiple "Save & Next" clicks
  // for (let i = 0; i < 5; i++) {
  //   await page.getByRole('button', { name: 'Save & Next' }).click();


  // Final submission steps
  // await page.getByRole('button', { name: 'Submit' }).click();
  // await page.getByRole('button', { name: 'Approve' }).click();
  // await page.getByRole('button', { name: 'Yes' }).click();
  // }
});