const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const SubscriptionPlans =  sequelize.define('SubscriptionPlans', {
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
  }, {
    tableName: 'SubscriptionPlans',
    timestamp: false
  });

  SubscriptionPlans.associate = function(models) {

    SubscriptionPlans.hasMany(models.Subscriptions, {
      foreignKey: 'PlanID'
    });

  };

  return SubscriptionPlans;
};
