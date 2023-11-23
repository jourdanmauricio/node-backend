const { Pool } = require('pg');
const { config } = require('../config/config');

let URI = '';
const options = {};
if (config.isProd) {
  options.connectionString = config.dbUrl;
  options.ssl = { rejectUnauthorized: false };
} else {
  const USER = encodeURIComponent(config.dbUser);
  const PASS = encodeURIComponent(config.dbPass);
  URI = `postgres://${USER}:${PASS}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
  options.connectionString = URI;
}

const pool = new Pool(options);

module.exports = pool;
