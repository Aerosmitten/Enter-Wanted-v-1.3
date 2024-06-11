import { name } from "../Pages/name";
const page = new name();
const fs = require('fs');

describe ("Testing Enter Wanted v 1.3", () => {
    beforeEach (async () => {
        await page.navigate();
    });
afterAll (async () => {
    await page.driver.quit();
});
test ("Testing the name input field for Enter Wanted v 1.3", async () => {
    //Enter between 3-30 characters, any allowed
    await page.click(page.nameInput);
    await page.sendKeys(page.nameInput, "Name")
    //Click the submit button
    await page.click(page.submitBtn);
    //Take screenshot of results
    fs.writeFile(`${__dirname}Name-input.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("Name screenshot succesful")
    });
});
});