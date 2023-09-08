const express = require('express');
const router = express.Router();
const DeletedMessageController = require('../controllers/deletedMessageController');

// Rota para criar uma mensagem excluída
router.post('/deletedMessages', DeletedMessageController.createDeletedMessage);

// Rota para buscar uma mensagem excluída pelo ID
router.get('/deletedMessages/:messageID', DeletedMessageController.getDeletedMessageByID);

// Outras rotas relacionadas a DeletedMessages

module.exports = router;
