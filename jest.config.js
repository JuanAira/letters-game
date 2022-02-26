module.exports = {
  projects: [
    {
      displayName: 'components',
      testMatch: ['<rootDir>/src/**/__tests__/**/*.test.js'],
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: [
        '<rootDir>/jest.env.js',
      ],
      verbose: true,
    },
  ],
};
