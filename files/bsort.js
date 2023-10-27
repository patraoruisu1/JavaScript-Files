function bsort (vetor) {
    let ordenado = false;
    while(!ordenado) {
        ordenado = true;
        for (let i = 0; i < vetor.length; i++) {
            if (vetor[i] > vetor [i + 1]) {
                ordenado = false;
                let temporaria = vetor [1]
                vetor [i] = vetor [i + 1]
                vetor [i + 1] = temporaria
            }
        }
    }

}


// {
 //    []
  //  []
   // []
//} 