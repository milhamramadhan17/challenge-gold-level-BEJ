const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'november2001',
    host: 'localhost',
    port: 3000,
    database: 'Data_Pelanggan'
});

const getUsers = async (req, res) => {
    const query = 'SELECT * FROM users';
    const result = await pool.query(query);
    res.status(200).json(result.rows);
}

module.exports = {
    getUsers
}