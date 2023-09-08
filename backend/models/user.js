const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('User', {
    UserID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: Sequelize.STRING(255),
    },
    Email: {
      type: Sequelize.STRING(255),
    },
    RegistryDate: {
      type: Sequelize.DATE,
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
    tableName: 'Users',
  });
};
