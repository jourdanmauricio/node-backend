const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models');

const URI = config.dbUrl;

const options = {
  dialect: 'postgres',
  dialectModule: require('pg'),
  ssl: true,
  sslmode: false,
  logging: !config.isProd ? console.log : false,
};

if (config.isProd) {
  options.dialectOptions = {
    ssl: { rejectUnauthorized: false, requestCert: true },
  };
}
const sequelize = new Sequelize(URI, options);

setupModels(sequelize);

// sequelize.sync();

module.exports = sequelize;
