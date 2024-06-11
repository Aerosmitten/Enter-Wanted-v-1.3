import { mke } from "../Pages/mke";
const page = new mke();
const fs = require('fs');

describe ("Testing Enter Wanted v 1.3", () => {
    beforeEach (async () => {
        await page.navigate();
    });
afterAll (async () => {
    await page.driver.quit();
});
test ("Testing the MKE input field for Enter Wanted v 1.3", async () => {
    //Enter between 2-4 characters, alpha or special characters only
    await page.click(page.mkeInput);
    await page.sendKeys(page.mkeInput, "mke")
    //Click the submit button
    await page.click(page.submitBtn);
    //Take screenshot of results
    fs.writeFile(`${__dirname}MKE-input.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("MKE screenshot succesful")
    });
});
});