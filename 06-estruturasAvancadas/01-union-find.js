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

function encontrarComponentes(qtdVertices, arestas) {
  const uf = new UnionFind(qtdVertices);

  for (const [u, v] of arestas) {
    uf.union(u, v);
  }

  const componentes = {};

  for (let i = 0; i < qtdVertices; i++) {
    const raiz = uf.find(i);

    if (!componentes[raiz]) {
      componentes[raiz] = [];
    }

    componentes[raiz].push(i);
  }

  return Object.values(componentes);
}

const vertices = 7;
const arestas = [
  [0, 1],
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(encontrarComponentes(vertices, arestas));
