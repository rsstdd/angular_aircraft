module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/angular_aircraft'
  },


  test: {
    client: 'pg',
    connection: 'postgres://localhost/bookshelf_test'
  },


  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
