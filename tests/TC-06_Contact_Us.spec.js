// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Contact Us' button
// 5. Verify 'GET IN TOUCH' is visible
// 6. Enter name, email, subject and message
// 7. Upload file
// 8. Click 'Submit' button
// 9. Click OK button
// 10. Verify success message 'Success! Your details have been submitted successfully.' is visible
// 11. Click 'Home' button and verify that landed to home page successfully

import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { ContactUsPage } from './pages/ContactUsPage';

test ('Contuct Us Form', async ({page}) => {

    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    const home = new HomePage(page);
    await home.gotoHomePage();

    // 3. Verify that home page is visible successfully
    await expect(page).toHaveTitle('Automation Exercise');
 

    // 4. Click on 'Contact Us' button
    await home.openContactUs();

    // 5. Verify 'GET IN TOUCH' is visible
    await expect(page.locator('text=GET IN TOUCH')).toBeVisible();

    const contactus = new ContactUsPage(page);

    // 6. Enter name, email, subject and message + // 7. Upload file
    await contactus.fillContactus(
        'Samir',
        'timregression+2@gmail.com',
        'Test Subject',
        'This is a test message'
    );

    await page.waitForTimeout(2000);

    // 8-9. Click Submit + Click OK on popup
  await contactus.submitAndAcceptDialog();

  // 10. Verify success message visible
  await expect(page.locator(contactus.SuccessMessage)).toBeVisible();

  // 11. Click Home button and verify landed to home page successfully
  await page.locator(contactus.HomeButton).click();
  await expect(page).toHaveURL('https://automationexercise.com/');
  await expect(page).toHaveTitle('Automation Exercise');
});
