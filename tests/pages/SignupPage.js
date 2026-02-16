exports.SignupPage = class SignupPage {

        constructor(page){
            this.page = page;

            //Page 1
            this.loginLink = "//a[normalize-space()='Signup / Login']";
            this.usernameInput = "//input[@placeholder='Name']";
            this.userEmailInput = "//input[@data-qa='signup-email']";
            this.signupButton = "//button[normalize-space()='Signup']"

            //Page 2 (Enter Account Information)
            this.userpasswordInput = '#password';
            this.DOBday = "#days";
            this.DOBmonth = "#months";
            this.DOByear = "#years";

            this.firstName = "#first_name";
            this.lastName = "#last_name";
            this.address = "//input[@id='address1']"
            this.country = "//select[@id='country']";
            this.state = "//input[@id='state']";
            this.city = "#city";
            this.zipCode = "//input[@id='zipcode']";
            this.mobileNumber = "#mobile_number";

            this.createAccountBtn = "//button[normalize-space()='Create Account']";

        }

        async gotoHome(){
            await this.page.goto('https://automationexercise.com');
        }

        async openSignupLogin() {
            await this.page.locator(this.loginLink).click();
        }

        async startSignup(username,useremail){
            await this.page.locator(this.loginLink).click();
            await this.page.locator(this.usernameInput).fill(username);
            await this.page.locator(this.userEmailInput).fill(useremail);
            await this.page.locator(this.signupButton).click();
        }

        async fillAccountDetails(
            userpassword,
            DOBday,
            DOBmonth,
            DOByear,
            firstName,
            lastName,
            address1,
            country,
            state,
            city,
            zipcode,
            mobileNumber){
            await this.page.locator(this.userpasswordInput).waitFor();
            await this.page.locator(this.userpasswordInput).fill(userpassword);
            await this.page.locator(this.DOBday).selectOption(DOBday);
            await this.page.locator(this.DOBmonth).selectOption(DOBmonth);
            await this.page.locator(this.DOByear).selectOption(DOByear);
            await this.page.locator(this.firstName).fill(firstName);
            await this.page.locator(this.lastName).fill(lastName);
            await this.page.locator(this.address).fill(address1);
            await this.page.locator(this.country).selectOption({ label: country });
            await this.page.locator(this.state).fill(state);
            await this.page.locator(this.city).fill(city);
            await this.page.locator(this.zipCode).fill(zipcode);
            await this.page.locator(this.mobileNumber).fill(mobileNumber);
        }

        async createAccount() {
            await this.page.locator(this.createAccountBtn).click();
        }

}