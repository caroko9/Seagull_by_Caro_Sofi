function gestion_escuela_Data(sequelize, Datatypes){
   
    let alias_gestion_escuela = 'gestion_escuela'; //nombre de la tabla

    let cols_gestion_escuela = {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
        },
        estado_actual: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        estado_nuevo: {
            type: Datatypes.STRING(40),
            allowNull: false
        },
        escuela_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        usuario_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        }
    }


    let config_gestion_escuela = { timestamps: false };

    // Definir relación con el modelo Actividad
    gestion_escuela.belongsTo(escuela, {
        foreignKey: 'escuela_id',
        as: 'escuela'
    });

    // Definir relación con el modelo Ciudad
    gestion_escuela.belongsTo(usuario, {
        foreignKey: 'usuario_id',
        as: 'usuario'
    });


    const school_admin = sequelize.define(alias_gestion_escuela, cols_gestion_escuela, config_gestion_escuela)

    return school_admin;
}

module.exports = gestion_escuela_Data;
