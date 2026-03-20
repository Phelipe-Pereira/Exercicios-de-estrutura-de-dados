function selectionSortEstavel(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let menor = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[menor]) {
        menor = j;
      }
    }

    const chave = arr[menor];

    while (menor > i) {
      arr[menor] = arr[menor - 1];
      menor--;
    }

    arr[i] = chave;
  }

  return arr;
}

console.log(selectionSortEstavel([4, 5, 3, 5, 2, 5]));
