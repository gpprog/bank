import Knex, { Knex as KnexType } from 'knex';
import knexConfig from '../../knexfile';
let knex: KnexType | undefined;
const environment = process.env.NODE_ENV || 'development';
const configOptions = knexConfig[environment];

try {
  knex = Knex(configOptions);
  console.log('Succesfully connected to db.');
} catch (err) {
  console.error('Failed to connect to db.');
}
if (!knex) {
  throw new Error('Knex instance could not be created');
}

export default knex as KnexType;
