function perimetroDoLosango(diagonalMaior, diagonalMenor) {
    // escreve aqui a função
    const lado = Math.sqrt((diagonalMaior ** 2 + diagonalMenor ** 2) / 2);
    const perimetro = lado * 4;
    return perimetro;
}
