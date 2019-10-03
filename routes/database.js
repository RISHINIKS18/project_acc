const env = {
    database: 'rushi',
    username: 'root',
    password: '123456789',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
   
  module.exports = env;
  