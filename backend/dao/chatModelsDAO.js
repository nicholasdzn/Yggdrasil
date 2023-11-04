const models = require("../server.js");
const ChatModels = models.ChatModel

module.exports = {
  createChatModel: async (name, description, configuration, monthlyPrice, createdBy, createdDate, updatedBy, updatedDate) => {
    try {
      const chatModel = await ChatModels.create({
        Name: name,
        Description: description,
        Configuration: configuration,
        MonthlyPrice: monthlyPrice,
        CreatedBy: createdBy,
        CreatedDate: createdDate,
        UpdatedBy: updatedBy,
        UpdatedDate: updatedDate,
      });
      return chatModel;
    } catch (error) {
      throw error;
    }
  },

  getChatModelByID: async (modelID) => {
    try {
      const chatModel = await ChatModels.findByPk(modelID);
      return chatModel;
    } catch (error) {
      throw error;
    }
  },

  // Outras operações de acesso a dados relacionadas a ChatModels
};
