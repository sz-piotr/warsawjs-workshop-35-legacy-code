exports.up = async (knex) => {
  await knex.schema.createTable('likes', (table) => {
    table.integer('pinId').notNullable()
    table.string('username').notNullable()

    table.foreign('pinId').references('id').inTable('pins')
    table.foreign('username').references('username').inTable('users')
    table.unique(['pinId', 'username'])
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTable('likes')
}
