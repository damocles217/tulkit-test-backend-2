import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  rootDir: './',
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json'],
  globals: {
    'ts-jest': {
      babelConfig: false,
      tsconfig: './tsconfig.json',
    },
  },
};

export default config;
