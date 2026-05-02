import Aeropuerto from "./models/Aeropuerto.js";
import Avion from "./models/Avion.js";
import Vuelo from "./models/Vuelo.js";
import Usuario from "./models/Usuario.js";
import Reserva from "./models/Reserva.js";
import Pasaje from "./models/Pasaje.js";
import Express from "express";

const app = Express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
