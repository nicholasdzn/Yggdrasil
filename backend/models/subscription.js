const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Subscription', {
    SubscriptionID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    UserID: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    PlanID: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    StartDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    EndDate: {
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
    tableName: 'Subscriptions',
  });
};
