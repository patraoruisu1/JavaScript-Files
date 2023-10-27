// Cria uma função que recebe uma data e um número de semanas como argumentos e retorna uma nova data resultante da soma.
// Utiliza o que aprendeste sobre Date para resolver este exercício.

function adicionaSemanas(data, semanas) {
    // Crie uma cópia da data para evitar modificar a data original
    const novaData = new Date(data);
  
    // Calcule o número total de milissegundos a serem adicionados (1 semana = 7 dias)
    const milissegundosParaAdicionar = semanas * 7 * 24 * 60 * 60 * 1000;
  
    // Adicione os milissegundos à data
    novaData.setTime(novaData.getTime() + milissegundosParaAdicionar);
  
    return novaData;
  }
  
  // Exemplo de uso da função:
  const dataInicial = new Date('2023-09-12'); // Data inicial
  const semanasParaAdicionar = 2; // Número de semanas a serem adicionadas
  const novaData = adicionaSemanas(dataInicial, semanasParaAdicionar);
  
  console.log("Data original:", dataInicial.toLocaleDateString());
  console.log("Nova data após adicionar 2 semanas:", novaData.toLocaleDateString());
  