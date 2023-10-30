import { ServicioHabitacion } from "../services/ServicioHabitacion.js";

export class ControladorHabitacion {
  constructor() {}
  async registrarHabitacion(peticion, respuesta) {
    try {
      let servicioHabitacion = new ServicioHabitacion();
      //1. Esculcar los Datos que Quieren Usar para el Registro
      let datosHabitacionRegistrar = peticion.body;
      //2. Validar los Datos
      //3. Intentar Guardar los Datos
      await servicioHabitacion.registrarHabitacion(datosHabitacionRegistrar);
      //4. Responder al Cliente
      respuesta.status(200).json({
        Mensaje: "Exito en la operacion de Guardado",
        Datos: datosHabitacionRegistrar,
      });
    } catch (error) {
      respuesta.status(400).json({
        Mensaje: "Fallamos en la operacion de Guardado" + error,
      });
    }
  }
  async buscarHabitaciones(peticion, respuesta) {
    try {
      let servicioHabitacion = new ServicioHabitacion();
      //1. Intentar Buscar los Datos en la Base de Datos
      //2. Responder
      respuesta.status(200).json({
        Mensaje: "Exito en la operacion de Busqueda",
        Datos: await servicioHabitacion.buscarHabitaciones(),
      });
    } catch (error) {
      respuesta.status(400).json({
        Mensaje: "Fallamos en la operacion de Guardado" + error,
      });
    }
  }
  async buscarHabitacionPorId(peticion, respuesta) {
    try {
      let servicioHabitacion = new ServicioHabitacion();
      //1. Esculcar los parametros de la peticion
      let idHabitacionBuscar = peticion.params.id;
      //2. Validar el Dato
      //3. Intento buscar el dato en la base de datos
      //4. Responder
      respuesta.status(200).json({
        Mensaje: "Exito en la operacion de Busqueda",
        Datos: await servicioHabitacion.buscarHabitacionPorId(
          idHabitacionBuscar
        ),
      });
    } catch (error) {
      respuesta.status(400).json({
        Mensaje: "Fallamos en la operacion de Busqueda" + error,
      });
    }
  }
  async modificarHabitacion(peticion, respuesta) {
    try {
      let servicioHabitacion = new ServicioHabitacion();
      //1. Traigo el id a editar de la peticion
      let idHabitacionModificar = peticion.params.id;
      let datosHabitacionModificar = peticion.body;
      //2. validar los datos
      //3. intentar buscar y modificar en la base de datos
      await servicioHabitacion.modificarHabitacion(
        idHabitacionModificar,
        datosHabitacionModificar
      );
      //4. responder
      respuesta.status(200).json({
        Mensaje: "Exito en la operacion de Modificacion",
        Datos: datosHabitacionModificar,
      });
    } catch (error) {
      respuesta.status(400).json({
        Mensaje: "Fallamos en la operacion de Modificacion" + error,
      });
    }
  }
  async borrarHabitacion(peticion, respuesta) {
    try {
      let servicioHabitacion = new ServicioHabitacion()
      let idHabitacionBorrar = peticion.params.id;
      //Validar
      //Intento Borrar Habitacion en la base de datos
      //Responder
      await servicioHabitacion.borrarHabitacion(idHabitacionBorrar)
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
