module.exports = {
  HOST: 'mysqldb',
  USER: process.env.MYSQLDB_USER,
  PASSWORD: process.env.MYSQLDB_PASSWORD,
  DB: process.env.MYSQLDB_DATABASE,
  port: process.env.MYSQLDB_DOCKER_PORT,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
