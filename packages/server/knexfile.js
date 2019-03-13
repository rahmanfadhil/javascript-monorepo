// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3',
    },
    migrations: { directory: './src/migrations' },
    seeds: { directory: './src/seeds' },
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3',
    },
    migrations: { tableName: 'knex_migrations', directory: './src/migrations' },
    seeds: { directory: './src/seeds' },
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: { min: 2, max: 10 },
    migrations: { tableName: 'knex_migrations', directory: './src/migrations' },
    seeds: { directory: './src/seeds' },
  },
}
