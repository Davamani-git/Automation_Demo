const BaseService = require('./BaseService');

const client = require('../api/guardrails/GuardrailsClient');
const payloads = require('../api/guardrails/GuardrailsPayloads');
const validator = require('../api/guardrails/GuardrailsValidator');

class GuardrailsService extends BaseService {

    constructor() {
        super(client);
    }

    async getAll() {

        const response = await this.client.getAll();

        return await validator.validateGetAll(response);

    }

    async getById(id) {

        const response = await this.client.getById(id);

        return await validator.validateGetById(response);

    }

    async create(overrides = {}) {

        const payload =
            payloads.createPayload(overrides);

        const response =
            await this.client.create(payload);

        return await validator.validateCreate(response);

    }

    async update(id, overrides = {}) {

    const payload = payloads.updatePayload({
        id,
        ...overrides
    });

    const response = await this.client.update(id, payload);

    return await validator.validateUpdate(response);

}
    /**
 * Delete Guardrail
 */
async delete(id) {

    const response = await this.client.delete(id);

    return await validator.validateDelete(response);

}

/**
 * Review Guardrail
 */
async review() {

    const response = await this.client.review();

    return await validator.validateReview(response);

}

/**
 * Approve Guardrail
 */
async approve() {

    const response = await this.client.approve();

    return await validator.validateApproval(response);

}

/**
 * Get Guardrail Metrics
 */
async getMetrics() {

    const response = await this.client.getMetrics();

    return await validator.validateMetrics(response);

}

}

module.exports = new GuardrailsService();