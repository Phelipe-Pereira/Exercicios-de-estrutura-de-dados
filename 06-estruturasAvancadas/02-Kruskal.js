class UnionFind {
  constructor(size) {
    this.parent = [];
    this.rank = [];

    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
      this.rank[i] = 0;
    }
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }

    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) return false;

    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }

    return true;
  }
}

function kruskal(qtdVertices, arestas) {
  const uf = new UnionFind(qtdVertices);
  const ordenadas = [...arestas].sort((a, b) => a.peso - b.peso);
  const agm = [];
  let custoTotal = 0;

  for (const aresta of ordenadas) {
    if (uf.union(aresta.u, aresta.v)) {
      agm.push(aresta);
      custoTotal += aresta.peso;
    }
  }

  return { agm, custoTotal };
}

function temCiclo(qtdVertices, arestas) {
  const uf = new UnionFind(qtdVertices);

  for (const aresta of arestas) {
    if (!uf.union(aresta.u, aresta.v)) {
      return true;
    }
  }

  return false;
}

const arestas = [
  { u: 0, v: 1, peso: 4 },
  { u: 0, v: 2, peso: 3 },
  { u: 1, v: 2, peso: 1 },
  { u: 1, v: 3, peso: 2 },
  { u: 2, v: 3, peso: 5 },
];

console.log(kruskal(4, arestas));
console.log(temCiclo(4, arestas));
