// Index.js arquivo principal do back-end.

//Inportand o Express .js para o projeto
const express = require("express"); //Forma Classica (CommonJS Modules)

const app = express(); //Criando instancia do Express

//Configurando o EJS
app.set("view engine", "ejs"); //Rendeniza as paginas do Site
app.use(express.static("public")); //Puxando pasta publica


//Rota principa
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/perfil", (req, res) => {
  res.render("perfil");
});

app.get("/servicos", (req, res) => {
  res.render("servicos");
});

//Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
  //Tratando erros de inicialização
  if (error) {
    console.log(`Ocorreu um erro ao iniciar o servidor. Erro: ${error}`);
    //Caso haja sucesso
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});