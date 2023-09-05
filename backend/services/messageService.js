// services/messageService.js
const MessageDAO = require('../dao/messageDAO');

module.exports = {
  createMessage: async (chatID, userType, content, sentDate, createdBy, createdDate) => {
    try {
      // Adicione qualquer lógica de negócios necessária aqui, se aplicável.
      return await MessageDAO.createMessage(chatID, userType, content, sentDate, createdBy, createdDate);
    } catch (error) {
      throw error;
    }
  },

  getMessageByID: async (messageID) => {
    try {
      // Adicione qualquer lógica de negócios necessária aqui, se aplicável.
      return await MessageDAO.getMessageByID(messageID);
    } catch (error) {
      throw error;
    }
  },

  // Outras operações de lógica de negócios relacionadas a Messages
};
