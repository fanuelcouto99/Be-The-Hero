const express = require('express');

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileControler = require('./controllers/ProfileController');

const routes = express.Router();

//---------ROTAS DAS APLICACAO------------

//Rota para Login
routes.post('/sessions', SessionController.create);

//Rota para listagem de todas as ongs
routes.get('/ongs', OngController.index);

// Rota para cadastro de ongs
routes.post('/ongs', OngController.create);

// Rota para lista casos especificos de uma ong
routes.get('/profile', ProfileControler.index);

//Rota para cadastro de casos
routes.post('/incidents', IncidentController.create);

//Rota para listar de casos
routes.get('/incidents', IncidentController.index);

//Rota para deletar um caso
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;