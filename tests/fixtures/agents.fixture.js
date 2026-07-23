const base = require('@playwright/test');
const AgentsService = require('../../src/services/AgentsService');

const test = base.test.extend({
  agentsService: async ({}, use) => {
    const service = new AgentsService();
    // If initialization is needed, it would go here.
    // await service.initialize();
    await use(service);
    // If cleanup is needed, it would go here.
    // await service.dispose();
  },
});

module.exports = test;
module.exports.expect = test.expect;
