function calculaDiasAteAoNatal(dia, mes){
    if (mes < 1 || mes > 12) {
        return "Por favor introduza um mês entre 1 e 12.";
    } else
    if (dia < 1 || dia > 31) {
        return "Por favor introduza um dia entre 1 e 31.";
    } else
    if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30) {
        return "Por favor introduza um dia entre 1 e 30.";
    } else
    if ((mes === 2 && dia > 28)) {
        return "Por favor introduza um dia entre 1 e 28.";
    } else
    if ((mes === 12 && dia > 25)) {
        return "Hoje é Natal!";
    }
    let currentDate = new Date(2023, mes-1, dia);
    let natal = new Date(2023, 12-1, 25);
    let daysToChristmas = natal - currentDate;
    let x = Math.floor(daysToChristmas / 86400000);
    if (x === 1){
        return `Faltam ${x} dia até ao Natal.`
    } else {
       
        return `Faltam ${x} dias até ao Natal.` 
    }   
}
console.log(calculaDiasAteAoNatal(1,9));