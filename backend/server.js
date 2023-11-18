require('dotenv').config();

const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const Sequelize = require('sequelize');
const config = require('./config/config.js').development;
const server = express();
const chatRoutes = require('./routes/chatRoutes.js');
const messageRoutes = require('./routes/messagesRoutes.js');

server.use(cors());

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

models = {
  Users: require('./models/users.js')(sequelize, Sequelize),
  SubscriptionPlans: require('./models/subscriptionPlans.js')(sequelize, Sequelize),
  Subscriptions: require('./models/subscriptions.js')(sequelize, Sequelize),
  ChatModels: require('./models/chatModels.js')(sequelize, Sequelize),
  Messages: require('./models/messages.js')(sequelize, Sequelize),
  Chats: require('./models/chats.js')(sequelize, Sequelize)
}

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});


async function insertDefaultModels(models) {
  const defaultModels = [
    {
      Name: 'Modelo Básico',
      MonthlyPrice: 20.00
    },
    {
      Name: 'Modelo Avançado',
      MonthlyPrice: 50.00
    }
  ];

  for (const model of defaultModels) {
    await models['ChatModels'].findOrCreate({
      where: { Name: model.Name },
      defaults: model
    });
  }
}

sequelize.sync({ force: true }) // ATENÇÃO: { force: true } irá DROPAR suas tabelas existentes
  .then(() => {
    console.log('Banco de dados e tabelas criados!');
    insertDefaultModels(models).then(() => {
      console.log('Modelos padrão inseridos.');
    });
});


server.use('/api', userRoutes);
server.use('/api', chatRoutes);
server.use('/api', messageRoutes);

server.all('*', (req, res) => {
  return handle(req, res);
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${PORT}`);
});

module.exports = models;