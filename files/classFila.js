class Fila {
    constructor() {
        this.items = [];
    }

    adicionar(elemento) {
        this.items.push(elemento);
    }

    remover() {
        if (this.estaVazia()) {
            return "Fila vazia!";
        }
        return this.items.shift();
    }

    obterElemento() {
        if (this.estaVazia()) {
            return "Fila vazia!";
        }
        return this.items[0];
    }

    estaVazia() {
        return this.items.length === 0;
    }
}

const fila = new Fila();
fila.adicionar(1);
fila.adicionar(2);
fila.adicionar(3);

console.log(fila.obterElemento()); // 1
console.log(fila.remover()); // 1
console.log(fila.obterElemento()); // 2
console.log(fila.remover()); // 2
console.log(fila.remover()); // 3
console.log(fila.remover()); // Fila vazia!

// Implementa a classe Fila, lembra-te que deve seguir as regras First In, First Out

// A classe deve ter três métodos:

// 1. adicionar, recebe um elemento como argumento e insere-o na Fila.
// 2. remover, remove o elemento da frente da Fila, caso a Fila esteja vazia, retorna "Fila vazia!"
// 3. obterElemento, retorna o elemento que esteja na frente da Fila, caso a Fila esteja vazia, retorna "Fila vazia!"