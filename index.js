const express = require("express"); // importando modula EXPRESS
const app = express(); // Passa o express para a var app.

app.set('view engine', 'ejs'); // Dizendo para o EXPRESS usar o EJS como RENDERIZADOR HTML 
app.use(express.static('public')); // Carrega arquivos estáticos(CSS, imagens, fronted)

app.get("/", (req, res) => {

    res.render("index");
});


app.get("/perguntar", (req, res) => {
    res.render("perguntar");
})

app.listen(8080, ()=> {
    console.log("App Rodando!")
});