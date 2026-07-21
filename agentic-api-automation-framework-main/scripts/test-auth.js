const authManager = require('../src/core/auth/AuthManager');

(async () => {

    const headers = await authManager.getAuthHeaders();

    console.log(headers);

})();