import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'prettier': prettierPlugin,
    },
    rules: {
      // TypeScript specific rules
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_' 
      }],
      '@typescript-eslint/no-explicit-any': 'warn',

      // Prettier
      'prettier/prettier': ['warn', {
        arrowParens: "avoid",
        bracketSpacing: true,
        htmlWhitespaceSensitivity: "css",
        insertPragma: false,
        bracketSameLine: true,
        jsxSingleQuote: true,
        printWidth: 80,
        proseWrap: "always",
        quoteProps: "as-needed",
        requirePragma: false,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: "none",
        useTabs: false,
        experimentalTernaries: true,
        experimentalOperatorPosition: "start",
        objectWrap: "preserve",
        endOfLine: "lf",
        singleAttributePerLine: true
      }],
    },
  },
  {
    ignores: ['dist/', 'build/', 'node_modules/'],
  },
];