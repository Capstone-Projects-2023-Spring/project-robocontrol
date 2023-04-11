module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
      '^.+\\.(js|jsx)$': 'babel-jest',
      '^.+\\.md$': '<rootDir>/mdTransformer.js',
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif)$': '<rootDir>/src/mocks/fileMock.js',
      'react-markdown$': '<rootDir>/node_modules/react-markdown/react-markdown.min.js',
    },
    setupFilesAfterEnv: ['./src/setupTests.ts'],
    transformIgnorePatterns: [
      'node_modules/(?!(react-markdown)/)',
      "node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)",
    ],
  };
  