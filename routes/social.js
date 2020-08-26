const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');

router.get('/', (request, response) => {
	response.redirect('/social/news');
});

router.get('/news', passport.authenticate('jwt', {session: false}), (request, response) => {
	response.render('news', {
		title: 'Новости'
	});
});

router.post('/', (request, response) => {
	
});

module.exports = router;