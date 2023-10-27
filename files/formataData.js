function formataData(data) {
  const dia = String(data.getDate()).padStart(2, '0'); // Obtém o dia e adiciona um zero à esquerda, se necessário
  const mes = String(data.getMonth() + 1).padStart(2, '0'); // Obtém o mês (lembre-se de adicionar 1, pois os meses são indexados a partir de 0) e adiciona um zero à esquerda, se necessário
  const ano = data.getFullYear(); // Obtém o ano

  return `${mes}-${dia}-${ano}`;
}
const dataFormatada = formataData(new Date(2022, 3, 4));
console.log(dataFormatada); // Saída: "04-04-2022"
