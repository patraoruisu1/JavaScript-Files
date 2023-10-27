function calculaModa2(array) {
  let mapa = new Map();

  for (let i = 0; i < array.length; i++) {
    mapa.set(array[i], (mapa.get(array[i]) ?? 0) + 1);
  }
  let chaveMaior = undefined;
  let repeticoes = 0;

  for (let [chave, valor] of mapa) {
    if (valor > repeticoes || (valor === repeticoes && chave < chaveMaior)) {
      repeticoes = valor;
      chaveMaior = chave;
    }
  }
  return chaveMaior;
}