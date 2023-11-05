const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()

// Rota para criar um novo usuário
router.post('/users/create', jsonParser, UserController.createUser);

// Rota para logar um usuário
router.post('/users/login', jsonParser, UserController.loginUser);

// Rota para buscar um usuário pelo ID
router.get('/users/:userID', UserController.getUserByID);

// Outras rotas relacionadas a Users

module.exports = router;
