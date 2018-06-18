module.exports = {
    setupFiles: [
        "<rootDir>/config/test-setup.js",
        "<rootDir>/config/test-shim.js"
    ],
    verbose: true,
    moduleFileExtensions: [
        'tsx',
        'js'
    ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    globals: {
        'ts-jest': {
            tsConfigFile: 'tsconfig.test.json'
        }
    },
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.tsx'
    ],
    testMatch: [
        "<rootDir>/src/**/*.test.tsx"
    ],
    modulePaths: [
        'src'
    ]
};
