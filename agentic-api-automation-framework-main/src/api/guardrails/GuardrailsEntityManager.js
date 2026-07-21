const BaseEntityManager = require('../../core/entity/BaseEntityManager');

const client = require('./GuardrailsClient');
const payloads = require('./GuardrailsPayloads');
const validator = require('./GuardrailsValidator');

class GuardrailsEntityManager extends BaseEntityManager {

    constructor() {
        super(client);
    }

    async createGuardrail(overrides = {}) {

        const response =
            await client.create(
                payloads.createPayload(overrides)
            );

        const body =
            await validator.validateCreate(response);

        return body.data;

    }

    async getAllGuardrails() {

        const response =
            await client.getAll();

        const body =
            await validator.validateGetAll(response);

        return body.data.guardrails;

    }

    async getGuardrail(id) {

        const response =
            await client.getById(id);

        const body =
            await validator.validateGetById(response);

        return body.data;

    }

    async updateGuardrail(id, overrides = {}) {

        const response =
            await client.update(
                id,
                payloads.updatePayload(overrides)
            );

        const body =
            await validator.validateUpdate(response);

        return body.data;

    }

    async deleteGuardrail(id) {

        const response =
            await client.delete(id);

        await validator.validateDelete(response);

    }

}

module.exports = new GuardrailsEntityManager();