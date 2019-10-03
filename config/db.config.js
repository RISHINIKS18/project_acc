const env = require('../routes/database');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: env.max,
   min: env.pool.min,
   acquire: env.pool.acquire,
  idle: env.pool.idle
 }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.files = require('../models/model')(sequelize, Sequelize);
 
module.exports = db;
