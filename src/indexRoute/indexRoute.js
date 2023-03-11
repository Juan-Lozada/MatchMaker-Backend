const express = require('express')
const cors = require('cors')
const {
  checkCredentialsExists,
  tokenVerification,
} = require("../middlewares/middlewares");
const indexController = require("../controllers/indexController");
const app = express()

app.post("/registro", checkCredentialsExists, indexController.registroUsuario);

app.post("/login", indexController.iniciarSesion);

app.put(
  "/usuario/:id",
  tokenVerification,
  checkCredentialsExists,
  indexController.editarUsuario
);
app.post("/registro/recinto", indexController.registroRecinto);
app.post("/reserva", indexController.registroReserva)
app.post("/registro/cancha", indexController.registroCancha)
app.get("/recintos/tenant", indexController.getRecintosTenant);
app.get("/recintos/usuario", indexController.getRecintosUser);
app.put("/recinto/:id", indexController.editarRecinto);
app.put("/cancha/:id", indexController.editarCancha)




module.exports = app;
