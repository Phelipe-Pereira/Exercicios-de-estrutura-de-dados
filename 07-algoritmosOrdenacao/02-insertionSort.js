function insertionSortStrings(arr) {
  for (let i = 1; i < arr.length; i++) {
    const atual = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j].localeCompare(atual) > 0) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = atual;
  }

  return arr;
}

const nomes = ["uva", "banana", "abacaxi", "laranja", "manga"];
console.log(insertionSortStrings(nomes));
