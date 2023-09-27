function escuelasData(sequelize, DataTypes) {
  const Escuela = sequelize.define('escuela', {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
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
          type: DataTypes.STRING(50),
          allowNull: false
      },
      email: {
          type: DataTypes.STRING(40),
          allowNull: false
      },
      pagina_web: {
          type: DataTypes.STRING(100),
          allowNull: true
      },
      telefono: {
          type: DataTypes.STRING(15),
          allowNull: true
      },
      ubicacion: {
          type: DataTypes.STRING(40),
          allowNull: true,
      },
      estado: {
        type: DataTypes.ENUM('Aprobada', 'Desaprobada', 'Pendiente'),
          allowNull: true,
      },
      fecha_creacion: {
          type: DataTypes.DATE,
          allowNull: true
      },
      fecha_eliminacion: {
          type: DataTypes.DATE,
          allowNull: true
      },
      actividad_id: {
          type: DataTypes.INTEGER,
          allowNull: true
      },
      pais_id: {
          type: DataTypes.INTEGER,
          allowNull: true
      }
      
  }, {
      tableName: 'escuela', // Especifica el nombre de la tabla existente
      timestamps: false,
  });

  Escuela.associate = function (models) {
      Escuela.belongsTo(models.actividad, {
          as: 'actividades',
          foreignKey: 'actividad_id'
      });

      Escuela.belongsTo(models.ciudad, {
          as: 'ciudades',
          foreignKey: 'ciudad_id'
      });

      Escuela.hasMany(models.gestion_escuela, {
          as: 'gestion_escuelas',
          foreignKey: 'escuela_id'
      });
  }

  return Escuela;
}

module.exports = escuelasData;






