const UserService = require('../services/userService');

module.exports = {
  createUser: async (req, res) => {
    try {
      const { name, email, registryDate, createdBy, createdDate, updatedBy, updatedDate } = req.body;
      const user = await UserService.createUser(name, email, registryDate, createdBy, createdDate, updatedBy, updatedDate);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar usuário.' });
    }
  },

  getUserByID: async (req, res) => {
    try {
      const { userID } = req.params;
      const user = await UserService.getUserByID(userID);
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar usuário.' });
    }
  },

  // Outras operações do controlador relacionadas a Users
};
