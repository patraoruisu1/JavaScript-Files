import React, { Component } from 'react';
class JogoDoGalo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabuleiro: Array(9).fill(null),
            jogadorAtual: 'X',
            jogoTerminado: false,
            vencedor: null,
        };
    }
    verificarFimDeJogo(tabuleiro) {
        const linhasVencedoras = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < linhasVencedoras.length; i++) {
            const [a, b, c] = linhasVencedoras[i];
            if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
                return tabuleiro[a];
            }
        }

        if (tabuleiro.every((casa) => casa !== null)) {
            return 'Empate';
        }

        return null;
    }
    adicionarJogada(index) {
        const { tabuleiro, jogadorAtual, jogoTerminado } = this.state;

        if (!jogoTerminado && !tabuleiro[index]) {
            const novoTabuleiro = [...tabuleiro];
            novoTabuleiro[index] = jogadorAtual;

            const vencedor = this.verificarFimDeJogo(novoTabuleiro);

            this.setState({
                tabuleiro: novoTabuleiro,
                jogadorAtual: jogadorAtual === 'X' ? 'O' : 'X',
                jogoTerminado: vencedor !== null,
                vencedor,
            });
        }
    }
    reiniciarJogo() {
        this.setState({
            tabuleiro: Array(9).fill(null),
            jogadorAtual: 'X',
            jogoTerminado: false,
            vencedor: null,
        });
    }
    render() {
        const { tabuleiro, jogadorAtual, jogoTerminado, vencedor } = this.state;

        return (
            <div className="jogo-do-galo">
                <h1>Jogo do Galo</h1>
                <p>Jogador Atual: {jogadorAtual}</p>
                {jogoTerminado && <p>Jogo Terminado! Vencedor: {vencedor === 'Empate' ? 'Empate' : vencedor}</p>}
                <div className="tabuleiro">
                    {tabuleiro.map((casa, index) => (
                        <div
                            key={index}
                            className={`casa ${casa}`}
                            onClick={() => this.adicionarJogada(index)}
                        >
                            {casa}
                        </div>
                    ))}
                </div>
                <button onClick={() => this.reiniciarJogo()}>Reiniciar Jogo</button>
            </div>
        );
    }
}

export default JogoDoGalo;
