const { Pool } = require('pg');
require('dotenv').config();

// connect to postgres here using .env files. Please see readme.md for more details
<<<<<<< HEAD
const PG_URI = `postgres://${process.env.PG_USER}:${process.env.PG_PW}@ruby.db.elephantsql.com:5432/zvjydwco`;

=======
const PG_URI = `postgres://${process.env.PG_USER}:${process.env.PG_PW}<pasteElephantUriHere>`;
//
>>>>>>> e6b84810103d40b3778b3549a1ae28eabd272724
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
//
