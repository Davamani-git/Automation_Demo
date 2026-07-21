// playwright.config.js

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

    testDir: './tests',

    timeout: 60000,

    fullyParallel: false,

    retries: 0,

    reporter: [
        ['list'],
        ['html', { open: 'never' }]
    ],

    use: {
        ignoreHTTPSErrors: true,
        trace: 'retain-on-failure'
    }

});