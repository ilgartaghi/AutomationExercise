// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'Login to your account' is visible
// 6. Enter correct email address and password
// 7. Click 'login' button
// 8. Verify that 'Logged in as username' is visible


import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test('Login with correct email and password', async ({page}) => {
    const login = new LoginPage(page);

    // 2. Navigate to url
    await login.gotoHomePage();

    // 3. Verify that home page is visible successfully
    //await login.verifyHomePageVisible();
    await expect(page).toHaveTitle('Automation Exercise');
    
    // 4. Click on 'Signup / Login' button
    await page.locator(login.loginLink).click();

    // 5. Verify 'Login to your account' is visible 
    await expect(page.locator('text=Login to your account')).toBeVisible();

    // 6-7. Enter correct email and password, click login
    await page.locator(login.userEmail).fill('timregression+2@gmail.com');
    await page.locator(login.userPassword).fill('Papapa@123');
    await page.locator(login.loginButton).click();

    // 8. Verify that 'Logged in as username' is visible (example)
    await expect(page.locator('text=Logged in as samir')).toBeVisible();

    await page.waitForTimeout(3000);
});

