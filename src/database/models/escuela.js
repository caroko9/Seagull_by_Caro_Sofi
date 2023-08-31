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
             type: Datatypes.STRING(40),
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
 
   const escuelas = sequelize.define(aliasEscuelas, colsEscuelas, configEscuelas)
 
  /* escuelas.associate = function (modelos) {
     escuelas.belongsTo(modelos.actividades, {  // Definir relación con el modelo Ciudad
       as: 'actividades',
       foreignKey: 'actividad_id'
     });
 
     escuelas.belongsTo(modelos.ciudades, {
       as: 'ciudades',
       foreignKey: 'ciudad_id'
     });
     //una escuela tiene id gestion escuela NO SE SI ESTA BIEN
     escuelas.associate = function (models) {
       escuelas.hasMany(modelos.gestion_escuelas, {
       as: 'gestion_escuelas',
       foreignKey: 'escuela_id'
       });
     }
   }*/
 
   return escuelas;
 }
 
     module.exports = escuelasData;