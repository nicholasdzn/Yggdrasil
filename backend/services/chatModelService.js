const ChatModelDAO = require('../dao/chatModelDAO');

module.exports = {
  createChatModel: async (name, description, configuration, monthlyPrice, createdBy, createdDate, updatedBy, updatedDate) => {
    try {
      // Adicione qualquer lógica de negócios necessária aqui, se aplicável.
      return await ChatModelDAO.createChatModel(name, description, configuration, monthlyPrice, createdBy, createdDate, updatedBy, updatedDate);
    } catch (error) {
      throw error;
    }
  },

  getChatModelByID: async (modelID) => {
    try {
      // Adicione qualquer lógica de negócios necessária aqui, se aplicável.
      return await ChatModelDAO.getChatModelByID(modelID);
    } catch (error) {
      throw error;
    }
  },

  // Outras operações de lógica de negócios relacionadas a ChatModels
};
