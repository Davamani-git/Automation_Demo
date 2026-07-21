const base = require('@playwright/test');
const guardrailsService = require('../../src/services/GuardrailsService');

exports.test = base.test.extend({

    guardrailsService: async ({}, use) => {

        await guardrailsService.initialize();

        await use(guardrailsService);

        await guardrailsService.dispose();
    }

});

exports.expect = base.expect;