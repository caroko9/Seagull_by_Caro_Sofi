function paisData(sequelize, Datatypes){
   
    let aliasPais = 'pais'; //nombre de la tabla

    let colsPais = {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
        },
        nombre: {
            type: Datatypes.STRING(25),

        }

    }

    let configPais = {timestamps: false};
 
    const paises = sequelize.define(aliasPais, colsPais, configPais)

   paises.associate = function (modelos) {
        paises.hasMany(modelos.ciudad, {
            as: 'ciudad',
            foreignKey: 'pais_id'
        });
    }
   

    return paises;

}

     module.exports = paisData;
     