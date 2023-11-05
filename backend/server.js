require('dotenv').config();

const express = require('express');
const dev = process.env.NODE_ENV !== 'production';
const userRoutes = require('./routes/userRoutes'); // Importe suas rotas personalizadas

const Sequelize = require('sequelize');
const config = require('./config/config.js').development;

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

sequelize.sync({ force: true }) // ATENÇÃO: { force: true } irá DROPAR suas tabelas existentes
  .then(() => {
    console.log('Banco de dados e tabelas criados!');
});

const server = express();
server.use('/api', userRoutes);

server.all('*', (req, res) => {
  return handle(req, res);
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${PORT}`);
});

// server.get("/", (req, res) => {
//   res.send("Servidor rodando!");
// });


module.exports = models;