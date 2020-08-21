const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const db = require("./config/db");
const app = express();
const Router = require("./routes");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/api", Router);
app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/public/" + "index.html");
});

db.sync({ force: false }).then(() => {
  app.listen(3000, () => {
    console.log("Estoy escuchando en el puerto 3000");
  });
});
