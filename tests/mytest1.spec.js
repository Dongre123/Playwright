// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByPlaceholder('Username').click();
//   await page.getByPlaceholder('Username').fill('admin');
//   await page.getByPlaceholder('Username').click();
//   await page.getByPlaceholder('Username').click();
//   await page.getByPlaceholder('Username').fill('Admin');
//   await page.getByText('LoginUsername : AdminPassword').click();
//   await page.getByPlaceholder('Password').click();
//   await page.getByPlaceholder('Password').fill('admin123');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.locator('span').filter({ hasText: 'Alia bhatt' }).locator('i').click();
//   await page.getByRole('menuitem', { name: 'Logout' }).click();
// });