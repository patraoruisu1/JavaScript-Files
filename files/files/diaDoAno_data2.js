// Cria uma função que recebe uma data como argumento e retorna o dia do ano entre 1 e 366.

// Utiliza o que aprendeste sobre Date para resolver este exercício.

function diaDoAno(data) {
    // Crie uma data de referência para o primeiro dia do ano
    const primeiroDiaDoAno = new Date(data.getFullYear(), 0, 1);
  
    // Calcule a diferença em milissegundos entre a data fornecida e o primeiro dia do ano
    const diferencaEmMilissegundos = data - primeiroDiaDoAno;
  
    // Converta a diferença em milissegundos para dias
    const dias = Math.floor(diferencaEmMilissegundos / (24 * 60 * 60 * 1000));
  
    // Adicione 1 para compensar o fato de o primeiro dia do ano ser 1 e não 0
    return dias + 1;
  }
  
  // Exemplo de uso da função:
  const dataExemplo = new Date(2021, 4, 21); // Data de exemplo (2021-05-21)
  const diaAno = diaDoAno(dataExemplo);
  console.log("Dia do ano:", diaAno); // Deve imprimir 141
  