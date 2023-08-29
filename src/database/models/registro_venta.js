/*function registro_venta_Data(sequelize, Datatypes) {

    let alias_registro_venta = 'venta'; //nombre de la tabla

    let cols_registro_venta = {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
        },
        fecha_: {
            type: Datatypes.DATE,
            allowNull: false
        },
        metodo_pago: {
            type: Datatypes.ENUM('Debito', 'Credito'),
            allowNull: false
        },
        direccion: {
            type: Datatypes.STRING(50),
            allowNull: false
        },
        email: {
            type: Datatypes.STRING(25),
            allowNull: false
        }

    }

    let config_registro_venta = { timestamps: false };


    const registro_ventas = sequelize.define(alias_registro_venta, cols_registro_venta, config_registro_venta)

    registro_ventas.associate = function (modelos) {
        registro_ventas.hasMany(modelos.ventas, {
            as: 'ventas',
            foreignKey: 'registro_venta_id'
        });
    }
    return registro_ventas;
}

module.exports = registro_venta_Data;
*/