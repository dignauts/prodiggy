import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import stylisticPlugin from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';
import reactPlugin from 'eslint-plugin-react';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname
});

export default defineConfig([
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      '@stylistic': stylisticPlugin
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0 }],
      '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'any', prev: 'import', next: 'import' },
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: ['if', 'switch', 'for', 'while', 'function', 'return', 'block-like'] },
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }
      ],
      'arrow-body-style': ['error', 'as-needed'],
      quotes: ['error', 'single', { avoidEscape: true }],
      'quote-props': ['error', 'as-needed'],
      'comma-dangle': ['error', 'never'],
      'comma-spacing': ['error', { before: false, after: true }],
      'eol-last': ['error', 'always'],
      'import/order': ['error',
        {
          alphabetize: {
            order: 'asc'
          },
          groups: ['builtin', 'external', 'internal'],
          'newlines-between': 'always',
          pathGroups: [
            { group: 'internal', pattern: './**', position: 'after' },
            { group: 'internal', pattern: '../**', position: 'after' },
            { group: 'internal', pattern: '@/**', position: 'after' }
          ],
          pathGroupsExcludedImportTypes: ['builtin']
        }
      ],
      'linebreak-style': 'off',
      'max-lines': ['error', 120],
      'no-console': ['warn', { allow: ['error'] }],
      'object-curly-spacing': ['error', 'always'],
      'object-shorthand': ['error', 'always'],
      semi: ['error', 'always']
    }
  },
  {
    files: ['**/*.{jsx,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser
      }
    },
    plugins: {
      react: reactPlugin
    },
    rules: {
      'react/jsx-closing-tag-location': 'error',
      'react/jsx-curly-brace-presence': ['error', {
        props: 'never',
        children: 'ignore'
      }],
      'react/jsx-max-props-per-line': [
        'error',
        { maximum: 2 }
      ],
      'react/jsx-first-prop-new-line': ['error', 'multiline'],
      'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
      'react/jsx-curly-spacing': ['error', { attributes: false, children: true, when: 'always' }],
      'react/jsx-filename-extension': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-sort-props': [2,
        {
          callbacksLast: false,
          shorthandFirst: false,
          shorthandLast: false,
          ignoreCase: true,
          noSortAlphabetically: false
        }
      ],
      'react/jsx-uses-react': 'off',
      'react/jsx-tag-spacing': ['error', {
        beforeSelfClosing: 'always', 
        afterOpening: 'never',
        beforeClosing: 'never'
      }],
      'react/self-closing-comp': ['error', {
        component: true,
        html: true
      }],
      'react/destructuring-assignment': ['warn', 'always'],
      'react/no-array-index-key': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off'
    }
  }
]);
