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
      allowNull: false
    },
    Content: {
      type: Sequelize.TEXT,
    },
    CreatedDate: {
      type: Sequelize.DATE,
      default: Sequelize.NOW
    },
  }, {
    tableName: 'Messages',
    timestamps: false
  });

  Messages.associate = function(models) {

    Messages.belongsTo(models.Chats, {
      foreignKey: 'ChatID',
    })

  };

  return Messages
};
