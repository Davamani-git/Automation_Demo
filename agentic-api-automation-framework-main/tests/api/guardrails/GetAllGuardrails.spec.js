const { test, expect } = require('../../fixtures/guardrails.fixture');

test('Validate Get All Guardrails', async ({ guardrailsService }) => {

    const response = await guardrailsService.getAll();

    expect(response.data.guardrails).toBeDefined();
    expect(response.data.guardrails.length).toBeGreaterThan(0);

});