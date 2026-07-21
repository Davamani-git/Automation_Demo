const ConfigManager = require('../config/ConfigManager');
const logger = require('../logging/Logger');

class AuthManager {

    constructor() {
        this.token = null;
    }

    async getToken() {

        if (!this.token) {
            this.token = ConfigManager.get('token');

            if (!this.token) {
                throw new Error('Bearer token is missing in environment configuration.');
            }

            logger.info('Authentication token loaded from configuration.');
        }

        return this.token;
    }

    async getAuthHeaders(additionalHeaders = {}) {

        const token = await this.getToken();

        return {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...additionalHeaders
        };
    }

    clearToken() {
        this.token = null;
    }

}

module.exports = new AuthManager();