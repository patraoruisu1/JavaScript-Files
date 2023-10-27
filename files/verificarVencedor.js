function verificarVencedor(jogo) {
    const linhas = obterLinhas(jogo)
    return linhas.includes("XXX")
        ? "X"
        : linhas.includes("OOO")
            ? "O"
            : undefined;
}

function obterLinhas(jogo) {
    const tabuleiro = jogo.tabuleiro
    const linhas = tabuleiro.map(tabuleiro => tabuleiro.join(''))
    const colunas = [];
    const diagonais = ["", ""];
    for (let i = 0; i < tabuleiro.length; i++) {
        diagonais[0] += tabuleiro[i][i];
        diagonais[1] += tabuleiro[i][tabuleiro.length - i - 1];
        colunas.push(tabuleiro.map(linhas => linhas[i]).join(''));
    }
    return linhas.concat(colunas).concat(diagonais);
}
