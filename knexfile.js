const dotenv = require('dotenv').config();

   module.exports = {

    development: {
        client: 'pg',
        connection: {
            host:process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            charset: 'utf8'
          },
        
    }
   }