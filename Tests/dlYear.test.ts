import { dlYear } from "../Pages/dlYear";
const page = new dlYear();
const fs = require('fs');

describe ("Testing Enter Wanted v 1.3", () => {
    beforeEach (async () => {
        await page.navigate();
    });
afterAll (async () => {
    await page.driver.quit();
});
test ("Testing the DL Year input field for Enter Wanted v 1.3", async () => {
    //Enter a year 
    await page.click(page.dlYearInput);
    await page.sendKeys(page.dlYearInput, "2024")
    //Click the submit button
    await page.click(page.submitBtn);
    //Take screenshot of results
    fs.writeFile(`${__dirname}DL-Year-input.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("DL Year screenshot succesful")
    });
});
});