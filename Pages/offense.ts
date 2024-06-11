import { By } from "selenium-webdriver"
import { BasePage } from "./basePage"

export class offense extends BasePage {
    //locators go here
    offenseInput: By = By.xpath('(//input[@class="materialInput"])[10]');
    submitBtn: By = By.xpath('//button[text()=" Submit "]');
    constructor () {
        super ({url: "https://devmountain-qa.github.io/enter-wanted/1.3_Assignment/index.html"});
    };
};