//Modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config');
const api = require('./api');

app.use(bodyParser.json());
app.use('/api',api);

//Server
app.listen(config.port, ()=> {
    console.log('Servidor Iniciado');
});