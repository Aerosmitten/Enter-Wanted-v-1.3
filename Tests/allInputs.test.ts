import { all } from "../Pages/allInputs";
const page = new all();
const fs = require('fs');

describe ("Testing Enter Wanted v 1.3", () => {
    beforeEach (async () => {
        await page.navigate();
    });
afterAll (async () => {
    await page.driver.quit();
});
test ("Testing all of the input fields for Enter Wanted v 1.3", async () => {
    //Enter between 9-19 characters, any allowed
    await page.click(page.headerInput);
    await page.sendKeys(page.headerInput, "Header input")
    //enter between 2-4 characters, alpha/special characters
    await page.click(page.mkeInput);
    await page.sendKeys(page.mkeInput, "moo")
    //Enter 9 alpha numeric characters
    await page.click(page.oaiInput);
    await page.sendKeys(page.oaiInput, "123456789")
    //Enter between 3-30 characters, alphabet only
    await page.click(page.nameInput);
    await page.sendKeys(page.nameInput, "Name");
    //Enter 1 character, alphabet only
    await page.click(page.sexInput);
    await page.sendKeys(page.sexInput, "f");
    //Enter 1 character, alphabet only
    await page.click(page.raceInput);
    await page.sendKeys(page.raceInput, "n");
    //Enter 3 characters, numbers only
    await page.click(page.heightInput);
    await page.sendKeys(page.heightInput, "123");
    //Enter 3 characters, numbers only
    await page.click(page.weightInput);
    await page.sendKeys(page.weightInput, "123");
    //Enter between 4-10 characters, alphabet only
    await page.click(page.hairInput);
    await page.sendKeys(page.hairInput, "purple");
    //Enter between 5-15 characters, any allowed
    await page.click(page.offenseInput);
    await page.sendKeys(page.offenseInput, "defense");
    //Enter 8 charcters, numbers only MMDDYYYY format
    await page.click(page.dateOfInput);
    await page.sendKeys(page.dateOfInput, "MMDDYYYY");
    //Enter between 1-ro characters
    await page.click(page.dlInput);
    await page.sendKeys(page.dlInput, "no");
    //Enter a state abbreviation
    await page.click(page.dlStateInput);
    await page.sendKeys(page.dlStateInput, "CO");
    //Enter 4 numbers, YYYY format
    await page.click(page.dlYearInput);
    await page.sendKeys(page.dlYearInput, "2024");
    //Enter license plate 
    await page.click(page.licensePlateInput);
    await page.sendKeys(page.licensePlateInput, "hummm");
    //Enter license state
    await page.click(page.licenseStateInput);
    await page.sendKeys(page.licenseStateInput, "CO");
    //Enter License Year
    await page.click(page.licenseYearInput);
    await page.sendKeys(page.licenseYearInput, "2024");
    //Click the submit button
    await page.click(page.submitBtn);
    //Take screenshot of results
    fs.writeFile(`${__dirname}All-Inputs-input.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("All Inputs screenshot succesful")
    });
});
});