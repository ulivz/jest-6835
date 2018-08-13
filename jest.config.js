module.exports = {
  verbose: true,
  testURL: 'http://localhost/',
  moduleFileExtensions: [
    'js'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  testPathIgnorePatterns: [],
  projects: [
    '<rootDir>',
    '<rootDir>/packages/*'
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  }
}
