const { config } = require('../config/config');

// const USER = encodeURIComponent(config.dbUser);
// const PASS = encodeURIComponent(config.dbPass);
// const URI = `postgres://${USER}:${PASS}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  development: {
    //url: URI,
    url: config.dbUrl,
    dialect: 'postgres',
  },
  production: {
    // url: URI,
    url: config.dbUrl,
    dialect: 'postgres',
    dialectOptions: {
      ssl: { rejectUnauthorized: false },
    },
  },
};
