exports.LoginPage = class LoginPage {


    constructor(page){
        this.page = page;

        // Home page
        this.homeBannerText = "text=Full-Fledged practice website for Automation Engineers"; //newly added

        // Login
        this.loginLink = "//a[normalize-space()='Signup / Login']";
        this.userEmail = "//input[@data-qa='login-email']";
        this.userPassword = "//input[@placeholder='Password']";
        this.loginButton = "button[data-qa='login-button']";
        this.logoutButton = "//a[normalize-space()='Logout']";
    }

    async gotoHomePage(){
        await this.page.goto('https://automationexercise.com/');
    }
//newly added
    async verifyHomePageVisible(){
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.locator(this.homeBannerText).waitFor({ state: 'visible' });
  }

    async login(userEmail, userPassword){
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.userEmail).fill(userEmail);
        await this.page.locator(this.userPassword).fill(userPassword);
        await this.page.locator(this.loginButton).click();
        await this.page.locator(this.logoutButton).click();
     
    }

   


}