// Cria uma função que reduz um array de números para um Map que tem 
// como chaves os valores do array e como valores o números de ocorrências da chave.
function contarOcorrencias(array) {
    const ocorrenciasMap = new Map();
    // Iterar sobre o array
    for (const numero of array) {
      if (ocorrenciasMap.has(numero)) {
        // Se o número já existe no Map, incrementa a contagem
        ocorrenciasMap.set(numero, ocorrenciasMap.get(numero) + 1);
      } else {
        // Se o número ainda não existe no Map, adiciona com contagem 1
        ocorrenciasMap.set(numero, 1);
      }
    }
    return ocorrenciasMap;
}
  // Exemplo de uso:
  const numeros = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
  const resultado = contarOcorrencias(numeros);
  console.log(resultado);
  // Deve retornar um Map com as contagens das ocorrências:
  // Map { 1 => 1, 2 => 2, 3 => 3, 4 => 4 }
  