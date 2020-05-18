
exports.up = function(knex) {
    return knex.schema.createTable('debitSchema', function (table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.decimal('value').notNullable();
        table.string('status').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('debitSchema');
};
