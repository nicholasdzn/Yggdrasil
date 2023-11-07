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

      const existingUser = Users.findOne({where: {Email: email}});

      // if (existingUser){
      //   console.log('Usuário já cadastrado')
      //   throw new Error('Esse e-mail já foi cadastrado')
      // }

      const user = await Users.create({
        Name: name,
        Email: email,
        Password_Hash: hashedPassword,
      });

      return {
        id: user.UserID,
        name: user.Name,
        email: user.Email,
      };

    } catch (error) {
      throw error;
    }
  },

  authenticateUser: async (email, password) => {
    
    try {

      const user =  await Users.findOne({where: {Email: email}});

      if (!user){
        throw new Error('E-mail ou senha incorretos')
      }

      const isMatch = await bcrypt.compare(password, user.Password_Hash)

      if (!isMatch){
        throw new Error('E-mail ou senha incorretos')
      }

      return {
        id: user.UserID,
        name: user.Name,
        email: user.Email,
      };
    } catch (error){
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
