const Sequelize = require("sequelize");
const db = require("../config/db");
class Usuarios extends Sequelize.Model {}

Usuarios.init(
  {
    nombre: {
      type: Sequelize.STRING,
      required: true,
    },
    apellido: {
      type: Sequelize.STRING,
      required: true,
    },
    numeroDocumento: {
      type: Sequelize.INTEGER,
      required: true,
    },
    legajo: {
      type: Sequelize.INTEGER,
      required: true,
    },
    email: {
      type: Sequelize.STRING,
      required: true,
    },
    domicilio: {
      type: Sequelize.STRING,
      required: true,
    },
  },
  { sequelize: db, modelName: "usuarios" }
);

module.exports = Usuarios;
