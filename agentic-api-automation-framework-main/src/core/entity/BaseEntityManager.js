class BaseEntityManager {

    constructor(client) {
        this.client = client;
    }

    async initialize() {
        await this.client.initialize();
    }

    async dispose() {
        await this.client.dispose();
    }

}

module.exports = BaseEntityManager;