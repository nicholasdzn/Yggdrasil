const Sequelize = require('sequelize');
const config = require('../config/config.js').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

const Users = require('../models/users.js')(sequelize, Sequelize)

const bcrypt = require('bcrypt');

module.exports = {

  createUser: async (name, email, password) => {
    try {
      
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await Users.create({
        Name: name,
        Email: email,
        Password_Hash: hashedPassword,
      });
      return {
        id: user.id,
        name: user.name,
        email: user.email,
      };
    } catch (error) {
      throw error;
    }
  },

  getUserByID: async (userID) => {
    try {
      const user = await Users.findByPk(userID);
      return user;
    } catch (error) {
      throw error;
    }
  },

};
