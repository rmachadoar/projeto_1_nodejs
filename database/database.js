// Conexão com banco de dados

const Sequelize = require('sequelize');
const connection = new Sequelize('guiaperguntas','root','123456',{
    host:'localhost',
    dialect: 'mysql'

});

module.exports = connection; // Exportando a conexão para se usar em outros arquivos