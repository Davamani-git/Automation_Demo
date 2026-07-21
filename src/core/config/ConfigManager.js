const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

class ConfigManager {
  constructor() {
    this.config = {};
    this.load();
  }

  load() {
    const environment = process.env.ENV || 'qa';

    const envFile = path.resolve(process.cwd(), `.env.${environment}`);

    if (fs.existsSync(envFile)) {
      dotenv.config({ path: envFile });
      console.log(`Loaded configuration: ${envFile}`);
    } else {
      dotenv.config();
      console.log('Loaded default .env configuration');
    }

    this.config = {
      environment,

      baseUrl: process.env.BASE_URL,

      authUrl: process.env.AUTH_URL,

      token: process.env.TOKEN,

      clientId: process.env.CLIENT_ID,

      clientSecret: process.env.CLIENT_SECRET,

      timeout: Number(process.env.API_TIMEOUT || 30000),

      logLevel: process.env.LOG_LEVEL || 'info'
    };

    this.validate();
  }

  validate() {
    const mandatory = [
      'baseUrl',
      'timeout'
    ];

    mandatory.forEach(key => {
      if (!this.config[key]) {
        throw new Error(`Missing configuration: ${key}`);
      }
    });
  }

  get(key) {
    return this.config[key];
  }

  getAll() {
    return this.config;
  }
}

module.exports = new ConfigManager();