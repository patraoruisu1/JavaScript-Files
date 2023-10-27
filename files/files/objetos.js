const oMeuObjeto = {
    aMinhaPropriedade: "valor",
    chave: "valor"
}


// LEITURA
console.log(oMeuObjeto.chave)
console.loh(oMeuObjeto["aMinhaPropriedade"])

// ALTERAÇÃO
oMeuObjeto.aMinhaPropriedade = "Olá Mundo!"

// APAGAR
delete oMeuObjeto.aMinhaPropriedade

// CRIAR
oMeuObjeto.nome = "Liriam Ludmila Ração"

// DEFINIR MOLDE DE UMA OBJETO
class Cachorro {

    // FUNÇÃO / MÉTODO RESPONSÁVEL PELA CRIAÇÃO DO OBJETO
    constructor(nomeInicial) {
        // TODOS OS "CACHORRO" PASSAM PELO CONSTRUTOR

        // ESTADO INICIAL DO OBJETO (DEFINIR PROPRIEDADES)
        this.quente = Boolean(Math.floor(Math.random() * 2))
        this.nome = nomeInicial
    }

    // MÉTODOS CRIADOS SÃO POSSÍVEIS COM O
    // OBJETIVO DE OBTER VALORES
    obtemTemperatura() {
        return this.quente
    }

    // ALTERAR VALORES
    alterarTemperatura(novaTemperatura) {
        this.quente = novaTemperatura
    }
}

// INSTÂNCIA CRIADA (CRIANDO O CACHORRO)
const cachorrinho = new Cachorro("Bobby")


console.log(cachorrinho)
// cachorrinho.quente = 1245346576
cachorrinho.alterarTemperatura(true)
console.log(cachorrinho)
console.log(cachorrinho.obtemTemperatura())