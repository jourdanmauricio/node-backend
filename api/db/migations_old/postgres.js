const { Client } = require('pg');

async function getConection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'admin',
    password: 'mau10ti',
    database: 'lumau_db',
  });
  await client.connect();
  return client;
}

module.exports = getConection;
