
const { default: axios } = require('axios');
const Sequelize = require('sequelize');
const config = require('../config/config.js').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

const Messages = require('../models/messages.js')(sequelize, Sequelize)

module.exports = {

  createMessage: async (chatID, modelID, content, userType) => {
    try {
      const message = await Messages.create({
        ChatID: chatID,
        modelID: modelID,
        UserType: userType,
        Content: content,
      });
      return message;
    } catch (error) {
      throw error;
    }
  },

  generateMessage: async (content) => {

    const options = {
      method: 'POST',
      url: 'https://api.cohere.ai/v1/generate',
      headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          authorization: 'Bearer co9mRYxG05RI42Tn8aq3QI7I1W6OpcMxUdMZ9MtF'
      },
      data: {
          truncate: 'END',
          return_likelihoods: 'NONE',
          prompt: content
      }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data.generations[0].text)
        return response.data.generations[0].text;
    } catch (error) {
        console.error(error);
        throw error;
    }
  },

  getMessagesByChatID: async (chatID) => {

    const messages = await Messages.findAll({
      where: {
        ChatID: chatID,
      },
      order: [['CreatedDate', 'ASC']],
    })

    const formattedMessages = messages.map((message) => {
      const userType = message.UserType;
      const content = message.Content;
      return { [userType]: content };
    });

    console.log(formattedMessages);
    
    return formattedMessages;
  }

  // Outras operações de acesso a dados relacionadas a Messages
};
