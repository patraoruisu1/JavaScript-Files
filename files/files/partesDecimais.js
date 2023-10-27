function partesDecimais(array) {
    // escreve aqui a função
    const resultado = [];

    for (let i = 0; i < array.length; i++) {
        const parteDecimal = array[i] - Math.floor(array[i]);
        const arredondado = Math.floor(parteDecimal * 100) / 100;
        resultado.push(arredondado);
    }

    return resultado;
}