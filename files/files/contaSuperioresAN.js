function contaSuperioresAN(array, n) {
    if (array.length === 1) {
        return array[0] > n ? 1 : 0
    }
    return (array[0] > n ? 1 : 0) + contaSuperioresAN(array.slice(1), n)
}