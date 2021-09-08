module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  coverageReporters: ["cobertura"],
  transform: {
    ".(ts|tsx)": "ts-jest"
  },
  globals: {
    "ts-jest": {
      compiler: "ttypescript"
    }
  },
};