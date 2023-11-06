const ChatModelService = require('../services/chatModelService');

module.exports = {
  
  createChatModel: async (req, res) => {
    try {
      
      const { name, description, configuration, monthlyPrice, createdBy, createdDate, updatedBy, updatedDate } = req.body;
      
      const chatModel = await ChatModelService.createChatModel(name, description, configuration, monthlyPrice, createdBy, createdDate, updatedBy, updatedDate);
      
      return res.status(201).json(chatModel);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar modelo de chat.' });
    }
  },

  getChatModelByID: async (req, res) => {
    try {

      const { modelID } = req.params;
      
      const chatModel = await ChatModelService.getChatModelByID(modelID);
      
      if (!chatModel) {
        return res.status(404).json({ error: 'Modelo de chat não encontrado.' });
      }
      
      return res.status(200).json(chatModel);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar modelo de chat.' });
    }
  },

  // Outras operações do controlador relacionadas a ChatModels
};
