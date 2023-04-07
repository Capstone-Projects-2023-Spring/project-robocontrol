module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif)$': '<rootDir>/src/__mocks__/fileMock.js',
    },
    setupFilesAfterEnv: ['./src/setupTests.ts'],
  };
  