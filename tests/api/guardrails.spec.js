const { test } = require('@playwright/test');

const guardrailsClient = require('../../src/api/guardrails/GuardrailsClient');
const guardrailsValidator = require('../../src/api/guardrails/GuardrailsValidator');

test.describe('Guardrails API', () => {

    test.beforeAll(async () => {
        await guardrailsClient.initialize();
    });

    test.afterAll(async () => {
        await guardrailsClient.dispose();
    });

    test('Get All Guardrails', async () => {

        const response = await guardrailsClient.getAll();

        const body = await guardrailsValidator.validateGetAll(response);

        console.log(`Total Guardrails : ${body.data.guardrails.length}`);

    });

});