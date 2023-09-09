function actividadData(sequelize, DataTypes) {
    let aliasActividad = 'actividad'; // Nombre de la tabla

    let colsActividad = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING(25),
        }
    }

    let configActividad = {
        timestamps: false,
        tableName: 'actividad' // Especifica el nombre de la tabla existente
    };

    const Actividad = sequelize.define(aliasActividad, colsActividad, configActividad)

    Actividad.associate = function (modelos) {
        Actividad.hasMany(modelos.escuela, {
            as: 'escuelas',
            foreignKey: 'actividad_id'
        });
    }

    return Actividad;
}

module.exports = actividadData;





