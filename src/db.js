const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'november2001',
    host: 'localhost',
    port: 5432,
    database: 'bingle'
});

module.exports = pool;