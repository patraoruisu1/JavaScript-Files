function combineArrays(array1, array2) {
  const combineArray = [];

  // Determinar o tamanho do array resultante com base no array mais curto
  const length = Math.min(array1.length, array2.length);

  // Combinar os elementos alternadamente
  for (let i = 0; i < length; i++) {
    combineArray.push(array1[i]);
    combineArray.push(array2[i]);
  }

  // Adicionar os elementos restantes, se houver, de ambos os arrays
  combineArray.push(...array1.slice(length));
  combineArray.push(...array2.slice(length));

  return combineArray;
}

// Exemplo de uso:
const resultado = combineArrays(['a', 'b', 'c'], [1, 2, 3]);
console.log(resultado); // Resultado: ['a', 1, 'b', 2, 'c', 3]


/// GAME CODE 12/09/2023
