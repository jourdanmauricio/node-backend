const { config } = require('../config/config');

module.exports = {
  development: {
    url: config.dbUrl,
    dialect: 'postgres',
  },
  production: {
    url: config.dbUrl,
    ssl: true,
    dialect: 'postgres',
    dialectModule: require('pg'),
    dialectOptions: {
      ssl: { rejectUnauthorized: false },
    },
  },
};
