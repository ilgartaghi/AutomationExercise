/*
import { expect } from '@playwright/test';

exports.ProductsPage = class ProductsPage {
  constructor(page) {
    this.page = page;

    // Top menu "Products"
    this.productsLink = "a[href='/products']";

    // Products grid
    this.productsGrid = ".features_items";

    // First product "View Product" link (stable)
    this.firstViewProductLink = ".features_items a[href^='/product_details/']:has-text('View Product')";

    //Product search field and button
    this.ProductSearch = "#search_product";
    this.ProductSearchBtn = ".fa.fa-search";
    this.SearchedProductText = 'h2.title.text-center';

    // Product details block
    this.productInfo = "div.product-information";
    this.productName = `${this.productInfo} h2`;
    this.category = `${this.productInfo} p:has-text('Category:')`;
    this.price = `${this.productInfo} span span`; // inner span has 'Rs. 500'
    this.availability = `${this.productInfo} p:has-text('Availability:')`;
    this.condition = `${this.productInfo} p:has-text('Condition:')`;
    this.brand = `${this.productInfo} p:has-text('Brand:')`;
  }

  async openProducts() {
    await this.page.locator(this.productsLink).click();
    await this.page.locator(this.productsGrid).waitFor();
  }

  async openFirstProduct() {
    await this.page.locator(this.firstViewProductLink).first().click();
    await this.page.locator(this.productInfo).waitFor();
  }

  async verifyProductDetailsVisible() {
    await this.page.locator(this.productInfo).waitFor();

    await this.page.locator(this.productName).isVisible();
    await this.page.locator(this.category).isVisible();
    await this.page.locator(this.price).isVisible();
    await this.page.locator(this.availability).isVisible();
    await this.page.locator(this.condition).isVisible();
    await this.page.locator(this.brand).isVisible();
  }

  async productSearch() {
    await this.page.locator(this.ProductSearch).fill('Tshirt');
    await this.page.locator(this.ProductSearchBtn).click;
    await expect(this.page.locator(this.SearchedProductText)).toHaveText(/Searched Products/i);
  }
};

*/

import { expect } from '@playwright/test';

export class ProductsPage {
  constructor(page) {
    this.page = page;

    // Top menu
    this.productsLink = page.locator("a[href='/products']");

    // Products grid/list container
    this.productsGrid = page.locator('.features_items');

    // First product "View Product" link
    this.firstViewProductLink = page.locator(
      ".features_items a[href^='/product_details/']:has-text('View Product')"
    );

    // Search
    this.productSearchInput = page.locator('#search_product');
    this.productSearchButton = page.locator('.fa.fa-search');

    // "Searched Products" heading
    this.searchedProductsHeading = page.getByRole('heading', {
      name: /Searched Products/i,
    });

    // Product details block + fields
    this.productInfo = page.locator('div.product-information');
    this.productName = this.productInfo.locator('h2');
    this.category = this.productInfo.locator("p:has-text('Category:')");
    this.price = this.productInfo.locator('span span');
    this.availability = this.productInfo.locator("p:has-text('Availability:')");
    this.condition = this.productInfo.locator("p:has-text('Condition:')");
    this.brand = this.productInfo.locator("p:has-text('Brand:')");
  }

  async openProducts() {
    await this.productsLink.click();
    await expect(this.productsGrid).toBeVisible();
  }

  async openFirstProduct() {
    await this.firstViewProductLink.first().click();
    await expect(this.productInfo).toBeVisible();
  }

  async verifyProductDetailsVisible() {
    await expect(this.productInfo).toBeVisible();

    await expect(this.productName).toBeVisible();
    await expect(this.category).toBeVisible();
    await expect(this.price).toBeVisible();
    await expect(this.availability).toBeVisible();
    await expect(this.condition).toBeVisible();
    await expect(this.brand).toBeVisible();
  }

  async searchProduct(productName) {
    await this.productSearchInput.fill(productName);
    await this.productSearchButton.click();
    await expect(this.searchedProductsHeading).toBeVisible();
  }
}
