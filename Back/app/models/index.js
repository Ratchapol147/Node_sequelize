//เชื่อมข้อมูล
const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB, 
  config.USER, 
  config.PASSWORD, 
  {
  dialect: config.dialect,
  host: config.HOST,
  port:"3306",
  operatorAlias:false,
  logging:false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
  
})
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;



module.exports = db;

// The association between Users and Roles is Many-to-Many relationship:
// – One User can have several Roles.
// – One Role can be taken on by many Users.

// We use User.belongsToMany(Role) to indicate that the user model can belong to many Roles and vice versa.

// With through, foreignKey, otherKey, we’re gonna have a new table user_roles as connection between users and roles table via their primary key as foreign keys.

// If you want to know more details about how to make Many-to-Many Association with Sequelize and Node.js, please visit: