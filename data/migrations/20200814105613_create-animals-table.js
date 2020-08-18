exports.up = async function(knex) {
  await knex.schema.createTable('animals', tbl => {
    tbl.increments('id');
    tbl.text('name').notNullable();
    tbl.text('species').notNullable();
    tbl.float('age').notNullable();
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('animals');
};
