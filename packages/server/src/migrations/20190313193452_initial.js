exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table
      .string('email')
      .unique()
      .notNullable()
    table
      .string('phone')
      .unique()
      .notNullable()
    table.string('password').notNullable()
    table.boolean('is_admin').defaultTo(false)
    table.boolean('is_verified').notNullable(false)
    table.timestamps(true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
