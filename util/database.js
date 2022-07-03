const {Pool} = require('pg')

const pool = new Pool({
  user: 'postgres',
  database: 'node_complete',
  host: 'localhost',
  port: 5432
})

module.exports = pool