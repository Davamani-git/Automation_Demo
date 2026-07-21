const GuardrailsData = require('./GuardrailsData');

class GuardrailsPayloads {

    static createPayload(overrides = {}) {

        return {

            name: GuardrailsData.getUniqueName(),

            content: 'Some content type',

            yamlContent: 'yaml: value',

            description: 'Sample guardrail',

            chatBot: true,

            createdBy: 101,

            createdAt: '2025-09-05T12:00:00.000000',

            modifiedBy: 101,

            modifiedAt: '2025-09-05T12:30:00.000000',

            version: 1,

            parentId: null,

            isDeleted: false,

            approvedBy: null,

            approvedAt: null,

            status: 'CREATED',

            teamId: 23,

            changeSummary: 'Initial creation',

            comments: 'Looks good',

            configKey: 'CFG-123',

            isEditable: true,

            tags: [10, 20, 30],

            practiceArea: 42,

            ...overrides
        };
    }

    static updatePayload(overrides = {}) {
    return {
        id: null,
        name: GuardrailsData.getUniqueName(),
        content: 'Some content type',
        yamlContent: 'yaml: value',
        description: 'Sample guardrail',
        chatBot: true,

        createdBy: 101,
        createdAt: '2025-09-05T12:00:00.000000',

        modifiedBy: 101,
        modifiedAt: '2025-09-05T12:30:00.000000',

        version: 1,
        parentId: null,
        isDeleted: false,
        approvedBy: null,
        approvedAt: null,
        status: 'CREATED',
        teamId: 23,
        changeSummary: 'Initial creation',
        comments: 'Looks good',
        configKey: 'CFG-123',
        isEditable: true,
        tags: [10, 20, 30],
        practiceArea: 42,

        ...overrides
    };
}
}

module.exports = GuardrailsPayloads;