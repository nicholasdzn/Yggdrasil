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
    } catch (error){
      console.log(error.message)
      if (error.message === 'Esse e-mail já foi cadastrado'){
        return res.status(409).json({ message: error.message });
      }else {
        return res.status(500).json({ error: 'Erro ao criar usuário.', erro: error });
      }
    }
  },

  loginUser: async (req, res) => {

    try {

      const { email, password } = req.body;

      console.log("Email Received", email);
      console.log('Password Received', password)
  
      const user = await UserService.authenticateUser(email, password);
  
      const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });

      console.log("Login bem-sucedido");
      
      return res.status(200).json({ token });
    } catch (error) {
      console.log('Erro ao fazer login');
      console.error("Erro ao fazer login:", error);
      return res.status(500).json({ error: "Erro interno do servidor", erro: error });
    }
  }

  // Outras operações do controlador relacionadas a Users
};
