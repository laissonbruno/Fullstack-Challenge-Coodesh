// Importa o módulo 'express', que é um framework para criação de aplicativos web.
const express = require('express');
// Instanciação do Express
const app = express();
// Definição da porta na qual o servidor vai rodar
const port = 3000;

// Importa o controlador 'dataController' que contém a função 'filterData'
const dataController = require('./controllers/dataController');

// Configura uma rota que responde a requisições GET para '/planos' usando a função 'filterData' do controlador 'dataController'
app.get('/planos', dataController.filterData);

// Inicia o servidor Express e faz com que ele escute na porta especificada
app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});

