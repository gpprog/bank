import knex from './knex';

interface Account {
  id?: number;
  balance: number;
  createdAt: Date;
}

export const createAccount = async (account: Account): Promise<number> => {
  const [id] = await knex('accounts').insert(account).returning('id');
  return id;
};
export const getAllAccounts = async (): Promise<Account[]> => {
  return await knex('accounts').select('*');
};
export const getAccountById = async (
  id: number
): Promise<Account | undefined> => {
  return await knex('accounts').where({ id }).first();
};

export const updateAccount = async (
  id: number,
  account: Partial<Account>
): Promise<boolean> => {
  const result = await knex('accounts').where({ id }).update(account);
  return result > 0;
};

export const deleteAccount = async (id: number): Promise<boolean> => {
  const result = await knex('accounts').where({ id }).delete();
  return result > 0;
};
