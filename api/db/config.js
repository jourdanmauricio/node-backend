const { config } = require('../config/config');

module.exports = {
  development: {
    url: config.dbUrl,
    dialect: 'postgres',
  },
  production: {
    url: config.dbUrl,
    ssl: false,
    dialect: 'postgres',
    dialectModule: require('pg'),
    dialectOptions: {
      ssl: { rejectUnauthorized: true },
    },
  },
};
