function productoData(sequelize, Datatypes){
   
    let aliasProducto = 'producto'; //nombre de la tabla
 
     let colsProducto = {
         id: {
             type: Datatypes.INTEGER,
             primaryKey: true,
           },
           nombre: {
             type: Datatypes.STRING(25),
             allowNull: false
           },
           descripcion: {
             type: Datatypes.TEXT,
             allowNull: false
           },
           imagen: {
             type: Datatypes.BLOB,
             allowNull: false
           },
           usuario_id: {
             type: Datatypes.INTEGER,
           },
           fecha_creacion: {
             type: Datatypes.DATE,
             allowNull: false
           },
           fecha_eliminacion: {
             type: Datatypes.DATE,
             allowNull: false
           },
           categoria: {
             type: Datatypes.STRING,
             allowNull: false
           }
     }
 
 
     let configProducto = {timestamps: false};
 
     // Definir relación con el modelo Actividad
 producto.belongsTo(usuario, {
     foreignKey: 'usuario_id',
     as: 'usuario'
   });
   
 
     const product = sequelize.define(aliasProducto ,colsProducto , configProducto)
 
     return product;
 }
 
     module.exports = productoData;