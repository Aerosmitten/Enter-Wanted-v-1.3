import { dl } from "../Pages/driversLicense";
const page = new dl();
const fs = require('fs');

describe ("Testing Enter Wanted v 1.3", () => {
    beforeEach (async () => {
        await page.navigate();
    });
afterAll (async () => {
    await page.driver.quit();
});
test ("Testing the driver license input field for Enter Wanted v 1.3", async () => {
    //Enter something in the input field
    await page.click(page.dlInput);
    await page.sendKeys(page.dlInput, "dl")
    //Click the submit button
    await page.click(page.submitBtn);
    //Take screenshot of results
    fs.writeFile(`${__dirname}Drivers-License-input.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("Driver License screenshot succesful")
    });
});
});