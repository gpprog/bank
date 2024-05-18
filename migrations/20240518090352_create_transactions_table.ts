import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('transactions', (table) => {
    table.increments('id').primary();
    table
      .integer('sourceAccountId')
      .unsigned()
      .references('id')
      .inTable('accounts')
      .onDelete('CASCADE');
    table
      .integer('targetAccountId')
      .unsigned()
      .references('id')
      .inTable('accounts')
      .onDelete('CASCADE');
    table.decimal('amount').notNullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('transactions');
}
