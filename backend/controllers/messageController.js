// controllers/messageController.js
const MessageService = require('../services/messageService');

module.exports = {
  createMessage: async (req, res) => {
    try {
      const { chatID, userType, content, sentDate, createdBy, createdDate } = req.body;
      const message = await MessageService.createMessage(chatID, userType, content, sentDate, createdBy, createdDate);
      return res.status(201).json(message);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar mensagem.' });
    }
  },

  getMessageByID: async (req, res) => {
    try {
      const { messageID } = req.params;
      const message = await MessageService.getMessageByID(messageID);
      if (!message) {
        return res.status(404).json({ error: 'Mensagem não encontrada.' });
      }
      return res.status(200).json(message);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar mensagem.' });
    }
  },

  // Outras operações do controlador relacionadas a Messages
};
