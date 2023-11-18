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
      allowNull: false
    },
    ChatName:{
      type: Sequelize.STRING(100),
      default: 'Novo Chat',
      allowNull: false
    },
    CreationDate: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    EndDate: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: null
    },
    LastUpdateDate: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    ModelID: {
      type: Sequelize.INTEGER,
      defaultValue: 1
    },
    IsDeleted: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  }, {
    tableName: 'Chats',
    timestamps: false
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