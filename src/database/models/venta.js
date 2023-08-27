function ventasData(sequelize, Datatypes){
   
    let aliasVenta = 'venta'; //nombre de la tabla
 
     let colsVenta = {
         id: {
             type: Datatypes.INTEGER,
             primaryKey: true,
           },
         monto_unidad: {
             type: DataTypes.FLOAT,
             allowNull: false
           },
           cantidad: {
             type: Datatypes.INTEGER,
             allowNull: false
           },
           registro_venta_id: {
             type: DataTypes.INTEGER(11),
             allowNull: false
           },
 
           producto_id: {
             type: DataTypes.INTEGER(11),
             allowNull: false
           }
     }


    let configVenta = { timestamps: false };


    const sale = sequelize.define(aliasVenta, colsVenta, configVenta)

    // Definir relación con el modelo Actividad
    venta.associate = function (models) {
        venta.belongsTo(models.registro_venta, {
            as: 'registro_venta',
            foreignKey: 'registro_venta_id'
        });

        // Definir relación con el modelo Ciudad
        venta.belongsTo(models.producto, {
            as: 'producto',
            foreignKey: 'producto_id'
        });
    }

    return sale;
}
 
     module.exports = ventasData;