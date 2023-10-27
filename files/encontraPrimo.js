// Cria uma função que recebe um array como argumento e retorna o primeiro elemento primo.

// Utiliza o que aprendeste sobre o find para resolver este exercício.

// Exemplo de Output: encontraPrimo([1, 2, 3, 4]) // 2

function isPrimo(num) {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

function encontraPrimo(array) {
    const primeiroPrimo = array.find((element) => isPrimo(element));
    return primeiroPrimo !== undefined ? primeiroPrimo : null;
}

// Exemplo de uso:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const primeiroPrimoEncontrado = encontraPrimo(array);

if (primeiroPrimoEncontrado !== null) {
    console.log(`O primeiro elemento primo no array é: ${primeiroPrimoEncontrado}`);
} else {
    console.log("Nenhum número primo encontrado no array.");
}
