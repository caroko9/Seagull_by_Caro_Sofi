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


    let configEscuelas = {timestamps: false};

    // Definir relación con el modelo Actividad
escuela.belongsTo(actividad, {
    foreignKey: 'actividad_id',
    as: 'actividad'
  });
  
  // Definir relación con el modelo Ciudad
  escuela.belongsTo(ciudad, {
    foreignKey: 'ciudad_id',
    as: 'ciudad'
  });

    const surfschool = sequelize.define(aliasEscuelas ,colsEscuelas, configEscuelas)

    return surfschool;
}

    module.exports = escuelasData;
