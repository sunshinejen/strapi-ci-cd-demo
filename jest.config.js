module.exports = {
    transform: {
      "^.+\\.jsx?$": `<rootDir>/tests/jest-preprocess.js`,
    },
    moduleNameMapper: {
      ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
      ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/tests/__mocks__/file-mock.js`,
      'react-markdown': '<rootDir>/node_modules/react-markdown/react-markdown.min.js',
    },
    testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
    globals: {
      __PATH_PREFIX__: ``,
    },
    testEnvironment: `jsdom`,
    setupFilesAfterEnv: ["<rootDir>/tests/setup-test-env.js"],
  }