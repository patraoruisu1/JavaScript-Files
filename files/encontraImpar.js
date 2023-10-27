function encontraImpar(array) {
  const primeiroImpar = array.find(elemento => elemento % 2 !== 0);
  return primeiroImpar;
}

// Exemplo de uso:
const arrayExemplo = [1, 2, 3, 4];
const primeiroElementoImpar = encontraImpar(arrayExemplo);
console.log(primeiroElementoImpar); // Isso irá imprimir 1

// Cria uma função que recebe um array como argumento e retorna o primeiro elemento ímpar.

// Utiliza o que aprendeste sobre o find para resolver este exercício.

// Exemplo de Output: encontrarImpar ([1, 2, 3, 4]) // 1