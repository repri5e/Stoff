const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const port = 6060;
const urlencodedParser = bodyParser.urlencoded({extended: false});

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

app.get('/main', (request, response) => {
    response.render('index', {
        title: 'Главная',     
    });
});

app.post('/validate', (request, response) => {
	response.send(' ');
});

app.listen(port, () => {
    console.log(`Application launched at port ${port}`);
});
