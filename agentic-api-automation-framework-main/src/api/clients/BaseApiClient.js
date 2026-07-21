const { request } = require('@playwright/test');
const logger = require('../../core/logging/Logger');
const ConfigManager = require('../../core/config/ConfigManager');
const authManager = require('../../core/auth/AuthManager');

class BaseApiClient {
    constructor() {
        this.apiContext = null;
    }

    async initialize(baseURL = ConfigManager.get('baseUrl')) {
        if (!this.apiContext) {

            // Get authentication headers from AuthManager
            const headers = await authManager.getAuthHeaders();

            // Log headers (hide the token for security)
            logger.info(`API Context initialized with Base URL: ${baseURL}`);
            logger.info(`Request Headers: ${JSON.stringify({
                ...headers,
                Authorization: 'Bearer ********'
            }, null, 2)}`);

            this.apiContext = await request.newContext({
                baseURL,
                extraHTTPHeaders: headers,
                ignoreHTTPSErrors: true
            });
        }
    }

    async get(endpoint, options = {}) {
        logger.info(`GET ${endpoint}`);
        return await this.apiContext.get(endpoint, options);
    }

    async post(endpoint, payload, options = {}) {
        logger.info(`POST ${endpoint}`);
        return await this.apiContext.post(endpoint, {
            data: payload,
            ...options
        });
    }

    async put(endpoint, payload, options = {}) {
        logger.info(`PUT ${endpoint}`);
        return await this.apiContext.put(endpoint, {
            data: payload,
            ...options
        });
    }

    async patch(endpoint, payload, options = {}) {
        logger.info(`PATCH ${endpoint}`);
        return await this.apiContext.patch(endpoint, {
            data: payload,
            ...options
        });
    }

    async delete(endpoint, options = {}) {
        logger.info(`DELETE ${endpoint}`);
        return await this.apiContext.delete(endpoint, options);
    }

    async dispose() {
        if (this.apiContext) {
            await this.apiContext.dispose();
            this.apiContext = null;
            logger.info('API Context disposed.');
        }
    }
}

module.exports = BaseApiClient;