const BaseApiClient = require('../../core/clients/BaseApiClient');
const AgentsEndpoints = require('./AgentsEndpoints');

class AgentsClient {
  constructor() {
    this.client = new BaseApiClient();
  }

  /**
   * Fetches the list of agents.
   * @param {Object} queryParams - Optional query parameters.
   * @returns {Promise<ApiResponse>}
   */
  async getAllAgents(queryParams = {}) {
    const qs = Object.keys(queryParams).length
      ? `?${new URLSearchParams(queryParams)}`
      : '';
    const endpoint = `${AgentsEndpoints.GET_AGENTS}${qs}`;
    return await this.client.get(endpoint);
  }
}

module.exports = new AgentsClient();
