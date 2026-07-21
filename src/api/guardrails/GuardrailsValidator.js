const { expect } = require('@playwright/test');
const BaseValidator = require('../../core/base/BaseValidator');

class GuardrailsValidator extends BaseValidator {

    /**
     * Validate Get All Guardrails
     */
    async validateGetAll(response) {

        const body = await this.validateSuccessResponse(response);

        this.validateProperty(body, 'data');
        this.validateProperty(body.data, 'guardrails');

        this.validateArray(body.data.guardrails);

        return body;
    }

    /**
     * Validate Get Guardrail By Id
     */
    async validateGetById(response) {

        const body = await this.validateSuccessResponse(response);

        this.validateProperty(body, 'data');

        return body;
    }

    /**
     * Validate Create Guardrail
     */
    async validateCreate(response) {

    await this.validateStatusCode(response, 200);

    const body = await response.json();

    expect(body.status).toBe('SUCCESS');

    expect(body.data).toBeDefined();

    expect(body.data.message)
        .toBe('Guardrail created successfully.');

    expect(body.data.guardrailId).toBeGreaterThan(0);

    return body;
}

    /**
 * Validate Update Guardrail
 */
async validateUpdate(response) {

    console.log("==================================");
    console.log("UPDATE STATUS :", response.status());

    const responseText = await response.text();

    console.log("UPDATE RESPONSE:");
    console.log(responseText);
    console.log("==================================");

    // Temporary - keep this after logging
    expect(
        response.status(),
        `Expected status 200 but received ${response.status()}`
    ).toBe(200);

    return responseText;
}

    /**
     * Validate Delete Guardrail
     */
    async validateDelete(response) {

        const body = await this.validateSuccessResponse(response);

        return body;
    }

    /**
 * Validate Review Guardrail
 */
async validateReview(response) {

    const body = await this.validateSuccessResponse(response);

    return body;

}

/**
 * Validate Approve Guardrail
 */
async validateApproval(response) {

    const body = await this.validateSuccessResponse(response);

    return body;

}

/**
 * Validate Guardrail Metrics
 */
async validateMetrics(response) {

    const body = await this.validateSuccessResponse(response);

    // Root level validations
    this.validateProperty(body, 'data');
    this.validateProperty(body, 'status');

    expect(body.status).toBe('SUCCESS');

    // Data validations
    this.validateProperty(body.data, 'message');
    this.validateProperty(body.data, 'guardrailMetricsModel');

    expect(body.data.message).toBe(
        'Guardrails Metrics Retrieved Successfully'
    );

    const metrics = body.data.guardrailMetricsModel;

    // Metrics validations
    this.validateProperty(metrics, 'totalCount');
    this.validateProperty(metrics, 'draftedCount');
    this.validateProperty(metrics, 'pendingCount');
    this.validateProperty(metrics, 'approvedCount');
    this.validateProperty(metrics, 'rejectedCount');

    expect(metrics.totalCount).toBeGreaterThanOrEqual(0);
    expect(metrics.draftedCount).toBeGreaterThanOrEqual(0);
    expect(metrics.pendingCount).toBeGreaterThanOrEqual(0);
    expect(metrics.approvedCount).toBeGreaterThanOrEqual(0);
    expect(metrics.rejectedCount).toBeGreaterThanOrEqual(0);

    return body;
}

}

module.exports = new GuardrailsValidator();