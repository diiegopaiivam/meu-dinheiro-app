
exports.up = function(knex) {
    return knex.schema.createTable('crediSchema', function (table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.decimal('value').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('crediSchema');
};
