const express = require('express');
const router = express.Router();
const dateUtilities = require('./../../utilities/date');

const tweets = require('./../../services/tweets');

router.route('/')
	.get((req, res) => {
		res.send(tweets.loadTweets());
	})
	.post((req, res) => {
		const tweet = {
			id: tweets.tweetsArray.length,
			content: req.body.content,
			date: dateUtilities.getDate(),
			user: req.body.user	
		};
		
		tweets.newTweet(tweet);
		res.send('El tweet ha sido creado');
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