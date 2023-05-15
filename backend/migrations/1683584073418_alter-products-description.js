/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  // set database connection parameters
  const connectionString = 'postgres://me:password@localhost:5000/api';
  const { host, port, database, user, password } = new URL(connectionString);
  pgm.db.connectionParameters = {
    host,
    port,
    database,
    user,
    password,
  };

  // modify table column
  pgm.alterColumn('products', 'description', {
    type: 'varchar(500)',
    notNull: true,
  });
};

exports.down = pgm => {
  // set database connection parameters
  const connectionString = 'postgres://me:password@localhost:5000/api';
  const { host, port, database, user, password } = new URL(connectionString);
  pgm.db.connectionParameters = {
    host,
    port,
    database,
    user,
    password,
  };

  // modify table column
  pgm.alterColumn('products', 'description', {
    type: 'varchar(300)',
    notNull: true,
  });
};