const { test, expect } = require('../../fixtures/guardrails.fixture');

test('Validate Update Guardrail', async ({ guardrailsService }) => {

    const created = await guardrailsService.create();

    const guardrailId = created.data.guardrailId;

    const response = await guardrailsService.update(guardrailId);

    expect(response).toBeDefined();

});