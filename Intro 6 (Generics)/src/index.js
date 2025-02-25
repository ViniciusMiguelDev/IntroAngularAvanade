"use strict";
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 2, 3], [4, 5, 6]);
const stringArray = concatArray(["Abacate", "Acerola"], ["Peixe"]);
console.log(numArray);
console.log(stringArray);
