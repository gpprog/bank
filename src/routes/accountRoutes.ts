import { Router } from 'express';
import {
  createAccountController,
  getAllAccountsController,
  getAccountByIdController,
  updateAccountController,
  deleteAccountController,
} from '../controllers/account';

const router = Router();


router.post('/', createAccountController);
router.get('/', getAllAccountsController);
router.get('/:id', getAccountByIdController);
router.put('/:id', updateAccountController);
router.delete('/:id', deleteAccountController);

export default router;
