function bubbleSort(arr) {
  let comparacoes = 0;
  let trocas = 0;
  let houveTroca;

  for (let i = 0; i < arr.length - 1; i++) {
    houveTroca = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      comparacoes++;

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        trocas++;
        houveTroca = true;
      }
    }

    if (!houveTroca) break;
  }

  return { arr, comparacoes, trocas };
}
