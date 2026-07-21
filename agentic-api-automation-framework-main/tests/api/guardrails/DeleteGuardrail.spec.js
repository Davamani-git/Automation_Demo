const { test, expect } = require('../../fixtures/guardrails.fixture');

test('Validate Delete Guardrail', async ({ guardrailsService }) => {

    // Create Guardrail
    const created = await guardrailsService.create();

    const id = created.data.guardrailId;

    // Delete Guardrail
    const deleted = await guardrailsService.delete(id);

    expect(deleted).toBeDefined();

});