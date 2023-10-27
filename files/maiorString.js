function maiorString(array) {
    if (array.length === 0) {
        return null; // Retorna null se o array estiver vazio
    }

    let maior = array[0]; // Inicializa com o primeiro elemento do array

    for (let i = 1; i < array.length; i++) {
        if (array[i].length > maior.length) {
            maior = array[i]; // Atualiza a maior string se encontrarmos uma maior
        }
    }

    return maior;
}

// Exemplo de uso:
const strings = ["maçã", "banana", "laranja", "uva", "abacaxi"];
const maior = maiorString(strings);
console.log("A maior string é:", maior); // Isso deve imprimir "A maior string é: laranja"


// Cria uma função que recebe um array de strings e retorna a maior string. Caso haja mais do que uma string com o tamanho da maior string deve retornar a primeira string com esse tamanho.