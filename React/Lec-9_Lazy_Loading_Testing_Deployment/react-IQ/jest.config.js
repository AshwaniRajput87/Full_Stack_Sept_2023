export default {
    testEnvironment: 'jsdom',
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest",
        "^.+\\.css$": ["jest-transform-css", { modules: true }]
    },
};