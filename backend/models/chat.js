const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Chat', {
    ChatID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    UserID: {
      type: Sequelize.INTEGER,
    },
    CreationDate: {
      type: Sequelize.DATE,
    },
    EndDate: {
      type: Sequelize.DATE,
    },
    Status: {
      type: Sequelize.ENUM('active', 'finished', 'archived'),
    },
    CreatedBy: {
      type: Sequelize.INTEGER,
    },
    CreatedDate: {
      type: Sequelize.DATE,
    },
    UpdatedBy: {
      type: Sequelize.INTEGER,
    },
    UpdatedDate: {
      type: Sequelize.DATE,
    },
    ModelID: {
      type: Sequelize.INTEGER,
    },
  }, {
    tableName: 'Chats',
    timestamp: false
  });
};
