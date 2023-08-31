//Los modelos/entidades son para comunicarme con la base de datos

//creo una funcion con dos parámetro. Por standard se ponen estos 
function actividadData(sequelize, Datatypes){
   
    //defino 3 variables. La 1era con el nombre de la tabla.
    let aliasActividad = 'actividad'; //nombre de la tabla

    //2da variable configura los campos
    let colsActividad = {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
        },
        nombre: {
            type: Datatypes.STRING(25),

        }

    }

    //3era variable con configuraciones especiales
    let configActividad = {timestamps: false};


 //variable donde pongo de parámetros las 3 variables anteriores. Esta constante la uso para definir las relaciones abajo
     const actividades = sequelize.define(aliasActividad ,colsActividad, configActividad)

     // Definir relación con el modelo Ciudad (en el associate y el .hasMany va el "alias", mientras que en el modelos. va el nombre del modelo)
   actividades.associate = function (modelos) {
        actividades.hasMany(modelos.escuela, { 
            as: 'escuelas',
            foreignKey: 'actividad_id'
             });
            }
 
     return actividades;
 
    }

     module.exports = actividadData;