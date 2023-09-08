const { DeletedMessage, Message, User } = require('../models');

module.exports = {
  createDeletedMessage: async (messageID, userID, createdBy, createdDate) => {
    try {
      const deletedMessage = await DeletedMessage.create({
        MessageID: messageID,
        UserID: userID,
        CreatedBy: createdBy,
        CreatedDate: createdDate,
      });
      return deletedMessage;
    } catch (error) {
      throw error;
    }
  },

  getDeletedMessageByID: async (messageID) => {
    try {
      const deletedMessage = await DeletedMessage.findByPk(messageID, {
        include: [Message, User],
      });
      return deletedMessage;
    } catch (error) {
      throw error;
    }
  },

};
