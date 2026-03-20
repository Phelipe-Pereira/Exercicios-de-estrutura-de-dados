function gerarPermutacoes(lista) {
  if (lista.length <= 1) {
    return [lista];
  }

  const resultado = [];

  for (let i = 0; i < lista.length; i++) {
    const atual = lista[i];
    const resto = [...lista.slice(0, i), ...lista.slice(i + 1)];
    const permutacoes = gerarPermutacoes(resto);

    for (const permutacao of permutacoes) {
      resultado.push([atual, ...permutacao]);
    }
  }

  return resultado;
}

function tspForcaBruta(matriz) {
  const cidades = [];
  for (let i = 1; i < matriz.length; i++) {
    cidades.push(i);
  }

  const rotas = gerarPermutacoes(cidades);
  let melhorRota = null;
  let menorCusto = Infinity;

  for (const rota of rotas) {
    const caminho = [0, ...rota, 0];
    let custo = 0;

    for (let i = 0; i < caminho.length - 1; i++) {
      custo += matriz[caminho[i]][caminho[i + 1]];
    }

    if (custo < menorCusto) {
      menorCusto = custo;
      melhorRota = caminho;
    }
  }

  return { melhorRota, menorCusto };
}

function tspVizinhoMaisProximo(matriz, inicio = 0) {
  const visitadas = new Set([inicio]);
  const rota = [inicio];
  let atual = inicio;
  let custo = 0;

  while (visitadas.size < matriz.length) {
    let proximaCidade = -1;
    let menorDistancia = Infinity;

    for (let i = 0; i < matriz.length; i++) {
      if (!visitadas.has(i) && matriz[atual][i] < menorDistancia) {
        menorDistancia = matriz[atual][i];
        proximaCidade = i;
      }
    }

    visitadas.add(proximaCidade);
    rota.push(proximaCidade);
    custo += menorDistancia;
    atual = proximaCidade;
  }

  custo += matriz[atual][inicio];
  rota.push(inicio);

  return { rota, custo };
}

const matriz5 = [
  [0, 10, 15, 20, 25],
  [10, 0, 35, 25, 17],
  [15, 35, 0, 30, 28],
  [20, 25, 30, 0, 16],
  [25, 17, 28, 16, 0]
];

const matriz10 = [
  [0, 4, 8, 10, 7, 14, 3, 9, 12, 6],
  [4, 0, 5, 8, 6, 10, 7, 11, 9, 5],
  [8, 5, 0, 6, 4, 9, 10, 7, 8, 6],
  [10, 8, 6, 0, 3, 5, 9, 4, 7, 8],
  [7, 6, 4, 3, 0, 6, 8, 5, 4, 7],
  [14, 10, 9, 5, 6, 0, 11, 7, 3, 8],
  [3, 7, 10, 9, 8, 11, 0, 6, 10, 4],
  [9, 11, 7, 4, 5, 7, 6, 0, 5, 6],
  [12, 9, 8, 7, 4, 3, 10, 5, 0, 7],
  [6, 5, 6, 8, 7, 8, 4, 6, 7, 0]
];

console.log("Força bruta até 5 cidades:", tspForcaBruta(matriz5));
console.log("Vizinho mais próximo com 10 cidades:", tspVizinhoMaisProximo(matriz10));