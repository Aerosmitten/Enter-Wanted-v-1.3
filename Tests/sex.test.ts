import { sex } from "../Pages/sex";
const page = new sex();
const fs = require('fs');

describe ("Testing Enter Wanted v 1.3", () => {
    beforeEach (async () => {
        await page.navigate();
    });
afterAll (async () => {
    await page.driver.quit();
});
test ("Testing the sex input field for Enter Wanted v 1.3", async () => {
    //Enter 1 character, alphabet only
    await page.click(page.sexInput);
    await page.sendKeys(page.sexInput, "f")
    //Click the submit button
    await page.click(page.submitBtn);
    //Take screenshot of results
    fs.writeFile(`${__dirname}Sex-input.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("Sex screenshot succesful")
    });
});
});