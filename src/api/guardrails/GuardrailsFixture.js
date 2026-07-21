const guardrailsClient = require('./GuardrailsClient');
const guardrailsPayloads = require('./GuardrailsPayloads');
const guardrailsValidator = require('./GuardrailsValidator');

class GuardrailsFixture {

    async initialize() {
        await guardrailsClient.initialize();
    }

    async dispose() {
        await guardrailsClient.dispose();
    }

    get client() {
        return guardrailsClient;
    }

    get payloads() {
        return guardrailsPayloads;
    }

    get validator() {
        return guardrailsValidator;
    }

}

module.exports = new GuardrailsFixture();