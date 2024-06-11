import { By } from "selenium-webdriver"
import { BasePage } from "./basePage"

export class all extends BasePage {
    //locators go here
    headerInput: By = By.xpath('(//input[@class="materialInput"])[1]');
    mkeInput: By = By.xpath('(//input[@class="materialInput"])[2]');
    oaiInput: By = By.xpath('(//input[@class="materialInput"])[3]');
    nameInput: By = By.xpath('(//input[@class="materialInput"])[4]');
    sexInput: By = By.xpath('(//input[@class="materialInput"])[5]');
    raceInput: By = By.xpath('(//input[@class="materialInput"])[6]');
    heightInput: By = By.xpath('(//input[@class="materialInput"])[7]');
    weightInput: By = By.xpath('(//input[@class="materialInput"])[8]');
    hairInput: By = By.xpath('(//input[@class="materialInput"])[9]');
    offenseInput: By = By.xpath('(//input[@class="materialInput"])[10]');
    dateOfInput: By = By.xpath('(//input[@class="materialInput"])[11]');
    dlInput: By = By.xpath('(//input[@class="materialInput"])[12]');
    dlStateInput: By = By.xpath('(//input[@class="materialInput"])[13]');
    dlYearInput: By = By.xpath('(//input[@class="materialInput"])[14]');
    licensePlateInput: By = By.xpath('(//input[@class="materialInput"])[15]');
    licenseStateInput: By = By.xpath('(//input[@class="materialInput"])[16]');
    licenseYearInput: By = By.xpath('(//input[@class="materialInput"])[17]');
    submitBtn: By = By.xpath('//button[text()=" Submit "]');
    constructor () {
        super ({url: "https://devmountain-qa.github.io/enter-wanted/1.3_Assignment/index.html"});
    };
};