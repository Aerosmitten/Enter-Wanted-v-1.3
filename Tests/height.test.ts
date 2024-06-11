import { height } from "../Pages/height";
const page = new height();
const fs = require('fs');

describe ("Testing Enter Wanted v 1.3", () => {
    beforeEach (async () => {
        await page.navigate();
    });
afterAll (async () => {
    await page.driver.quit();
});
test ("Testing the height input field for Enter Wanted v 1.3", async () => {
    //Enter 3 characters, numbers sonly
    await page.click(page.heightInput);
    await page.sendKeys(page.heightInput, "123")
    //Click the submit button
    await page.click(page.submitBtn);
    //Take screenshot of results
    fs.writeFile(`${__dirname}Height-input.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("Height screenshot succesful")
    });
});
});