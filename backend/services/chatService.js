// services/chatService.js
const ChatDAO = require('../dao/chatDAO');

module.exports = {
  createChat: async (userID, creationDate, endDate, status, createdBy, createdDate, modelID) => {
    try {
      // Adicione qualquer lógica de negócios necessária aqui, se aplicável.
      return await ChatDAO.createChat(userID, creationDate, endDate, status, createdBy, createdDate, modelID);
    } catch (error) {
      throw error;
    }
  },

  getChatByID: async (chatID) => {
    try {
      // Adicione qualquer lógica de negócios necessária aqui, se aplicável.
      return await ChatDAO.getChatByID(chatID);
    } catch (error) {
      throw error;
    }
  },

  // Outras operações de lógica de negócios relacionadas a Chats
};
