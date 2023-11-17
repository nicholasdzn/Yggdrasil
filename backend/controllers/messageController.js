const MessageService = require('../services/messageService');

module.exports = {

  createMessage: async (req, res) => {
    try {
      const { chatID, modelID, content } = req.body;
      const message = await MessageService.createMessage(chatID, modelID, content);
      return res.status(201).json(message);
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error: 'Erro ao criar mensagem.' });
    }
  },

  getMessagesByChatID: async (req, res) => {
    try {
      
      console.log(req.body)
      const { chatID } = req.body;

      const message = await MessageService.getMessagesByChatID(chatID);

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
