import { hair } from "../Pages/hair";
const page = new hair();
const fs = require('fs');

describe ("Testing Enter Wanted v 1.3", () => {
    beforeEach (async () => {
        await page.navigate();
    });
afterAll (async () => {
    await page.driver.quit();
});
test ("Testing the hair input field for Enter Wanted v 1.3", async () => {
    //Enter between 4-10 characters, alphabet only
    await page.click(page.hairInput);
    await page.sendKeys(page.hairInput, "purple")
    //Click the submit button
    await page.click(page.submitBtn);
    //Take screenshot of results
    fs.writeFile(`${__dirname}Hair-input.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("Hair screenshot succesful")
    });
});
});