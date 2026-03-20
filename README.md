```sh
# 1. Install `rpa-browser` globally
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
