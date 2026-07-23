// Implements: TC_AGENTS_001, TC_AGENTS_002, TC_AGENTS_003, TC_AGENTS_004, TC_AGENTS_005
const test = require('../../fixtures/agents.fixture');
const { expect } = require('@playwright/test');
const agentsValidator = require('../../../src/api/agents/AgentsValidator');
const AgentsEndpoints = require('../../../src/api/agents/AgentsEndpoints');

test('Get All Agents', async ({ agentsService, request }) => {

  test.step('TC_AGENTS_001 — Verify successful retrieval of a list of multiple agents', async () => {
    // Precondition: Assumes multiple agents exist. Test data should ensure this.
    const body = await agentsService.getAllAgents();
    expect(body.data.agentDetails.length).toBeGreaterThan(1);
    agentsValidator.validateAgentList(body, body.data.agentDetails.length);
  });

  test.step('TC_AGENTS_002 — Verify successful retrieval when only a single agent exists', async () => {
    // Precondition: Test setup should ensure only one agent exists for this scenario.
    const body = await agentsService.getAllAgents(); // This call might need specific query params in a real scenario
    agentsValidator.validateAgentList(body, 1);
  });

  test.step('TC_AGENTS_003 — Verify successful retrieval when no agents exist', async () => {
    // Precondition: Test setup should ensure no agents exist.
    const body = await agentsService.getAllAgents(); // This call might need specific query params in a real scenario
    agentsValidator.validateAgentList(body, 0);
  });

  test.step('TC_AGENTS_004 — Verify API returns an error when no authorization token is provided', async () => {
    // Using a raw request context to bypass global authentication
    const response = await request.get(AgentsEndpoints.GET_AGENTS, {
      headers: {
        'Authorization': '' // Explicitly remove auth
      }
    });
    await agentsValidator.validateGetAllAgentsResponse(response, 401);
  });

  test.step('TC_AGENTS_005 — Verify the response contract for a successful request', async () => {
    // Precondition: Assumes at least one agent exists.
    const body = await agentsService.getAllAgents();
    expect(body.data.agentDetails.length).toBeGreaterThan(0);
    const agent = body.data.agentDetails[0];
    agentsValidator.validateAgentContract(agent);
  });

});
