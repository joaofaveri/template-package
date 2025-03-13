# Production-Ready TypeScript Package Template

This repository provides a basic template for creating Node.js packages with TypeScript, Jest, and ESLint.

## Project Structure

📦template-package
 ┣ 📂.husky
 ┃ ┣ 📜commit-msg
 ┃ ┣ 📜pre-commit
 ┃ ┗ 📜prepare-commit-msg
 ┣ 📂.vscode
 ┃ ┗ 📜settings.json
 ┣ 📂dist
 ┣ 📂src
 ┣ 📂templates
 ┃ ┣ 📜changelog-commit.hbs
 ┃ ┣ 📜changelog-footer.hbs
 ┃ ┣ 📜changelog-header.hbs
 ┃ ┗ 📜changelog-main.hbs
 ┣ 📂tests
 ┣ 📜.commitlintrc.json
 ┣ 📜.env.example
 ┣ 📜.gitignore
 ┣ 📜.lintstagedrc.json
 ┣ 📜.npmignore
 ┣ 📜.release-it.ts
 ┣ 📜changelog.config.cjs
 ┣ 📜eslint.config.mjs
 ┣ 📜getAllContributors.cjs
 ┣ 📜jest.config.ts
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜tsconfig.json
 ┗ 📜tsup.config.ts

## Features

* **TypeScript:** The project is configured to use TypeScript, ensuring static typing and improving code quality.
* **Jest:** Unit tests are configured with Jest to ensure code reliability.
* **ESLint:** ESLint is configured to maintain code consistency and follow best practices.
* **Simplified Configuration:** The template offers a simplified initial configuration to facilitate the development of new packages.
* **Husky:** Configured to run scripts on Git hooks.
* **lint-staged:** Configured to run linters on staged files.
* **commitlint:** Configured to enforce conventional commit message formats.
* **release-it:** Configured to automate package releases.

## How to Use

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/joaofaveri/template-package.git](https://github.com/joaofaveri/template-package.git)
    cd template-package
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Develop:**

    * Modify the `src/index.ts` file with your package's code.
    * Create unit tests in `tests/index.test.ts`.

4.  **Run tests:**

    ```bash
    npm run test
    ```

5.  **Build the package:**

    ```bash
    npm run build
    ```

6.  **Publish the package (optional):**

    ```bash
    npm run release
    ```

## Configurations

* **TypeScript:** TypeScript settings can be adjusted in the `tsconfig.json` file.
* **Jest:** Jest settings can be adjusted in the `jest.config.js` file.
* **ESLint:** ESLint settings can be adjusted in the `.eslintrc.json` file.
* **Husky:** Husky settings can be adjusted in the `.husky` directory and `package.json` file.
* **lint-staged:** lint-staged settings can be adjusted in the `package.json` and `.lintstagedrc.json` files.
* **commitlint:** commitlint settings can be adjusted in the `commitlint.config.js` file.
* **release-it:** release-it settings can be adjusted in the `.release-it.ts` and `changelog.config.cjs` files.

## Dependencies

* **TypeScript:** `typescript`
* **Jest:** `jest`, `@types/jest`, `ts-jest`
* **ESLint:** `eslint`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`
* **Husky:** `husky`
* **lint-staged:** `lint-staged`
* **commitlint:** `@commitlint/cli`, `@commitlint/config-conventional`
* **release-it:** `release-it`

## Scripts

* `npm run build`: Compiles TypeScript code to JavaScript.
* `npm run test`: Runs unit tests with Jest.

## Contribution

Contributions are welcome! Feel free to open issues and pull requests.

## License

This project is licensed under the [MIT License](LICENSE).