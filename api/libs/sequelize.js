const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models');

const URI = config.dbUrl;

console.log('URI!!!!!!!!!!!!!', URI);

const options = {
  dialect: 'postgres',
  dialectModule: require('pg'),
  logging: !config.isProd ? console.log : false,
};

if (config.isProd) {
  // options.dialectOptions = {
  //   ssl: { rejectUnauthorized: false },
  // };
}
const sequelize = new Sequelize(URI, options);

setupModels(sequelize);

// sequelize.sync();

module.exports = sequelize;
