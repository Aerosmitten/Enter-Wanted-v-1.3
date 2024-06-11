import { race } from "../Pages/race";
const page = new race();
const fs = require('fs');

describe ("Testing Enter Wanted v 1.3", () => {
    beforeEach (async () => {
        await page.navigate();
    });
afterAll (async () => {
    await page.driver.quit();
});
test ("Testing the race input field for Enter Wanted v 1.3", async () => {
    //Enter 1 character, alphabet only
    await page.click(page.raceInput);
    await page.sendKeys(page.raceInput, "r")
    //Click the submit button
    await page.click(page.submitBtn);
    //Take screenshot of results
    fs.writeFile(`${__dirname}Race-input.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("Race screenshot succesful")
    });
});
});