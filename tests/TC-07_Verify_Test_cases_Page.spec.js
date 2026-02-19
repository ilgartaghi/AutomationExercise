// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Test Cases' button
// 5. Verify user is navigated to test cases page successfully

import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { TestCasesPage } from './pages/TestCasesPage';

test ('Contuct Us Form', async ({page}) => {

    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    const home = new HomePage(page);
    await home.gotoHomePage();

    // 3. Verify that home page is visible successfully
    await expect(page).toHaveTitle('Automation Exercise');

    const tc = new TestCasesPage(page);
    await tc.TestCases();
    await expect(page.locator('h2.title.text-center b')).toHaveText(/Test Cases/i);


    


})