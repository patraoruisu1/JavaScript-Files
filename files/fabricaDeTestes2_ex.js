class FabricaDeTestes {
  constructor(testes) {
    this.testes = testes;
  }

  

  testar(funcao) {
    let falhas = 0;
    let nomePrimeiroTesteFalhado = '';

    for (const teste of this.testes) {
      const { argumentos, resultadoEsperado, nome } = teste;
      const resultado = funcao(...argumentos);

      if (resultado !== resultadoEsperado) {
        falhas++;
        if (nomePrimeiroTesteFalhado === '') {
          nomePrimeiroTesteFalhado = nome;
        }
      }
    }

    if (falhas === 0) {
      return 'Todos os testes executados com sucesso.';
    } else {
      return `Falhou ${falhas}/${this.testes.length} testes, exemplo: "${nomePrimeiroTesteFalhado}"`;
    }
  }
}

const testesSoma = [
  { argumentos: [3, 2], resultadoEsperado: 5, nome: "Soma 3 e 2" },
  { argumentos: [4, 8], resultadoEsperado: 12, nome: "Soma 4 e 8" },
  { argumentos: [2, 2], resultadoEsperado: 4, nome: "Soma 2 e 2" },
];

const fabrica = new FabricaDeTestes(testesSoma);

function soma(a, b) {
  return a + b;
}

function soma2(a, b) {
  return a * b;
}

console.log(fabrica.testar(soma)); // Todos os testes executados com sucesso.
console.log(fabrica.testar(soma2)); // Falhou 2/3 testes, exemplo: "Soma 3 e 2"




