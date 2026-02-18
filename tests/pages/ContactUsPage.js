exports.ContactUsPage = class ContactUsPage {

    constructor(page) {
        this.page = page;
        this.ContactName = "//input[@placeholder='Name']";
        this.ContactEmail = "";
        this.ContactSubject = "";
        this.ContactMessage = "";
        this.ChooseFile = "//input[@name='upload_file']";

    }


}