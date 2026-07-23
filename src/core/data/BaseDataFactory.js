class BaseDataFactory {

    /**
     * Generate a unique name with prefix.
     * Example: Guardrail_1721263456789
     */
    generateName(prefix = 'Automation') {
        return `${prefix}${Date.now()}`;
    }

    /**
     * Generate unique identifier.
     */
    generateUniqueId() {
        return `${Date.now()}_${Math.floor(Math.random() * 100000)}`;
    }

    /**
     * Generate random integer.
     */
    generateRandomNumber(min = 1, max = 1000) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Generate random boolean.
     */
    generateRandomBoolean() {
        return Math.random() >= 0.5;
    }

    /**
     * Generate random alphabetic string.
     */
    generateRandomString(length = 10) {

        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        let result = '';

        for (let i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );
        }

        return result;
    }

    /**
     * Generate random alphanumeric string.
     */
    generateAlphaNumeric(length = 10) {

        const characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        let result = '';

        for (let i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );
        }

        return result;
    }

    /**
     * Generate random email.
     */
    generateEmail(prefix = 'automation') {

        return `${prefix}_${Date.now()}@example.com`;

    }

    /**
     * Generate long string.
     */
    generateLongString(length = 256) {

        return 'A'.repeat(length);

    }

    /**
     * Generate empty string.
     */
    generateEmptyString() {

        return '';

    }

    /**
     * Generate whitespace string.
     */
    generateWhiteSpace(length = 5) {

        return ' '.repeat(length);

    }

    /**
     * Generate current timestamp.
     */
    getTimestamp() {

        return Date.now();

    }

    /**
     * Generate current ISO date.
     */
    getCurrentDate() {

        return new Date().toISOString();

    }

    /**
     * Generate future date.
     */
    getFutureDate(days = 1) {

        const date = new Date();

        date.setDate(date.getDate() + days);

        return date.toISOString();

    }

    /**
     * Generate past date.
     */
    getPastDate(days = 1) {

        const date = new Date();

        date.setDate(date.getDate() - days);

        return date.toISOString();

    }

}

module.exports = new BaseDataFactory();
