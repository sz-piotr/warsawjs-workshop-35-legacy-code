exports.up = async (knex) => {
  await knex.schema.createTable('pins', (table) => {
    table.increments('id').primary()
    table.string('username').notNullable()
    table.text('url').notNullable()

    table.foreign('username').references('username').inTable('users')
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTable('pins')
}
