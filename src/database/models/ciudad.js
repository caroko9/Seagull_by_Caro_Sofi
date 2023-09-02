function ciudadData(sequelize, DataTypes) {
    let aliasCiudad = 'ciudad'; // Nombre de la tabla

    let colsCiudad = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING(25),
        },
        pais_id: {
            type: DataTypes.INTEGER,
        }
    }

    let configCiudad = {
        timestamps: false,
        tableName: 'ciudad' // Especifica el nombre de la tabla existente
    };

    const Ciudad = sequelize.define(aliasCiudad, colsCiudad, configCiudad)

    Ciudad.associate = function (modelos) {
        Ciudad.belongsTo(modelos.pais, {
            as: 'paises',
            foreignKey: 'pais_id'
        });

        Ciudad.hasMany(modelos.escuela, {
            as: 'escuelas',
            foreignKey: 'ciudad_id'
        });
    }

    return Ciudad;
}

module.exports = ciudadData;



