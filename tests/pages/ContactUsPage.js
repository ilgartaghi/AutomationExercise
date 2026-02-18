exports.ContactUsPage = class ContactUsPage {

    constructor(page) {
        this.page = page;
        this.ContactName = "//input[@placeholder='Name']";
        this.ContactEmail = "//input[@placeholder='Email']";
        this.ContactSubject = "//input[@placeholder='Subject']";
        this.ContactMessage = "//textarea[@id='message']";
        this.ChooseFile = "//input[@name='upload_file']";
        this.ContactSubmitButton = "//input[@name='submit']";
        this.SuccessMessage = "text=Success! Your details have been submitted successfully.";
        this.HomeButton = "a:has-text('Home')";

    }

    async gotoContactUsPage(){
        await this.page.goto('https://automationexercise.com/contact_us')
    }

    async fillContactus(
        ContactName,
        ContactEmail,
        ContactSubject,
        ContactMessage,
        ChooseFile)
    {
        await this.page.locator(this.ContactName).fill(ContactName);
        await this.page.locator(this.ContactEmail).fill(ContactEmail);
        await this.page.locator(this.ContactSubject).fill(ContactSubject);
        await this.page.locator(this.ContactMessage).fill(ContactMessage);
        await this.page.locator(this.ChooseFile).setInputFiles('tests/UploadFiles/TestFile.txt');
        //await this.page.locator(this.ContuctSubmitButton).click();

    }

     // Click Submit + accept the OK dialog
    async submitAndAcceptDialog() {
        this.page.once('dialog', async (dialog) => {
        await dialog.accept(); // clicks OK
    });

        await this.page.locator(this.ContactSubmitButton).click();
  }


};