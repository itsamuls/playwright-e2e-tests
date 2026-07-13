import { test, expect } from "@playwright/test";

test("should load homepage with correct title", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await expect(page.locator("h1")).toHaveText("CURA Healthcare Service");
});

test('Should do something', { tag: '@smoke' }, async ({ page }, testInfo) => {
    await page.locator("h1").click();
});

test.only('Should demo locators', async ({ page }) => {
    // ✓✅1. Launch URL
    await page.goto('https://katalon-demo-cura.herokuapp.com/');

    // 2. Click on the Make Appointment
    let makeAppmtBtn = page.getByRole('link', { name: 'Make Appointmentx' });
    // console.log(`>> The type of locator: ${typeof makeAppmtBtn}, The value of locator is: ${JSON.stringify(makeAppmtBtn)}`);
    await makeAppmtBtn.click();
    // await expect(page.getByText('Please login to make')).toBeVisible();

    await page.getByRole('heading', { name: 'We Care About Your Health' }).click();
});