function perimetroDoTrapezio(comprimentoMaior, comprimentoMenor, altura) {
    // escreve aqui a função
    const hipotenusa = Math.sqrt(Math.pow((comprimentoMaior - comprimentoMenor) / 2, 2) + Math.pow(altura, 2));

    const perimetro = comprimentoMaior + comprimentoMenor + 2 * hipotenusa;

    return perimetro;
}