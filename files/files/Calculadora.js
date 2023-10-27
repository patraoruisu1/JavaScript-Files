class Calculadora {
    constructor() {
        this.historico = [];
        this.ultimoResultado = BigInt(0);   // this.ultimoResultado = 0
    }

    // const operacoes = new Map {[ 
        // ( "+"; )
    // ]};

    somar(a, b) {
        if (b === undefined) {
            b = a
            a = this.ultimoResultado
        }

        this.ultimoResultado = BigInt(a) + BigInt(b);
        this.historico.push(`${a} + ${b} = ${this.ultimoResultado}`);
        return this;
    }

    subtrair(a, b) {
        if (b === undefined) {
            b = a
            a = this.ultimoResultado
        }

        this.ultimoResultado = BigInt(a) - BigInt(b);
        this.historico.push(`${a} - ${b} = ${this.ultimoResultado}`);
        return this;
    }

    multiplicar(a, b) {
        if (b === undefined) {
            b = a
            a = this.ultimoResultado
        }
        this.ultimoResultado = BigInt(a) * BigInt(b);
        this.historico.push(`${a} * ${b} = ${this.ultimoResultado}`);
        return this;
    }

    dividir(a, b) {
        if (b === undefined) {
            b = a
            a = this.ultimoResultado
        }

        this.ultimoResultado = BigInt(a) / BigInt(b);
        this.historico.push(`${a} / ${b} = ${this.ultimoResultado}`);
        return this;
    }

    limparHistorico() {
        this.historico = [];
        this.ultimoResultado = BigInt(0);
        return this;
    }

    obterResultado() {
        return BigInt(this.ultimoResultado); // return this.ultimoResultado;
    }

    toJSON() {
        return { "historico": this.historico, "ultimoResultado": this.ultimoResultado.toString() };
    }

    toString() {
        let msg = [];
        if (this.historico.length === 0) {
            for (let i = 0; i < this.historico.length; i++) {
                msg += `${i + 1}, ${this.historico[i]}\n`;
            }
            return `=== Histórico da Calculadora ===\n${msg}=== Fim do Histórico ===\nForam realizadas ${this.historico.length} operações\nÚltimo Resultado: ${this.ultimoResultado}`;
        }
        else {
            return "Calculadora Limpa";
        }
    }
}
