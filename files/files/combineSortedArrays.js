// Implementa a função combineSortedArrays que recebe dois arrays ordenados e retorna o resultado de combinar os dois arrays de forma a que o array resultante esteja também ordenado.

// Tenta resolver este problema da forma mais eficiente possível, em vez de simplesmente concatenar e ordenar.
function combineSortedArrays(arr1, arr2) {
    let newArray = [];
    let minLength = Math.min(arr1.length, arr2.length);

    for (let i = 0; i < minLength; i++) {
        newArray.push(arr1[i]);
        newArray.push(arr2[i]);
    }

    if (arr1.length > arr2.length) {
        newArray.push(...arr1.slice(minLength));
    } else if (arr1.length < arr2.length) {
        newArray.push(...arr2.slice(minLength));
    }

    return newArray.sort((a, b) => a - b);
}