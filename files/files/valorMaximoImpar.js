function valorMaximoImpar(array) {
  return array.reduce((maxImpar, currentNumber) => {
    if (currentNumber % 2 !== 0 && currentNumber > maxImpar) {
      return currentNumber;
    } else {
      return maxImpar;
    }
  }, -Infinity);
}

// Exemplo de uso:
const array = [1, 2, 3, 4];
const resultado = valorMaximoImpar(array);
console.log(resultado); // Deve imprimir 3


// Cria uma função que recebe um array como argumento e encontra o valor máximo ímpar.

// Utiliza o que aprendeste sobre o reduce para resolver este exercício.

// Exemplo de Output: valorMaximoImpar([1, 2, 3, 4]) // 3