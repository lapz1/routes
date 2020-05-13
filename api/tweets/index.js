const express = require('express');
const router = express.Router();

router.route('/')
	.get((req, res) => {
		res.send('Lista de tweets');
	})
	.post((req, res) => {
		res.send('Nuevo tweets');
	});

router.route('/:id')
	.get((req, res) => {
		res.send('Página del tweet ' + req.params.id);
	})
	.delete((req, res) => {
		res.send('Eliminar tweet ' + req.params.id);
	})
	.put((req, res) => {
		res.send('Actualizar tweet ' + req.params.id);
	});

module.exports = router;