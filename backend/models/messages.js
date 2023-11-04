const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  const Messages =  sequelize.define('Messages', {
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
    CreatedDate: {
      type: Sequelize.DATE,
    },
  }, {
    tableName: 'Messages',
    timestamp: false
  });

  Messages.associate = function(models) {

    Messages.belongsTo(models.Chats, {
      foreignKey: 'ChatID',
    })

  };

  return Messages
};
