// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully -
// 4. Click on 'Signup / Login' button
// 5. Verify 'New User Signup!' is visible -
// 6. Enter name and email address
// 7. Click 'Signup' button
// 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible +
// 9. Fill details: Title, Name, Email, Password, Date of birth
// 10. Select checkbox 'Sign up for our newsletter!'
// 11. Select checkbox 'Receive special offers from our partners!'
// 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
// 13. Click 'Create Account button'
// 14. Verify that 'ACCOUNT CREATED!' is visible +
// 15. Click 'Continue' button
// 16. Verify that 'Logged in as username' is visible
// 17. Click 'Delete Account' button
// 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button

import {test, expect } from '@playwright/test';
import { SignupPage } from './pages/SignupPage';

test('Register User', async ({ page }) => {
    const signup = new SignupPage(page);

    await signup.gotoHome();
    await signup.openSignupLogin(); //check

    await signup.startSignup('samir', 'timregression+2@gmail.com');

    await expect(page.locator("//b[normalize-space()='Enter Account Information']")).toBeVisible();
    await page.waitForTimeout(3000);
   
/////////////////////////////////////////////////////////////////////////////////// 
    await signup.fillAccountDetails(
        'Papapa@123',   // userpassword
        '15',           // DOBday (value or label)
        '11',           // DOBmonth
        '2000',         // DOByear
        'Samir',        // firstName
        'Test',         // lastName
        '123 Main St',  // address1
        'Canada',       // country label (because we use selectOption({label: country}))
        'Ontario',      // state
        'Toronto',      // city
        'M1M1M1',       // zipcode
        '4160000000'    // mobileNumber

    )

  // If you added createAccount() method
  await signup.createAccount();

  // Assertion (optional)
  await expect(page.locator('text=ACCOUNT CREATED!')).toBeVisible();
  await page.locator("//a[normalize-space()='Continue']");

  await page.waitForTimeout(3000);

});