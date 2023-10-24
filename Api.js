import express from "express";
import { establecerConexion } from "./database/conexion.js";
import { rutas } from "./routes/rutas.js";

export class Api {
  constructor() {
    this.app = express();
    this.conectarBd();
    this.procesarPeticiones();
  }
  levantarServidor() {
    //LEVANTANDO EL SERVIDOR
    this.app.listen(3000, function () {
      console.log("Servidor Operando con Exito");
    });
  }
  procesarPeticiones() {
    this.app.use(express.json());
    this.app.use("/", rutas);
  }
  conectarBd() {
    establecerConexion();
  }
}
