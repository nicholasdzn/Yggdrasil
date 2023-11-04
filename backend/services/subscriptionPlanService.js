const SubscriptionPlanDAO = require('../dao/subscriptionPlansDAO');

module.exports = {
  createSubscriptionPlan: async (name, description, monthlyPrice, createdBy, createdDate, updatedBy, updatedDate) => {
    try {
      // Adicione qualquer lógica de negócios necessária aqui, se aplicável.
      return await SubscriptionPlanDAO.createSubscriptionPlan(name, description, monthlyPrice, createdBy, createdDate, updatedBy, updatedDate);
    } catch (error) {
      throw error;
    }
  },

  getSubscriptionPlanByID: async (planID) => {
    try {
      // Adicione qualquer lógica de negócios necessária aqui, se aplicável.
      return await SubscriptionPlanDAO.getSubscriptionPlanByID(planID);
    } catch (error) {
      throw error;
    }
  },

  // Outras operações de lógica de negócios relacionadas a SubscriptionPlans
};
    