const bodyParser = require("body-parser");
const express = require("express"); // importando modula EXPRESS
const app = express(); // Passa o express para a var app.
const connection = require("./database/database");
const Pergunta = require('./database/Pergunta'); // Importando MODEL do sequelize para salvar dados no BD
// Database

connection.authenticate().then(() => {
    console.log("Conexão feita com o banco de dados!")
}).catch((msgErro) => {
    console.log(msgErro);
})




app.set('view engine', 'ejs'); // Dizendo para o EXPRESS usar o EJS como RENDERIZADOR HTML 
app.use(express.static('public')); // Carrega arquivos estáticos(CSS, imagens, fronted)

// Comando que permite que o usuário envie os dados via formulario e traduz em formato JS
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); //Comando que permite ler dados em JSON


// Rotas

app.get("/", (req, res) => {
    Pergunta.findAll({raw: true, order:[
        ['id','DESC'] // ASC = CRESCENTE || DESC = DECRESCENTE
    ]}).then(perguntas => { // Pesquisa no BD os dados e salva na variávels "perguntas" e depois exporta para o front end a variável perguntas.
        console.log(perguntas);
        res.render("index",{
            perguntas: perguntas
        });
    }); // findAll é como SELECT * FROM 


    
});


app.get("/perguntar", (req, res) => {
    res.render("perguntar");
})


app.post("/salvarpergunta", (req, res) => { // Rotas POST para receber dados

    var titulo = req.body.titulo; // identifica o form através do NAME e armazena o valor inserido lá na variavel
    var descricao = req.body.descricao; // identifica o textarea através do NAME e armazena o valor inserido lá na variavel
    
    Pergunta.create({ // Create é como um INSERT no banco de dados
        titulo: titulo, // 
        descricao: descricao
    }).then(()=> {
        res.redirect("/");
    })
});


app.get("/pergunta/:id", (req, res) => {
    var id = req.params.id;

    Pergunta.findOne({
        where: {id: id}
    }).then(pergunta => {
        if(pergunta != undefined){ // Pergunta encontrada
            res.render("pergunta");
        }else{ // Não encontrada
            res.redirect("/");
        }
    });

})

app.listen(8080, ()=> {
    console.log("App Rodando!")
});