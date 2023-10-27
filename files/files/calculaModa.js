function calculaModa(array) {
    let moda = new Map([]);
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        array.forEach(value => moda.has(value) ? moda.set(value, moda.get(value) + 1) : moda.set(value, 1));
        moda.set(array[i], contador)
        contador = 0;
    }
    let valorMaisVisto = Math.max(...moda.values())
    let chave = 0;
    moda.forEach((value, key) => value === valorMaisVisto ? chave = key : null)
    return chave
}