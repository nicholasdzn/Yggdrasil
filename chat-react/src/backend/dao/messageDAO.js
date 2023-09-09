const sequelize = require('../../config/database');

const Message = require('../models/message')(sequelize);
const Chat = require('../models/chat')(sequelize);

module.exports = {
  createMessage: async (chatID, userType, content, sentDate, createdBy, createdDate) => {
    try {
      const message = await Message.create({
        ChatID: chatID,
        UserType: userType,
        Content: content,
        SentDate: sentDate,
        CreatedBy: createdBy,
        CreatedDate: createdDate,
      });
      return message;
    } catch (error) {
      throw error;
    }
  },

  getMessageByID: async (messageID) => {
    try {
      const message = await Message.findByPk(messageID, {
        include: [Chat],
      });
      return message;
    } catch (error) {
      throw error;
    }
  },

  // Outras operações de acesso a dados relacionadas a Messages
};
