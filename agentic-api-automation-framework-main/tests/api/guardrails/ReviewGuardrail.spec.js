const { test, expect } = require('../../fixtures/guardrails.fixture');

test('Validate Review Guardrail', async ({ guardrailsService }) => {

    const response = await guardrailsService.review();

    expect(response).toBeDefined();

});