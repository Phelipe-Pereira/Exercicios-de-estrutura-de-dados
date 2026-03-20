import { mergeSort } from './05-mergeSort.js';
import { quickSort } from './06-quickSort.js';

function heapSort(arr) {
  function heapify(arr, n, i) {
    let maior = i;
    const esq = 2 * i + 1;
    const dir = 2 * i + 2;

    if (esq < n && arr[esq] > arr[maior]) maior = esq;
    if (dir < n && arr[dir] > arr[maior]) maior = dir;

    if (maior !== i) {
      [arr[i], arr[maior]] = [arr[maior], arr[i]];
      heapify(arr, n, maior);
    }
  }

  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }

  return arr;
}

function testar(tamanho) {
  const base = Array.from({ length: tamanho }, () =>
    Math.floor(Math.random() * 100000),
  );

  console.log("Tamanho:", tamanho);

  console.time("Merge");
  mergeSort([...base]);
  console.timeEnd("Merge");

  console.time("Quick");
  quickSort([...base]);
  console.timeEnd("Quick");

  console.time("Heap");
  heapSort([...base]);
  console.timeEnd("Heap");
}

testar(100);
testar(1000);
testar(10000);
