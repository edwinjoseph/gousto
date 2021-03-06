module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts'
  ],
  setupFiles: [
    '<rootDir>/config/polyfills.js',
    '<rootDir>/config/setupTests.js',
  ],
  testMatch: [
    '<rootDir>/tests/**/?(*.)(spec|test).(j|t)s?(x)'
  ],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.tsx?$': '<rootDir>/config/jest/typescriptTransform.js',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$'
  ],
  moduleNameMapper: {
    '^react-native$': 'react-native-web'
  },
  moduleFileExtensions: [
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'web.js',
    'js',
    'web.jsx',
    'jsx',
    'json',
    'node',
    'mjs'
  ],
  globals: {
    'ts-jest': {
      tsConfigFile: '/Users/edwinjoseph/det/personal/gousto/tsconfig.test.json'
    }
  }
};
