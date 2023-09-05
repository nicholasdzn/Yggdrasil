// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Rota para criar um novo usuário
router.post('/users', UserController.createUser);

// Rota para buscar um usuário pelo ID
router.get('/users/:userID', UserController.getUserByID);

// Outras rotas relacionadas a Users

module.exports = router;
