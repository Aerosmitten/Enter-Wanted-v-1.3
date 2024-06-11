import { header } from "../Pages/header";
const page = new header();
const fs = require('fs');

describe ("Testing Enter Wanted v 1.3", () => {
    beforeEach (async () => {
        await page.navigate();
    });
afterAll (async () => {
    await page.driver.quit();
});
test ("Testing the header input field for Enter Wanted v 1.3", async () => {
    //Enter between 9-19 characters, any allowed
    await page.click(page.headerInput);
    await page.sendKeys(page.headerInput, "Header input")
    //Click the submit button
    await page.click(page.submitBtn);
    //Take screenshot of results
    fs.writeFile(`${__dirname}Header-input.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("Header screenshot succesful")
    });
});
});