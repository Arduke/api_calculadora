exports.up = knex => knex.schema.createTable('logs', table => {
    table.increments('id')
    table.text('username').notNullable()
    table.text('calculation')
    table.text('result')
  })

exports.down = knex => knex.schema.dropTable('logs')
