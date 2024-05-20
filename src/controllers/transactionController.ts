import { Request, Response } from 'express';
import knex from '../models/knex';
import { getAccountById, updateAccount } from '../models/account';
import { createTransaction, getAllTransactions } from '../models/transaction';

export const createTransactionController = async (
  req: Request,
  res: Response
) => {
  console.log('createTransactionControllrer, request body :', req.body);
  try {
    const { sourceAccountId, targetAccountId, amount } = req.body;
    // Check if source and target maches
    if (sourceAccountId === targetAccountId)
      return res
        .status(405)
        .json({ error: 'Not allowed same source/target account' });

    // Check if source account exists
    const sourceAccount = await getAccountById(sourceAccountId);
    if (!sourceAccount) {
      return res.status(404).json({ error: 'Source account not found' });
    }

    // Check if target account exists
    const targetAccount = await getAccountById(targetAccountId);
    if (!targetAccount) {
      return res.status(404).json({ error: 'Target account not found' });
    }

    // Check if source account has sufficient balance
    if (sourceAccount.balance < amount) {
      return res.status(400).json({ error: 'Insufficient balance' });
    }
    const sourceBalance = Number(sourceAccount.balance);
    const tarbetBalance = Number(targetAccount.balance);
    const transferAmount = Number(amount);

    // Calculate balances
    const newSourceBalance = Number(sourceBalance - transferAmount);
    console.log('NEW SOURCE BALANCE', newSourceBalance);
    const newTargetBalance = Number(tarbetBalance + transferAmount);
    console.log('NEW TARGET BALANCE', newTargetBalance);

    // Perform the transaction
    try {
      await updateAccount(sourceAccountId, { balance: newSourceBalance });
      await updateAccount(targetAccountId, { balance: newTargetBalance });
    } catch (err) {
      console.error('Error updating account balances:', err);
      return res
        .status(500)
        .json({ error: 'Failed to update account balances' });
    }

    const transactionId = await createTransaction({
      sourceAccountId,
      targetAccountId,
      amount,
    });

    res.status(201).json({
      message: `Transaction with ${JSON.stringify(transactionId)} successful`,
    });
  } catch (error) {
    console.error('Error creating transaction:', error);
    res.status(500).json({ error: 'Failed to create transaction' });
  }
};

export const getTransactionByIdController = async (
  req: Request,
  res: Response
) => {
  console.log('getTransactionByIdController reqest body:', req.body);
  try {
    const transactionId = req.params.id;
    const transaction = await knex('transactions')
      .where('id', transactionId)
      .first();
    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    res.status(200).json(transaction);
  } catch (error) {
    console.error('Error getting transaction by ID:', error);
    res.status(500).json({ error: 'Failed to get transaction' });
  }
};

export const getAllTransactionsController = async (
  req: Request,
  res: Response
) => {
  console.log('getAllTransactionsController request');
  try {
    const transactions = await getAllTransactions();
    res.status(200).json(transactions);
  } catch (error) {
    console.error('Error getting all transactions:', error);
    res.status(500).json({ error: 'Failed to get transactions' });
  }
};
