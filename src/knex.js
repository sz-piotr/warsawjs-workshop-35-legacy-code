import path from 'path';
import Knex from 'knex';
export var knex = Knex({
  client: 'sqlite3',
  connection: {
    filename: path.join(__dirname, '../database/db.sqlite')
  },
  migrations: {
    directory: path.join(__dirname, '../database/migrations')
  },
  useNullAsDefault: true,
});
