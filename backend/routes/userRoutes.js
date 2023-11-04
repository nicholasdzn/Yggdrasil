const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()

// Rota para criar um novo usuário
router.post('/users', jsonParser, UserController.createUser);

// Rota para buscar um usuário pelo ID
router.get('/users/:userID', UserController.getUserByID);

// Outras rotas relacionadas a Users

module.exports = router;
