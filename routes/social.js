const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');

router.get('/', (request, response) => {
	response.render('index', {
		title: 'Главная'
	});
});

router.post('/', (request, response) => {
	
});

module.exports = router;