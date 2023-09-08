const { Subscription, User, SubscriptionPlan } = require('../models');

module.exports = {
  createSubscription: async (userID, planID, startDate, endDate, createdBy, createdDate) => {
    try {
      const subscription = await Subscription.create({
        UserID: userID,
        PlanID: planID,
        StartDate: startDate,
        EndDate: endDate,
        CreatedBy: createdBy,
        CreatedDate: createdDate,
      });
      return subscription;
    } catch (error) {
      throw error;
    }
  },

  getSubscriptionByID: async (subscriptionID) => {
    try {
      const subscription = await Subscription.findByPk(subscriptionID, {
        include: [User, SubscriptionPlan],
      });
      return subscription;
    } catch (error) {
      throw error;
    }
  },

  // Outras operações de acesso a dados relacionadas a Subscriptions
};
