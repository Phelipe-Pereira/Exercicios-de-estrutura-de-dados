function medianaDeTres(arr) {
  const primeiro = arr[0];
  const meio = arr[Math.floor(arr.length / 2)];
  const ultimo = arr[arr.length - 1];

  const trio = [primeiro, meio, ultimo].sort((a, b) => a - b);
  return trio[1];
}

export function quickSort(arr) {
  // simple quicksort using first element as pivot
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const menores = [];
  const iguais = [];
  const maiores = [];

  for (const valor of arr) {
    if (valor < pivot) {
      menores.push(valor);
    } else if (valor > pivot) {
      maiores.push(valor);
    } else {
      iguais.push(valor);
    }
  }

  return [
    ...quickSort(menores),
    ...iguais,
    ...quickSort(maiores),
  ];
}

export function quickSortMediana(arr) {
  if (arr.length <= 1) return arr;

  const pivot = medianaDeTres(arr);
  const menores = [];
  const iguais = [];
  const maiores = [];

  for (const valor of arr) {
    if (valor < pivot) {
      menores.push(valor);
    } else if (valor > pivot) {
      maiores.push(valor);
    } else {
      iguais.push(valor);
    }
  }

  return [
    ...quickSortMediana(menores),
    ...iguais,
    ...quickSortMediana(maiores),
  ];
}

const listaOriginal = Array.from({ length: 50 }, () =>
  Math.floor(Math.random() * 1000),
);

console.time("Quick Original");
quickSort([...listaOriginal]);
console.timeEnd("Quick Original");

console.time("Quick Mediana");
quickSortMediana([...listaOriginal]);
console.timeEnd("Quick Mediana");
