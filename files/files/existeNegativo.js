function existeNegativo(array) {
  return array.some((element) => element < 0);
}

// Exemplo de uso:
const array = [1, 2, 3, 4];
const resultado = existeNegativo(array);
console.log(resultado); // Deve imprimir false


// Cria uma função que recebe um array como argumento e verifica se possui algum elemento negativo.

// Utiliza o que aprendeste sobre o some para resolver este exercício.

// Exemplo de Output: existeNegativo([1, 2, 3, 4]) // false