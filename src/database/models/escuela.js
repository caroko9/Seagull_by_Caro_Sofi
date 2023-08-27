function escuelasData(sequelize, Datatypes){
   
   let aliasEscuelas = 'escuela'; //nombre de la tabla

    let colsEscuelas = {
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
          email: {
            type: DataTypes.STRING(40),
            allowNull: false
          },
          telefono: {
            type: Datatypes.STRING(15),
            allowNull: true
          },
          ubicacion: {
            type: Datatypes.STRING(20),
            allowNull: false
          },
          precio_actividad: {
            type: Datatypes.FLOAT,
            allowNull: false
          },
          estado: {
            type: Datatypes.STRING(20),
            allowNull: false
          },
          fecha_creacion: {
            type: Datatypes.DATE,
            allowNull: false
          },
          fecha_eliminacion: {
            type: Datatypes.DATE,
            allowNull: false
          },
          actividad_id: {
            type: Datatypes.INTEGER,
            allowNull: false
          },
          ciudad_id: {
            type: Datatypes.INTEGER,
            allowNull: false
          }
    }

  let configEscuelas = { timestamps: false };

  const surfSchool = sequelize.define(aliasEscuelas, colsEscuelas, configEscuelas)

  escuela.associate = function (models) {
    escuela.belongsTo(models.actividad, {  // Definir relación con el modelo Ciudad
      as: 'actividad',
      foreignKey: 'actividad_id'
    });

    escuela.belongsTo(models.ciudad, {
      as: 'ciudad',
      foreignKey: 'ciudad_id'
    });
    //una escuela tiene id gestion escuela NO SE SI ESTA BIEN
    escuela.associate = function (models) {
      escuela.hasMany(models.gestion_escuela, {
      as: 'gestion_escuela',
      foreignKey: 'escuela_id'
      });
    }
  }

  return surfSchool;
}

    module.exports = escuelasData;
