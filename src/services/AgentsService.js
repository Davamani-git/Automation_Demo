const BaseService = require('./BaseService');
const agentsClient = require('../api/agents/AgentsClient');
const agentsValidator = require('../api/agents/AgentsValidator');

class AgentsService extends BaseService {
  constructor() {
    super(agentsClient, agentsValidator);
  }

  /**
   * Retrieves all agents and validates the response.
   * @param {Object} queryParams - Optional query parameters.
   * @param {number} expectedStatus - The expected HTTP status code.
   * @returns {Promise<Object>} The validated response body.
   */
  async getAllAgents(queryParams = {}, expectedStatus = 200) {
    const response = await this.client.getAllAgents(queryParams);
    return await this.validator.validateGetAllAgentsResponse(response, expectedStatus);
  }
}

module.exports = new AgentsService();
