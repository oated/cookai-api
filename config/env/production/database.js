    // strapi-api/config/database.js
    module.exports = ({ env }) => ({
        connection: {
          client: 'postgres',
          connection: {
            host: env('DATABASE_HOST', 'localhost'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'cookai'),
            user: env('DATABASE_USERNAME', 'cookai'),
            password: env('DATABASE_PASSWORD', 'cookai-ppwd'),
            schema: env('DATABASE_SCHEMA', 'public'), // Not required
            ssl: {
              cd: env('DATABASE_CA')
            },
          },
          debug: false,
        },
      });