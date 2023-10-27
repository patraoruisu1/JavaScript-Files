function superDigito(n, k) {
    if (n.length === 1) {
        return n;
    }
    else {
        const digits = n.split('').map(Number);

        const sum = digits.reduce((a, b) => a + b);

        return superDigito(sum.toString(), k);
    }
}

console.log(superDigito('9875', 4)); // 8
console.log(superDigito('9875', 123123123123123123)); // 3
console.log(superDigito('9875', 123123123123123123123123123)); // 1



 // Implementa a função superDigito que recebe uma string n e um número k e calcula o super digito de x que é n repetido k vezes.

 // Se o número x só tiver um digito, o seu super digito é o próprio, caso contrário, o super digito é o super digito da soma dos digitos.