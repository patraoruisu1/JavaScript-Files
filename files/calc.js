class Calculadora {
    constructor() {
        this.historico = [];
        this.ultimoResultado = BigInt(0);
    }

    somar(a, b) {
        if (b === undefined) {
            b = a
            a = this.ultimoResultado
        }

        //Esta 
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
        return BigInt(this.ultimoResultado);
    }

    toJSON() {
        return {
            "historico": this.historico,
            "ultimoResultado": this.ultimoResultado.toString()
        };
    }

  

    toString() {
        let msg = [];


        if (!(this.historico.length === 0)) {


            for (let i = 0; i < this.historico.length; i++) {
                msg += `${i + 1}. ${this.historico[i]}`;
                if (i < this.historico.length - 1) {
                    msg += "\n"
                }
            }
            return `=== Histórico da Calculadora ===
${msg}
=== Fim do Histórico ===
Foram realizadas ${this.historico.length} operações
Último Resultado: ${this.ultimoResultado}`;
        }

        
        else {
            return "Calculadora Limpa";
        }
    }
}
let nossaCalculadora = new Calculadora();
console.log(nossaCalculadora.somar(1, 3).multiplicar(3).toString());
