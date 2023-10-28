const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Message', {
    MessageID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ChatID: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    UserType: {
      type: Sequelize.ENUM('user', 'model'),
    },
    Content: {
      type: Sequelize.TEXT,
    },
    SentDate: {
      type: Sequelize.DATE,
    },
    IsDeleted: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
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
  }, {
    tableName: 'Messages',
    timestamp: false
  });
};
