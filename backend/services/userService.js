const UserDAO = require('../dao/usersDAO');

module.exports = {
  createUser: async (name, email, password) => {
    try {
      // Adicione qualquer lógica de negócios necessária aqui, se aplicável.
      return await UserDAO.createUser(name, email, password);
    } catch (error) {
      throw error;
    }
  },

  getUserByID: async (userID) => {
    try {
      // Adicione qualquer lógica de negócios necessária aqui, se aplicável.
      return await UserDAO.getUserByID(userID);
    } catch (error) {
      throw error;
    }
  },

  // Outras operações de lógica de negócios relacionadas a Users
};
