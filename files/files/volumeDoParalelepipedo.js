function volumeDoParalelepipedo(comprimento, largura, altura) {
    if (typeof comprimento === 'number' && typeof largura === 'number' && typeof altura === 'number') {
        return comprimento * largura * altura;
    } else {
        return "Por favor, insira valores numéricos para comprimento, largura e altura.";
    }
}

// Exemplo de uso:
const comprimento = 5;
const largura = 2;
const altura = 5;
const volume = volumeDoParalelepipedo(comprimento, largura, altura);
console.log(volume); // 50
