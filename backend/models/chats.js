const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  const Chats = sequelize.define('Chats', {

    ChatID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    UserID: {
      type: Sequelize.INTEGER,
    },
    ChatName:{
      type: Sequelize.STRING(100),
      default: 'Novo Chat'
    },
    CreationDate: {
      type: Sequelize.DATE,
    },
    EndDate: {
      type: Sequelize.DATE,
      allowNull: true
    },
    LastUpdateDate: {
      type: Sequelize.DATE,
    },
    ModelID: {
      type: Sequelize.INTEGER,
    },
    IsDeleted: {
      type: Sequelize.BOOLEAN
    }
  }, {
    tableName: 'Chats',
    timestamp: false
  });

  Chats.associate = function(models) {

    Chats.belongsTo(models.Users, {
      foreignKey: 'UserID',
    });

    Chats.belongsTo(models.ChatModels, {
      foreignKey: 'ModelID',
    });
    
    Chats.hasMany(models.Messages,{
      foreignKey: 'ChatID'
    });

  };

  return Chats
};