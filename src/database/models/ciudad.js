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

     // Definir relación con el modelo pais
    ciudad.belongsTo(pais, {
        foreignKey: 'pais_id',
        as: 'pais'
      });
 
     const schoolCity = sequelize.define(aliasCiudad , colsCiudad, configCiudad)
 
     return schoolCity;
 
    }

     module.exports = ciudadData;
