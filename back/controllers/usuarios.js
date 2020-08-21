const objeto = {};
const Usuarios = require("../models");

objeto.findAll = (req, res) => {
  Usuarios.findAll().then((usuarios) => res.status(200).send(usuarios));
};

objeto.createOne = (req, res) => {
  Usuarios.create(req.body)
    .then((usuarios) => res.sendStatus(201))
    .catch((error) => console.log(error));
};

objeto.editOne = (req, res) => {
  Usuarios.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  })
    .then(() => res.sendStatus(200))
    .catch((error) => console.log(error));
};

objeto.deleteOne = (req, res) => {
  Usuarios.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch((error) => console.log(error));
};

module.exports = objeto;
