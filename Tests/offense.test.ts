import { offense } from "../Pages/offense";
const page = new offense();
const fs = require('fs');

describe ("Testing Enter Wanted v 1.3", () => {
    beforeEach (async () => {
        await page.navigate();
    });
afterAll (async () => {
    await page.driver.quit();
});
test ("Testing the offense input field for Enter Wanted v 1.3", async () => {
    //Enter between 5-15 characters, any allowed
    await page.click(page.offenseInput);
    await page.sendKeys(page.offenseInput, "defense")
    //Click the submit button
    await page.click(page.submitBtn);
    //Take screenshot of results
    fs.writeFile(`${__dirname}Offense-input.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("Offense screenshot succesful")
    });
});
});