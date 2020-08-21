#  Assessment técnico - Mercado Libre 

## Descripcion:

### Contexto:
Supongamos que somos el administrador de un sistema. Queremos manejar el
acceso al mismo mediante un panel de ABM (alta, baja, modificación de usuarios).
Este panel debe permitirnos poder agregar usuarios, eliminarlos, o editar alguna de
sus propiedades.
Las propiedades son:
● Nombre
● Apellido
● Número de documento
● Legajo
● Email
● Domicilio
El sistema debe generar un id aleatorio al registrarlos en la base de datos.
El alta, baja o modificación de usuarios se puede realizar, aparte de este formulario
manual, comunicándose directamente con la API, pero se utilizan otros endpoints
(quizás con un prefijo específico, por ejemplo: /applications/users en vez de /users).

### Objetivos
● Crear el frontend. Debe ser una SPA, las rutas de alta, baja y modificación
deben ser distintas. Utilizar React, y la librería de UI preferida (puede ser Ant,
por ejemplo)
● Crear el backend en NodeJS utilizando Express. Utilizar Sequelize para la
comunicación y modelado con la base de datos (pueden utilizar algún motor
in-memory como SQLite, o sino MySQL).

## Este desafio fue construido completamente con: 
* [React](https://es.reactjs.org/)
* [React Hooks](https://es.reactjs.org/docs/hooks-intro.html)
* [React-Redux](https://redux.js.org/basics/usage-with-react)
* [Material-UI](https://material-ui.com/)
* [React-Bootstrap](https://react-bootstrap.github.io/)
* [Node JS](https://nodejs.org/es/)
* [Express](https://expressjs.com/es/) 
* [Sequelize](https://sequelize.org/) 


## Instalacion:
* Clonar el proyecto 
```bash
git clone https://github.com/alexisrocha/meli-metrics
```
* Instalar las dependencias
```bash
npm install
```
* Para correr este proyecto ejecute
```bash
npm run build
```
## Vistas: 
* [Vista Home](https://github.com/alexisrocha/MeliMetrics/blob/dev/screenshots/vista-home.png)
* [Vista agregar usuario](https://github.com/alexisrocha/MeliMetrics/blob/dev/screenshots/vista-home-metricas.png)



