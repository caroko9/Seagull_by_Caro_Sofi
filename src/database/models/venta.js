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
 
 
     let configVenta = {timestamps: false};
 
  // Definir relación con el modelo Actividad
 venta.belongsTo(registro_venta, {
     foreignKey: 'registro_venta_id',
     as: 'registro_venta'
   });
   
   // Definir relación con el modelo Ciudad
 venta.belongsTo(producto, {
     foreignKey: 'producto_id',
     as: 'producto'
   });
   
 
     const sale = sequelize.define(aliasVenta , colsVenta, configVenta)
 
     return sale;
 }
 
     module.exports = ventasData;