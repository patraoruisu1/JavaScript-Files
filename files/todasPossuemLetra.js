function todasPossuemLetra(array, letra) {
    // Utiliza o método every para verificar se todas as palavras contêm a letra
    return array.every(function (palavra) {
        // Utiliza o método indexOf para verificar se a letra está na palavra
        return palavra.indexOf(letra) !== -1;
    });
}

// Exemplo de uso
console.log(todasPossuemLetra(["abacate", "amora", "morango", "uva"], "a")); // true
console.log(todasPossuemLetra(["banana", "laranja", "maçã", "pera"], "e")); // false

// Cria uma função que recebe um array de palavras e uma letra como argumentos e verifica se todas as palavras possuem essa letra.

// Utiliza o que aprendeste sobre o every para resolver este exercício.

// Exemplo de Output: todasPossuemLetra(["abacate", "amora", "morango", "uva"], "a") // true
