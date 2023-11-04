module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASENAME,
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    define: {
      timestamps: false
    }
  }
};