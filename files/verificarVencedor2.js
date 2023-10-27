function verificarVencedor(jogo) {
    const tabuleiro = jogo.tabuleiro;

    let vX = "XXX";
    let vO = "OOO";

    let sequenciasPossiveis = [];

    let p = "";
    let s = "";
    let linha = "";
    let coluna = "";

    for (let i = 0; i < tabuleiro.length; i++) {
        p += tabuleiro[i][i];
        s += tabuleiro[i][tabuleiro.length - i - 1];
        for (let j = 0; j < tabuleiro.length; j++) {
            linha += tabuleiro[i][j];
            coluna += tabuleiro[j][i];
        }
        sequenciasPossiveis.push(...[linha, coluna]);
        linha = "";
        coluna = "";
    }
    sequenciasPossiveis.push(...[p, s]);

    if(sequenciasPossiveis.includes(vX)) {
        return "X";
    } else if(sequenciasPossiveis.includes(vO)) {
        return "O"
    }
}