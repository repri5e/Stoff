const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');

const config = require('./config/db')
const entrance = require('./routes/entrance')
const social = require('./routes/social')

const app = express();
const port = 6060;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + 'public'));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

require('./config/passport')(passport);

mongoose.connect(config.db, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
	console.log('Connected to database');
});

mongoose.connection.on('error', (err) => {
	console.log(`Error occured while connecting to database: ${err}`);
});

app.get('/', (reqiest, response) => {
	response.redirect('/social');
});

app.use('/entrance', entrance);

app.use('/social', social);

app.listen(port, () => {
	console.log(`Application launched at port ${port}`);
});