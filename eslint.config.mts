import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';

const nodeGlobals = globals.node;

export default defineConfig([
  /* =========================
   * JavaScript（Node.js）
   * ========================= */
  {
    files: ['**/*.{js,cjs,mjs}'],
    languageOptions: {
      globals: nodeGlobals,
    },
    rules: js.configs.recommended.rules,
  },

  /* =========================
   * TypeScript（Node.js）
   * ========================= */
  {
    files: ['**/*.{ts,cts,mts,d.ts}'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      globals: nodeGlobals,
    },
    extends: ['plugin:@typescript-eslint/recommended'],
  },

  /* =========================
   * ESLint 設定ファイル除外
   * ========================= */
  {
    ignores: ['eslint.config.*', 'node_modules', 'dist'],
  },
]);
