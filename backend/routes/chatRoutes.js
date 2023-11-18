const express = require('express');
const router = express.Router();
const ChatController = require('../controllers/chatController');
const bodyParser = require('body-parser');
const authenticateToken = require('../middlewares/authenticateTokens')

var jsonParser = bodyParser.json()

// Rota para criar um novo chat
router.post('/chats/create', jsonParser, authenticateToken, ChatController.createChat);

router.post('/chats/getChatNamesFromUserID', jsonParser, authenticateToken, ChatController.getChatNamesFromUserID);

router.post('/chats/rename', jsonParser, ChatController.renameChat);

// Outras rotas relacionadas a Chats

module.exports = router;
