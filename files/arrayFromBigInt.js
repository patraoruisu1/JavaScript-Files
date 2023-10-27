function arrayFromBigInt(bigInt) {
  // Converte o BigInt para uma string
  const numStr = bigInt.toString();

  // Divide a string em um array de caracteres
  const numArray = numStr.split('');

  // Converte cada caractere de volta para um número
  const digitArray = numArray.map(char => parseInt(char, 10));

  return digitArray;
}

// Exemplos de uso:
const result1 = arrayFromBigInt(12345n);
console.log(result1); // Saída: [1, 2, 3, 4, 5]

const result2 = arrayFromBigInt(1n);
console.log(result2); // Saída: [1]

// Implementa a função arrayFromBigInt que recebe um número inteiro de qualquer dimensão (BigInt) e retorna um array com cada dígito (Number) em separado.

//Exemplo:
// arrayFromBigInt(12345n) // [1, 2, 3, 4, 5]
// arrayFromBigInt(1n) // [1]