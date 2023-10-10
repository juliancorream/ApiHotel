import "dotenv/config";
import { Api } from "./Api.js";

require("dotenv").config();

//Para usar una clase debo crear un objeto
//Para usar una clasese debe crear una instancia
//Todo Objeto es una variable
let servidor = new Api();

//Levantar el Servidor
servidor.levantarServidor();
