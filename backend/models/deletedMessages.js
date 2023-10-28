const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('DeletedMessage', {
    MessageID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    UserID: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    DeleteDate: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
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
    tableName: 'DeletedMessages',
    timestamp: false
  });
};
