import { oai } from "../Pages/oai";
const page = new oai();
const fs = require('fs');

describe ("Testing Enter Wanted v 1.3", () => {
    beforeEach (async () => {
        await page.navigate();
    });
afterAll (async () => {
    await page.driver.quit();
});
test ("Testing the OAI input field for Enter Wanted v 1.3", async () => {
    //Enter between 9-19 characters, any allowed
    await page.click(page.oaiInput);
    await page.sendKeys(page.oaiInput, "123456789")
    //Click the submit button
    await page.click(page.submitBtn);
    //Take screenshot of results
    fs.writeFile(`${__dirname}OAI-input.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("OAI screenshot succesful")
    });
});
});