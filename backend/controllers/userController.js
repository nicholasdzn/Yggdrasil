const UserService = require('../services/userService');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET

module.exports = {
  
  createUser: async (req, res) => {

    try {
      
      const { name, email, password } = req.body;

      const user = await UserService.createUser(name, email, password);
      
      const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });
      
      console.log("Usuário registrado com sucesso");
      
      return res.status(201).json({ token });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar usuário.', exception: error });
    }
  },

  loginUser: async (req, res) => {

    try {

      const { email, password } = req.body;
  
      const user = await UserService.authenticateUser(email, password);
  
      const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });

      console.log("Login bem-sucedido");
      
      return res.status(200).json({ token });
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  // Outras operações do controlador relacionadas a Users
};
