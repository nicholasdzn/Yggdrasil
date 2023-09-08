// controllers/subscriptionPlanController.js
const SubscriptionPlanService = require('../services/subscriptionPlanService');

module.exports = {
  createSubscriptionPlan: async (req, res) => {
    try {
      const { name, description, monthlyPrice, createdBy, createdDate, updatedBy, updatedDate } = req.body;
      const subscriptionPlan = await SubscriptionPlanService.createSubscriptionPlan(name, description, monthlyPrice, createdBy, createdDate, updatedBy, updatedDate);
      return res.status(201).json(subscriptionPlan);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar plano de assinatura.' });
    }
  },

  getSubscriptionPlanByID: async (req, res) => {
    try {
      const { planID } = req.params;
      const subscriptionPlan = await SubscriptionPlanService.getSubscriptionPlanByID(planID);
      if (!subscriptionPlan) {
        return res.status(404).json({ error: 'Plano de assinatura não encontrado.' });
      }
      return res.status(200).json(subscriptionPlan);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar plano de assinatura.' });
    }
  },

  // Outras operações do controlador relacionadas a SubscriptionPlans
};
