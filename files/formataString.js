function formataString(s) {
    let resultado = "";

    for (let i = 0; i < string.length; i++) {
        const caractere = string[i];

        if (caractere === caractere.toUpperCase()) {
            resultado += caractere.toLowerCase();
        } else {
            resultado += caractere.toUpperCase();
        }
    }

    return resultado;
}

const entrada = "Exemplo";
const saida = formataString(entrada);
console.log(saida); // "
