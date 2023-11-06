const sequelize = require('../config/database');

const User = require('../models/users')
const Chat = require('../models/chats')
const ChatModel = require('../models/chatModels')(sequelize);

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

  getChatNamesFromUserID: async (userID) => {
    try{

      const chatNames = await Chat.findAll({
        where: { userID },
        attributes: ['ChatName']
      });

      return chatNames;
      
    } catch (error){
      throw error;
    }
  }

  // Outras operações de acesso a dados relacionadas a Chats
};
