module.exports = {
  preset: "@vue/cli-plugin-unit-jest",

  moduleFileExtensions: ["js", "jsx", "vue", "json"],

  transform: {
    "^.+\\.vue": "vue-jest",
  },

  transformIgnorePatterns: ["/node_modules/"],

  moduleNameMapper: {
    "/^@/(.*)$/": "<rootDir>/src/$1",
  },

  snapshotSerializers: ["jest-serializer-vue"],

  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],

  testPathIgnorePatterns: [],

  testURL: "http://localhost",

  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
};
