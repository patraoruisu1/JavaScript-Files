function diasAteNatal() {
    // Obter a data atual
    const dataAtual = new Date();

    // Definir a data de Natal para 25 de dezembro do ano atual
    const natal = new Date(dataAtual.getFullYear(), 11, 25);

    // Calcular a diferença em milissegundos entre as duas datas
    const diferencaEmMilissegundos = natal - dataAtual;

    // Converter a diferença de milissegundos para dias
    const diasAteNatal = Math.ceil(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

    return diasAteNatal;
}
// Exemplo de uso da função
const diasRestantes = diasAteNatal();
console.log(`Faltam ${diasRestantes} dias até o Natal!`);
