const Sequelize = require('sequelize');
const config = require('../config/config.js').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

const Users = require('../models/users.js')(sequelize, Sequelize)
const Chats = require('../models/chats.js')(sequelize, Sequelize)
const ChatModels = require('../models/chatModels.js')(sequelize, Sequelize)

module.exports = {

  createChat: async (userID, modelID, chatName) => {
    try {
      const chat = await Chats.create({
        UserID: userID,
        ChatName: chatName,
        ModelID: modelID,
      });
      return chat;
    } catch (error) {
      throw error;
    }
  },

  getChatByID: async (chatID) => {
    try {
      const chat = await Chats.findByPk(chatID, {
        include: [Users, ChatModels],
      });
      return chat;
    } catch (error) {
      throw error;
    }
  },

  getChatNamesFromUserID: async (userID) => {
    try{

      const chatNames = await Chats.findAll({
        where: { userID },
        attributes: ['ChatName', 'ChatID']
      });

      return chatNames;
      
    } catch (error){
      throw error;
    }
  }

  // getChatContentFromChatID : async (chatID) => {

  //   try{
  //     const chatMessages = null
  //   } catch (error){
  //     throw error;
  //   }
  // }

  // Outras operações de acesso a dados relacionadas a Chats
};
