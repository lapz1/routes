//Modules
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const config = require('./config');
const api = require('./api');

app.use(express.json());
app.use('/api',api);
app.use(express.static('./public'));

mongoose.connect('mongodb://' + config.db.host + ':' + config.db.port + "/" + config.db.name, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

//Server
app.listen(config.server.port, ()=> {
    console.log('Servidor Iniciado');
});