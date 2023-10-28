const express = require('express');
const router = express.Router();
const SubscriptionPlanController = require('../controllers/subscriptionPlanController');

// Rota para criar um novo plano de assinatura
router.post('/subscriptionPlans', SubscriptionPlanController.createSubscriptionPlan);

// Rota para buscar um plano de assinatura pelo ID
router.get('/subscriptionPlans/:planID', SubscriptionPlanController.getSubscriptionPlanByID);

// Outras rotas relacionadas a SubscriptionPlans

module.exports = router;