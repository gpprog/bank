import express from 'express';
import accountRoutes from './routes/accountRoutes';
import transactionRoutes from './routes/transactionRoutes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the Bank API!');
});

app.use('/account', accountRoutes);
app.use('/transaction', transactionRoutes);

export default app;
