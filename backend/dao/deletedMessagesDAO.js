const sequelize = require('../config/database');

const DeletedMessage = require('../models/deletedMessages')(sequelize);
const Message = require('../models/message')(sequelize);
const User = require('../models/user')(sequelize);

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
