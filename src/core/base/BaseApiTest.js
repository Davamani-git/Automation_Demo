const logger = require('../logging/Logger');

class BaseApiTest {

    /**
     * Initializes the API client before the test suite.
     * @param {Object} client - API client instance
     */
    async beforeSuite(client) {

        if (!client) {
            throw new Error('API Client cannot be null.');
        }

        logger.info('========== API Test Suite Started ==========');

        await client.initialize();

        logger.info('API Client initialized successfully.');
    }

    /**
     * Disposes the API client after the test suite.
     * @param {Object} client - API client instance
     */
    async afterSuite(client) {

        if (!client) {
            return;
        }

        await client.dispose();

        logger.info('API Client disposed successfully.');

        logger.info('========== API Test Suite Completed ==========');
    }

    /**
     * Executed before every test.
     */
    async beforeTest(testName) {

        logger.info(`---------- Test Started : ${testName} ----------`);

    }

    /**
     * Executed after every test.
     */
    async afterTest(testName) {

        logger.info(`---------- Test Completed : ${testName} ----------`);

    }

}

module.exports = new BaseApiTest();