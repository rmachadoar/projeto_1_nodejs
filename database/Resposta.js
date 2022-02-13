const Sequelize = require("sequelize");
const connection = require("./database");

const Resposta = connection.define("resposta",{
    corpo: {// Text resposta
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: { // Atributo para saber a que PERGUNTA pertence a RESPOSTA
        type: Sequelize.INTEGER,
        allowNull: false
    }
});



Resposta.sync({force: false});

module.exports = Resposta;