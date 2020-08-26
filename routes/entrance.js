const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');


router.get('/', (request, response) => {
	response.redirect('/entrance/enter');
});

router.get('/enter', (request, response) => {
	response.render('enter', {
		title: 'Вход'
	});
});

router.post('/enter', (request, response) => {

});

router.get('/register', (request, response) => {
	response.redirect('main');
	/*
	response.render('registration', {
		title: 'Регистрация'
	});
	*/
});

router.post('/register', (request, response) => {
	let newUser = new User({
		name: request.body.name,
		login: request.body.login,
		password: request.body.password
	});
	User.addUser(newUser, (err, user) => {
		if(err){
			response.json({
				success: false,
				message: 'Didn\'t manage to add user'
			});
		} else {
			response.json({
				success: true,
				message: 'Added a new user'
			});
		}
	});
});

module.exports = router;