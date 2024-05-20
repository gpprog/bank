import { Router } from 'express';
import {
  createAccountController,
  getAllAccountsController,
  getAccountByIdController,
  updateAccountController,
  deleteAccountController,
  getTotalAssetsController,
} from '../controllers/accountController';

const router = Router();

router.post('/', createAccountController);
router.get('/', getAllAccountsController);
router.get('/report', getTotalAssetsController);
router.get('/:id', getAccountByIdController);
router.put('/:id', updateAccountController);
router.delete('/:id', deleteAccountController);

export default router;
