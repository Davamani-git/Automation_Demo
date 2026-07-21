const baseDataFactory = require('../../core/data/BaseDataFactory');

class GuardrailsData {

    /**
     * Returns a unique guardrail name.
     */
    getUniqueName() {
        return baseDataFactory.generateName('Guardrail');
    }

    /**
     * Returns the default guardrail description.
     */
    getDescription() {
        return 'Created by Playwright API Automation Framework';
    }

    /**
     * Returns the updated guardrail description.
     */
    getUpdatedDescription() {
        return 'Updated by Playwright API Automation Framework';
    }

    /**
     * Returns an invalid guardrail name.
     */
    getInvalidName() {
        return baseDataFactory.generateEmptyString();
    }

    /**
     * Returns a whitespace-only guardrail name.
     */
    getWhiteSpaceName() {
        return baseDataFactory.generateWhiteSpace();
    }

    /**
     * Returns a very long guardrail name.
     */
    getLongName(length = 300) {
        return baseDataFactory.generateLongString(length);
    }

    /**
     * Returns a random guardrail name.
     */
    getRandomName(length = 15) {
        return baseDataFactory.generateRandomString(length);
    }

    /**
     * Returns a unique updated guardrail name.
     */
    getUpdatedName() {
        return `${baseDataFactory.generateName('Updated_Guardrail')}`;
    }

}

module.exports = new GuardrailsData();