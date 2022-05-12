const dataBase = require('database.sql');
const app = dataBase();
const Queries = require('queries.sql');
const app2 = Queries();

console.log(app2);