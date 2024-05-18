# Bank Transactions

Bank Transactions is a Node.js application that provides an API for managing bank accounts and transactions. This project uses Express for routing, Knex for database operations with PostgreSQL, and TypeScript for type safety.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Installation

1. Clone the repository

```
git clone https://github.com/yourusername/bank-transactions.git
cd bank-transactions
```

2. Install dependencies

```
npm install
```

## Configuration

Create a .env file in the root of the project and add your database configuration:

DATABASE_HOST=localhost
DATABASE_USER=yourusername
DATABASE_PASSWORD=yourpassword
DATABASE_NAME=bank
DATABASE_PORT=5432


## Running the Application

1. Create the database:

```
    npm run db:create
```
2. Run Database migrations  to set up the necessary tables:

```
npm run db:migrate
```

3. Start the application in development mode:
```
 npm run dev
```
The application should now be running at http://localhost:3000.

## API Endpoints

### Account

* GET /accounts: Retrieve all accounts.
* GET /accounts/:id: Retrieve a single account by ID.
* POST /accounts: Create a new account.
* PUT /accounts/:id: Update an existing account.
* DELETE /accounts/:id: Delete an account by ID.

### Transaction

* GET /transaction/: Retrieve all transactions.
* GET /transaction/:id: Retrieve a single transaction by ID.
* POST /transaction: Create a new transaction.

