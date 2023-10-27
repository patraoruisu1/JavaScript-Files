function arrayInfinito(array, esquerda, direita) {
    // Escreve aqui a função

    if (!array || array.length === 0) {
        return 0;
    }
    let result = 0;
    for (let i = esquerda; i <= direita; i++) {
        const idxArr = i % array.length;
        result += array[idxArr];
    }
    return result;
}