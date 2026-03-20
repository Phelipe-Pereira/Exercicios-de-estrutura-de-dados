// 5) CAMINHOS MÍNIMOS (DIJKSTRA + FLOYD-WARSHALL)

class Grafo {
  constructor(direcionado = false) {
    this.direcionado = direcionado;
    this.adjacencias = new Map();
  }

  adicionarVertice(vertice) {
    if (!this.adjacencias.has(vertice)) this.adjacencias.set(vertice, []);
  }

  adicionarAresta(origem, destino, peso = 1) {
    this.adicionarVertice(origem);
    this.adicionarVertice(destino);

    this.adjacencias.get(origem).push({ destino, peso });

    if (!this.direcionado)
      this.adjacencias.get(destino).push({ destino: origem, peso });
  }

  dijkstra(origem) {
    if (!this.adjacencias.has(origem))
      return { distancias: new Map(), anteriores: new Map() };

    const distancias = new Map();
    const anteriores = new Map();
    const visitados = new Set();

    for (const vertice of this.adjacencias.keys()) {
      distancias.set(vertice, Infinity);
      anteriores.set(vertice, null);
    }

    distancias.set(origem, 0);

    while (visitados.size < this.adjacencias.size) {
      let verticeAtual = null;
      let menorDistancia = Infinity;

      for (const [vertice, distancia] of distancias.entries()) {
        const naoFoiVisitado = !visitados.has(vertice);
        const distanciaEhMenor = distancia < menorDistancia;

        if (naoFoiVisitado && distanciaEhMenor) {
          menorDistancia = distancia;
          verticeAtual = vertice;
        }
      }

      if (!verticeAtual) break;

      visitados.add(verticeAtual);

      for (const { destino, peso } of this.adjacencias.get(verticeAtual)) {
        if (visitados.has(destino)) continue;

        const novaDistancia = distancias.get(verticeAtual) + peso;

        if (novaDistancia < distancias.get(destino)) {
          distancias.set(destino, novaDistancia);
          anteriores.set(destino, verticeAtual);
        }
      }
    }

    return { distancias, anteriores };
  }

  caminhoMaisCurto(anteriores, origem, destino) {
    if (origem === destino) return [origem];

    const caminho = [];
    let atual = destino;

    while (atual != null) {
      caminho.push(atual);
      if (atual === origem) break;
      atual = anteriores.get(atual);
    }

    caminho.reverse();
    return caminho[0] === origem ? caminho : [];
  }
}

function dijkstraAPartirDe(grafo, origem) {
  return grafo.dijkstra(origem);
}

function floydWarshall(vertices, arestas) {
  const indice = new Map(vertices.map((v, i) => [v, i]));

  const n = vertices.length;
  const distancias = Array.from({ length: n }, () => Array(n).fill(Infinity));
  const proximo = Array.from({ length: n }, () => Array(n).fill(null));

  for (let i = 0; i < n; i++) {
    distancias[i][i] = 0;
    proximo[i][i] = vertices[i];
  }

  for (const { from, to, w } of arestas) {
    const i = indice.get(from);
    const j = indice.get(to);

    if (w < distancias[i][j]) {
      distancias[i][j] = w;
      proximo[i][j] = to;
    }
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const viaK = distancias[i][k] + distancias[k][j];

        if (viaK < distancias[i][j]) {
          distancias[i][j] = viaK;
          proximo[i][j] = proximo[i][k];
        }
      }
    }
  }

  return { distancias, proximo, indice, vertices };
}

function reconstruirCaminhoFloyd(resultado, origem, destino) {
  const { proximo, indice, vertices } = resultado;
  const i = indice.get(origem);
  const j = indice.get(destino);

  if (i == null || j == null) return [];
  if (proximo[i][j] == null) return [];

  const caminho = [origem];
  let atual = origem;

  while (atual !== destino) {
    const a = indice.get(atual);
    const prox = proximo[a][j];
    if (prox == null) return [];
    caminho.push(prox);
    atual = prox;
    if (caminho.length > vertices.length + 5) return [];
  }

  return caminho;
}

// Demo
console.log("===== 5) DIJKSTRA (ORIGEM -> TODOS) + FLOYD-WARSHALL =====");

const grafoDirecionado = new Grafo(true);
grafoDirecionado.adicionarAresta("A", "B", 4);
grafoDirecionado.adicionarAresta("A", "C", 2);
grafoDirecionado.adicionarAresta("C", "B", 1);
grafoDirecionado.adicionarAresta("B", "D", 2);
grafoDirecionado.adicionarAresta("C", "D", 7);
grafoDirecionado.adicionarAresta("D", "E", 3);
grafoDirecionado.adicionarAresta("B", "E", 10);

const dijkstraDeA = dijkstraAPartirDe(grafoDirecionado, "A");
console.log("dijkstra de A:", Object.fromEntries(dijkstraDeA.distancias));

console.log(
  "caminho A->E (via anteriores) =",
  grafoDirecionado.caminhoMaisCurto(dijkstraDeA.anteriores, "A", "E"),
);

const vertices = ["A", "B", "C", "D", "E"];
const arestas = [
  { from: "A", to: "B", w: 4 },
  { from: "A", to: "C", w: 2 },
  { from: "C", to: "B", w: 1 },
  { from: "B", to: "D", w: 2 },
  { from: "C", to: "D", w: 7 },
  { from: "D", to: "E", w: 3 },
  { from: "B", to: "E", w: 10 },
];

const resultado = floydWarshall(vertices, arestas);

console.log(
  "Floyd caminho A->E =",
  reconstruirCaminhoFloyd(resultado, "A", "E"),
);

const iA = resultado.indice.get("A");
const jE = resultado.indice.get("E");

console.log("Floyd dist(A->E) =", resultado.distancias[iA][jE]);