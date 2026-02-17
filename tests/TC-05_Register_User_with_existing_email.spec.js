// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'New User Signup!' is visible
// 6. Enter name and already registered email address
// 7. Click 'Signup' button
// 8. Verify error 'Email Address already exist!' is visible

import { test, expect } from '@playwright/test';
import { SignupPage } from './pages/SignupPage';

test('Register User with existing email', async ({page}) => {
    const signup = new SignupPage(page);

    await signup.gotoHome();
    await signup.openSignupLogin(); //check

    await signup.startSignup('samir', 'timregression+2@gmail.com');

    await expect(page.locator('text=Email Address already exist!')).toBeVisible();
    await page.waitForTimeout(3000);

});