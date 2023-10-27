function arraySemDuplicados(array) {
   return array.filter((ele, i) => array.indexOf(ele) === i);
}