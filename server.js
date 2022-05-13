const express = require('express');
const usersRoutes = require('./routes/user.routes');
const app = express();

app.use(express.json());

app.use('/api/users/', usersRoutes);

async function main() {
    await app.listen(3000);
    console.log('server on port 3000');
}


module.exports = app;

main();

