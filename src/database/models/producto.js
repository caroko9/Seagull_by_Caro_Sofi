/*function productoData(sequelize, Datatypes){
   
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

 
  const productos = sequelize.define(aliasProducto, colsProducto, configProducto)

  // Definir relación con el modelo Actividad
  productos.associate = function (modelos) {
    productos.belongsTo(modelos.usuarios, {
      as: 'usuarios',
      foreignKey: 'usuario_id'
    });
    productos.hasMany(modelos.ventas, {
      as: 'ventas',
      foreignKey: 'producto_id'
  });
  }

  return productos;
}
 
     module.exports = productoData;
     */