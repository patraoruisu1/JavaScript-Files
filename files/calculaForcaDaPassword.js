// Cria uma função que recebe uma string e avalia a sua força enquanto password.

// Regras de Avaliação:

// A pontuação máxima é de 3 pontos;
// Se tiver 8 ou mais caracteres recebe 1 ponto;
// Se tiver pelo menos 1 número recebe 1 ponto;
// Se tiver uma ou mais maiúsculas recebe 1 ponto;
// Caso a string seja vazia deve apresentar o erro: "Por favor introduza uma password válida.".

function calculaForcaDaPassword(string) {
    // Verifica se a string é vazia
    if (string.length === 0) {
      return "Por favor introduza uma password válida.";
    }
  
    let pontuacao = 0;
  
    // Verifica o comprimento da senha
    if (string.length >= 8) {
      pontuacao++;
    }
  
    // Verifica se a senha contém pelo menos um número
    if (/\d/.test(string)) {
      pontuacao++;
    }
  
    // Verifica se a senha contém pelo menos uma letra maiúscula
    if (/[A-Z]/.test(string)) {
      pontuacao++;
    }
  
    return pontuacao;
  }
  
  // Exemplo de uso:
  const forcaSenha = calculaForcaDaPassword("abra");
  console.log(forcaSenha); // Saída: 0
  