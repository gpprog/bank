import { Router } from 'express';
import {
  createTransactionController,
  getTransactionByIdController,
  getAllTransactionsController,
} from '../controllers/transaction';

const router = Router();

router.post('/', createTransactionController);
router.get('/transactions/:id', getTransactionByIdController);
router.get('/all', getAllTransactionsController);

export default router;
