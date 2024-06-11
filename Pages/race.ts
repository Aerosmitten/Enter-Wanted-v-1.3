import { By } from "selenium-webdriver"
import { BasePage } from "./basePage"

export class race extends BasePage {
    //locators go here
    raceInput: By = By.xpath('(//input[@class="materialInput"])[6]');
    submitBtn: By = By.xpath('//button[text()=" Submit "]');
    constructor () {
        super ({url: "https://devmountain-qa.github.io/enter-wanted/1.3_Assignment/index.html"});
    };
};