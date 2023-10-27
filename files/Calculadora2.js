class Calculadora {
    constructor() {
        this.historico = [];
        this.ultimoResultado = BigInt(0);
    }

    somar(a, b) {
        const num1 = a !== undefined ? BigInt(a) : this.ultimoResultado;
        const num2 = b !== undefined ? BigInt(b) : this.ultimoResultado;
        const resultado = num1 + num2;

        this.historico.push(`${num1} + ${num2} = ${resultado}`);
        this.ultimoResultado = resultado;
        return this;
    }

    subtrair(a, b) {
        const num1 = a !== undefined ? BigInt(a) : this.ultimoResultado;
        const num2 = b !== undefined ? BigInt(b) : this.ultimoResultado;
        const resultado = num1 - num2;

        this.historico.push(`${num1} - ${num2} = ${resultado}`);
        this.ultimoResultado = resultado;

        return this;
    }

    multiplicar(a, b) {
        const num1 = a !== undefined ? BigInt(a) : this.ultimoResultado;
        const num2 = b !== undefined ? BigInt(b) : this.ultimoResultado;
        const resultado = num1 * num2;

        this.historico.push(`${num1} * ${num2} = ${resultado}`);
        this.ultimoResultado = resultado;

        return this;
    }

    dividir(a, b) {
        const num1 = a !== undefined ? BigInt(a) : this.ultimoResultado;
        const num2 = b !== undefined ? BigInt(b) : this.ultimoResultado;

        if (num2 === BigInt(0)) {
            throw new Error("Não é possível dividir por zero");
        }

        const resultado = num1 / num2;

        this.historico.push(`${num1} / ${num2} = ${resultado}`);
        this.ultimoResultado = resultado;

        return this;
    }

    limparHistorico() {
        this.historico = [];
        this.ultimoResultado = BigInt(0);
        return this;
    }

    obterResultado() {
        return this.ultimoResultado.toString();
    }

    toJSON() {
        return {
            historico: this.historico,
            ultimoResultado: this.ultimoResultado.toString(),
        };
    }

    toString() {
        if (this.historico.length === 0) {
            return "Calculadora Limpa";
        }

        let output = "=== Histórico da Calculadora ===\n";
        output += this.historico.map((operacao, index) => `${index + 1}. ${operacao}`).join("\n");
        output += "\n=== Fim do Histórico ===";
        output += `\nForam realizadas ${this.historico.length} operações`;
        output += `\nÚltimo Resultado: ${this.ultimoResultado}`;

        return output;
    }
}

const calc = new Calculadora();

calc.somar(1, 1).multiplicar(0).dividir(2).subtrair(1);
console.log(calc.obterResultado()); // Saída: 9

console.log(calc.toString());
// Saída:
// === Histórico da Calculadora ===
// 1. 2 + 3 = 5
// 2. 5 * 4 = 20
// 3. 20 / 2 = 10
// 4. 10 - 1 = 9
// === Fim do Histórico ===
// Foram realizadas 4 operações
// Último Resultado: 9

calc.limparHistorico();
console.log(calc.toString()); // Saída: Calculadora Limpa

console.log(calc.toJSON());
// Saída:
// {
//   historico: [],
//   ultimoResultado: "0"
// }