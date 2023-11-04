const models = require("../server.js");

const Messages = models.Message
const Chats = models.Chats

module.exports = {
  createMessage: async (chatID, userType, content, sentDate, createdBy, createdDate) => {
    try {
      const message = await Messages.create({
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
      const message = await Messages.findByPk(messageID, {
        include: [Chats],
      });
      return message;
    } catch (error) {
      throw error;
    }
  },

  // Outras operações de acesso a dados relacionadas a Messages
};
