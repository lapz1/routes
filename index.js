//Modules
const express = require('express');
const app = express();
const config = require('./config');
const api = require('./api');

app.use(express.json());
app.use('/api',api);

//Server
app.listen(config.port, ()=> {
    console.log('Servidor Iniciado');
});