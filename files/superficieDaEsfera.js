function superficieDaEsfera(raio) {
  if (raio <= 0) {
    return "O raio deve ser maior que zero.";
  }

  const area = 4 * Math.PI * Math.pow(raio, 2);
  return area;
}

// Exemplo de uso da função:
const raio = 5; // Substitua pelo raio da esfera que você deseja calcular
const areaDaEsfera = superficieDaEsfera(raio);
console.log("A área da superfície da esfera é:", areaDaEsfera);

// Cria uma função que recebe um raio como argumento e calcula a área da superfície de uma esfera.