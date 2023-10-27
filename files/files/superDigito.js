function superDigito(n) {
    // Se o número n só tiver um digito, o seu super digito é o próprio
    if (n.length === 1) {
        return n;
    }
    // Caso contrário, o super digito é o super digito da soma dos digitos
    else {
        // Converte a string n em um array de números
        const digits = n.split('').map(Number);
        // Soma os digitos do array
        const sum = digits.reduce((a, b) => a + b);
        // Chama a função superDigito recursivamente com a soma dos digitos
        return superDigito(sum.toString());
    }
}
console.log(superDigito('9875') ) // 2
console.log(superDigito('12')) // 3
console.log(superDigito('1')) // 1

// Implementa a função superDigito que recebe uma string n e calcula o super digito de n.
// Se o número n só tiver um digito, o seu super digito é o próprio, caso contrário, o super digito é o super digito da soma dos digitos
// superDigito('9875') // 8
// superDigito('12') // 3
// superDigito('1') // 1