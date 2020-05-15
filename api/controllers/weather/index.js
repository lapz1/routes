const express = require('express');
const router = express.Router();

const weather = require('./../../services/weather');

router.route('/:city')
	.get((req, res) => {
		const city = req.params.city;
		res.send(weather.getWeather(city));
	});

module.exports = router;