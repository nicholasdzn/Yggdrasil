const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET; // Certifique-se de ter sua chave secreta configurada nas variáveis de ambiente

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Acesso negado. Token não fornecido.' });
  }

  jwt.verify(token, jwtSecret, (error, user) => {
    if (error) {
      return res.status(403).json({ error: 'Token inválido ou expirado.' });
    }

    req.userId = user.userId; // Adiciona o ID do usuário à requisição para uso posterior
    next();
  });
};

module.exports = authenticateToken;
