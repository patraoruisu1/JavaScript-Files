function horaPorExtenso(data) {
    const horas = data.getUTCHours();
    const minutos = data.getUTCMinutes();
    let horaPorExtenso = "";

    // Defina os nomes das horas
    const nomesHoras = [
        "zero",
        "um",
        "dois",
        "três",
        "quatro",
        "cinco",
        "seis",
        "sete",
        "oito",
        "nove",
        "dez",
        "onze",
        "doze"
    ];

    // Defina os nomes dos minutos
    const nomesMinutos = [
        "em ponto",
        "em um quarto",
        "em meia",
        "em três quartos"
    ];

    // Verifique as horas e minutos e construa a representação por extenso
    if (minutos === 0) {
        horaPorExtenso = `${nomesHoras[horas]} em ponto`;
    } else if (minutos === 15) {
        horaPorExtenso = `${nomesHoras[horas]} ${nomesMinutos[1]}`;
    } else if (minutos === 30) {
        horaPorExtenso = `${nomesHoras[horas]} ${nomesMinutos[2]}`;
    } else if (minutos === 45) {
        horaPorExtenso = `${nomesHoras[horas + 1]} ${nomesMinutos[3]}`;
    } else {
        if (minutos < 30) {
            horaPorExtenso = `${nomesHoras[horas]} e ${nomesHoras[minutos]} minutos`;
        } else {
            horaPorExtenso = `${nomesHoras[horas + 1]} e ${nomesHoras[60 - minutos]} minutos`;
        }
    }

    return horaPorExtenso;
}

// Exemplos de uso:
console.log(horaPorExtenso(new Date("2021-05-17 09:00"))); // nove em ponto
console.log(horaPorExtenso(new Date("2021-05-17 09:15"))); // nove em um quarto
console.log(horaPorExtenso(new Date("2021-05-17 09:30"))); // nove em meia
console.log(horaPorExtenso(new Date("2021-05-17 09:45"))); // nove em três quartos
console.log(horaPorExtenso(new Date("2021-05-17 09:23"))); // nove e vinte e três
console.log(horaPorExtenso(new Date("2021-05-17 09:47"))); // nove e quarenta e sete




// Cria uma função que recebe uma data como argumento e retorna a hora por extenso.

// Utiliza getUTCHours() para obter as horas a partir da data.

// Utiliza o que aprendeste sobre Date para resolver este exercício.

// Exemplos de Output:
// horaPorExtenso(new Date("2021-05-17  09:00")) // nove em ponto
// horaPorExtenso(new Date("2021-05-17  09:00")) // nove em um quarto
// horaPorExtenso(new Date("2021-05-17  09:00")) // nove em meia
// horaPorExtenso(new Date("2021-05-17  09:00")) // nove em três quartos
// horaPorExtenso(new Date("2021-05-17  09:00")) // nove e vinte e três
// horaPorExtenso(new Date("2021-05-17  09:00")) // nove e quarenta e sete