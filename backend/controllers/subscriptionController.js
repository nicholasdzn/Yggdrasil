const SubscriptionService = require('../services/subscriptionService');

module.exports = {
  createSubscription: async (req, res) => {
    try {
      const { userID, planID, startDate, endDate, createdBy, createdDate } = req.body;
      const subscription = await SubscriptionService.createSubscription(userID, planID, startDate, endDate, createdBy, createdDate);
      return res.status(201).json(subscription);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar assinatura.' });
    }
  },

  getSubscriptionByID: async (req, res) => {
    try {
      const { subscriptionID } = req.params;
      const subscription = await SubscriptionService.getSubscriptionByID(subscriptionID);
      if (!subscription) {
        return res.status(404).json({ error: 'Assinatura não encontrada.' });
      }
      return res.status(200).json(subscription);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar assinatura.' });
    }
  },

  // Outras operações do controlador relacionadas a Subscriptions
};
