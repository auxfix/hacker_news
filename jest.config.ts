module.exports = {
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/app-env.d.ts',
    '!src/reportWebVitals.ts',
    '!src/service-worker.ts',
    '!src/serviceWorkerRegistration.ts',
    '!src/types/*.*',
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  moduleDirectories: ['node_modules', 'src', 'test/__setup__', __dirname],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/test/__mocks__/styleMock.ts',
    '\\.(jpe?g|png|gif|ttf|eot|woff|md)$': '<rootDir>/test/__mocks__/fileMock.ts',
    '\\.svg$': '<rootDir>/test/__mocks__/svgMock.ts',
    '^test-utils$': '<rootDir>/test/__setup__/test-utils.tsx',
  },
  setupFiles: ['<rootDir>/test/__setup__/setupFiles.ts'],
  setupFilesAfterEnv: ['<rootDir>/test/__setup__/setupFilesAfterEnv.ts'],
  snapshotSerializers: ['jest-serializer-html'],
  testEnvironment: 'jest-environment-jsdom-global',
  testEnvironmentOptions: {
    resources: 'usable',
    url: 'http://localhost:3000',
  },
  testRegex: '/test/.*?\\.(test|spec)\\.tsx?$',
  transform: {
    '.*\\.(j|t)sx?$': 'babel-jest',
  },
  verbose: false,
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
