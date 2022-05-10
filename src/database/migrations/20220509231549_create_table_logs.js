exports.up = knex => knex.schema.createTable('logs', table => {
    table.increments('id')
    table.text('username').notNullable()
    table.text('calculation')
    table.text('result')
    table.timestamp('data').defaultTo(knex.fn.now())
  })

exports.down = knex => knex.schema.dropTable('logs')
