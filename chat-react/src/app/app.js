require('dotenv').config();
const sequelize = require('../config/database');
const UserDao = require('../backend/dao/userDAO');
const { User } = require('../backend/models/user');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão bem-sucedida com o banco de dados.');
    await sequelize.sync({ alter: false });
    console.log('Verificação de modelos concluída. Os modelos correspondem ao banco de dados existente.');
    let user = await UserDao.getUserByID(1);
    console.log('Username:', user.Name)
    console.log('Email: ', user.Email)
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  } finally {
    await sequelize.close();
  }
})();
