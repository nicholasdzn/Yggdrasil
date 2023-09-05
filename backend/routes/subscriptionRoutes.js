// routes/subscriptionRoutes.js
const express = require('express');
const router = express.Router();
const SubscriptionController = require('../controllers/subscriptionController');

// Rota para criar uma nova assinatura
router.post('/subscriptions', SubscriptionController.createSubscription);

// Rota para buscar uma assinatura pelo ID
router.get('/subscriptions/:subscriptionID', SubscriptionController.getSubscriptionByID);

// Outras rotas relacionadas a Subscriptions

module.exports = router;
