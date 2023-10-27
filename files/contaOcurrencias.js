// Implementa a função contaOcurrencias que recebe um array e retorna um mapa em que as chaves são os elementos únicos no array e os valores a quantidade de vezes que esses elementos se repetem.



function contaOcurrencias(arr) {
  const mapa = new Map();
  
  // (let i = 0; i < arr.length; i++)
  for (const elemento of arr) {
    if (mapa.has(elemento)) {
      mapa.set(elemento, mapa.get(elemento) + 1);
    } else {
      mapa.set(elemento, 1);
    }
  }
  return mapa;
}
const resultado1 = contaOcurrencias([1, 3, 1, 4, 5]);
console.log(resultado1); // Map { 1 => 2, 3 => 1, 4 => 1, 5 => 1 }

const resultado2 = contaOcurrencias(["a", "b", "c", "b", "c"]);
console.log(resultado2); // Map { 'a' => 1, 'b' => 2, 'c' => 2 }

contaOcurrencias([1, 3, 1, 4, 5]);
//  Map {
//     1: 2,
//     3: 1,
//     4: 1,
//     5: 1
//     }

contaOcurrencias(["a", "b", "c", "b", "c"]);
//  Map {
//     "a": 1,
//     "b": 2,
//     "c": 2,
//     }
