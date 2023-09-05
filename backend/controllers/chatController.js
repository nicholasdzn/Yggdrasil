// controllers/chatController.js
const ChatService = require('../services/chatService');

module.exports = {
  createChat: async (req, res) => {
    try {
      const { userID, creationDate, endDate, status, createdBy, createdDate, modelID } = req.body;
      const chat = await ChatService.createChat(userID, creationDate, endDate, status, createdBy, createdDate, modelID);
      return res.status(201).json(chat);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar chat.' });
    }
  },

  getChatByID: async (req, res) => {
    try {
      const { chatID } = req.params;
      const chat = await ChatService.getChatByID(chatID);
      if (!chat) {
        return res.status(404).json({ error: 'Chat não encontrado.' });
      }
      return res.status(200).json(chat);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar chat.' });
    }
  },

  // Outras operações do controlador relacionadas a Chats
};
