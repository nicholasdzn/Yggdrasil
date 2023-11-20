const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const authenticateToken = require('../middlewares/authenticateTokens')

const MessageController = require('../controllers/messageController');

var jsonParser = bodyParser.json()

// Rota para criar uma nova mensagem
router.post('/messages/create', jsonParser, authenticateToken, MessageController.createMessage);

router.post('/messages/chatMessages', jsonParser, authenticateToken, MessageController.getMessagesByChatID)
 
// Outras rotas relacionadas a Messages

module.exports = router;
