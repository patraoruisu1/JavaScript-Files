function fatorialN(n) {
    // escreve aqui a função
    if (n < 0) {
        return "O fatorial não está definido para números negativos.";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        let resultado = 1n;
        while (n > 1) {
            resultado *= BigInt(n);
            n--;
        }
        return resultado;
    }
}
