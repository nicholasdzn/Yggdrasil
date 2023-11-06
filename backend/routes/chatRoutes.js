const express = require('express');
const router = express.Router();
const ChatController = require('../controllers/chatController');
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()

// Rota para criar um novo chat
router.post('/chats/create', ChatController.createChat);

// Rota para buscar um chat pelo ID
router.get('/chats/:chatID', ChatController.getChatByID);

router.get('/chats/:userID', ChatController.getChatNamesFromUserID);

// Outras rotas relacionadas a Chats

module.exports = router;
