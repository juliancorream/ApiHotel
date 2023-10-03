import express from "express";
import { ControladorHabitacion } from "../controllers/ControladorHabitacion.js";
import { ControladorReserva } from "../controllers/ControladorReserva.js";

//PARA PODER LLAMAR AL CONTROLADOR DEBO CREAR UN OBJETO DE LA CLASE CONTROLADORHABITACION

let controladorHabitacion = new ControladorHabitacion();
let controladorReserva = new ControladorReserva();

export let rutas=express.Router();

//ATENDIENDO UNA PETICION Y RESPONDIENDO

//SERVICIOS DE HABITACIONES
rutas.post("/api/habitaciones",controladorHabitacion.registrarHabitacion);
rutas.get("/api/habitacion/:id",controladorHabitacion.buscarHabitacionPorId);
rutas.get("/api/habitaciones",controladorHabitacion.buscarHabitaciones);
rutas.put("/api/habitaciones/:id",controladorHabitacion.modificarHabitacion);
rutas.delete("/api/habitaciones/:id",controladorHabitacion.borrarHabitacion);

//SERVICIOS DE RESERVAS
rutas.post("/api/reserva",controladorReserva.registrarReserva);
rutas.get("/api/reserva/:id",controladorReserva.buscarReservaPorId);
rutas.get("/api/reservas",controladorReserva.buscarReservas);
rutas.put("/api/reserva/:id",controladorReserva.modificarReserva);
rutas.delete("/api/reserva/:id",controladorReserva.borrarReserva);