class Grafo {
  constructor() {
    this.listaAdjacencia = new Map();
  }

  adicionarUsuario(usuario) {
    if (!this.listaAdjacencia.has(usuario)) {
      this.listaAdjacencia.set(usuario, []);
    }
  }

  adicionarAmizade(usuario1, usuario2) {
    this.adicionarUsuario(usuario1);
    this.adicionarUsuario(usuario2);

    this.listaAdjacencia.get(usuario1).push(usuario2);
    this.listaAdjacencia.get(usuario2).push(usuario1);
  }

  bfs(origem, destino) {
    const fila = [[origem, 0]];
    const visitados = new Set([origem]);

    while (fila.length > 0) {
      const [atual, distancia] = fila.shift();

      if (atual === destino) {
        return distancia;
      }

      for (const vizinho of this.listaAdjacencia.get(atual) || []) {
        if (!visitados.has(vizinho)) {
          visitados.add(vizinho);
          fila.push([vizinho, distancia + 1]);
        }
      }
    }

    return -1;
  }
}

const redeSocial = new Grafo();

redeSocial.adicionarAmizade("Ana", "Bruno");
redeSocial.adicionarAmizade("Bruno", "Carlos");
redeSocial.adicionarAmizade("Carlos", "Diana");
redeSocial.adicionarAmizade("Ana", "Elisa");

console.log(redeSocial.listaAdjacencia);
console.log("Distância Ana -> Diana:", redeSocial.bfs("Ana", "Diana"));
console.log("Distância Elisa -> Carlos:", redeSocial.bfs("Elisa", "Carlos"));
