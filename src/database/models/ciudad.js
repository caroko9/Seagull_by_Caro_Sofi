/*function ciudadData(sequelize, Datatypes){
   
    let aliasCiudad = 'ciudad'; //nombre de la tabla

    let colsCiudad = {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
        },
        nombre: {
            type: Datatypes.STRING(25),

        },
        pais_id: {
            type: Datatypes.INTEGER,
    
    }
    }

    let configCiudad = {timestamps: false};    
 
    const ciudades = sequelize.define(aliasCiudad, colsCiudad, configCiudad)

    // Definir relación con el modelo Ciudad
    ciudades.associate = function (modelos) {
        ciudades.belongsTo(modelos.paises, {
            as: 'paises',
            foreignKey: 'pais_id'
        });

        ciudades.hasMany(modelos.escuela, {
            as: 'escuelas',
            foreignKey: 'ciudad_id'
        });
    }

    return ciudades;

}

     module.exports = ciudadData;
*/