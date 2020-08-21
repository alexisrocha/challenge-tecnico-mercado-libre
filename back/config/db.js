const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/mercadolibre", {
  dialect: "postgres",
  logging: false,
});

module.exports = db;
