const express = require('express');

const IndexController = require('./controllers/IndexController');
const VelocidadeController = require('./controllers/VelocidadeController');

const http = require('http'); 

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

const indexController = new IndexController();
const VelocidadeController = new VelocidadeController();
app.get('/', (req, res) => {
    indexController.index(req, res);
});

app.get('/radar.html', (req, res) => {
    res.send(req.query);
});
app.post('/multa.html', (req, res) => {
    VelocidadeController.idade(req, res);
});

app.get('*', function naoEncontrado(request, response) {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Não encontrado!\n')
    response.end();
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

