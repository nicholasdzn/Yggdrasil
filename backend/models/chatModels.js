const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const ChatModels =  sequelize.define('ChatModels', {
    ModelID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    Description: {
      type: Sequelize.TEXT,
    },
    Configuration: {
      type: Sequelize.JSON,
    },
    MonthlyPrice: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    CreatedDate: {
      type: Sequelize.DATE,
    },
    UpdatedDate: {
      type: Sequelize.DATE,
    },
  }, {
    tableName: 'ChatModels',
    timestamp: false
  });

  ChatModels.associate = function(models){

    ChatModels.hasMany(models.Chats, {
      foreignKey: 'ModelID'
    });
    
  };

  return ChatModels
};
