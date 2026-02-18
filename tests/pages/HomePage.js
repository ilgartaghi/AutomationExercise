exports.HomePage = class HomePage {

        constructor(page){
            this.page = page;
            

            //Page 1
            this.contactUsLink = "//a[normalize-space()='Contact us']";

        }

        async gotoHomePage(){
            await this.page.goto('https://automationexercise.com/');
    }

        async openContactUs() {
            await this.page.locator(this.contactUsLink).click();
        }

    }