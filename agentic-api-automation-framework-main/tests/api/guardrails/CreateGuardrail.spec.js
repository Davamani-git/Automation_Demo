const { test, expect } = require('../../fixtures/guardrails.fixture');

test.describe('Guardrails - Create API', () => {

    test('Validate Create Guardrail', async ({ guardrailsService }) => {

        const response = await guardrailsService.create();

        expect(response.data).toBeDefined();
        expect(response.data.guardrailId).toBeGreaterThan(0);
        expect(response.data.message).toBe('Guardrail created successfully.');
        expect(response.status).toBe('SUCCESS');

    });

});