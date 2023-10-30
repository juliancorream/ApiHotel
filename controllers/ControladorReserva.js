import { ServicioHabitacion } from "../services/ServicioHabitacion.js";
import { ServicioReserva } from "../services/ServicioReserva.js";

export class ControladorReserva {
  constructor() {}
  async registrarReserva(peticion, respuesta) {
    try {
      let servicioReserva = new ServicioReserva();
      //1. Esculcar los Datos que Quieren Usar para el Registro
      let datosReservaRegistrar = peticion.body;
      //2. Validar los Datos
      //3. Intentar Guardar los Datos
      await servicioReserva.registrarReserva(datosReservaRegistrar);
      //4. Responder al Cliente
      respuesta.status(200).json({
        Mensaje: "Exito en la operacion de Guardado",
        Datos: datosReservaRegistrar,
      });
    } catch (error) {
      respuesta.status(400).json({
        Mensaje: "Fallamos en la operacion de Guardado" + error,
      });
    }
  }
  async buscarReservas(peticion, respuesta) {
    try {
      let servicioReserva = new ServicioReserva();
      //1. Intentar Buscar los Datos en la Base de Datos
      //2. Responder
      respuesta.status(200).json({
        Mensaje: "Exito en la operacion de Busqueda",
        Datos: await servicioReserva.buscarReservas(),
      });
    } catch (error) {
      respuesta.status(400).json({
        Mensaje: "Fallamos en la operacion de Guardado" + error,
      });
    }
  }
  async buscarReservaPorId(peticion, respuesta) {
    try {
      let servicioReserva = new ServicioReserva();
      //1. Esculcar los parametros de la peticion
      let idReservaBuscar = peticion.params.id;
      //2. Validar el Dato
      //3. Intento buscar el dato en la base de datos
      //4. Responder
      respuesta.status(200).json({
        Mensaje: "Exito en la operacion de Busqueda",
        Datos: await servicioReserva.buscarReservaPorId(idReservaBuscar),
      });
    } catch (error) {
      respuesta.status(400).json({
        Mensaje: "Fallamos en la operacion de Busqueda" + error,
      });
    }
  }
  async modificarReserva(peticion, respuesta) {
    try {
      //1. Traigo el id a editar de la peticion
      let idReservaModificar = peticion.params.id;
      let datosReservaModificar = peticion.body;
      //2. validar los datos
      //3. intentar buscar y modificar en la base de datos
      await servicioReserva.modificarReserva(
        idReservaModificar,
        datosReservaModificar
      );
      //4. responder
      respuesta.status(200).json({
        Mensaje: "Exito en la operacion de Modificacion",
        Datos: datosReservaModificar,
      });
    } catch (error) {
      respuesta.status(400).json({
        Mensaje: "Fallamos en la operacion de Modificacion" + error,
      });
    }
  }
  async borrarReserva(peticion, respuesta) {
    try {
      let servicioHabitacion= new ServicioHabitacion()
      let idReservaBorrar = peticion.params.id;
      //Validar
      //Intento Borrar Habitacion en la base de datos
      //Responder
      await servicioHabitacion.borrarHabitacion(idReservaBorrar)
      respuesta.status(200).json({
        Mensaje: "Exito en la operacion de Borrado",
      });
    } catch (error) {
      respuesta.status(400).json({
        Mensaje: "Fallamos en la operacion de Borrado" + error,
      });
    }
  }
}
