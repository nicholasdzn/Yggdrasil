// services/subscriptionService.js
const SubscriptionDAO = require('../dao/subscriptionDAO');

module.exports = {
  createSubscription: async (userID, planID, startDate, endDate, createdBy, createdDate) => {
    try {
      // Adicione qualquer lógica de negócios necessária aqui, se aplicável.
      return await SubscriptionDAO.createSubscription(userID, planID, startDate, endDate, createdBy, createdDate);
    } catch (error) {
      throw error;
    }
  },

  getSubscriptionByID: async (subscriptionID) => {
    try {
      // Adicione qualquer lógica de negócios necessária aqui, se aplicável.
      return await SubscriptionDAO.getSubscriptionByID(subscriptionID);
    } catch (error) {
      throw error;
    }
  },

  // Outras operações de lógica de negócios relacionadas a Subscriptions
};
