import express from "express";
import { rutas } from "./routes/rutas.js";

export class Api{
    constructor(){
        this.app = express();
        this.procesarPeticiones();
    }
    levantarServidor(){
        //LEVANTANDO EL SERVIDOR
        this.app.listen(3000, function () {
            console.log("Servidor Operando con Exito");
        })
    }
    procesarPeticiones(){
        this.app.use('/',rutas)
        this.app.use(express.json())
    }
    conectarBd(){}
}