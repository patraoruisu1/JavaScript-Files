function verificaPangrama(string) {
  const todas = "abcdefghijklmnopqrstuvwxyz"; // Correção: incluir todas as letras do alfabeto
  const minuscula = string.toLowerCase();

  for (let i = 0; i < todas.length; i++) {
    const letra = todas[i];
    if (!minuscula.includes(letra)) {
      return false;
    }
  }

  return true;
}

// Exemplo de uso:
const stringExemplo = "The quick brown fox jumps over the lazy dog";
const resultado = verificaPangrama(stringExemplo);
console.log(resultado); // Isso irá imprimir true, pois a frase é um pangrama
