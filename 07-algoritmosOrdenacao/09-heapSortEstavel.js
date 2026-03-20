function heapSortEstavel(arr) {
  const comIndice = arr.map((valor, indice) => ({ valor, indice }));

  function maior(a, b) {
    if (a.valor !== b.valor) return a.valor > b.valor;
    return a.indice > b.indice;
  }

  function heapify(v, n, i) {
    let maiorIndice = i;
    const esq = 2 * i + 1;
    const dir = 2 * i + 2;

    if (esq < n && maior(v[esq], v[maiorIndice])) {
      maiorIndice = esq;
    }

    if (dir < n && maior(v[dir], v[maiorIndice])) {
      maiorIndice = dir;
    }

    if (maiorIndice !== i) {
      [v[i], v[maiorIndice]] = [v[maiorIndice], v[i]];
      heapify(v, n, maiorIndice);
    }
  }

  for (let i = Math.floor(comIndice.length / 2) - 1; i >= 0; i--) {
    heapify(comIndice, comIndice.length, i);
  }

  for (let i = comIndice.length - 1; i > 0; i--) {
    [comIndice[0], comIndice[i]] = [comIndice[i], comIndice[0]];
    heapify(comIndice, i, 0);
  }

  return comIndice.map(item => item.valor);
}

console.log(heapSortEstavel([5, 3, 5, 2, 5, 1]));