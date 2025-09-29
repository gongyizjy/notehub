import eslint from '@eslint/js';
import globals from 'globals';
import tsLint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginSonar from 'eslint-plugin-sonarjs';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';

const ignores = [
  '**/dist/**',
  '**/node_modules/**',
  '**/*.d.ts',
  '**/__test__/**',
  '**/test/**,',
];

export default defineConfig([
  // 通用的配置
  {
    ignores,
    extends: [
      eslint.configs.recommended,
      eslintConfigPrettier,
      ...tsLint.configs.recommended,
    ],
    plugins: {
      prettier: eslintPluginPrettier,
      sonarjs: eslintPluginSonar,
      unicorn: eslintPluginUnicorn,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsLint.parser,
    },
    rules: {
      'no-console': 'error',
      'sonarjs/no-implicit-dependencies': 'error',
      'unicorn/no-empty-file': 'error',
    },
  },
  // 前端相关配置
  {
    ignores,
    files: [
      'apps/client/**/*.{js,ts,jsx,tsx}',
      'packages/components/**/*.{js,ts,jsx,tsx}',
    ],
    extends: [
      eslintPluginReact.configs.flat.recommended.languageOptions,
      eslintConfigPrettier,
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      react: eslintPluginReact,
      'react-hooks': pluginReactHooks,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
  },
  //  后端相关配置
  {
    ignores,
    files: ['apps/server/**/*.{js,ts}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]);
