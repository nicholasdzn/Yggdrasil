// services/deletedMessageService.js
const DeletedMessageDAO = require('../dao/deletedMessageDAO');

module.exports = {
  createDeletedMessage: async (messageID, userID, createdBy, createdDate) => {
    try {
      // Adicione qualquer lógica de negócios necessária aqui, se aplicável.
      return await DeletedMessageDAO.createDeletedMessage(messageID, userID, createdBy, createdDate);
    } catch (error) {
      throw error;
    }
  },

  getDeletedMessageByID: async (messageID) => {
    try {
      // Adicione qualquer lógica de negócios necessária aqui, se aplicável.
      return await DeletedMessageDAO.getDeletedMessageByID(messageID);
    } catch (error) {
      throw error;
    }
  },

  // Outras operações de lógica de negócios relacionadas a DeletedMessages
};
