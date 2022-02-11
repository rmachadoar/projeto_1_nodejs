const Sequelize = require('sequelize');//Import sequelize e database connection
const connection = require('./database');


const Pergunta = connection.define('pergunta',{
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }

});

Pergunta.sync({force: false}).then(() =>{}); // Sincroniza as tabelas com o BD. Force:false = não cria tabelas com mesmo nome
