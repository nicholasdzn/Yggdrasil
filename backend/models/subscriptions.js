const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Subscriptions =  sequelize.define('Subscriptions', {
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
    CreatedDate: {
      type: Sequelize.DATE,
    },
    UpdatedDate: {
      type: Sequelize.DATE,
    },
  }, {
    tableName: 'Subscriptions',
    timestamp: false
  });

  Subscriptions.associate = function(models) {

    Subscriptions.belongsTo(models.Users, {
      foreignKey: 'UserID'
    });

    Subscriptions.belongsTo(models.SubscriptionPlans, {
      foreignKey: 'PlanID'
    });

  };
  return Subscriptions
};
