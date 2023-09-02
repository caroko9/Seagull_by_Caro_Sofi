function productoData(sequelize, DataTypes) {

  let aliasProducto = 'producto'; // Nombre de la tabla

  let colsProducto = {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
      },
      nombre: {
          type: DataTypes.STRING(25),
          allowNull: false
      },
      descripcion: {
          type: DataTypes.TEXT,
          allowNull: false
      },
      imagen: {
          type: DataTypes.BLOB,
          allowNull: false
      },
      usuario_id: {
          type: DataTypes.INTEGER,
      },
      fecha_creacion: {
          type: DataTypes.DATE,
          allowNull: false
      },
      fecha_eliminacion: {
          type: DataTypes.DATE,
          allowNull: false
      },
      categoria: {
          type: DataTypes.STRING,
          allowNull: false
      }
  }

  let configProducto = {
      timestamps: false,
      tableName: 'producto' // Agrega el nombre de la tabla aquí
  };

  const productos = sequelize.define(aliasProducto, colsProducto, configProducto)

  // Definir relación con el modelo usuario
  productos.associate = function (modelos) {
      productos.belongsTo(modelos.usuario, {
          as: 'usuarios',
          foreignKey: 'usuario_id'
      });
      productos.hasMany(modelos.venta, {
          as: 'ventas',
          foreignKey: 'producto_id'
      });
  }

  return productos;
}

module.exports = productoData;



