
exports.up = function(knex) {
    return knex.schema.createTable('billingCycleSchema', function(table){
        table.increments();

        table.string('name').notNullable();
        table.decimal('month').notNullable();
        table.decimal('year').notNullable();
        
        table.string('credit_id').notNullable();
        table.string('debit_id').notNullable();

        table.foreign('credit_id').references('id').inTable('crediSchema');
        table.foreign('debit_id').references('id').inTable('debitSchema');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('billingCycleSchema');
};
