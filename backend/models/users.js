const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  const Users =  sequelize.define('Users', {
    UserID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    Email: {
      type: Sequelize.STRING(255),
      allowNull: false,
      unique: true,
    },
    Password_Hash: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    Created_At: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false
    },
    Last_Login: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: true
    }
  }, {
    tableName: 'Users',
    timestamps: false
  });

  Users.associate = function(models){
    
    Users.hasMany(models.Chats, {
      foreignKey: 'UserID'
    })

    Users.hasMany(models.Subscriptions, {
      foreignKey: 'UserID'
    })

  };

  return Users

};