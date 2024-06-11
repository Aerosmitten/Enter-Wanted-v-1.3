import { weight } from "../Pages/weight";
const page = new weight();
const fs = require('fs');

describe ("Testing Enter Wanted v 1.3", () => {
    beforeEach (async () => {
        await page.navigate();
    });
afterAll (async () => {
    await page.driver.quit();
});
test ("Testing the weight input field for Enter Wanted v 1.3", async () => {
    //Enter 3 characters, numbers only
    await page.click(page.weightInput);
    await page.sendKeys(page.weightInput, "123")
    //Click the submit button
    await page.click(page.submitBtn);
    //Take screenshot of results
    fs.writeFile(`${__dirname}Weight-input.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("Weight screenshot succesful")
    });
});
});