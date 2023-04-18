

const knex = require("knex")({
  client: 'pg',
  connection: {
    host: 'containers-us-west-53.railway.app',
    port: '6490',
    user: 'postgres',
    password: 'mf8de6B9LpHFERLwfwWd',
    database: 'railway',
  },

})

module.exports = knex;
