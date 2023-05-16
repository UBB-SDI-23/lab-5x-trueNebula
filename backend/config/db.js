const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  database: 'api',
  password: 'password',
  host: 'localhost',
  port: 5432,
})

module.exports = pool;