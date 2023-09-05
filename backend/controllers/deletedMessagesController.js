// controllers/deletedMessageController.js
const DeletedMessageService = require('../services/deletedMessageService');

module.exports = {
  createDeletedMessage: async (req, res) => {
    try {
      const { messageID, userID, createdBy, createdDate } = req.body;
      const deletedMessage = await DeletedMessageService.createDeletedMessage(messageID, userID, createdBy, createdDate);
      return res.status(201).json(deletedMessage);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar mensagem excluída.' });
    }
  },

  getDeletedMessageByID: async (req, res) => {
    try {
      const { messageID } = req.params;
      const deletedMessage = await DeletedMessageService.getDeletedMessageByID(messageID);
      if (!deletedMessage) {
        return res.status(404).json({ error: 'Mensagem excluída não encontrada.' });
      }
      return res.status(200).json(deletedMessage);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar mensagem excluída.' });
    }
  },

  // Outras operações do controlador relacionadas a DeletedMessages
};
