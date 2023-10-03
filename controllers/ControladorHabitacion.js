export class ControladorHabitacion{
    constructor(){}
    registrarHabitacion(peticion,respuesta){
        try{
            //1. Esculcar los Datos que Quieren Usar para el Registro
            let datosHabitacionRegistrar=peticion.body
            //2. Validar los Datos
            //3. Intentar Guardar los Datos
            //4. Responder al Cliente
            respuesta.status(200).json({
                "Mensaje":"Exito en la operacion de Guardado",
                "Datos":"Aca van los datos que se guardaron"
            })

        }catch(error){
            respuesta.status(400).json({
                "Mensaje":"Fallamos en la operacion de Guardado" + error
            })
        }
    }
    buscarHabitaciones(peticion,respuesta){
        try{
            //1. Intentar Buscar los Datos en la Base de Datos
            //2. Responder
            respuesta.status(200).json({
                "Mensaje":"Exito en la operacion de Busqueda",
                "Datos":"Aca van los datos que se Buscaron"
            })

        }catch(error){
            respuesta.status(400).json({
                "Mensaje":"Fallamos en la operacion de Guardado" + error
            })
        }
    }
    buscarHabitacionPorId(peticion,respuesta){
        try{
            //1. Esculcar los parametros de la peticion
            let idHabitacionBuscar = peticion.params.id
            //2. Validar el Dato
            //3. Intento buscar el dato en la base de datos
            //4. Responder
            respuesta.status(200).json({
                "Mensaje":"Exito en la operacion de Busqueda",
                "Datos":"Aca van los datos que se Buscaron"
            })

        }catch(error){
            respuesta.status(400).json({
                "Mensaje":"Fallamos en la operacion de Busqueda" + error
            })
        }
    }
    modificarHabitacion(peticion,respuesta){
        try{
            //1. Traigo el id a editar de la peticion
            let idHabitacionModificar = peticion.params.id
            let datosHabitacionModificar = peticion.body
            //2. validar los datos
            //3. intentar buscar y modificar en la base de datos
            //4. responder
            respuesta.status(200).json({
                "Mensaje":"Exito en la operacion de Modificacion",
                "Datos":"Aca van los datos que se Modificaron"
            })

        }catch(error){
            respuesta.status(400).json({
                "Mensaje":"Fallamos en la operacion de Modificacion" + error
            })
        }
    }
    borrarHabitacion(peticion,respuesta){
        try{
            let idHabitacionBorrar = peticion.params.id
            //Validar
            //Intento Borrar Habitacion en la base de datos
            //Responder
            respuesta.status(200).json({
                "Mensaje":"Exito en la operacion de Borrado",
            })

        }catch(error){
            respuesta.status(400).json({
                "Mensaje":"Fallamos en la operacion de Borrado" + error
            })
        }
    }
}