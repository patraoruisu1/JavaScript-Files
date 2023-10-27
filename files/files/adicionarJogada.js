function adicionarJogada(jogo, linha, coluna) {
    return {
        ...jogo,
        tabuleiro: jogo.tabuleiro
            .map((l, i) => l.map((p, j) =>
                i === linha && j === coluna && p === ' '
                    ? jogo.jogadorAtual
                    : p)),
        jogadorAtual: (jogo.tabuleiro[linha][coluna] === " " ? jogo.jogadorAtual === 'X' ? 'O' : 'X' : jogo.jogadorAtual)
    }
}