const { config } = require('../config/config');

console.log('URI!!!!!!!!!!!!!', config.dbUrl);

module.exports = {
  development: {
    url: config.dbUrl,
    dialect: 'postgres',
  },
  production: {
    url: config.dbUrl,
    dialect: 'postgres',
    dialectModule: require('pg'),
    // dialectOptions: {
    //   ssl: { rejectUnauthorized: false },
    // },
  },
};
