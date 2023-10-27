function dataMaisAntiga(datas) {
    if (datas.length === 0) {
        return "O array de datas está vazio.";
    }

    let dataMaisAntiga = new Date(datas[0]);

    for (let i = 1; i < datas.length; i++) {
        const dataAtual = new Date(datas[i]);
        if (dataAtual < dataMaisAntiga) {
            dataMaisAntiga = dataAtual;
        }
    }

    return dataMaisAntiga;
}

// Exemplo de uso:
const datas = ["2022-01-15", "2021-12-20", "2023-03-10", "2021-11-05"];
console.log(dataMaisAntiga(datas)); // Sun Nov 05 2021 00:00:00 GMT+0000 (Coordinated Universal Time)

// Cria uma função que recebe um array de datas como argumento e retorna a data mais antiga.
// Utiliza o que aprendeste sobre Date para resolver este exercício.