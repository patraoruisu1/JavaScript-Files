function saoTodosElementosPares(array) {
    // Função de verificação de paridade
    const ehPar = (numero) => numero % 2 === 0;
  
    // Verificar se todos os elementos da array são pares
    return array.every(ehPar);
  }
  
  // Exemplo de uso:
  const array1 = [2, 4, 6, 8];
  const array2 = [2, 4, 7, 8];
  
  console.log(saoTodosElementosPares(array1)); // Deve retornar true
  console.log(saoTodosElementosPares(array2)); // Deve retornar false
  