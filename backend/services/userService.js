const UserDAO = require('../dao/userDAO');

module.exports = {
  createUser: async (name, email, registryDate, createdBy, createdDate, updatedBy, updatedDate) => {
    try {
      // Adicione qualquer lógica de negócios necessária aqui, se aplicável.
      return await UserDAO.createUser(name, email, registryDate, createdBy, createdDate, updatedBy, updatedDate);
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
