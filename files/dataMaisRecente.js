// Cria uma função que recebe duas datas e retorna a mais recente.

// Utiliza o que aprendeste sobre Date para resolver este exercício.

function dataMaisRecente(data1, data2) {
    // Convertemos as strings de data em objetos Date
    const dataObj1 = new Date(data1);
    const dataObj2 = new Date(data2);
  
    // Verificamos qual data é mais recente
    if (dataObj1 > dataObj2) {
      return data1;
    } else if (dataObj2 > dataObj1) {
      return data2;
    } else {
      // Se as datas forem iguais, você pode escolher como deseja lidar com isso
      return "As datas são iguais.";
    }
  }
  
  // Exemplo de uso da função:
  const data1 = "2023-09-29";
  const data2 = "2023-10-01";
  
  const maisRecente = dataMaisRecente(data1, data2);
  console.log("A data mais recente é:", maisRecente);
  