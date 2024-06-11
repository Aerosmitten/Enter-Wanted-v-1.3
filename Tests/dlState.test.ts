import { dlState } from "../Pages/dlState";
const page = new dlState();
const fs = require('fs');

describe ("Testing Enter Wanted v 1.3", () => {
    beforeEach (async () => {
        await page.navigate();
    });
afterAll (async () => {
    await page.driver.quit();
});
test ("Testing the DL State input field for Enter Wanted v 1.3", async () => {
    //Enter a state abbreviation 
    await page.click(page.dlStateInput);
    await page.sendKeys(page.dlStateInput, "CO")
    //Click the submit button
    await page.click(page.submitBtn);
    //Take screenshot of results
    fs.writeFile(`${__dirname}DL-State-input.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("DL State screenshot succesful")
    });
});
});