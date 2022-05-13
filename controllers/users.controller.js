const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'november2001',
    host: 'localhost',
    port: 3000,
    database: 'Data_Pelanggan'
});