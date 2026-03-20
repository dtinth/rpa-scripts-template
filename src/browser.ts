import { execSync } from "node:child_process";
import { type Browser, chromium } from "playwright-core";

let browserConnectionPromise: Promise<{
  browser: Browser;
  [Symbol.asyncDispose]: () => Promise<void>;
}> | null = null;

export async function getBrowserConnection() {
  if (!browserConnectionPromise) {
    browserConnectionPromise = (async () => {
      console.log("[browser] Connecting");
      const endpoint = execSync("rpa-browser ws-endpoint example")
        .toString()
        .trim();
      const browser = await chromium.connectOverCDP(endpoint);
      console.log("[browser] Connected");
      return {
        browser,
        [Symbol.asyncDispose]: async () => {
          console.log("[browser] Closing");
          await browser.close();
          console.log("[browser] Closed");
        },
      };
    })();
  }
  return browserConnectionPromise;
}
