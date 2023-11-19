const ChatDAO = require('../dao/chatsDAO');

module.exports = {
  
  createChat: async (userID, modelID, chatName) => {
    try {
      // Adicione qualquer lógica de negócios necessária aqui, se aplicável.
      return await ChatDAO.createChat(userID, modelID, chatName);
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

  getChatNamesFromUserID: async (userID) => {
    // Adicionar qualquer lógica de negócios se aplicável.
    try {
      return await ChatDAO.getChatNamesFromUserID(userID)
    } catch (error) {
      throw error;
    }
  },

  renameChat: async (chatID, newName) => {
    try{
      return await ChatDAO.renameChat(chatID, newName);
    }catch (error){
      throw error
    }
  },

  deleteChat: async (chatID) => {
    try{
      return await ChatDAO.deleteChat(chatID)
    }catch (error){
      throw error
    }
  }

  // Outras operações de lógica de negócios relacionadas a Chats
};
