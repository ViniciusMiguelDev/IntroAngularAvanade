function concatArray<T>(...itens: T[]): T[] {
  return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 2, 3], [4, 5, 6]);
const stringArray = concatArray<string[]>(["Abacate", "Acerola"], ["Peixe"]);
console.log(numArray);
console.log(stringArray);