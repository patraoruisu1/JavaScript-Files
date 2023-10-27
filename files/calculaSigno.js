function calculaSigno(dia, mes) {
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

    let signo = "";
    
    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 20)) {
        signo = "Carneiro";
    } else if ((mes === 4 && dia >= 21) || (mes === 5 && dia <= 20)) {
        signo = "Touro";
    } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
        signo = "Gémeos";
    } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
        signo = "Caranguejo";
    } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
        signo = "Leão";
    } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
        signo = "Virgem";
    } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
        signo = "Balança";
    } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
        signo = "Escorpião";
    } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
        signo = "Sagitário";
    } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 20)) {
        signo = "Capricórnio";
    } else if ((mes === 1 && dia >= 21) || (mes === 2 && dia <= 18)) {
        signo = "Aquário";
    } else {
        signo = "Peixes";
    }

    return signo;
}

// Exemplo de uso:
console.log(calculaSigno(22, 5)); // "Gémeos"
console.log(calculaSigno(30, 12)); // "Capricórnio"
console.log(calculaSigno(5, 13)); // "Por favor introduza um mês entre 1 e 12."
console.log(calculaSigno(29, 2)); // "Por favor introduza um dia entre 1 e 28."
console.log(calculaSigno(15, 9)); // "Balança"
console.log(calculaSigno(25, 6)); // "Caranguejo"
