const BaseApiClient = require('../clients/BaseApiClient');
const Endpoints = require('./GuardrailsEndpoints');

class GuardrailsClient {

    constructor() {
        this.client = new BaseApiClient();
    }

    async initialize() {
        await this.client.initialize();
    }

    async dispose() {
        await this.client.dispose();
    }

    /**
     * Get all Guardrails
     */
    async getAll() {
        return await this.client.get(Endpoints.GET_ALL);
    }

    /**
     * Create Guardrail
     * @param {Object} payload
     */
    async create(payload) {

        if (!payload) {
            throw new Error('Create payload is required.');
        }

        return await this.client.post(
            Endpoints.CREATE,
            payload
        );
    }

    /**
     * Update Guardrail
     * @param {string} id
     * @param {Object} payload
     */
    async update(id, payload) {

    if (!id) {
        throw new Error('Guardrail ID is required.');
    }

    if (!payload) {
        throw new Error('Update payload is required.');
    }

    return await this.client.put(
        Endpoints.UPDATE,
        payload
    );
}

    /**
 * Delete Guardrail
 */
async delete(id) {

    if (!id) {
        throw new Error('Guardrail ID is required.');
    }

    const endpoint = Endpoints.DELETE.replace('{id}', id);

    return await this.client.delete(endpoint);
}

    /**
 * Review Guardrail
 */
async review() {

    return await this.client.put(
        Endpoints.REVIEW
    );

}

/**
 * Approve Guardrail
 */
async approve() {

    return await this.client.put(
        Endpoints.APPROVAL
    );

}

/**
 * Get Guardrail Metrics
 */
async getMetrics() {

    return await this.client.get(
        Endpoints.METRICS
    );

}

}

module.exports = new GuardrailsClient();