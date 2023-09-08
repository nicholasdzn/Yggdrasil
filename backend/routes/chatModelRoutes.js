// routes/chatModelRoutes.js
const express = require('express');
const router = express.Router();
const ChatModelController = require('../controllers/chatModelController');

// Rota para criar um novo modelo de chat
router.post('/chatModels', ChatModelController.createChatModel);

// Rota para buscar um modelo de chat pelo ID
router.get('/chatModels/:modelID', ChatModelController.getChatModelByID);

// Outras rotas relacionadas a ChatModels

module.exports = router;
