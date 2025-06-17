/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './'
});

const config: Config = {
  clearMocks: true,
  coverageProvider: 'v8',
  moduleNameMapper: {
    '^#da/(.*)$': '<rootDir>/$1',
    '^motion/react$': '<rootDir>/__mocks__/motion/react.ts',
    '\\.(css|scss|sass)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest'
  }
};

export default createJestConfig(config);
