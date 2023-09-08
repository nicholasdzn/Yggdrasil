const express = require('express');
const router = express.Router();
const ChatController = require('../controllers/chatController');

// Rota para criar um novo chat
router.post('/chats', ChatController.createChat);

// Rota para buscar um chat pelo ID
router.get('/chats/:chatID', ChatController.getChatByID);

// Outras rotas relacionadas a Chats

module.exports = router;
