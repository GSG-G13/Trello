const { Pool } = require('pg');

// differences between Pool and Client
// Pool is a connection pool, which means that it will keep a number of connections open to the database, and reuse them when needed. This is useful for applications that need to make a lot of queries, as it will avoid the overhead of creating a new connection for each query.
// Client is a single connection to the database. It is useful for applications that need to make a single query, and then exit.
require('dotenv').config();

const connection = new Pool({
  connectionString: process.env.DB_URL,
  ssl: true,
});

module.exports = {
  connection,
};
