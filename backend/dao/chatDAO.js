const sequelize = require('../config/database');

const User = require('../models/user')
const Chat = require('../models/chat')
const ChatModel = require('../models/chatModel')(sequelize);

module.exports = {

  createChat: async (userID, creationDate, endDate, status, createdBy, createdDate, modelID) => {
    try {
      const chat = await Chat.create({
        UserID: userID,
        CreationDate: creationDate,
        EndDate: endDate,
        Status: status,
        CreatedBy: createdBy,
        CreatedDate: createdDate,
        ModelID: modelID,
      });
      return chat;
    } catch (error) {
      throw error;
    }
  },

  getChatByID: async (chatID) => {
    try {
      const chat = await Chat.findByPk(chatID, {
        include: [User, ChatModel],
      });
      return chat;
    } catch (error) {
      throw error;
    }
  },

  // Outras operações de acesso a dados relacionadas a Chats
};
