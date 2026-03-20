export function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const meio = Math.floor(arr.length / 2);
  const esquerda = mergeSort(arr.slice(0, meio));
  const direita = mergeSort(arr.slice(meio));

  return merge(esquerda, direita);
}

function merge(esquerda, direita) {
  const resultado = [];
  let i = 0;
  let j = 0;

  while (i < esquerda.length && j < direita.length) {
    if (esquerda[i] <= direita[j]) {
      resultado.push(esquerda[i]);
      i++;
    } else {
      resultado.push(direita[j]);
      j++;
    }
  }

  return resultado.concat(esquerda.slice(i)).concat(direita.slice(j));
}

export function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const menores = [];
  const maiores = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      menores.push(arr[i]);
    } else {
      maiores.push(arr[i]);
    }
  }

  return [...quickSort(menores), pivot, ...quickSort(maiores)];
}

const numeros = Array.from({ length: 50 }, () =>
  Math.floor(Math.random() * 1000),
);

console.time("Merge Sort");
mergeSort([...numeros]);
console.timeEnd("Merge Sort");

console.time("Quick Sort");
quickSort([...numeros]);
console.timeEnd("Quick Sort");
