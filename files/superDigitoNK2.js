function superDigito(n, k) {
    function calcularSuperDigito(numero) {
        if (numero.length === 1) {
            return numero;
        } else {
            const soma = numero.split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
            return calcularSuperDigito(soma.toString());
        }
    }
    const superDigitoN = calcularSuperDigito(n);

    return calcularSuperDigito(superDigitoN.repeat(k));
}
console.log(superDigito('9875', 4)); // Saída: 8
console.log(superDigito('9875', 123123123123123123)); // Saída: 3
console.log(superDigito('9875', 123123123123123123123123123)); // Saída: 1
