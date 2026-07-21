const { test, expect } = require('../../fixtures/guardrails.fixture');

test('Validate Guardrail Metrics', async ({ guardrailsService }) => {

    const metrics = await guardrailsService.getMetrics();

    expect(metrics).toBeDefined();

});