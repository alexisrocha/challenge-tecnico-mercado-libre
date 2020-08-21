const Usuarios = require("./models");

const todosLosUsuarios = [
  {
    nombre: "Alexis",
    apellido: "Rocha",
    numeroDocumento: 39627037,
    legajo: 123,
    email: "alexisleonelrocha@gmail.com",
    domicilio: "San Pedro 5427",
  },
  {
    nombre: "Erik",
    apellido: "Hansen",
    numeroDocumento: 40627037,
    legajo: 1234,
    email: "erikhansen@gmail.com",
    domicilio: "Av. Cordoba 5427",
  },
  {
    nombre: "Nicolas",
    apellido: "Esquivel",
    numeroDocumento: 41627037,
    legajo: 12345,
    email: "nicolasesquivel@gmail.com",
    domicilio: "Av. Santa Fe 5427",
  },
  {
    nombre: "Ariel",
    apellido: "Blas",
    numeroDocumento: 42627037,
    legajo: 123456,
    email: "arielblas@gmail.com",
    domicilio: "Av. Libertador 5427",
  },
  {
    nombre: "Santiago",
    apellido: "Scanlan",
    numeroDocumento: 43627037,
    legajo: 1234567,
    email: "santiagoscanlan@gmail.com",
    domicilio: "Av. Niceto Vega 5427",
  },
  {
    nombre: "Maria",
    apellido: "Albinati",
    numeroDocumento: 44627037,
    legajo: 12345678,
    email: "mariaalbinati@gmail.com",
    domicilio: "Av. Las Heras 5427",
  },
];

Usuarios.bulkCreate(todosLosUsuarios);
