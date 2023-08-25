function registro_venta_Data(sequelize, Datatypes) {

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
            type: DataTypes.ENUM('Debito', 'Credito'),
            allowNull: false
        },
        direccion: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(25),
            allowNull: false
        }

    }


    let config_registro_venta = { timestamps: false };


    const sale_admin = sequelize.define(alias_registro_venta, cols_registro_venta, config_registro_venta)

    return sale_admin;
}

module.exports = registro_venta_Data;