import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // JavaScript（Node.js）
  {
    files: ["**/*.{js,cjs,mjs}"],
    languageOptions: {
      globals: globals.node,
    },
    extends: [js.configs.recommended],
  },

  // TypeScript（Node.js）
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: ["**/*.{ts,cts,mts}"],
    languageOptions: {
      globals: globals.node,
    },
  })),
]);
