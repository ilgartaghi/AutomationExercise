/*
exports.ProductsPage = class ProductsPage {

    constructor(page){
        this.page = page;
        this.productLink = "//a[@href='/products']"; 
        this.firstProduct = "//div[@class='col-sm-9 padding-right']//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]";
    }

    async openProduct() {
            await this.page.locator(this.productLink).click();
        }

    async openFirstProduct() {
        await this.page.locator(this.firstProduct).click();
    }
}
    */

exports.ProductsPage = class ProductsPage {
  constructor(page) {
    this.page = page;

    // Top menu "Products"
    this.productsLink = "a[href='/products']";

    // Products grid
    this.productsGrid = ".features_items";

    // First product "View Product" link (stable)
    this.firstViewProductLink = ".features_items a[href^='/product_details/']:has-text('View Product')";

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
};