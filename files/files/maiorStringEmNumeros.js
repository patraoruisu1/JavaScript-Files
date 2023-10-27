function maiorStringEmNumeros(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return "Insira um array com pelo menos um número entre zero e dez";
    }

    const numerosPorExtenso = new Map([
        ["um", 1],
        ["dois", 2],
        ["três", 3],
        ["quatro", 4],
        ["cinco", 5],
        ["seis", 6],
        ["sete", 7],
        ["oito", 8],
        ["nove", 9],
        ["dez", 10]
    ]);

    let comprimentos = array.map(item => item.length);
    let maior = Math.max(...comprimentos);
    let maiorString = "";

    for (let i = 0; i < comprimentos.length; i++) {
        if (comprimentos[i] === maior) {
            maiorString = array[i];
            break; // Terminar o loop assim que a primeira maior string for encontrada
        }
    }

    return numerosPorExtenso.has(maiorString) ? numerosPorExtenso.get(maiorString) : "Nenhum número entre zero e dez encontrado na maior string.";
}

// Exemplo de uso:
const arrayDeStrings = ["um", "dois", "três", "quatro", "cinco"];
console.log(maiorStringEmNumeros(arrayDeStrings)); // Saída: 5
