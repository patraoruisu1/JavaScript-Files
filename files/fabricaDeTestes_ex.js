// Fábrica de testes


const testesSoma = [
    {argumentos: [3, 2], resultadoEsperado: 5, nome: "Soma 3 e 2"},
    {argumentos: [4, 8], resultadoEsperado: 12, nome: "Soma 4 e 8"},
    {argumentos: [2, 2], resultadoEsperado: 4, nome: "Soma 2 e 2"},
]
//Criar uma fábrica e dizer-lhe quais são os testes
const fabrica = new FabricaDeTestes(testesSoma)

function soma(a, b) {
    return a + b
}
function soma2(a, b) {
    return a * b
}
//Testar as funções soma e soma2, em que são chamadas para cada um dos testes.

fabrica.testar(soma);  // Todos os testes executados com sucesso.
fabrica.testar(soma2); // Falhou 2/3 testes, exemplo: "Soma 3 e 2"


// O método testar deve retornar "Todos os testes executados com sucesso." quando em todos os testes, o resultado de chamar a função é igual ao resultado esperado.

// Deve retornar uma string com o formato "Falhou x/n testes, exemplo: nome", quando pelo menos um teste falhar, em que:
// x é a quantidade de testes que não passaram,
// n é a quantidade total de testes e
// nome é o nome do primeiro teste que falhou.

// Cria uma classe FabricaDeTestes que inclui uma propriedade testes, definida no construtor, que é um array de objetos com os argumentos, nome e o resultado esperados para esses argumentos ao invocar a função.
// Deve incluir um método testar que recebe uma função como argumento.
// O método deve invocar a função para cada teste existente, em que lhe passa os argumentos do teste e 
// compara o resultado de invocar a função com o resultado esperado no teste.