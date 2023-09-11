const sequelize = require('../config/database');
const User = require('../models/user')(sequelize);

const bcrypt = require('bcrypt')

module.exports = {
  createUser: async (name, email, password) => {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
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
      const user = await User.findByPk(userID);
      return user;
    } catch (error) {
      throw error;
    }
  },

};
