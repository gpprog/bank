import knex from './knex';

interface Transaction {
  id?: number;
  sourceAccountId: number;
  targetAccountId: number;
  amount: number;
}

export const createTransaction = async (transaction: Transaction): Promise<number> => {
  const [id] = await knex('transactions').insert(transaction).returning('id');
  return id;
};

export const getTransactionById = async (id: number): Promise<Transaction | undefined> => {
  return await knex('transactions').where({ id }).first();
};

export const getAllTransactions = async (): Promise<Transaction[]> => {
  return await knex('transactions').select('*');
};
  
