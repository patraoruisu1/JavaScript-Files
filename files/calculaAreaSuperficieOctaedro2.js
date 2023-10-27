function calculaAreaSuperficieOctaedro(aresta) {
    // Escreve aqui o teu código
    if (aresta < 0) {
        return ("Por favor insira um valor positivo.");
    }

    const area = 2 * Math.sqrt(3) * Math.pow(aresta, 2);

    return Math.round(area);

}

// Cria uma função que recebe uma aresta e calcula a área da superfície de um octaedro regular arredondada de acordo com o arredondamento padrão.

// Caso o valor da aresta seja negativo deve apresentar o erro: "Por favor insira um valor positivo.".

// O octaedro é um poliedro de 8 faces. Tem 6 vértices e 12 arestas. O octaedro regular é um dos cinco sólidos platónicos. Não é um prisma, nem pirâmide.
