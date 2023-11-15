
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

const isTokenValid = (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) {
      return res.status(401).json({ error: 'Acesso negado. Token não fornecido.' });
    }
  
    jwt.verify(token, jwtSecret, (error, user) => {
      if (error) {
        return res.status(403).json({ error: 'Token inválido ou expirado.', token: token, valid: false });
      }
      return res.status(200).json({token: token, valid: true})
    });
};

module.exports = isTokenValid;