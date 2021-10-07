module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});


////////// SETTING UP POSTGRES LOCALLY ////////
// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

// const parse = require('pg-connection-string').parse;
// const config = parse(process.env.DATABASE_URL);

// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'postgres',
//         host: config.host,
//         port: config.port,
//         database: config.database,
//         username: config.user,
//         password: config.password,
//         schema: env('DATABASE_SCHEMA', 'public'), // Not Required
//         ssl: env('DATABASE_SSL', false),
//       },
//       options: {},
//     },
//   },
// });
