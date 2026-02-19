
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    // 4. Click on 'Products' button
    // 5. Verify user is navigated to ALL PRODUCTS page successfully
    // 6. The products list is visible
    // 7. Click on 'View Product' of first product
    // 8. User is landed to product detail page
    // 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand

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

})