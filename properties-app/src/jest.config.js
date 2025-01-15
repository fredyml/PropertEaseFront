module.exports = {
    transform: {
      '^.+\\.[t|j]sx?$': 'babel-jest', // Add this line to ensure Jest uses Babel for JS/JSX files
    },
    testEnvironment: 'jsdom', // Use jsdom for React component tests
    transformIgnorePatterns: [
      "/node_modules/(?!axios)/", // Allow axios module to be transformed by Babel
    ],
  };
  