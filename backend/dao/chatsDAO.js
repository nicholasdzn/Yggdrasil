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
    try {
      const chatNames = await Chats.findAll({
        where: {
          userID,
          IsDeleted: false
        },
        attributes: ['ChatName', 'ChatID'],
      });
  
      return chatNames;
    } catch (error) {
      throw error;
    }
  },

  renameChat: async (chatID, newName) => {
    try{
      const chat = await Chats.findByPk(chatID);

      if (!chat) {
        throw new Error('Chat não encontrado');
      }

      chat.ChatName = newName;
      await chat.save();

      return chat;

    }catch (error){
      throw error
    }
  },

  deleteChat: async (chatID) => {
    console.log(chatID)
    try {
      const rowsUpdated = await Chats.update(
        { IsDeleted: true },
        {
          where: { ChatID: chatID }
        }
      );

      console.log("rows", rowsUpdated);
  
      if (rowsUpdated[0] === 1) {
        console.log(`Chat com ChatID ${chatID} foi marcado como deletado.`);
        return;
      } else {
        console.error(`Chat com ChatID ${chatID} não foi encontrado.`);
        return null;
      }
    } catch (error) {
      throw error;
    }
  }


  // Outras operações de acesso a dados relacionadas a Chats
};
