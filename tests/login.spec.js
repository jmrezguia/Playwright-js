const {test, expect } = require('@playwright/test');
const exp = require('constants');




test('Authentification with valid credential', async ({page}) => {
    await page.goto('https://automationexercise.com/login');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('Automation Exercise Signup / login');
    //login
    await page.locator("//input[@placeholder='Name']").fill('jihen');
    await page.locator("//input[@data-qa='signup-email']").fill('jihen.mrezguia@gmail.com');
    await page.locator("//button[normalize-space()='Signup']").click();
    await expect(page.locator("//h2[normalize-space()='Category']")).toBeVisible(); //assert page home

})

test('Authentification with invalid credential', async ({page}) => {
    await page.goto('https://automationexercise.com/login');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('Automation Exercise Signup / login');
    //login
    await page.locator("//input[@placeholder='Name']").fill('john');
    await page.locator("//input[@data-qa='signup-email']").fill('john.mrezguia@gmail.com');
    await page.locator("//button[normalize-space()='Signup']").click();
    await expect(page.locator("//h2[normalize-space()='Category']")).toBeVisible(); //assert page home

})

test('Authentification with invalid username and valid email', async ({page}) => {
    await page.goto('https://automationexercise.com/login');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('Automation Exercise Signup / login');
    //login
    await page.locator("//input[@placeholder='Name']").fill('john');
    await page.locator("//input[@data-qa='signup-email']").fill('jihen.mrezguia@gmail.com');
    await page.locator("//button[normalize-space()='Signup']").click();
    await expect(page.locator("//h2[normalize-space()='Category']")).toBeVisible(); //assert page home

})

test('Authentification with invalid email and valid username', async ({page}) => {
    await page.goto('https://automationexercise.com/login');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('Automation Exercise Signup / login');
    //login
    await page.locator("//input[@placeholder='Name']").fill('jihen');
    await page.locator("//input[@data-qa='signup-email']").fill('john.mrezguia@gmail.com');
    await page.locator("//button[normalize-space()='Signup']").click();
    await expect(page.locator("//h2[normalize-space()='Category']")).toBeVisible(); //assert page home

})
