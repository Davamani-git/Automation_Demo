const { expect } = require('@playwright/test');
const BaseValidator = require('../../core/base/BaseValidator');

class AgentsValidator extends BaseValidator {
  constructor() {
    super();
  }

  async validateGetAllAgentsResponse(response, expectedStatus) {
    this.validateStatusCode(response, expectedStatus);

    const body = await response.json();

    if (expectedStatus === 200) {
      await this.validateSuccessResponse(response, 200);
      expect(body).toHaveProperty('data');
      expect(body).toHaveProperty('status', 'SUCCESS');
      expect(typeof body.data).toBe('object');
      return body;
    } else if (expectedStatus === 401) {
      await this.validateErrorResponse(response, 401);
      // TODO: confirm actual error message, e.g., 'Unauthorized' or 'Authentication token is missing'
      if (body.message) {
          // console.log('Received error message:', body.message);
      }
      return body;
    }
    return body;
  }

  validateAgentList(body, expectedCount) {
    expect(body.data).toHaveProperty('agentDetails');
    expect(Array.isArray(body.data.agentDetails)).toBe(true);
    expect(body.data.agentDetails).toHaveLength(expectedCount);
    expect(body.data).toHaveProperty('totalNoOfRecords', expectedCount);
  }

  validateAgentContract(agent) {
    expect(typeof agent.id).toBe('number');
    expect(typeof agent.name).toBe('string');
    expect(typeof agent.agentDetails).toBe('string');
    expect(typeof agent.role).toBe('string');
    expect(typeof agent.goal).toBe('string');
    expect(typeof agent.backstory).toBe('string');
    expect(typeof agent.description).toBe('string');
    expect(typeof agent.expectedOutput).toBe('string');
    expect(typeof agent.createdBy).toBe('string');
    expect(typeof agent.createdAt).toBe('string');
    expect(typeof agent.modifiedAt).toBe('string');
    expect(agent.approvedBy === null || typeof agent.approvedBy === 'string').toBe(true);
    expect(['DRAFTED', 'CREATED', 'IN_REVIEW', 'APPROVED']).toContain(agent.status);
    expect(agent.approvedAt === null || typeof agent.approvedAt === 'string').toBe(true);
    expect(typeof agent.isDeleted).toBe('boolean');
    expect(typeof agent.teamInfo).toBe('object');
    expect(typeof agent.teamInfo.teamId).toBe('number');
    expect(typeof agent.isEditable).toBe('boolean');
    expect(Array.isArray(agent.tags)).toBe(true);
    agent.tags.forEach(tag => expect(typeof tag).toBe('number'));
    expect(typeof agent.practiceArea).toBe('number');
    expect(typeof agent.hierarchyEntityId).toBe('number');
    expect(['APPLICATION', 'ORGANIZATION']).toContain(agent.hierarchyLevel);
    expect(typeof agent.hierarchyName).toBe('string');
    expect(typeof agent.parentId).toBe('number');
    expect(typeof agent.isGolden).toBe('boolean');
  }
}

module.exports = new AgentsValidator();
