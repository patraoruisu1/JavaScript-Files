function contaNumeroDeDivisoesPorDois(n){
  
  let contador = 0;
  while (n > 1) {
    n = Math.floor(n / 2);
    contador++;
  }
  
  return contador;
}