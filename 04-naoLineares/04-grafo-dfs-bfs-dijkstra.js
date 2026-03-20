// 4) GRAFOS (LISTA DE ADJACÊNCIA) + DFS(Depth-First Search "Vai o mais fundo e retorna") + BFS(Breadth-First Search "Camada a camada") + DIJKSTRA

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

  dfs(inicio) {
    if (!this.adjacencias.has(inicio)) return [];

    const visitados = new Set();
    const ordem = [];

    const visitarRec = (vertice) => {
      visitados.add(vertice);
      ordem.push(vertice);

      for (const { destino } of this.adjacencias.get(vertice)) {
        if (!visitados.has(destino)) visitarRec(destino);
      }
    };

    visitarRec(inicio);
    return ordem;
  }

  bfs(inicio) {
    if (!this.adjacencias.has(inicio)) return [];

    const visitados = new Set([inicio]);
    const fila = [inicio];
    const ordem = [];

    while (fila.length) {
      const vertice = fila.shift();
      ordem.push(vertice);

      for (const { destino } of this.adjacencias.get(vertice)) {
        if (!visitados.has(destino)) {
          visitados.add(destino);
          fila.push(destino);
        }
      }
    }

    return ordem;
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

// Demo
console.log("===== 4) GRAFO + DFS/BFS + DIJKSTRA =====");

const grafo = new Grafo(false);
grafo.adicionarAresta("A", "B");
grafo.adicionarAresta("A", "C");
grafo.adicionarAresta("B", "D");
grafo.adicionarAresta("C", "E");
grafo.adicionarAresta("D", "E");

console.log("DFS(A) =", grafo.dfs("A"));
console.log("BFS(A) =", grafo.bfs("A"));

const grafoDirecionado = new Grafo(true);
grafoDirecionado.adicionarAresta("A", "B", 4);
grafoDirecionado.adicionarAresta("A", "C", 2);
grafoDirecionado.adicionarAresta("C", "B", 1);
grafoDirecionado.adicionarAresta("B", "D", 2);
grafoDirecionado.adicionarAresta("C", "D", 7);
grafoDirecionado.adicionarAresta("D", "E", 3);
grafoDirecionado.adicionarAresta("B", "E", 10);

const { distancias, anteriores } = grafoDirecionado.dijkstra("A");

console.log("distancias(A) =", Object.fromEntries(distancias));
console.log(
  "caminho A->E =",
  grafoDirecionado.caminhoMaisCurto(anteriores, "A", "E"),
);