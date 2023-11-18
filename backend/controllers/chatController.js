const ChatService = require('../services/chatService');

module.exports = {
  
  createChat: async (req, res) => {
    try {
      const { userID, modelID, chatName } = req.body;
      const chat = await ChatService.createChat(userID, modelID, chatName);
      console.log('Chat criado com sucesso');
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

  getChatNamesFromUserID: async (req, res) => {
    try {

      const userID = req.body.userID
      console.log('Usuário recebido: ', userID)
      const chatNames = await ChatService.getChatNamesFromUserID(userID);
      if (!chatNames){
        return res.status(404).json({ error: 'Chats não encontrados para o usuário' })
      }
      return res.status(200).json(chatNames)
    }catch (error){
      return res.status(500).json({ error: 'Falha ao buscar chats do usuário'})
    }
  },

  renameChat: async (req, res) => {
    try{
      const chatID = req.body.chatID
      const renamedChat = await ChatService.renameChat(chatID);
      return res.status(200).json(renamedChat)
    } catch (error){
      return res.status(500).json({error: 'Erro ao renomear chat'})
    }
  }

  // Outras operações do controlador relacionadas a Chats
};
