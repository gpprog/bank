import type { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      database: 'bank',
      host: 'localhost',
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      port: Number(process.env.DATABASE_PORT),
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
  },
};

export default config;
