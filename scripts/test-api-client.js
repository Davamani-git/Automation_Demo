const BaseApiClient = require('../src/api/clients/BaseApiClient');
const endpoints = require('../src/api/endpoints/guardrailsEndpoints');

(async () => {

    const client = new BaseApiClient();

    await client.initialize();

    const response = await client.get(endpoints.GET_GUARDRAILS);

    console.log("Status:", response.status());

    console.log(await response.text());

    await client.dispose();

})();