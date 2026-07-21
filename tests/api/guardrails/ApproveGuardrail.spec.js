const { test, expect } = require('../../fixtures/guardrails.fixture');

test('Validate Approve Guardrail', async ({ guardrailsService }) => {

    const response = await guardrailsService.approve();

    expect(response).toBeDefined();

});