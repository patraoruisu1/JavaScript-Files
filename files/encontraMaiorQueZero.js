function encontraMaiorQueZero(array) {
  const primeiroMaiorQueZero = array.find(elemento => elemento > 0);
  return primeiroMaiorQueZero;
}

// Exemplo de uso:
const arrayExemplo = [1, 2, 3, 4];
const primeiroElementoMaiorQueZero = encontraMaiorQueZero(arrayExemplo);
console.log(primeiroElementoMaiorQueZero); // Isso irá imprimir 1


// Cria uma função que recebe um array como argumento e retorna o primeiro elemento maior que 0.

// Utiliza o que aprendeste sobre o find para resolver este exercício.

// Exemplo de Output: encontrarMaiorQueZero ([1, 2, 3, 4]) // 1 
