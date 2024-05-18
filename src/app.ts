import express, { Request, Response } from 'express';
import accountRoutes from './routes/accountRoutes';
import transactionRoutes from './routes/transactionRoutes';



const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Bank API!');
});
app.use('/account', accountRoutes);
app.use('/transaction', transactionRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
