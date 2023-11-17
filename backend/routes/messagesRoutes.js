const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const isTokenValid = require('../middlewares/isTokenValid')

const MessageController = require('../controllers/messageController');

var jsonParser = bodyParser.json()

// Rota para criar uma nova mensagem
router.post('/messages/create', jsonParser, MessageController.createMessage);

router.post('/messages/chatMessages', jsonParser, MessageController.getMessagesByChatID)
 
// Outras rotas relacionadas a Messages

module.exports = router;
