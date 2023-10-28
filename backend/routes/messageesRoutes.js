const express = require('express');
const router = express.Router();
const MessageController = require('../controllers/messageController');

// Rota para criar uma nova mensagem
router.post('/messages', MessageController.createMessage);

// Rota para buscar uma mensagem pelo ID
router.get('/messages/:messageID', MessageController.getMessageByID);

// Outras rotas relacionadas a Messages

module.exports = router;
