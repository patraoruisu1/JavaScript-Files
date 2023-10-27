function validaSubsequente(array, subarray) {
  // Inicializa índices para o array e subarray
  let arrayIndex = 0;
  let subarrayIndex = 0;

  // Percorre o array e subarray enquanto houver elementos para verificar
  while (arrayIndex < array.length && subarrayIndex < subarray.length) {
    // Se o elemento atual do array for igual ao elemento atual do subarray
    if (array[arrayIndex] === subarray[subarrayIndex]) {
      subarrayIndex++; // Move para o próximo elemento do subarray
    }
    arrayIndex++; // Sempre move para o próximo elemento do array
  }

  // Se todos os elementos do subarray foram verificados, é subsequente
  return subarrayIndex === subarray.length;
}

// Exemplo de uso:
const array = [1, 2, 3, 4, 5];
const subarray = [2, 3, 4];
const resultado = validaSubsequente(array, subarray);
console.log(resultado); // Saída: true


// Cria a função validaSubArray, que recebe como argumentos dois arrays de inteiros.
// A função deve determinar se o segundo array é subsequente do primeiro, retorna true se for e false caso contrário.