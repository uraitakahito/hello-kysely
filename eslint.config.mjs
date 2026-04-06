// @ts-check
import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import importXPlugin from 'eslint-plugin-import-x';

export default defineConfig(
  //
  // Global ignores
  //
  {
    ignores: ['dist/**', 'eslint.config.mjs', '.Trash-*/**'],
  },

  //
  // Base configurations
  //
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,

  //
  // TypeScript parser options
  //
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  //
  // Import plugin configuration
  //
  {
    plugins: {
      'import-x': importXPlugin,
    },
    settings: {
      'import-x/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      'import-x/extensions': [
        'error',
        'always',
        {
          ignorePackages: true,
          checkTypeImports: true,
          pattern: {
            ts: 'never',
            tsx: 'never',
          },
        },
      ],
      'import-x/no-anonymous-default-export': ['error', { allowCallExpression: false }],
    },
  },

  //
  // Custom rules
  //
  {
    rules: {
      '@typescript-eslint/parameter-properties': ['error', { prefer: 'class-property' }],

      'no-restricted-syntax': [
        'error',
        {
          selector: 'TSEnumDeclaration',
          message: 'Enums are not allowed. Use a union type or a const object instead.',
        },
        {
          selector: 'TSExportAssignment',
          message: 'Export assignment (`export =`) is not allowed. Use ES module export syntax instead.',
        },
        {
          selector: 'Decorator',
          message: 'Legacy experimental decorators are not allowed.',
        },
      ],

      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'variable',
          format: ['camelCase'],
        },
        {
          selector: 'variable',
          types: ['boolean'],
          format: ['camelCase'],
          prefix: ['can', 'did', 'has', 'is', 'must', 'need', 'should', 'will'],
        },
        {
          selector: ['enum', 'enumMember'],
          format: ['UPPER_CASE'],
        },
        {
          selector: 'function',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'accessor',
          format: ['camelCase'],
        },
        {
          selector: 'parameter',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'class',
          format: ['PascalCase'],
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
        },
        {
          selector: 'typeParameter',
          format: ['PascalCase'],
        },
      ],
    },
  },

  //
  // Override for config files
  //
  {
    files: ['vite.config.*[cmjt]*s', 'vitest.config.*[cmjt]*s'],
    rules: {
      '@typescript-eslint/naming-convention': 'off',
      'import-x/no-extraneous-dependencies': 'off',
    },
  },
);
