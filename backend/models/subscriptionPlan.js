const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('SubscriptionPlan', {
    PlanID: {
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
    MonthlyPrice: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
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
    tableName: 'SubscriptionPlans',
  });
};