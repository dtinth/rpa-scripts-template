My personal starter template for writing browser automation (RPA) scripts in TypeScript. It uses [rpa-browser](https://github.com/dtinth/rpa-browser) to manage a persistent [Chrome for Testing](https://developer.chrome.com/blog/chrome-for-testing) instance, and connects to it via [Playwright's CDP support](https://playwright.dev/docs/api/class-browsertype#browser-type-connect-over-cdp) — so I can [manually navigate my browser and run scripts against whatever page I'm on](https://dt.in.th/SemiAutomatedRPAPuppeteerPlaywright). This project leverages [Node.js’s built-in TypeScript support](https://nodejs.org/docs/latest/api/typescript.html) so no build step is required. It also integrates with VS Code via [launch.json](https://code.visualstudio.com/docs/debugtest/debugging) so I can press open a script file in VS Code and press <kbd>F5</kbd> to immediately run it in debug mode.

```sh
# 1. Install `rpa-browser` globally
#    See: https://github.com/dtinth/rpa-browser
npm i -g rpa-browser

# 2. Install dependencies
pnpm install

# 3. In a separate terminal tab, launch the daemon
#    This will launch Google Chrome for Testing
rpa-browser daemon example

# 4. Try getting the wsEndpoint of the launched browser
rpa-browser ws-endpoint example

# 5. Manually naviate your browser to some website
#    and run this script to dump the ARIA snapshot
node scripts/aria-snapshot.ts
```

> [!TIP]
> You can open this project in VS Code, then open `src/aria-snapshot.ts` and press <kbd>F5</kbd> to run the script in debug mode.
