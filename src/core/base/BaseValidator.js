const { expect } = require('@playwright/test');

class BaseValidator {

    /**
     * Validate HTTP Status Code
     */
    validateStatusCode(response, expectedStatus) {

        expect(
            response.status(),
            `Expected status ${expectedStatus} but received ${response.status()}`
        ).toBe(expectedStatus);

    }

    /**
     * Validate SUCCESS response
     */
    async validateSuccessResponse(response, expectedStatus = 200) {

        this.validateStatusCode(response, expectedStatus);

        const body = await response.json();

        expect(body).toBeDefined();
        expect(body.status).toBe('SUCCESS');

        return body;

    }

    /**
     * Validate ERROR response
     */
    async validateErrorResponse(response, expectedStatus) {

        this.validateStatusCode(response, expectedStatus);

        const body = await response.json();

        expect(body).toBeDefined();
        expect(body.status).toBe('ERROR');

        return body;

    }

    /**
     * Validate property exists
     */
    validateProperty(object, propertyName) {

        expect(
            object,
            `Property '${propertyName}' not found`
        ).toHaveProperty(propertyName);

    }

    /**
     * Validate array
     */
    validateArray(array) {

        expect(Array.isArray(array)).toBeTruthy();

    }

    /**
     * Validate array is not empty
     */
    validateArrayNotEmpty(array) {

        this.validateArray(array);

        expect(array.length).toBeGreaterThan(0);

    }

    /**
     * Validate response time
     */
    validateResponseTime(response, maxResponseTime = 5000) {

        expect(response.timing().responseEnd).toBeLessThan(maxResponseTime);

    }

}

module.exports = BaseValidator;