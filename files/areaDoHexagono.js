// Cria uma função que recebe o lado de um hexágono como argumento e calcula a área dessa figura geométrica.

// Retorna o inteiro inferior mais próximo da área. Math.floor(...)


function areaDoHexagono(lado) {
    // Calcula a área do hexágono
    const area = (3 * Math.sqrt(3) / 2) * Math.pow(lado, 2);
  
    // Arredonda para o inteiro inferior mais próximo
    const areaArredondada = Math.floor(area);
  
    return areaArredondada;
  }
  
  // Exemplo de uso da função:
  const ladoDoHexagono = 5;
  const areaCalculada = areaDoHexagono(ladoDoHexagono);
  console.log("Área do hexágono:", areaCalculada);
  