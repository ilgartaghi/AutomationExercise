
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
import { ProductsPage } from './pages/ProductsPage';

test('Verify Products and Product Details', async ({ page }) => {
  const home = new HomePage(page);
  const products = new ProductsPage(page);

  // 1-2. Open home
  await home.gotoHomePage();
  await expect(page).toHaveTitle('Automation Exercise');

  // 5. Go to Products page
  await products.openProducts();
  await expect(page).toHaveTitle('Automation Exercise - All Products');

  // 7. Open first product details
  await products.openFirstProduct();
  await expect(page).toHaveTitle('Automation Exercise - Product Details');

  // 9. Verify product details visible
  await products.verifyProductDetailsVisible();
});