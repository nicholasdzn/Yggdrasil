const models = require("../server.js");

const SubscriptionPlans = models.SubscriptionPlans;
const Users = models.Users;
const Subscriptions = models.Subscriptions;

module.exports = {
  createSubscription: async (userID, planID, startDate, endDate, createdBy, createdDate) => {
    try {
      const subscription = await Subscriptions.create({
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
      const subscription = await Subscriptions.findByPk(subscriptionID, {
        include: [Users, SubscriptionPlans],
      });
      return subscription;
    } catch (error) {
      throw error;
    }
  },

  // Outras operações de acesso a dados relacionadas a Subscriptions
};
