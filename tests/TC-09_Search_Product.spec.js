    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    // 4. Click on 'Products' button
    // 5. Verify user is navigated to ALL PRODUCTS page successfully
    // 6. Enter product name in search input and click search button
    // 7. Verify 'SEARCHED PRODUCTS' is visible
    // 8. Verify all the products related to search are visible

    import { test, expect } from '@playwright/test';
    import { HomePage } from "./pages/HomePage";
    import { ProductsPage } from "./pages/ProductsPage";

    test('Search product', async ({page}) => {
        const home = new HomePage(page);
        const products = new ProductsPage(page);

        await home.gotoHomePage(page);
        await expect(page).toHaveTitle('Automation Exercise');

        await products.openProducts(page);
        await expect(page).toHaveTitle('Automation Exercise - All Products');

        await products.searchProduct('Tshirt');
        









    })