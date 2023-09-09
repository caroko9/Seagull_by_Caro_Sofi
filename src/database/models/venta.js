function ventasData(sequelize, Datatypes){
   
    let aliasVenta = 'venta'; //nombre de la tabla
 
     let colsVenta = {
         id: {
             type: Datatypes.INTEGER,
             primaryKey: true,
           },
         monto_unidad: {
             type: Datatypes.FLOAT,
             allowNull: false
           },
           cantidad: {
             type: Datatypes.INTEGER,
             allowNull: false
           },
           registro_venta_id: {
             type: Datatypes.INTEGER(11),
             allowNull: false
           },
 
           producto_id: {
             type: Datatypes.INTEGER(11),
             allowNull: false
           }
     }


    let configVenta = { timestamps: false };


  const ventas = sequelize.define(aliasVenta, colsVenta, configVenta)

  // Definir relación con el modelo Actividad
  ventas.associate = function (modelos) {/*
    ventas.belongsTo(modelos.registro_venta, {
      as: 'registro_ventas',
      foreignKey: 'registro_venta_id'
    });*/

    // Definir relación con el modelo producto
    ventas.belongsTo(modelos.producto, {
      as: 'productos',
      foreignKey: 'producto_id'
    });
  }

  return ventas;
}


module.exports = ventasData;