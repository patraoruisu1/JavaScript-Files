// Implementa a função stringSuperReduzida que recebe uma string e retorna a string que resulta de remover consecutivamente pares de elementos iguais.
// Se a string resultante for vazia, deve retornar "String Vazia"

function stringSuperReduzida(str) {
    let stack = [];
    
    for (let char of str) {
      // Verifica se o caractere atual é igual ao topo da pilha
      if (stack.length > 0 && char === stack[stack.length - 1]) {
        stack.pop(); // Remove o caractere do topo da pilha
      } else {
        stack.push(char); // Adiciona o caractere à pilha
      }
    }
  
    // Converte a pilha em uma string resultante
    let result = stack.join('');
  
    // Verifica se a string resultante está vazia
    if (result === '') {
      return 'String Vazia';
    } else {
      return result;
    }
  }
  
  // Exemplo de uso:
  const inputString = "abbaac";
  const resultado = stringSuperReduzida(inputString);
  console.log(resultado); // Deve imprimir "c"
  