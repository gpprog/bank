import { Router } from 'express';
import {
  createTransactionController,
  getTransactionByIdController,
  getAllTransactionsController,
} from '../controllers/transactionController';

const router = Router();

router.post('/', createTransactionController);
router.get('/:id', getTransactionByIdController);
router.get('/', getAllTransactionsController);

export default router;
