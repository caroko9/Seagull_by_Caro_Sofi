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
 
    const schoolCountry = sequelize.define(aliasPais, colsPais, configPais)

    pais.associate = function (models) {
        pais.hasMany(models.ciudad, {
            as: 'ciudad',
            foreignKey: 'pais_id'
        });
    }

    return schoolCountry;

}

     module.exports = paisData;