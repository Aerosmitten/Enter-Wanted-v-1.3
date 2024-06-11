import { dateOf } from "../Pages/dateOfWV";
const page = new dateOf();
const fs = require('fs');

describe ("Testing Enter Wanted v 1.3", () => {
    beforeEach (async () => {
        await page.navigate();
    });
afterAll (async () => {
    await page.driver.quit();
});
test ("Testing the date of Warrant/Violation input field for Enter Wanted v 1.3", async () => {
    //Enter 8 characters, numbers only, MMDDYYYY format
    await page.click(page.dateOfInput);
    await page.sendKeys(page.dateOfInput, "MMDDYYYY")
    //Click the submit button
    await page.click(page.submitBtn);
    //Take screenshot of results
    fs.writeFile(`${__dirname}Date-of-Warrant-Violation-input.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("Date of Warrant/Violation screenshot succesful")
    });
});
});