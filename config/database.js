// var userComplement = '\\SQLEXPRESS'
var Sequelize = require('sequelize');
module.exports = new Sequelize('CRM', 'sa', 'p@$$w0rd', {
  host: '192.168.49.14',
  dialect: 'mssql',
  options: {
    "enableArithAbort": true
}
});
