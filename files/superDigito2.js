function superDigito(n) {
    // if (Number(n) < 10) { }
  if (n.length === 1) {
    return n; //Number(n)
  }
  // return superDigito(somaDosDigitos(n))

  else {
    const digits = n.split('').map(Number);

    const sum = digits.reduce((a, b) => a + b);

    return superDigito(sum.toString());
  }

  // function somaDosDigitos (n) {
    // return n
    //.split("")
    //.map(e => Number(e))
    //.reduce((soma, ele) => soma + ele)
  // }
}


console.log(superDigito('9875') ) // 2
console.log(superDigito('12')) // 3
console.log(superDigito('1')) // 1

// console.log (
   // superDigito('9875'), 
   // superDigito('12'),
   // superDigito('1')
// )




// Implementa a função superDigito que recebe uma string n e calcula o super digito de n.

// Se o número n só tiver um digito, o seu super digito é o próprio, caso contrário, o super digito é o super digito da soma dos digitos

// superDigito('9875') // 8
// superDigito('12') // 3
// superDigito('1') // 1