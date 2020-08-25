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

app.get('/register', (request, response) => {
	response.render('registration', {
		title: 'Регистрация'
	});
});

app.post('/register', urlencodedParser, (request, response) => {
		if (!request.body){
		redirect('/register');
	} else {
		let login = request.body.login_field;
		let password = request.body.password_field;
		mongoClient.connect(function(err, client){
 
    	if(err){
        	return console.log(err);
    	} else {
    		console.log('connected to db');
    		console.log(login, password);
    		client.close();
    	}
});
	}
});

app.get('/main', (request, response) => {
    response.render('index', {
        title: 'Главная',     
    });
});

app.listen(port, () => {
    console.log(`Application launched at port ${port}`);
});
