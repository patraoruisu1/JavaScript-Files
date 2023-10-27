// Cria uma função que reduz um array de números para um Map que tem 
// como chaves os valores do array e como valores o números de ocorrências da chave.
function mapaDeOcorrencias(array) {
    return array.reduce((map, ele) => {
        return map.set(ele, map.has(ele) ? map.get(ele) + 1 : 1);
    }, new Map());
}

console.log(mapaDeOcorrencias(["a", "b", "c", "d", "b", "a", "b"]));
