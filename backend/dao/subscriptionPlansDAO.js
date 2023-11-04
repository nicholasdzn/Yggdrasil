// const sequelize = require('../config/database');
// const SubscriptionPlan = require('../models/subscriptionPlan')(sequelize);
const models = require("../server.js");
const SubscriptionPlans = models.SubscriptionPlan

module.exports = {
  createSubscriptionPlan: async (name, description, monthlyPrice, createdBy, createdDate) => {
    try {
      const subscriptionPlan = await SubscriptionPlans.create({
        Name: name,
        Description: description,
        MonthlyPrice: monthlyPrice,
        CreatedBy: createdBy,
        CreatedDate: createdDate,
      });
      return subscriptionPlan;
    } catch (error) {
      throw error;
    }
  },

  getSubscriptionPlanByID: async (planID) => {
    try {
      const subscriptionPlan = await SubscriptionPlans.findByPk(planID);
      return subscriptionPlan;
    } catch (error) {
      throw error;
    }
  },

  // Outras operações de acesso a dados relacionadas a SubscriptionPlans
};
