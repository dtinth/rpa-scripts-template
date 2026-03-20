import { getBrowserConnection } from "../src/browser.ts";

await using connection = await getBrowserConnection();
const { browser } = connection;
const page = browser.contexts()[0].pages()[0];
console.log(await page.locator("body").ariaSnapshot());
