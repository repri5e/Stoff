const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 6060;
const urlencodedParser = bodyParser.urlencoded({extended: false});
const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
	response.render('enter', {
		title: 'Вход'
	});
});

app.post('/', urlencodedParser, (request, response) => {

});

app.get('/register', (request, response) => {
	response.render('registration', {
		title: 'Регистрация'
	});
});

app.post('/register', urlencodedParser, (request, response) => {

});

app.get('/main', (request, response) => {
	
});

app.post('/main', urlencodedParser, (request, response) => {
	
});

app.listen(port, () => {
    console.log(`Application launched at port ${port}`);
});