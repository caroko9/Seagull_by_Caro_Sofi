function usuarioData(sequelize, Datatypes) {

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
            type: Datatypes.STRING(40),
            allowNull: false
        },

        clave: {
            type: Datatypes.STRING(40),
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

    let configUsuario = { timestamps: false };


    const usuarios = sequelize.define(aliasUsuario, colsUsuario, configUsuario)

    /* usuarios.associate = function (modelos) {
       usuarios.hasMany(modelos.gestion_escuelas, {
         as: 'gestion_escuelas',
         foreignKey: 'gestion_escuela_id'
       });
       usuarios.hasMany(modelos.productos, {
         as: 'productos',
         foreignKey: 'producto_id'
       });
   
       //un usuario tiene id gestion escuela NO SE SI ESTA BIEN
       usuarios.associate = function (modelos) {
         usuarios.hasMany(modelos.gestion_escuelas, {
           as: 'gestion_escuelas',
           foreignKey: 'usuario_id'
         });
       }
     }*/

    return usuarios;
}

module.exports = usuarioData;