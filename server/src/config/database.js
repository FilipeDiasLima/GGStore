require('dotenv').config()

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.HOST_DATABASE,
    dialect: "postgres"
  },
  test: {
    username: "root",
    password: null,
    database: "test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: "root",
    password: null,
    database: "production",
    host: "127.0.0.1",
    dialect: "postgres"
  }
}