function gestion_escuela_Data(sequelize, Datatypes){
   
    let alias_gestion_escuela = 'gestion_escuela'; //nombre de la tabla

    let cols_gestion_escuela = {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        estado_actual: {
            type: Datatypes.STRING(25),
            allowNull: false
        },
        estado_nuevo: {
            type: Datatypes.STRING(25),
            allowNull: false
        },
        escuela_id: {
            type: Datatypes.INTEGER(11),
            allowNull: false
        },
        usuario_id: {
            type: Datatypes.INTEGER(11),
            allowNull: false
        }
    }

    let config_gestion_escuela = { timestamps: false };
    
    
    const gestion_escuelas = sequelize.define(alias_gestion_escuela, cols_gestion_escuela, config_gestion_escuela)

    // Definir relación con el modelo Actividad 
  gestion_escuelas.associate = function (modelos) {
        gestion_escuelas.belongsTo(modelos.escuela, {
        as: 'escuelas',
        foreignKey: 'escuela_id'
        });

       // Definir relación con el modelo uua
        gestion_escuelas.belongsTo(modelos.usuario, {
            as: 'usuarios',
            foreignKey: 'usuario_id'
        });
    }

    return gestion_escuelas;
}

module.exports = gestion_escuela_Data;