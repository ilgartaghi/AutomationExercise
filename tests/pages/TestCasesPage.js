exports.TestCasesPage = class TestCasesPage{

        constructor(page){
            this.page = page;
            this.testCasesBtn = "//div[@class='item active']//button[@type='button'][normalize-space()='Test Cases']";  
        }


        async TestCases(){
            await this.page.locator(this.testCasesBtn).click();
            

        }

}