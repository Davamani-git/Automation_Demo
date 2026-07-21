class BaseService {

    constructor(client) {

        if (!client) {
            throw new Error('Client instance is required.');
        }

        this.client = client;
    }

    async initialize() {
        await this.client.initialize();
    }

    async dispose() {
        await this.client.dispose();
    }

}

module.exports = BaseService;