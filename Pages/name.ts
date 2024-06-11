import { By } from "selenium-webdriver"
import { BasePage } from "./basePage"

export class name extends BasePage {
    //locators go here
    nameInput: By = By.xpath('(//input[@class="materialInput"])[4]');
    submitBtn: By = By.xpath('//button[text()=" Submit "]');
    constructor () {
        super ({url: "https://devmountain-qa.github.io/enter-wanted/1.3_Assignment/index.html"});
    };
};