function ciudadData(sequelize, Datatypes){
   
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
 
    const schoolCity = sequelize.define(aliasCiudad, colsCiudad, configCiudad)

    // Definir relación con el modelo Ciudad
    ciudad.associate = function (models) {
        ciudad.belongsTo(models.pais, {
            foreignKey: 'pais_id',
            as: 'pais'
        });

        ciudad.hasMany(models.escuela, {
            as: 'escuela',
            foreignKey: 'ciudad_id'
        });
    }

    return schoolCity;

}

     module.exports = ciudadData;
