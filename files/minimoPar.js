function minimoPar(array) {
  return array.reduce(function(minPar, current) {
    if (current % 2 === 0) {
      if (minPar === undefined || current < minPar) {
        return current;
      }
    }
    return minPar;
  }, undefined);
}

// Exemplo de uso:
console.log(minimoPar([1, 2, 3, 4])); // 2
console.log(minimoPar([9, 7, 5, 3, 8, 6, 10])); // 2
console.log(minimoPar([1, 3, 5, 7])); // undefined (não há pares)
