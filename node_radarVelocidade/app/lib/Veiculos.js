class Veiculo {
    placa;
    velocidade;
    data;

    constructor(placa, velocidade, data) {
        this.placa = placa;
        this.velocidade = velocidade;
        this.data = data;
    }

    getMulta() {
        const limite = 60
        const valor = 80
        const taxa = 4

        if (velocidade > limite) {
            return valor + ((velocidade - limite) * taxa);
        } else {
            return 'Continue dirigindo com segurança';
        }
    }
}

module.exports = Pessoa;