import { Request, Response } from 'express';
import {
  createAccount,
  getAllAccounts,
  getAccountById,
  updateAccount,
  deleteAccount,
} from '../models/account';

export const createAccountController = async (req: Request, res: Response) => {
  console.log('Create Account, request body :', req.body);
  try {
    const balance = req.body.balance || 0;

    if (balance < 0) {
      return res
        .status(400)
        .json({ error: 'Balance must be a positive number' });
    }

    const account = { balance, createdAt: new Date() };
    const id = await createAccount(account);
    res.status(201).json(id);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create account' });
  }
};

export const getAllAccountsController = async (req: Request, res: Response) => {
  try {
    const accounts = await getAllAccounts();
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve accounts' });
  }
};

export const getAccountByIdController = async (req: Request, res: Response) => {
  try {
    const accountId = parseInt(req.params.id, 10);
    const account = await getAccountById(accountId);
    if (account) {
      res.status(200).json(account);
    } else {
      res.status(404).json({ error: 'Account not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve account' });
  }
};

export const updateAccountController = async (req: Request, res: Response) => {
  try {
    const accountId = parseInt(req.params.id, 10);
    const { balance } = req.body;
    if (balance < 0) {
      return res
        .status(400)
        .json({ error: 'Balance must be a positive number' });
    }
    const updatedAccount = { balance, updatedAt: new Date() };
    const success = await updateAccount(accountId, updatedAccount);
    if (success) {
      res.status(200).json({ message: 'Account updated successfully' });
    } else {
      res.status(404).json({ error: 'Account not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update account' });
  }
};

export const deleteAccountController = async (req: Request, res: Response) => {
  console.log('Delete Account request body:', req.body);
  try {
    const accountId = parseInt(req.params.id, 10);
    const success = await deleteAccount(accountId);
    if (success) {
      res.status(200).json({ message: 'Account deleted successfully' });
    } else {
      res.status(404).json({ error: 'Account not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete account' });
  }
};
