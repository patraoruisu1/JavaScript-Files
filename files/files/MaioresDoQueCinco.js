function todosMaioresDoQueCinco(array) {
  return array.every(function(element) {
    return element > 5;
  });
}

// Exemplo de uso:
console.log(todosMaioresDoQueCinco([1, 2, 3, 4])); // false
console.log(todosMaioresDoQueCinco([6, 7, 8, 9])); // true
