function calculaDiaDoAno(dia, mes){
    // escreve aqui a função
    if (mes < 1 || mes > 12) {
        return "Por favor introduza um mês entre 1 e 12.";
    }

    if (dia < 1 || dia > 31) {
        return "Por favor introduza um dia entre 1 e 31.";
    }

    if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30) {
        return "Por favor introduza um dia entre 1 e 30.";
    }

    if (mes === 2 && dia > 28) {
        return "Por favor introduza um dia entre 1 e 28.";
    }

    let diasPorMes = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
    
    let diaDoAno = 0;

    for (let i = 1; i < mes; i++) {
        diaDoAno += diasPorMes[i];
    }

    diaDoAno += dia;

    return diaDoAno;
}