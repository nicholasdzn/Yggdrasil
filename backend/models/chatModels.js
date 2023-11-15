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
      allowNull: true
    },
    Configuration: {
      type: Sequelize.JSON,
      allowNull: true
    },
    MonthlyPrice: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
      default: 30
    },
    CreatedDate: {
      type: Sequelize.DATE,
      default: Sequelize.NOW
    },
    UpdatedDate: {
      type: Sequelize.DATE,
      default: Sequelize.NOW
    },
  }, {
    tableName: 'ChatModels',
    timestamps: false
  });

  ChatModels.associate = function(models){

    ChatModels.hasMany(models.Chats, {
      foreignKey: 'ModelID'
    });
    
  };

  return ChatModels
};
