function encontraPar(array) {
  return array.find(function(element) {
    return element % 2 === 0;
  });
}

// Exemplo de uso:
console.log(encontraPar([1, 2, 3, 4])); // 2
console.log(encontraPar([1, 3, 5, 7])); // undefined (não há pares)
console.log(encontraPar([2, 4, 6, 8])); // 2 (encontra o primeiro elemento par)
