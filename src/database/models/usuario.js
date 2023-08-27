function usuarioData(sequelize, Datatypes){
   
    let aliasUsuario = 'usuario'; //nombre de la tabla
 
     let colsUsuario = {
         id: {
             type: Datatypes.INTEGER,
             primaryKey: true,
           },
           nombre: {
             type: Datatypes.STRING(25),
             allowNull: false
           },
           email: {
             type: DataTypes.STRING(40),
             allowNull: false
           },
 
           clave: {
             type: DataTypes.STRING(40),
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
           categoria: {
             type: Datatypes.STRING,
             allowNull: false
           }
     }
  
     let configUsuario = {timestamps: false};

    
  const user = sequelize.define(aliasUsuario, colsUsuario, configUsuario)

  usuario.associate = function (models) {
    usuario.hasMany(models.gestion_escuela, {
      as: 'gestion_escuela',
      foreignKey: 'gestion_escuela_id'
    });
    usuario.hasMany(models.producto, {
      as: 'producto',
      foreignKey: 'producto_id'
    });

    //un usuario tiene id gestion escuela NO SE SI ESTA BIEN
    usuario.associate = function (models) {
      usuario.hasMany(models.gestion_escuela, {
        as: 'gestion_escuela',
        foreignKey: 'usuario_id'
      });
    }
  }

  return user;
}
 
     module.exports = usuarioData;
 