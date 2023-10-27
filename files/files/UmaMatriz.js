// Implementa uma função eUmaMatriz que recebe um valor como argumento e retorna true se o valor for uma matriz e false caso contrário.
eUmaMatriz("Hello World")
// false
eUmaMatriz([[1], ["hey"]])
// true
eUmaMatriz(["a", "b", "c"])
// falseCopy code
function eUmaMatriz(valor) {
    // Escreve aqui o teu código
    return Array.isArray(valor[0])
}

