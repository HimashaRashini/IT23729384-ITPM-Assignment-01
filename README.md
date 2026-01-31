# IT23729384-ITPM-Assignment-01

A small Playwright-based test project for the assignment. This repository contains end-to-end tests (Playwright) and instructions to install dependencies, run the tests, and view results.

---

## Prerequisites

- Node.js (LTS recommended, e.g. 16.x or later)
- npm (comes with Node.js)
- Internet connection (to download Playwright browsers)

---

## Quick start

1. Clone the repository
   ```bash
   git clone https://github.com/HimashaRashini/IT23729384-ITPM-Assignment-01.git
   cd IT23729384-ITPM-Assignment-01
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. (If not already configured) Install Playwright browsers
   ```bash
   npx playwright install
   ```

4. Run the test suite
   ```bash
   npx playwright test
   ```

5. Show test results / report
   ```bash
   npx playwright show-result
   ```

Note: If your Playwright version uses the default report command, you may also use:
```bash
npx playwright show-report
```
or check the `package.json` for any custom scripts that wrap these commands.

---

## What the commands do

- `npm install` — installs project dependencies defined in `package.json`.
- `npx playwright test` — executes the Playwright test runner and runs the test suites.
- `npx playwright show-result` — opens or prints the test run results/report (this repository includes this command in the requested workflow; if your Playwright CLI version uses a different reporter command, see note above).

---

## Common tasks

- Run a single test file:
  ```bash
  npx playwright test path/to/test.spec.ts
  ```

- Run tests in headed mode (see browser UI while tests run):
  ```bash
  npx playwright test --headed
  ```

- Run tests in debug mode:
  ```bash
  npx playwright test --debug
  ```

- Generate an HTML report (if not automatic):
  ```bash
  npx playwright show-report
  ```

---

## Troubleshooting

- If tests fail due to missing browsers, run `npx playwright install`.
- If Node/npm versions are incompatible, upgrade Node to an LTS release and reinstall dependencies.
- If tests time out, consider increasing Playwright timeouts or running in headed mode to observe behavior.

---

## Contact

Repository owner: HimashaRashini

If you want me to include additional repository-specific details (tests overview, folder structure, CI steps, or a LICENSE file), tell me what to add and I will update this README.