class Ventoinha {
    #ligada
    #intensidade
    
    constructor() {
        this.#intensidade = 5; // Inicializada com 5
        this.#ligada = false; // Inicializada com false
    }

    aumentarIntensidade() {
        if (this.#ligada && this.#intensidade < 10) {
            this.#intensidade += 1;
        }
    }

    diminuirIntensidade() {
        if (this.#ligada && this.#intensidade > 1) {
            this.#intensidade -= 1;
        }
    }

    ligarEDesligar() {
        this.#ligada = !this.#ligada; // Alternar entre ligada e desligada
    }

    get estaLigada() { // Renomeada para evitar conflito de nome
        return this.#ligada;
    }

    get intensidade() {
        return this.#intensidade;
    }
}

// Exemplo de uso:
const minhaVentoinha = new Ventoinha();
console.log(minhaVentoinha.estaLigada); // Deve imprimir false
console.log(minhaVentoinha.intensidade); // Deve imprimir 5

minhaVentoinha.ligarEDesligar();
console.log(minhaVentoinha.estaLigada); // Deve imprimir true

minhaVentoinha.aumentarIntensidade();
console.log(minhaVentoinha.intensidade); // Deve imprimir 6

minhaVentoinha.diminuirIntensidade();
console.log(minhaVentoinha.intensidade); // Deve imprimir 5
