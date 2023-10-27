// Cria uma função que recebe uma aresta e calcula a área da superfície de um octaedro regular arredondada de acordo com o arredondamento padrão.
// Caso o valor da aresta seja negativo deve apresentar o erro: "Por favor insira um valor positivo.".

function calculaAreaSuperficieOctaedro(aresta) {
    if (aresta < 0) {
        return "Por favor insira um valor positivo.";
    }

    const area = 2 * Math.sqrt(3) * Math.pow(aresta, 2);

    return Math.round(area).toString();
}

// Exemplo de uso:
const aresta = -5; // Substitua pelo valor da aresta desejada
const resultado = calculaAreaSuperficieOctaedro(aresta);

if (isNaN(resultado)) {
    console.error(resultado); // Mensagem de erro se a entrada for inválida
} else {
    console.log(`A área da superfície do octaedro regular é: ${resultado}`);
}
