const Veiculo = require('../lib/Veiculos');
class VelocidadeController {
    multa(request, response) {
        let body = request.body;
        console.log('parsed', body);

        let veiculo = new Veiculo(body.nome, parseInt(body['velocidade']));

        let multa = veiculo.getMulta();

        response.render('multa', {veiculo: veiculo, multa});
    }
}

module.exports = IdadeController;