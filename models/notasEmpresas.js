const Sequelize = require('sequelize');
const db = require('../config/database');

var Nota = db.define('notas_empresas', {

    id_nota: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    comentario: { type: Sequelize.STRING, allowNull: false },
    fkusuario: { type: Sequelize.STRING, allowNull: false },
    fkempresa: {type: Sequelize.INTEGER, allowNull:false},
    createdAt:{type: Sequelize.DATEONLY,allowNull:false},
    updateAt:{type: Sequelize.DATEONLY,allowNull:true}
}, {
    timestamps: false
});

module.exports = Nota;